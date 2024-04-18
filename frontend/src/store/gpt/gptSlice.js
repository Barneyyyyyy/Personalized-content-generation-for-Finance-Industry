import { createSlice } from '@reduxjs/toolkit';

export const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        isLoading: false,
        content: '',
        error: ''
    },
    reducers: {
        loadingResponse: (state) => {
            state.isLoading = true;
        },
        loadGptRes: (state, action) => {
            state.isLoading = false;
            state.content = action.payload;
            state.error = '';
        },
        clearGptRes: (state) => {
            state.isLoading = false;
            state.content = '';
            state.error = '';
        },
        setErrorGpt: (state, action) => {
            state.isLoading = false;
            state.content = '';
            state.error = action.payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { loadingResponse, loadGptRes, clearGptRes, setErrorGpt } = gptSlice.actions;