import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = 'primary'
}) => {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};