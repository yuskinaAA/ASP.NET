import { useState } from 'react';
import { catApi } from '../services/CatApi';
import type { CatFact } from '../types/api';

export const useApi = () => {
    const [data, setData] = useState<CatFact[]>([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        setError('');

        try {
            const response = await catApi.getFacts();

            //Расскоментируй чтобы получить ошибку
            //const response = await catApi.getErrorFacts();

            const facts: CatFact[] = response.data.map((item: CatFact, index: number) => ({
                id: index,
                fact: item.fact,
                length: item.length
            }));

            //console.log(facts);
            setData(facts);

        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Error loading data');
            }
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchData };
};