// Convert a number to a string with commas

export const toMoney = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Return Currency Symbol
export const getNGN = () => {
  return '₦';
};

// Monify a number
export const toFiat = (amount: number) => {
  // format number to Indian rupee
  const money = new Intl.NumberFormat(`en-NG`, {
    style: 'currency',
    currency: 'NGN',
  });
  return money.format(amount);
};
