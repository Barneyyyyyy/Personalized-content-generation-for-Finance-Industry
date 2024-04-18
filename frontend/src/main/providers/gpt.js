

import { api } from '../../api';

export const getPrompt = async ({ accountType, audience, contentType, model }) => {
    try {
        const res = await api.get('/prompt', {
            params: {
                account_type: accountType,
                audience: audience,
                content_type: contentType,
                model: model
            }
        });

        return res.data;
    } catch (error) {
        throw new Error(error);
    }
}

export const getModelResponse = async (payload) => {
    try {
        const res = await api.post('/chat/', payload);
        const content = await res.data.response.content;
        return content;
    } catch (error) {
        throw new Error(error);
    }
}
