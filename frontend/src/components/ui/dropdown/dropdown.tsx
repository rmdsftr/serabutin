import React, { useState, useRef, useEffect, useMemo, forwardRef } from 'react';
import { DropdownProps, DropdownOption, DropdownOptionProps, DropdownMenuProps } from './dropdown.types';
import styles from './dropdown.module.css';

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const DropdownOptionComponent: React.FC<DropdownOptionProps> = ({
  option,
  isSelected,
  isHighlighted,
  onClick,
  onMouseEnter
}) => {
  const optionClasses = [
    styles.option,
    isSelected && styles.selected,
    isHighlighted && styles.highlighted,
    option.disabled && styles.disabled
  ].filter(Boolean).join(' ');

  return (
    <div
      className={optionClasses}
      onClick={option.disabled ? undefined : onClick}
      onMouseEnter={option.disabled ? undefined : onMouseEnter}
      role="option"
      aria-selected={isSelected}
      aria-disabled={option.disabled}
    >
      {option.icon && (
        <div className={styles.optionIcon}>{option.icon}</div>
      )}
      
      <div className={styles.optionContent}>
        <div className={styles.optionLabel}>{option.label}</div>
        {option.description && (
          <div className={styles.optionDescription}>{option.description}</div>
        )}
      </div>
      
      {isSelected && (
        <div className={styles.checkIcon}>
          <CheckIcon />
        </div>
      )}
    </div>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  options,
  optionGroups,
  selectedValue,
  highlightedIndex,
  size,
  maxHeight,
  onOptionClick,
  onOptionMouseEnter,
  searchTerm,
  loading
}) => {

  const filteredOptions = useMemo(() => {
    if (!searchTerm) return options;
    return options.filter(option => 
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [options, searchTerm]);

  const flatOptions = useMemo(() => {
    if (optionGroups) {
      return optionGroups.flatMap(group => group.options);
    }
    return filteredOptions;
  }, [optionGroups, filteredOptions]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
        Loading...
      </div>
    );
  }

  if (flatOptions.length === 0) {
    return (
      <div className={styles.noOptions}>
        {searchTerm ? `No results for "${searchTerm}"` : 'No options available'}
      </div>
    );
  }

  let optionIndex = 0;

  return (
    <>
      {optionGroups ? (
        optionGroups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles.optionGroup}>
            <div className={styles.optionGroupLabel}>{group.label}</div>
            {group.options.map((option) => {
              const currentIndex = optionIndex++;
              return (
                <DropdownOptionComponent
                  key={option.value}
                  option={option}
                  isSelected={selectedValue === option.value}
                  isHighlighted={highlightedIndex === currentIndex}
                  size={size}
                  onClick={() => onOptionClick(option)}
                  onMouseEnter={() => onOptionMouseEnter(currentIndex)}
                />
              );
            })}
          </div>
        ))
      ) : (
        filteredOptions.map((option, index) => (
          <DropdownOptionComponent
            key={option.value}
            option={option}
            isSelected={selectedValue === option.value}
            isHighlighted={highlightedIndex === index}
            size={size}
            onClick={() => onOptionClick(option)}
            onMouseEnter={() => onOptionMouseEnter(index)}
          />
        ))
      )}
    </>
  );
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(({
  options = [],
  optionGroups,
  value,
  defaultValue,
  onChange,
  variant = 'default',
  size = 'medium',
  status = 'default',
  label,
  placeholder = 'Select an option',
  helperText,
  errorMessage,
  leftIcon,
  customDropdownIcon,
  loading = false,
  disabled = false,
  invalid = false,
  required = false,
  searchable = false,
  clearable = false,
  closeOnSelect = true,
  fullWidth = false,
  position = 'bottom-start',
  maxHeight = '200px',
  id,
  name,
  className,
  onOpen,
  onClose,
  onSearch,
  onFocus,
  onBlur,
  ...props
}, ref) => {

  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue || null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [searchTerm, setSearchTerm] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const currentValue = value !== undefined ? value : internalValue;

  const selectedOption = useMemo(() => {
    const allOptions = optionGroups ? 
      optionGroups.flatMap(group => group.options) : 
      options;
    return allOptions.find(option => option.value === currentValue) || null;
  }, [currentValue, options, optionGroups]);

  const inputStatus = invalid || errorMessage ? 'error' : status;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen, searchable]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    const allOptions = optionGroups ? 
      optionGroups.flatMap(group => group.options) : 
      options;
    const availableOptions = allOptions.filter(opt => !opt.disabled);

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!isOpen) {
          handleOpen();
        } else if (highlightedIndex >= 0) {
          const option = availableOptions[highlightedIndex];
          if (option) handleOptionSelect(option);
        }
        break;

      case 'Escape':
        event.preventDefault();
        handleClose();
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          handleOpen();
        } else {
          setHighlightedIndex(prev => 
            prev < availableOptions.length - 1 ? prev + 1 : 0
          );
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : availableOptions.length - 1
          );
        }
        break;

      case 'Tab':
        if (isOpen) {
          handleClose();
        }
        break;
    }
  };

  const handleOpen = () => {
    if (disabled || loading) return;
    setIsOpen(true);
    setHighlightedIndex(-1);
    onOpen?.();
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm('');
    setHighlightedIndex(-1);
    onClose?.();
  };

  const handleOptionSelect = (option: DropdownOption) => {
    const newValue = option.value;
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue, option);
    
    if (closeOnSelect) {
      handleClose();
      triggerRef.current?.focus();
    }
  };

  const handleClear = (event: React.MouseEvent) => {
    event.stopPropagation();
    const newValue = null;
    
    if (value === undefined) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue, null);
    triggerRef.current?.focus();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setHighlightedIndex(-1);
    onSearch?.(term);
  };

  const containerClasses = [
    styles.dropdownContainer,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');

  const triggerClasses = [
    styles.dropdownTrigger,
    styles[variant],
    styles[size],
    styles[inputStatus],
    isOpen && styles.open
  ].filter(Boolean).join(' ');

  const menuClasses = [
    styles.dropdownMenu,
    position.startsWith('top') && styles.topPosition
  ].filter(Boolean).join(' ');

  return (
    <div 
      ref={containerRef} 
      className={containerClasses}
      {...props}
    >
      {label && (
        <label 
          htmlFor={id}
          className={`${styles.label} ${required ? styles.required : ''}`}
        >
          {label}
        </label>
      )}

      <button
        ref={triggerRef}
        type="button"
        className={triggerClasses}
        disabled={disabled || loading}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${id}-label` : undefined}
        aria-describedby={errorMessage ? `${id}-error` : helperText ? `${id}-helper` : undefined}
        id={id}
        onClick={isOpen ? handleClose : handleOpen}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <div className={styles.triggerContent}>
          {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
          
          <span className={`${styles.triggerText} ${!selectedOption ? styles.placeholder : ''}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
        </div>

        {clearable && selectedOption && !disabled && (
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
            aria-label="Clear selection"
          >
            <XIcon />
          </button>
        )}

        <div className={`${styles.dropdownIcon} ${isOpen ? styles.open : ''}`}>
          {customDropdownIcon || <ChevronDownIcon />}
        </div>
      </button>

      {isOpen && (
        <div 
          ref={menuRef}
          className={menuClasses} 
          style={{ maxHeight }}
          role="listbox"
          aria-labelledby={id}
        >
          {searchable && (
            <input
              ref={searchInputRef}
              type="text"
              className={styles.searchInput}
              placeholder="Search options..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
          )}

          <DropdownMenu
            options={options}
            optionGroups={optionGroups}
            selectedValue={currentValue}
            highlightedIndex={highlightedIndex}
            size={size}
            maxHeight={maxHeight}
            onOptionClick={handleOptionSelect}
            onOptionMouseEnter={setHighlightedIndex}
            searchTerm={searchTerm}
            loading={loading}
          />
        </div>
      )}

      {errorMessage && (
        <div id={`${id}-error`} className={styles.errorText}>
          {errorMessage}
        </div>
      )}

      {helperText && !errorMessage && (
        <div id={`${id}-helper`} className={styles.helperText}>
          {helperText}
        </div>
      )}
    </div>
  );
});

Dropdown.displayName = 'Dropdown';

export default Dropdown;