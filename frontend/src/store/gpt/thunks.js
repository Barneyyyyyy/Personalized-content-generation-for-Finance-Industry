import { getPrompt, getModelResponse } from '../../main/providers/gpt';
import { loadingResponse, loadGptRes, setErrorGpt } from '.';

export const getGptRes = ({ accountType, audience, contentType, model }) => {
    return async (dispatch) => {
        try {
            dispatch(loadingResponse());
            const prompt = await getPrompt({ accountType, audience, contentType, model });

            const content = await getModelResponse(prompt);
            dispatch(loadGptRes(content));
        }
        catch (error) {
            dispatch(setErrorGpt("Error fetching model response"));
        }
    }
}

