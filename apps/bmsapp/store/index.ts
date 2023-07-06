import { configureStore } from '@reduxjs/toolkit';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});

export const crudAtom = atom<TCrud>({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
