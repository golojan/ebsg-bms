import { MutableRefObject } from 'react';

export const refStop = async (
  ref: MutableRefObject<HTMLButtonElement>,
  text: string
) => {
  window.setTimeout(() => {
    if (!ref.current) {
      return;
    }
    const thisButton = ref.current;
    thisButton.disabled = false;
    thisButton.classList.remove('disabled');
    thisButton.textContent = text;
  }, 5000);
};

export const refRun = async (
  ref: MutableRefObject<HTMLButtonElement>,
  text: string
) => {
  if (!ref.current) {
    return;
  }
  const thisButton = ref.current;
  thisButton.disabled = true;
  thisButton.classList.add('disabled');
  thisButton.textContent = text;
};
