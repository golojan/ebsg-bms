import React from 'react';
import Link from 'next/link';
import { useAtom } from 'jotai';
import { drawerOpenAtom } from 'store';

export const HeaderMobile = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(drawerOpenAtom);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <header className="md:hidden block mobile-wrapper w-full fixed z-20">
        <div className="w-full h-[80px] bg-white dark:bg-darkblack-600 flex justify-between items-center">
          <div className="w-full h-full flex items-center space-x-5">
            <button
              type="button"
              className="drawer-btn transform rotate-180"
              onClick={(e) => {
                e.preventDefault();
                toggleDrawer();
              }}
            >
              <span>
                <svg
                  width={16}
                  height={40}
                  viewBox="0 0 16 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                    fill="#F7F7F7"
                  />
                  <path
                    d="M10 15L6 20.0049L10 25.0098"
                    stroke="#A0AEC0"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div>
              <Link href="/">
                <img
                  src="./assets/images/logo/logo-color.svg"
                  className="block dark:hidden"
                  alt="logo"
                />
                <img
                  src="./assets/images/logo/logo-white.svg"
                  className="hidden dark:block "
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="mr-2">
            <div
              // onclick="profileAction()"
              className="flex lg:space-x-3 space-x-0 cursor-pointer"
            >
              <div className="w-[52px] h-[52px] rounded-xl border border-bgray-300 overflow-hidden">
                <img
                  className="object-cover"
                  src="./assets/images/avatar/profile-52x52.png"
                  alt="avater"
                />
              </div>
              <div className="2xl:block hidden">
                <div className="flex space-x-2.5 items-center">
                  <h3 className="text-base text-bgray-900 font-bold leading-[28px]">
                    John Doe
                  </h3>
                  <span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L12 14L17 10"
                        stroke="#28303F"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <p className="text-sm font-medium leading-[20px] text-bgray-600">
                  Super Admin
                </p>
              </div>
            </div>
            <div className="profile-wrapper">
              <div
                // onclick="profileAction()"
                className="profile-outside w-full h-full fixed -left-[43px] top-0 hidden"
              />
              <div
                style={{
                  filter: 'drop-shadow(12px 12px 40px rgba(0, 0, 0, 0.08))',
                }}
                className="profile-box w-[300px] overflow-hidden bg-white absolute right-0 top-[81px] rounded-lg hidden"
              >
                <div className="w-full px-3 py-2 relative">
                  <div>
                    <ul>
                      <li className="w-full">
                        <a href="settings.html">
                          <div className="flex space-x-[18px] items-center p-[14px] hover:bg-bgray-100 rounded-lg text-bgray-600 hover:text-bgray-900">
                            <div className="w-[20px]">
                              <span>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.1197 12.7805C12.0497 12.7705 11.9597 12.7705 11.8797 12.7805C10.1197 12.7205 8.71973 11.2805 8.71973 9.51047C8.71973 7.70047 10.1797 6.23047 11.9997 6.23047C13.8097 6.23047 15.2797 7.70047 15.2797 9.51047C15.2697 11.2805 13.8797 12.7205 12.1197 12.7805Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M18.7398 19.3796C16.9598 21.0096 14.5998 21.9996 11.9998 21.9996C9.39977 21.9996 7.03977 21.0096 5.25977 19.3796C5.35977 18.4396 5.95977 17.5196 7.02977 16.7996C9.76977 14.9796 14.2498 14.9796 16.9698 16.7996C18.0398 17.5196 18.6398 18.4396 18.7398 19.3796Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                    stroke="#111827"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold">
                                My Profile
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="w-full">
                        <a href="messages.html">
                          <div className="flex space-x-[18px] items-center p-[14px] hover:bg-bgray-100 rounded-lg text-bgray-600 hover:text-bgray-900">
                            <div className="w-[20px]">
                              <span>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8"
                                    stroke="#2A313C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold">
                                Inbox
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="w-full">
                        <a href="#">
                          <div className="flex space-x-[18px] items-center p-[14px] rounded-lg text-success-300">
                            <div className="w-[20px]">
                              <span>
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15 10L13.7071 11.2929C13.3166 11.6834 13.3166 12.3166 13.7071 12.7071L15 14M14 12L22 12M6 20C3.79086 20 2 18.2091 2 16V8C2 5.79086 3.79086 4 6 4M6 20C8.20914 20 10 18.2091 10 16V8C10 5.79086 8.20914 4 6 4M6 20H14C16.2091 20 18 18.2091 18 16M6 4H14C16.2091 4 18 5.79086 18 8"
                                    stroke="#22C55E"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-semibold">
                                Log Out
                              </span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full h-[1px] my-[14px] bg-bgray-300" />
                  <div>
                    <ul>
                      <li className="w-full">
                        <a href="settings.html">
                          <div className="p-[14px] hover:bg-bgray-100 rounded-lg text-bgray-600 hover:text-bgray-900">
                            <span className="text-sm font-semibold">
                              Settings
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="w-full">
                        <a href="users.html">
                          <div className="p-[14px] hover:bg-bgray-100 rounded-lg text-bgray-600 hover:text-bgray-900">
                            <span className="text-sm font-semibold">Users</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMobile;
