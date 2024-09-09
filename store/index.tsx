import { configureStore } from '@reduxjs/toolkit';
import answerReducer from './slices/answerSlice';
import mapReducer from './slices/mapModalSlice';

export const store = configureStore({
  reducer: {
    answer: answerReducer,
    mapModal: mapReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
