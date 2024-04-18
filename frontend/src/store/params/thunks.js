import { loadParams, setParams, setErrorParams } from '.';
import { getParams } from '../../main/providers/params';
import { getGptRes } from '../gpt/thunks';

export const getParameters = () => {
    return async (dispatch) => {
        try {
            const params = await getParams();
            dispatch(loadParams(params));
        }
        catch (error) {
            dispatch(setErrorParams("Error fetching parameters"));
        }
    }
}

export const setParameters = (params) => {
    return async (dispatch) => {
        const { accountType, contentType, audience, model } = params;

        if (!accountType || !contentType || !audience || !model) {
            dispatch(setErrorParams("Please fill in all fields"));
            return;
        }

        const title = `Here is your ${contentType} for ${audience} and ${accountType} account using ${model} model`;
        dispatch(setParams(title));

        dispatch(getGptRes({ accountType, contentType, audience, model }));
    }
}
