import style from './loaders.module.scss';
import React from 'react';
import { ClipLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div
      className={`${style['container']} tw-bg-transparent transpare tw-from-black tw-to-white`}
    >
      <ClipLoader />
    </div>
  );
};
