import React from 'react';
import { useApi } from '../../hooks/useApi';
import { ApiDataDisplay } from '../api-data/ApiData';
import ErrorDisplay from '../common/errors/Error';
import { Button } from '../common/button/Button';
import styles from './ApiButton.module.css';

export const ApiButton: React.FC = () => {
    const { data, error, loading, fetchData } = useApi();

    return (
        <div className={styles.container}>
            <Button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Get facts about cats'}
            </Button>

            <ApiDataDisplay data={data} />
            <ErrorDisplay error={error} />
        </div>
    );
};