import React from 'react'
import styles from './ApiData.module.css'
import type { CatFact } from '../../types/api';

interface ApiDataProps {
    data: CatFact[];
}

export const ApiDataDisplay: React.FC<ApiDataProps> = ({ data }) => {
    if (data.length === 0) return null;

    return (
        <div className={styles.container}>
            <h3>Facts:</h3>
            <ul>
                {data.map((fact) => (
                    <li key={fact.id} style={{ marginBottom: '8px' }}>
                        {fact.fact}
                    </li>
                ))}
            </ul>
        </div>
    );
};