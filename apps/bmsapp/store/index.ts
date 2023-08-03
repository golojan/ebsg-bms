import { configureStore } from '@reduxjs/toolkit';
import { atom, createStore } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import counterReducer from './slices/counterSlice';

export const budgetYearAtom = atomWithStorage<number>('budget-year', 2023);

export const screenAtom = atomWithStorage<
  'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
>('screen-size', 'xl');
export const appBase = atomWithStorage('app-base', '/mda');
export const dataLayoutModeAtom = atomWithStorage('data-layout-mode', 'dark');
export const workingAtom = atom(false);
export const drawerOpenAtom = atom(true);
export const crudAtom = atom<TCrud>({});

export const selectedMdaAtom = atom<MdaInfo>({} as MdaInfo);

const jotaiStore = createStore();
jotaiStore.set(dataLayoutModeAtom, 'light');
jotaiStore.set(workingAtom, false);
jotaiStore.set(drawerOpenAtom, true);
jotaiStore.set(crudAtom, {});
jotaiStore.set(selectedMdaAtom, {} as MdaInfo);
jotaiStore.set(screenAtom, 'lg');

// Setup Redux Store with Reducers
export const reduxStore = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export default jotaiStore;
