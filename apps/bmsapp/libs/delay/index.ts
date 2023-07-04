// delay operation module

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export const delay = async (ms: number, fn: () => void) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fn());
    }, ms);
  });
};

export default delay;
