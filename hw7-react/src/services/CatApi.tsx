import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../constants/api';

export const catApi = {
    getFacts: async () => {
        const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.CAT_FACTS}`);
        return response.data;
    },
    getErrorFacts: async () => {
        const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.ERROR}`);
        return response.data;
    },
};