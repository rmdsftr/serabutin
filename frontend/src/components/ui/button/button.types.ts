import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = 'primary' | 'secondary';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?:ButtonVariant;
    size?:ButtonSize;

    loading?:boolean;
    disabled?:boolean;

    children: ReactNode;
    leftIcon?: ReactNode;
    rightIcon?:ReactNode;

    fullwidth?:boolean;
}