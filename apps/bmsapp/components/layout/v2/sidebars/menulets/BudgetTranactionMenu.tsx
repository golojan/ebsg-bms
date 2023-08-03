import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';

export const BudgetTranactionMenu = () => {
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
                  height={20}
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                    fill="#1A202C"
                    className="path-1"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                  <path
                    d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                </svg>
              </span>
              <span className="item-text text-lg font-medium leading-none">
                Requests (In/Out)
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
              href={`${baseurl}/requests`}
              className="text-md font-medium text-bgray-600 dark:text-bgray-50 hover:dark:text-success-300 transition-all py-1.5 inline-block hover:text-bgray-800"
            >
              Manage Requests
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default BudgetTranactionMenu;
