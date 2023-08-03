// number to words using the to-words package
import { ToWords } from 'to-words';

export const toWords = (n: number): string => {
  if (n === 0 || n === null || n === undefined || isNaN(n) || n <= 0) {
    return '';
  }
  const toWords = new ToWords({
    localeCode: 'en-NG',
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
    },
  });
  const words = toWords.convert(n);
  return words.toString();
};

export const toMoney = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const toNumber = (x: string) => {
  return Number(x.replace(/,/g, ''));
};
