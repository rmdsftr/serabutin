import React, { forwardRef } from "react";
import { InputGroupProps, InputProps } from "./input.types";
import styles from './input.module.css';

export const InputGroup: React.FC<InputGroupProps> = ({children, className}) => {
    return (
        <div className={`${styles.inputGroup} ${className || ''}`}>
            {children}
        </div>
    )
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
    variant ='default',
    size = 'large',
    status = 'default',
    label,
    helperText,
    errorMessage,
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    loading = false,
    invalid = false,
    fullwidth = false,
    required = false,
    className,
    ...props
}, ref) => {
    
    const InputStatus = invalid || errorMessage ? 'error':status;

    const inputClasses = [
        styles.input,
        styles[size],
        leftIcon && styles.hasLeftIcon,
        rightIcon && styles.hasRightIcon,
        leftAddon && styles.hasLeftAddon,
        rightAddon && styles.hasRightAddon,
        loading && styles.loading,
        className
    ].filter(Boolean).join(' ');

    const inputWrapper = [
        styles.inputWrapper,
        styles[variant],
        styles[InputStatus],
        fullwidth && styles.fullwidth
    ].filter(Boolean).join('  ');

    const inputElement = (
        <div className={inputWrapper}>
            {leftAddon && <div className={styles.leftAddon}>{leftAddon}</div>}
            {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}

            <input 
                ref = {ref}
                className= {inputClasses}
                aria-invalid= {invalid || !errorMessage}
                aria-describedby= {
                    errorMessage ? `${props.id}-error` :
                    helperText ? `${props.id}-helper` : undefined
                }
                {...props}
             />

             {loading && <div className={styles.loadingSpinner} />}
             {rightIcon && !loading && <div className={styles.rightIcon}>{rightIcon}</div>}
             {rightAddon && <div className={styles.rightAddon}>{rightAddon}</div>}
        </div>
    )

    if(!label && !helperText && !errorMessage){
        return inputElement
    }

    return (
        <InputGroup className={fullwidth ? styles.fullwidth : ''}>
            {label &&
                <label
                    htmlFor= {props.id}
                    className= {`${styles.label} ${required ? styles.required : ''}`}
                >
                    {label}
                </label>
            }

            {inputElement}

            {errorMessage && (
                <div id={`${props.id}-error`} className={styles.errorText}>
                    {errorMessage}
                </div>
            )}

            {helperText && !errorMessage && (
                <div id={`${props.id}-helper`} className={styles.helperText}>
                    {helperText}
                </div>
            )}
        </InputGroup>
    )
})

Input.displayName = 'Input';

export default Input;