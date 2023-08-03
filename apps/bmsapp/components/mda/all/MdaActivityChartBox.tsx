import React from 'react';

export const MdaActivityChartBox = () => {
  return (
    <>
      <div className="xl:w-66 w-full bg-white dark:bg-darkblack-600 flex flex-col justify-between rounded-lg px-[24px] py-3">
        <div className="flex justify-between items-center pb-2 mb-2 border-b border-bgray-300 dark:border-darkblack-400">
          <h3 className="text-bgray-900 dark:text-white sm:text-2xl text-xl font-bold">
            Activities
          </h3>
          <div className="sm:flex hidden space-x-[28px] items-center">
            <div className="flex space-x-2 items-center">
              <div className="w-3 h-3 bg-orange rounded-full" />
              <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
                Pending
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="w-3 h-3 bg-warning-300 rounded-full" />
              <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
                Approved
              </span>
            </div>
            <div className="flex space-x-2 items-center">
              <div className="w-3 h-3 bg-success-300 rounded-full" />
              <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
                Disbursed
              </span>
            </div>
          </div>
          <div className="date-filter relative">
            <button
              // onclick="dateFilterAction('#date-filter-body')"
              type="button"
              className="px-3 py-2 bg-bgray-100 dark:bg-darkblack-500 dark:text-white flex space-x-1 items-center rounded-lg overflow-hidden"
            >
              <span className="text-sm font-medium text-bgray-900 dark:text-white">
                Jan 10 - Jan 16
              </span>
              <span>
                <svg
                  className="stroke-bgray-900 dark:stroke-gray-50"
                  width={16}
                  height={17}
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6.5L8 10.5L12 6.5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              id="date-filter-body"
              className="rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-[44px] hidden overflow-hidden"
            >
              <ul>
                <li
                  // onclick="dateFilterAction('#date-filter-body')"
                  className="text-sm  text-bgray-90 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
                >
                  Jan 10 - Jan 16
                </li>
                <li
                  // onclick="dateFilterAction('#date-filter-body')"
                  className="text-sm  text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
                >
                  Jan 10 - Jan 16
                </li>
                <li
                  // onclick="dateFilterAction('#date-filter-body')"
                  className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600"
                >
                  Jan 10 - Jan 16
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full">
          <canvas id="revenueFlow" height={255} />
        </div>
      </div>
    </>
  );
};

export default MdaActivityChartBox;
