import { configureStore } from '@reduxjs/toolkit';
import { paramsSlice } from './params';
import { gptSlice } from './gpt';

export const store = configureStore({
  reducer: {
    params: paramsSlice.reducer,
    gpt: gptSlice.reducer,
  },
})