import { atom } from 'jotai';

export const currentButtonRefAtom = atom<HTMLButtonElement>(
  new HTMLButtonElement()
);
