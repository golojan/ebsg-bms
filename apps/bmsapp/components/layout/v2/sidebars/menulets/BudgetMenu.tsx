import React from 'react';
import Link from 'next/link';
import { appBase } from 'store';
import { useAtom } from 'jotai';
export const BudgetMenu = () => {
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
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 11C18 15.9706 13.9706 20 9 20C4.02944 20 0 15.9706 0 11C0 6.02944 4.02944 2 9 2C13.9706 2 18 6.02944 18 11Z"
                    fill="#1A202C"
                    className="path-1"
                  />
                  <path
                    d="M19.8025 8.01277C19.0104 4.08419 15.9158 0.989557 11.9872 0.197453C10.9045 -0.0208635 10 0.89543 10 2V8C10 9.10457 10.8954 10 12 10H18C19.1046 10 20.0209 9.09555 19.8025 8.01277Z"
                    fill="#22C55E"
                    className="path-2"
                  />
                </svg>
              </span>
              <span className="item-text text-lg font-medium leading-none">
                Manage Budgets
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
              Budget Reports
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default BudgetMenu;
