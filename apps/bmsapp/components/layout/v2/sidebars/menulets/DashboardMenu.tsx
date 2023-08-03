import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';
export const DashboardMenu = () => {
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
                  width={18}
                  height={21}
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="path-1"
                    d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                    fill="#1A202C"
                  />
                  <path
                    className="path-2"
                    d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                    fill="#22C55E"
                  />
                </svg>
              </span>
              <span className="item-text text-lg font-medium leading-none">
                My Dashboard
              </span>
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
              MDA Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/mda"
              className="text-md font-medium text-bgray-600 dark:text-bgray-50 hover:dark:text-success-300 transition-all py-1.5 inline-block hover:text-bgray-800"
            >
              State Dashboard
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default DashboardMenu;
