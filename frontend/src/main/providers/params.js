import { api } from '../../api';

export const getParams = async () => {
    try {
        const response = await api.get('/params');
        const params = await response.data;
        return params;
    } catch (error) {
        throw new Error(error);
    }
}