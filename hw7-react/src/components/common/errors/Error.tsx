import React from 'react';
import styles from './Error.module.css';

interface ErrorProps {
    error: string;
}

const ErrorDisplay: React.FC<ErrorProps> = ({ error }) => {
    if (!error) return null;

    return (
        <div className={styles.error}>
            <h3>ERROR:</h3>
            <p>{error}</p>
        </div>
    );
};

export default ErrorDisplay;