import style from './terminal.module.scss';
import React from 'react';
import { crudAtom } from 'store';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { FaTerminal } from 'react-icons/fa';

export const TerminalNavBar = () => {
  const [{ module }] = useAtom(crudAtom);
  return (
    <>
      <div className={style.terminal}>
        <Link
          href={'#'}
          className="text-white tw-absolute tw-bottom-0 tw-left-0 tw-bg-[#3d5af1] tw-rounded-full tw-text-white tw-text-center tw-cursor-pointer tw-z-900 tw-p-4 hover:tw-bg-[#5872f5]  hover:tw-shadow-xl hover:tw-text-white tw-w-[50px] tw-h-[50px] tw-items-center tw-justify-center tw-flex"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FaTerminal color="#fffff" size={20} />
        </Link>
      </div>
    </>
  );
};

export default TerminalNavBar;
