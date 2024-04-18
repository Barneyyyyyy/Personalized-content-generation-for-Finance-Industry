import { createSlice } from '@reduxjs/toolkit';

export const paramsSlice = createSlice({
    name: 'params',
    initialState: {
        params: [],
        active: false,
        title: '',
        error: ''
    },
    reducers: {
        loadParams: (state, action) => {
            state.params = action.payload;
            state.active = false;
            state.title = '';
            state.error = '';
        },
        setParams: (state, action) => {
            state.active = true;
            state.title = action.payload;
            state.error = '';
        },
        clearParams: (state) => {
            state.active = false;
            state.title = '';
            state.error = '';
        },
        setErrorParams: (state, action) => {
            state.active = false;
            state.title = '';
            state.error = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { loadParams, setParams, clearParams, setErrorParams } = paramsSlice.actions;