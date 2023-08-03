import React, { useEffect } from 'react';
import { useUser } from 'services';
import { _IMAGES } from 'constants/images';
import {
  DashboardMenu,
  SupportMenu,
  BudgetTranactionMenu,
  IntegrationMenu,
  LogoutMenu,
  BudgetMenu,
  InboxMenu,
  SettingsMenu,
  MdaMenu,
} from './menulets';
import Link from 'next/link';
import Image from 'next/image';
import { drawerOpenAtom } from 'store';
import { useAtom } from 'jotai';
import FilesAndDocumentMenu from './menulets/FilesAndDocumentMenu';

export const AsideMain = () => {
  const [drawerOpen, setDrawerOpen] = useAtom(drawerOpenAtom);
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <aside className="block xl:block sm:hidden sidebar-wrapper w-[308px] fixed top-0 bg-white dark:bg-darkblack-600 h-full z-30">
        <div className="sidebar-header relative border-r border-b   border-r-[#F7F7F7] border-b-[#F7F7F7] dark:border-darkblack-400 w-full h-[108px] flex items-center pl-[50px] z-30">
          <Link href="/mda">
            <Image
              src={_IMAGES.logoColor}
              className="block dark:hidden"
              alt="EBSG.BMS"
            />
            <Image
              src={_IMAGES.logoWhite}
              className="hidden dark:block "
              alt="EBSG.BMS"
            />
          </Link>
          <button
            type="button"
            className="drawer-btn absolute right-0 top-auto"
            title="Ctrl+b"
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
                  fill="#22C55E"
                />
                <path
                  d="M10 15L6 20.0049L10 25.0098"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="sidebar-body pl-[48px] pt-[14px] w-full relative z-30 h-screen overflow-style-none overflow-y-scroll pb-[200px]">
          <div className="nav-wrapper pr-[50px] mb-[36px]">
            <div className="item-wrapper mb-5">
              <h4 className="text-sm font-medium dark:text-bgray-50 text-bgray-700 border-b dark:border-darkblack-400 border-bgray-200 leading-7">
                Portal Menu
              </h4>
              <ul className="mt-2.5">
                <DashboardMenu />
                <MdaMenu />
                <BudgetTranactionMenu />
                <BudgetMenu />
                <InboxMenu />
                {/* <li className="item py-[11px] text-bgray-900 dark:text-white">
                  <a href="analytics.html">
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
                              d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                              fill="#1A202C"
                              className="path-1"
                            />
                            <path
                              d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
                              fill="#22C55E"
                              className="path-2"
                            />
                            <path
                              d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
                              fill="#22C55E"
                              className="path-2"
                            />
                          </svg>
                        </span>
                        <span className="item-text text-lg font-medium leading-none">
                          Analytics
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="item py-[11px] text-bgray-900 dark:text-white">
                  <a href="my-wallet.html">
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
                              d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                              fill="#1A202C"
                              className="path-1"
                            />
                            <path
                              d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                              fill="#22C55E"
                              className="path-2"
                            />
                          </svg>
                        </span>
                        <span className="item-text text-lg font-medium leading-none">
                          My Wallet
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="item py-[11px] text-bgray-900 dark:text-white">
                  <a href="users.html">
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
                            <ellipse
                              cx="11.7778"
                              cy="17.5555"
                              rx="7.77778"
                              ry="4.44444"
                              className="path-1"
                              fill="#1A202C"
                            />
                            <circle
                              className="path-2"
                              cx="11.7778"
                              cy="6.44444"
                              r="4.44444"
                              fill="#22C55E"
                            />
                          </svg>
                        </span>
                        <span className="item-text text-lg font-medium leading-none">
                          User
                        </span>
                      </div>
                    </div>
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="item-wrapper mb-5">
              <h4 className="text-sm font-medium text-bgray-700 dark:text-bgray-50 border-b border-bgray-200 dark:border-darkblack-400 leading-7">
                Get Instant Help
              </h4>
              <SupportMenu />
            </div>
            <div className="item-wrapper mb-5">
              <h4 className="text-sm font-medium text-bgray-700 dark:text-bgray-50 border-b border-bgray-200 dark:border-darkblack-400 leading-7">
                Other Settings
              </h4>
              <ul className="mt-2.5">
                <SettingsMenu />
                <IntegrationMenu />
                <FilesAndDocumentMenu />
                <LogoutMenu />
              </ul>
            </div>
          </div>
          {/* <div className="upgrade-wrapper w-full h-[172px] pr-[24px] mb-[26px]">
            <div
              className="w-full h-full rounded-lg upgrade-banner relative"
              style={{
                backgroundImage: 'url(./assets/images/bg/upgrade-bg.png)',
              }}
            >
              <div
                style={{ left: 'calc(50% - 20px)', top: '-20px' }}
                className="w-10 flex justify-center items-center h-10 rounded-full bg-success-300 border border-white absolute"
              >
                <span>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 12.75C14 11.7835 13.1046 11 12 11C10.8954 11 10 11.7835 10 12.75C10 13.7165 10.8954 14.5 12 14.5C13.1046 14.5 14 15.2835 14 16.25C14 17.2165 13.1046 18 12 18C10.8954 18 10 17.2165 10 16.25"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 9.5V11"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 18V19.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.63246 11.1026C6.44914 8.65258 8.74197 7 11.3246 7H12.6754C15.258 7 17.5509 8.65258 18.3675 11.1026L19.3675 14.1026C20.6626 17.9878 17.7708 22 13.6754 22H10.3246C6.22921 22 3.33739 17.9878 4.63246 14.1026L5.63246 11.1026Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.0859 7L9.91411 7L8.51303 5.39296C7.13959 3.81763 8.74185 1.46298 10.7471 2.10985L11.6748 2.40914C11.8861 2.47728 12.1139 2.47728 12.3252 2.40914L13.2529 2.10985C15.2582 1.46298 16.8604 3.81763 15.487 5.39296L14.0859 7Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <h1 className="font-bold text-white text-xl text-center pt-8 mb-2">
                Unlimited Cashback
              </h1>
              <p className="text-sm leading-5 text-white opacity-[0.5] text-center px-7 mb-2">
                Instant 2% back on all your spend to your account.
              </p>
              <div className="flex justify-center">
                <a href="#">
                  <div className="flex justify-center bg-success-300 hover:bg-success-400 transition ease-in-out duration-300 w-[134px] h-[36px] rounded-lg">
                    <div className="flex space-x-1.5 items-center">
                      <span className="text-sm font-semibold text-white">
                        Upgrade Now
                      </span>
                      <span>
                        <svg
                          width={12}
                          height={8}
                          viewBox="0 0 12 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.33301 4H10.6663"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 6.66667L10.6667 4"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 1.33325L10.6667 3.99992"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
          <div className="copy-write-text">
            <p className="text-sm text-[#969BA0]">© 2023 All Rights Reserved</p>
            <p className="text-sm text-bgray-700 font-medium">
              Developed by{' '}
              <a
                href="https://www.golojan.co.uk"
                target="_blank"
                className="font-semibold border-b hover:text-blue-600"
              >
                Golojan Ltd.
              </a>
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AsideMain;
