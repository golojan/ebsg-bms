import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';
export const SupportMenu = () => {
  const [baseurl] = useAtom(appBase);
  return (
    <>
      <ul className="mt-2.5">
        <li className="item py-[11px] text-bgray-900 dark:text-white">
          <Link href={`${baseurl}`}>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2.5 items-center">
                <span className="item-ico">
                  <svg
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 2V11C5 12.1046 5.89543 13 7 13H18C19.1046 13 20 12.1046 20 11V2C20 0.895431 19.1046 0 18 0H7C5.89543 0 5 0.89543 5 2Z"
                      fill="#1A202C"
                      className="path-1"
                    />
                    <path
                      d="M0 15C0 13.8954 0.895431 13 2 13H2.17157C2.70201 13 3.21071 13.2107 3.58579 13.5858C4.36683 14.3668 5.63317 14.3668 6.41421 13.5858C6.78929 13.2107 7.29799 13 7.82843 13H8C9.10457 13 10 13.8954 10 15V16C10 17.1046 9.10457 18 8 18H2C0.89543 18 0 17.1046 0 16V15Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                    <path
                      d="M7.5 9.5C7.5 10.8807 6.38071 12 5 12C3.61929 12 2.5 10.8807 2.5 9.5C2.5 8.11929 3.61929 7 5 7C6.38071 7 7.5 8.11929 7.5 9.5Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 4.5C8.25 4.08579 8.58579 3.75 9 3.75L16 3.75C16.4142 3.75 16.75 4.08579 16.75 4.5C16.75 4.91421 16.4142 5.25 16 5.25L9 5.25C8.58579 5.25 8.25 4.91421 8.25 4.5Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75L16 7.75C16.4142 7.75 16.75 8.08579 16.75 8.5C16.75 8.91421 16.4142 9.25 16 9.25L12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                  </svg>
                </span>
                <span className="item-text text-lg font-medium leading-none">
                  Developer Support
                </span>
              </div>
            </div>
          </Link>
        </li>
        <li className="item py-[11px] text-bgray-900 dark:text-white">
          <Link href={`${baseurl}`}>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2.5 items-center">
                <span className="item-ico">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.0606 2H10.9394C9.76787 2 8.81817 2.89543 8.81817 4C8.81817 5.26401 7.46574 6.06763 6.35556 5.4633L6.24279 5.40192C5.22823 4.84963 3.93091 5.17738 3.34515 6.13397L2.28455 7.86602C1.69879 8.8226 2.0464 10.0458 3.06097 10.5981C4.17168 11.2027 4.17168 12.7973 3.06096 13.4019C2.0464 13.9542 1.69879 15.1774 2.28454 16.134L3.34515 17.866C3.93091 18.8226 5.22823 19.1504 6.24279 18.5981L6.35555 18.5367C7.46574 17.9324 8.81817 18.736 8.81817 20C8.81817 21.1046 9.76787 22 10.9394 22H13.0606C14.2321 22 15.1818 21.1046 15.1818 20C15.1818 18.736 16.5343 17.9324 17.6445 18.5367L17.7572 18.5981C18.7718 19.1504 20.0691 18.8226 20.6548 17.866L21.7155 16.134C22.3012 15.1774 21.9536 13.9542 20.939 13.4019C19.8283 12.7973 19.8283 11.2027 20.939 10.5981C21.9536 10.0458 22.3012 8.82262 21.7155 7.86603L20.6548 6.13398C20.0691 5.1774 18.7718 4.84965 17.7572 5.40193L17.6445 5.46331C16.5343 6.06765 15.1818 5.26402 15.1818 4C15.1818 2.89543 14.2321 2 13.0606 2Z"
                      fill="#1A202C"
                      className="path-1"
                    />
                    <path
                      d="M15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                  </svg>
                </span>
                <span className="item-text text-lg font-medium leading-none">
                  A.I Support
                </span>
              </div>
            </div>
          </Link>
        </li>
        <li className="item py-[11px] text-bgray-900 dark:text-white">
          <Link href={`${baseurl}`}>
            <div className="flex items-center justify-between">
              <div className="flex space-x-2.5 items-center">
                <span className="item-ico">
                  <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 12.5C17.5 17.1944 13.6944 21 9 21C4.30558 21 0.5 17.1944 0.5 12.5C0.5 7.80558 4.30558 4 9 4C13.6944 4 17.5 7.80558 17.5 12.5Z"
                      fill="#1A202C"
                      className="path-1"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.99995 1.75C8.02962 1.75 7.09197 1.88462 6.20407 2.13575C5.80549 2.24849 5.39099 2.01676 5.27826 1.61818C5.16553 1.21961 5.39725 0.805108 5.79583 0.692376C6.81525 0.404046 7.89023 0.25 8.99995 0.25C10.1097 0.25 11.1846 0.404046 12.2041 0.692376C12.6026 0.805108 12.8344 1.21961 12.7216 1.61818C12.6089 2.01676 12.1944 2.24849 11.7958 2.13575C10.9079 1.88462 9.97028 1.75 8.99995 1.75Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                    <path
                      d="M11 13C11 14.1046 10.1046 15 9 15C7.89543 15 7 14.1046 7 13C7 11.8954 7.89543 11 9 11C10.1046 11 11 11.8954 11 13Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 7.25C9.41421 7.25 9.75 7.58579 9.75 8V12C9.75 12.4142 9.41421 12.75 9 12.75C8.58579 12.75 8.25 12.4142 8.25 12V8C8.25 7.58579 8.58579 7.25 9 7.25Z"
                      fill="#22C55E"
                      className="path-2"
                    />
                  </svg>
                </span>
                <span className="item-text text-lg font-medium leading-none">
                  History
                </span>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SupportMenu;
