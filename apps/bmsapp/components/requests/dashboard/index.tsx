import React from 'react';

const RequestsIndex = () => {
  return (
    <>
      <section className="2xl:flex-1 2xl:mb-0 mb-6 h-screen">
        {/*list table*/}
        <div className="w-full py-[20px] px-[24px] rounded-lg bg-white dark:bg-darkblack-600">
          <div className="flex flex-col space-y-5">
            <div className="w-full flex h-[56px] space-x-4">
              <div className="lg:w-88 sm:w-70 sm:block hidden border border-transparent focus-within:border-success-300 h-full bg-bgray-100 dark:bg-darkblack-500 rounded-lg px-[18px]">
                <div className="flex w-full h-full items-center space-x-[15px]">
                  <span>
                    <svg
                      className="stroke-bgray-900 dark:stroke-white"
                      width={21}
                      height={22}
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9.80204"
                        cy="10.6761"
                        r="8.98856"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.0537 17.3945L19.5777 20.9094"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <label htmlFor="listSearch" className="w-full">
                    <input
                      type="text"
                      id="listSearch"
                      placeholder="Search by name, email, or others..."
                      className="search-input w-full bg-bgray-100 border-none px-0 focus:outline-none focus:ring-0 text-sm placeholder:text-sm text-bgray-600 tracking-wide placeholder:font-medium placeholder:text-bgray-500 dark:bg-darkblack-500 dark:text-white"
                    />
                  </label>
                </div>
              </div>
              <div className="flex-1 h-full relative">
                <button
                  type="button"
                  className="w-full h-full flex justify-center items-center bg-bgray-100 dark:bg-darkblack-500 dark:border-darkblack-500 border border-bgray-300 rounded-lg"
                >
                  <div className="flex space-x-3 items-center">
                    <span>
                      <svg
                        width={18}
                        height={17}
                        viewBox="0 0 18 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.55169 13.5022H1.25098"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.3623 3.80984H16.663"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.94797 3.75568C5.94797 2.46002 4.88981 1.40942 3.58482 1.40942C2.27984 1.40942 1.22168 2.46002 1.22168 3.75568C1.22168 5.05133 2.27984 6.10193 3.58482 6.10193C4.88981 6.10193 5.94797 5.05133 5.94797 3.75568Z"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2214 13.4632C17.2214 12.1675 16.1641 11.1169 14.8591 11.1169C13.5533 11.1169 12.4951 12.1675 12.4951 13.4632C12.4951 14.7589 13.5533 15.8095 14.8591 15.8095C16.1641 15.8095 17.2214 14.7589 17.2214 13.4632Z"
                          stroke="#0CAF60"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-base text-success-300 font-medium">
                      Filters
                    </span>
                  </div>
                </button>
                <div
                  id="table-filter"
                  className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-[60px] overflow-hidden hidden"
                >
                  <ul>
                    <li className="text-sm  text-bgray-90 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold">
                      January
                    </li>
                    <li className="text-sm text-bgray-900 dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold">
                      February
                    </li>
                    <li className="text-sm text-bgray-900  dark:text-white cursor-pointer px-5 py-2 hover:bg-bgray-100 hover:dark:bg-darkblack-600 font-semibold">
                      March
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="filter-content w-full">
              <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Location
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">
                        State or province
                      </span>
                      <span>
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="province-filter"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li className="text-sm  text-bgray-90 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold">
                          January
                        </li>
                        <li className="text-sm  text-bgray-900 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold">
                          February
                        </li>
                        <li className="text-sm  text-bgray-900 dark:text-white hover:dark:bg-darkblack-600 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold">
                          March
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Amount Spent
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">
                        &gt; $1,000
                      </span>
                      <span>
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="amount-filter"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li className="text-sm  text-bgray-90 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white">
                          January
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white">
                          February
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 dark:text-white hover:bg-bgray-100 font-semibold">
                          March
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Transaction list Date
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">
                        Select date
                      </span>
                      <span>
                        <svg
                          className="stroke-bgray-500 dark:stroke-white"
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.6758 5.8186H6.67578C5.57121 5.8186 4.67578 6.71403 4.67578 7.8186V19.8186C4.67578 20.9232 5.57121 21.8186 6.67578 21.8186H18.6758C19.7804 21.8186 20.6758 20.9232 20.6758 19.8186V7.8186C20.6758 6.71403 19.7804 5.8186 18.6758 5.8186Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.6758 3.8186V7.8186"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8.67578 3.8186V7.8186"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M4.67578 11.8186H20.6758"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M11.6758 15.8186H12.6758"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.6758 15.8186V18.8186"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="date-filter-table"
                      className="rounded-lg w-full shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li className="text-sm  text-bgray-90 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white">
                          January
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 hover:bg-bgray-100 font-semibold dark:text-white">
                          February
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:dark:bg-darkblack-600 dark:text-white hover:bg-bgray-100 font-semibold">
                          March
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-base text-bgray-900 dark:text-white leading-[24px] font-bold mb-2">
                    Type of transaction
                  </p>
                  <div className="w-full h-[56px] relative">
                    <button
                      type="button"
                      className="w-full h-full rounded-lg bg-bgray-100 px-4 flex justify-between items-center relative dark:bg-darkblack-500"
                    >
                      <span className="text-base text-bgray-500">
                        All transaction{' '}
                      </span>
                      <span>
                        <svg
                          width={21}
                          height={21}
                          viewBox="0 0 21 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.58203 8.3186L10.582 13.3186L15.582 8.3186"
                            stroke="#A0AEC0"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="trans-filter-tb"
                      className="w-full rounded-lg shadow-lg bg-white dark:bg-darkblack-500 absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li className="text-sm  text-bgray-90 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white">
                          January
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white">
                          February
                        </li>
                        <li className="text-sm  text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 font-semibold hover:dark:bg-darkblack-600 dark:text-white">
                          March
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="table-content w-full overflow-x-auto">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-bgray-300 dark:border-darkblack-400">
                    <td>
                      <label className="text-center">
                        <input
                          type="checkbox"
                          className="focus:outline-none focus:ring-0 rounded-full border border-bgray-400 cursor-pointer w-5 h-5 text-success-300 dark:bg-darkblack-600 dark:border-darkblack-400"
                        />
                      </label>
                    </td>
                    <td className="py-5 px-6 xl:px-0 w-[250px] lg:w-auto inline-block">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                          Customer name
                        </span>
                        <span>
                          <svg
                            width={14}
                            height={15}
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.66602 13.3157V1.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                          Email
                        </span>
                        <span>
                          <svg
                            width={14}
                            height={15}
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.66602 13.3157V1.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0">
                      <div className="flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-gray-50">
                          Location
                        </span>
                        <span>
                          <svg
                            width={14}
                            height={15}
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.66602 13.3157V1.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0 w-[165px]">
                      <div className="w-full flex space-x-2.5 items-center">
                        <span className="text-base font-medium text-bgray-600 dark:text-bgray-50">
                          Spent
                        </span>
                        <span>
                          <svg
                            width={14}
                            height={15}
                            viewBox="0 0 14 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.332 1.31567V13.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.66602 11.3157L3.66602 13.3157L1.66602 11.3157"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3.66602 13.3157V1.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M12.332 3.31567L10.332 1.31567L8.33203 3.31567"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </td>
                    <td className="py-5 px-6 xl:px-0" />
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pagination-content w-full">
              <div className="w-full flex lg:justify-between justify-center items-center">
                <div className="lg:flex hidden space-x-4 items-center">
                  <span className="text-bgray-600 dark:text-bgray-50 text-sm font-semibold">
                    Show result:
                  </span>
                  <div className="relative">
                    <button
                      type="button"
                      className="px-2.5 py-[14px] border rounded-lg border-bgray-300 dark:border-darkblack-400 flex space-x-6 items-center"
                    >
                      <span className="text-sm font-semibold text-bgray-900 dark:text-bgray-50">
                        3
                      </span>
                      <span>
                        <svg
                          width={17}
                          height={17}
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.03516 6.03271L8.03516 10.0327L12.0352 6.03271"
                            stroke="#A0AEC0"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      id="result-filter"
                      className="rounded-lg w-full shadow-lg bg-white absolute right-0 z-10 top-14 overflow-hidden hidden"
                    >
                      <ul>
                        <li className="text-sm font-medium text-bgray-90 cursor-pointer px-5 py-2 hover:bg-bgray-100">
                          2
                        </li>
                        <li className="text-sm font-medium text-bgray-900 cursor-pointer px-5 py-2 hover:bg-bgray-100 ">
                          3
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex sm:space-x-[35px] space-x-5 items-center">
                  <button type="button">
                    <span>
                      <svg
                        width={21}
                        height={21}
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7217 5.03271L7.72168 10.0327L12.7217 15.0327"
                          stroke="#A0AEC0"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="rounded-lg text-success-300 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 bg-success-50 dark:bg-darkblack-500 dark:text-bgray-50"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
                    >
                      2
                    </button>
                    <span className="text-bgray-500 text-sm">. . . .</span>
                    <button
                      type="button"
                      className="rounded-lg text-bgray-500 lg:text-sm text-xs font-bold lg:px-6 lg:py-2.5 px-4 py-1.5 hover:bg-success-50 hover:text-success-300 transition duration-300 ease-in-out dark:hover:bg-darkblack-500"
                    >
                      20
                    </button>
                  </div>
                  <button type="button">
                    <span>
                      <svg
                        width={21}
                        height={21}
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.72168 5.03271L12.7217 10.0327L7.72168 15.0327"
                          stroke="#A0AEC0"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestsIndex;
