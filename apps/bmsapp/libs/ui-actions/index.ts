export const toggleNotification = (selectorRef: any, onHover: boolean) => {
  if (selectorRef.current) {
    selectorRef.current.classList.toggle('hidden');
  }
  return selectorRef;
};

export const toggleDropDown = (selectorRef: any) => {
  if (selectorRef.current) {
    selectorRef.current.classList.toggle('hidden');
  }
  return selectorRef;
};

export const dateFilterAction = (selector: string) => {
  const checkClassExits = document.querySelector(selector);
  checkClassExits?.classList.toggle('hidden');
  if (checkClassExits?.classList.contains('active')) {
    checkClassExits?.classList.remove('active');
  } else {
    checkClassExits?.classList.add('active');
  }
};
