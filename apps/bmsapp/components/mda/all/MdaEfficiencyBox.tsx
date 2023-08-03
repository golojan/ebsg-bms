import React from 'react';

export const MdaEfficiencyBox = () => {
  return (
    <>
      <div className="flex-1 xl:block hidden">
        <div className="bg-white dark:bg-darkblack-600 rounded-lg">
          <div className="flex px-[20px] py-[12px] justify-between items-center border-b border-bgray-300 dark:border-darkblack-400">
            <h3 className="text-bgray-900 dark:text-white text-xl font-bold">
              Efficiency
            </h3>
            <div className="date-filter relative">
              <button
                // onclick="dateFilterAction('#month-filter')"
                type="button"
                className="flex space-x-1 items-center"
              >
                <span className="text-base font-semibold text-bgray-900 dark:text-white">
                  Monthly
                </span>
                <span>
                  <svg
                    className="stroke-bgray-900 dark:stroke-bgray-50"
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
                id="month-filter"
                className="rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-5 overflow-hidden hidden"
              >
                <ul>
                  <li
                    // onclick="dateFilterAction('#month-filter')"
                    className="text-sm  text-bgray-90 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold dark:text-white hover:dark:bg-darkblack-600"
                  >
                    January
                  </li>
                  <li
                    // onclick="dateFilterAction('#month-filter')"
                    className="text-sm text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold dark:text-white hover:dark:bg-darkblack-600"
                  >
                    February
                  </li>
                  <li
                    // onclick="dateFilterAction('#month-filter')"
                    className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold dark:text-white hover:dark:bg-darkblack-600"
                  >
                    March
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="px-[20px] py-[12px]">
            <div className="flex space-x-8 items-center mb-4">
              <div className="w-[180px] relative">
                <canvas id="pie_chart" height={168} />
                <div
                  className="w-[34px] h-[34px] bg-[#EDF2F7] absolute z-0 rounded-full"
                  style={{
                    left: 'calc(50% - 17px)',
                    top: 'calc(50% - 17px)',
                  }}
                />
              </div>
              <div className="counting">
                <div className="mb-6">
                  <div className="flex items-center space-x-[2px]">
                    <p className="text-success-300 text-lg font-bold">₦5,230</p>
                    <span>
                      <svg
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.7749 0.558058C10.5309 0.313981 10.1351 0.313981 9.89107 0.558058L7.39107 3.05806C7.14699 3.30214 7.14699 3.69786 7.39107 3.94194C7.63514 4.18602 8.03087 4.18602 8.27495 3.94194L9.70801 2.50888V11C9.70801 11.3452 9.98783 11.625 10.333 11.625C10.6782 11.625 10.958 11.3452 10.958 11V2.50888L12.3911 3.94194C12.6351 4.18602 13.0309 4.18602 13.2749 3.94194C13.519 3.69786 13.519 3.30214 13.2749 3.05806L10.7749 0.558058Z"
                          fill="#22C55E"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.22407 11.4419C3.46815 11.686 3.86388 11.686 4.10796 11.4419L6.60796 8.94194C6.85203 8.69786 6.85203 8.30214 6.60796 8.05806C6.36388 7.81398 5.96815 7.81398 5.72407 8.05806L4.29102 9.49112L4.29101 1C4.29101 0.654823 4.01119 0.375001 3.66602 0.375001C3.32084 0.375001 3.04102 0.654823 3.04102 1L3.04102 9.49112L1.60796 8.05806C1.36388 7.81398 0.968151 7.81398 0.724074 8.05806C0.479996 8.30214 0.479996 8.69786 0.724074 8.94194L3.22407 11.4419Z"
                          fill="#22C55E"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-bgray-600 text-base font-medium">
                    Arrival
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-[2px]">
                    <p className="text-bgray-900 dark:text-white text-lg font-bold">
                      ₦6,230
                    </p>
                    <span>
                      <svg
                        className="fill-bgray-900 dark:fill-bgray-50"
                        width={14}
                        height={12}
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.7749 0.558058C10.5309 0.313981 10.1351 0.313981 9.89107 0.558058L7.39107 3.05806C7.14699 3.30214 7.14699 3.69786 7.39107 3.94194C7.63514 4.18602 8.03087 4.18602 8.27495 3.94194L9.70801 2.50888V11C9.70801 11.3452 9.98783 11.625 10.333 11.625C10.6782 11.625 10.958 11.3452 10.958 11V2.50888L12.3911 3.94194C12.6351 4.18602 13.0309 4.18602 13.2749 3.94194C13.519 3.69786 13.519 3.30214 13.2749 3.05806L10.7749 0.558058Z"
                        />
                        <path
                          opacity="0.4"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.22407 11.4419C3.46815 11.686 3.86388 11.686 4.10796 11.4419L6.60796 8.94194C6.85203 8.69786 6.85203 8.30214 6.60796 8.05806C6.36388 7.81398 5.96815 7.81398 5.72407 8.05806L4.29102 9.49112L4.29101 1C4.29101 0.654823 4.01119 0.375001 3.66602 0.375001C3.32084 0.375001 3.04102 0.654823 3.04102 1L3.04102 9.49112L1.60796 8.05806C1.36388 7.81398 0.968151 7.81398 0.724074 8.05806C0.479996 8.30214 0.479996 8.69786 0.724074 8.94194L3.22407 11.4419Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="text-bgray-600 dark:text-bgray-50 text-base font-medium">
                    Spending
                  </p>
                </div>
              </div>
            </div>
            <div className="status">
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex space-x-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-success-300" />
                  <span className="text-sm text-bgray-600 dark:text-bgray-50 font-medium">
                    Goal
                  </span>
                </div>
                <p className="text-bgray-900 font-bold text-sm dark:text-bgray-50">
                  13%
                </p>
              </div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex space-x-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-warning-300" />
                  <span className="text-sm text-bgray-600 dark:text-white font-medium">
                    Spending
                  </span>
                </div>
                <p className="text-bgray-900 font-bold text-sm dark:text-bgray-50">
                  28%
                </p>
              </div>
              <div className="flex justify-between items-center mb-1.5">
                <div className="flex space-x-3 items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-bgray-200" />
                  <span className="text-sm text-bgray-600 dark:text-white font-medium">
                    Others
                  </span>
                </div>
                <p className="text-bgray-900 font-bold text-sm dark:text-bgray-50">
                  59%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MdaEfficiencyBox;
