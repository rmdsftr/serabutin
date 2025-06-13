import { ReactNode } from 'react';

export interface DropdownOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: ReactNode;
  description?: string;
}

export interface DropdownOptionGroup {
  label: string;
  options: DropdownOption[];
}

export type DropdownVariant = 'default' | 'filled' | 'flushed' | 'unstyled';

export type DropdownSize = 'small' | 'medium' | 'large';

export type DropdownStatus = 'default' | 'error' | 'success' | 'warning';

export type DropdownPosition = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

export interface DropdownProps {
  options?: DropdownOption[];
  optionGroups?: DropdownOptionGroup[];
  
  value?: string | number | null;
  defaultValue?: string | number | null;
  onChange?: (value: string | number | null, option: DropdownOption | null) => void;
  
  variant?: DropdownVariant;
  size?: DropdownSize;
  status?: DropdownStatus;
  
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  
  leftIcon?: ReactNode;
  customDropdownIcon?: ReactNode;
  
  loading?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  required?: boolean;
  
  searchable?: boolean;
  clearable?: boolean;
  multiple?: boolean;
  closeOnSelect?: boolean;
  
  fullWidth?: boolean;
  position?: DropdownPosition;
  maxHeight?: string;
  
  id?: string;
  name?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  
  className?: string;
  
  onOpen?: () => void;
  onClose?: () => void;
  onSearch?: (searchTerm: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface DropdownOptionProps {
  option: DropdownOption;
  isSelected: boolean;
  isHighlighted: boolean;
  size: DropdownSize;
  onClick: () => void;
  onMouseEnter: () => void;
}

export interface DropdownMenuProps {
  options: DropdownOption[];
  optionGroups?: DropdownOptionGroup[];
  selectedValue?: string | number | null;
  highlightedIndex: number;
  size: DropdownSize;
  maxHeight?: string;
  onOptionClick: (option: DropdownOption) => void;
  onOptionMouseEnter: (index: number) => void;
  searchTerm?: string;
  loading?: boolean;
}