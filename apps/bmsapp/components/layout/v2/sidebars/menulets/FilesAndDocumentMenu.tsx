import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';
export const FilesAndDocumentMenu = () => {
  const [baseurl] = useAtom(appBase);
  return (
    <>
      <li className="item py-[11px] text-bgray-900 dark:text-white">
        <Link href={`${baseurl}/resources`}>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2.5 items-center">
              <span className="item-ico">
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                    fill="#1A202C"
                    className="path-1"
                  ></path>
                  <path
                    d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                    fill="#22C55E"
                    className="path-2"
                  ></path>
                </svg>
              </span>
              <span className="item-text text-lg font-medium leading-none">
                Files & Documents
              </span>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

export default FilesAndDocumentMenu;
