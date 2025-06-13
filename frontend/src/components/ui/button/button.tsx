import { ButtonProps } from "./button.types";
import styles  from './button.module.css';
import React from "react";

const Button : React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'large',
    loading = false,
    disabled = false,
    fullwidth = false,
    leftIcon,
    rightIcon,
    children,
    className,
    ...props
}) => {
    const buttonClasses = [
        styles.button,
        styles[variant],
        styles[size],
        loading && styles.loading,
        fullwidth && styles.fullwidth,
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClasses}
            disabled={disabled || loading}
            {...props}
        >
            {leftIcon && !loading}
            {!loading && children}
            {rightIcon && !loading}
        </button>
    )
}

export default Button;