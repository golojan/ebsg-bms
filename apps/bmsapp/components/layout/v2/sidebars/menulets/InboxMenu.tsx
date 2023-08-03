import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';
export const InboxMenu = () => {
  const [baseurl] = useAtom(appBase);
  const [show, setShow] = React.useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <>
      <li className="item py-[11px] text-bgray-900 dark:text-white">
        <Link href={`${baseurl}`} onClick={toggleShow}>
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
                    d="M11.8889 22C13.4278 22 14.737 21.0724 15.2222 19.7778H8.55554C9.04075 21.0724 10.35 22 11.8889 22Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7662 2.83781C13.3045 2.32351 12.6345 2 11.8889 2C10.4959 2 9.36673 3.12921 9.36673 4.52216V4.6374C6.98629 5.45244 5.224 7.38959 4.95607 9.75021L4.4592 14.1281C4.36971 14.9165 4.03716 15.6684 3.49754 16.3024C2.27862 17.7343 3.43826 19.7778 5.46979 19.7778H18.308C20.3395 19.7778 21.4992 17.7343 20.2802 16.3024C19.7406 15.6684 19.4081 14.9165 19.3186 14.1281L18.8217 9.75021C18.8148 9.68916 18.8068 9.6284 18.7979 9.56793C18.3712 9.70421 17.9164 9.77778 17.4444 9.77778C14.9898 9.77778 13 7.78793 13 5.33333C13 4.40827 13.2826 3.54922 13.7662 2.83781Z"
                    fill="#1A202C"
                    className="path-1"
                  />
                  <circle
                    cx="17.4444"
                    cy="5.33333"
                    r="3.33333"
                    fill="#22C55E"
                    className="path-2"
                  />
                </svg>
              </span>
              <span className="item-text text-lg font-medium leading-none">
                Messages
              </span>

              {/*counter*/}
              <div className="w-5 h-5 rounded-full bg-success-300 flex justify-center items-center">
                <span className="text-[10px] font-semibold text-white">5</span>
              </div>
              {/*counter*/}
            </div>
            <span>
              <svg
                width={6}
                height={12}
                viewBox="0 0 6 12"
                fill="none"
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="currentColor"
                  d="M0.531506 0.414376C0.20806 0.673133 0.155619 1.1451 0.414376 1.46855L4.03956 6.00003L0.414376 10.5315C0.155618 10.855 0.208059 11.3269 0.531506 11.5857C0.854952 11.8444 1.32692 11.792 1.58568 11.4685L5.58568 6.46855C5.80481 6.19464 5.80481 5.80542 5.58568 5.53151L1.58568 0.531506C1.32692 0.20806 0.854953 0.155619 0.531506 0.414376Z"
                />
              </svg>
            </span>
          </div>
        </Link>
        <ul
          className={`sub-menu mt-[22px] ml-2.5 pl-5 border-l border-success-100 ${
            show ? 'active' : ''
          }`}
        >
          <li>
            <Link
              href={`${baseurl}`}
              className="text-md font-medium text-bgray-600 dark:text-bgray-50 hover:dark:text-success-300 transition-all py-1.5 inline-block hover:text-bgray-800"
            >
              Unread Messages
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default InboxMenu;
