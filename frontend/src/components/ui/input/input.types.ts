import { InputHTMLAttributes, ReactNode } from "react";

export type InputVariant = 'default' | 'filled' | 'flushed' | 'unstyled';

export type InputSize = 'small' | 'medium' | 'large';

export type InputStatus = 'default' | 'error' | 'succes' | 'warning';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>{
    variant?:InputVariant;
    size?:InputSize;
    status?:InputStatus;

    label?:string;
    helperText?:string;
    errorMessage?:string;

    leftIcon?:ReactNode;
    rightIcon?:ReactNode;
    leftAddon?:ReactNode;
    rightAddon?:ReactNode;

    loading?:boolean;
    invalid?:boolean;

    fullwidth?:boolean;

    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';
}

export interface InputGroupProps{
    children:ReactNode;
    className?:string;
}