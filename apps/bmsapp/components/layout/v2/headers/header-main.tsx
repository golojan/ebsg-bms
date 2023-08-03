import React, { KeyboardEvent } from 'react';
import { useUser } from 'services';
import AccessPopups from './access-popups';
import { StaleHolder } from 'components/all/skeletons';
import { drawerOpenAtom, budgetYearAtom } from 'store';
import { useAtom } from 'jotai';

export const HeaderMain = () => {
  const { user, busy } = useUser();
  const [drawerOpen, setDrawerOpen] = useAtom(drawerOpenAtom);
  const [showSearchTray, setShowSearchTray] = React.useState<boolean>(false);
  const [keyPresssed, setKeyPressed] = React.useState<string>('');
  const [ctrlKeyPressed, setCtrlKeyPressed] = React.useState<boolean>(false);
  const [query, setQuery] = React.useState<string>('');
  const [budgetYear] = useAtom(budgetYearAtom);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const searchRef = React.useRef<HTMLInputElement>(null);

  const processSearch = (e: any) => {
    const value = e.target.value.toString();
    if (value.length > 0) {
      setQuery(value);
      setShowSearchTray(true);
    } else {
      setShowSearchTray(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      const key = e.key;
      setKeyPressed(key);
      if (e.ctrlKey) setCtrlKeyPressed(true);
      else setCtrlKeyPressed(false);
      if (key === 'Control' || key === 'k' || key === 'b') {
        e.preventDefault();
      }
      if (keyPresssed === 'b' && ctrlKeyPressed) {
        toggleDrawer();
      }
      if (keyPresssed === 'k' && ctrlKeyPressed) {
        if (searchRef.current) searchRef.current.focus({ preventScroll: true });
      }
    });
    return () => {
      window.removeEventListener('keydown', () => {
        setKeyPressed('');
        setCtrlKeyPressed(false);
      });
    };
  }, [keyPresssed, ctrlKeyPressed]);

  return (
    <>
      <header className="md:block hidden header-wrapper w-full fixed z-30">
        <div className="w-full h-[108px] dark:bg-darkblack-600 bg-white flex items-center justify-between 2xl:px-[76px] px-10 relative">
          <button
            title="Ctrl+b"
            type="button"
            className="drawer-btn absolute left-0 top-auto transform rotate-180"
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
          {/* page-title */}
          <div>
            <h3 className="lg:text-3xl text-xl dark:text-bgray-50 text-bgray-900 font-bold lg:leading-[36.4px]">
              Dashboard (
              <strong className="text-success-300">{budgetYear}</strong>)
            </h3>
            <p className="lg:text-md text-xs dark:text-bgray-50 text-bgray-600 font-medium lg:leading-[25.2px]">
              <StaleHolder
                busy={busy}
                width={150}
                variant="text"
                className="dark:bg-bgray-600"
              >
                <span className="text-lg">
                  Welcome back{' '}
                  <strong className="font-bold">{user?.lastName}</strong>!
                </span>
              </StaleHolder>
            </p>
          </div>
          {/* search-bar */}
          <div className="searchbar-wrapper">
            <div className="border border-transparent focus-within:border-success-300 lg:w-[400px] w-[300px] px h-[56px] px-4 bg-bgray-50 dark:bg-darkblack-500 rounded-lg flex justify-between items-center relative">
              <div className="flex space-x-3.5 items-center w-full">
                <span>
                  <svg
                    className="stroke-bgray-900 dark:stroke-bgray-50"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9.78639"
                      cy="9.78602"
                      r="8.23951"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5176 15.9447L18.7479 19.1667"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <label htmlFor="search">
                  <input
                    type="text"
                    id="search"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                    ref={searchRef}
                    onChange={(e) => processSearch(e)}
                    placeholder="Search..."
                    className="search-input w-full bg-none border-none bg-bgray-50 px-0 focus:outline-none focus:ring-0 placeholder:text-sm text-bgray-600 tracking-wide placeholder:font-semibold dark:placeholder:text-bgray-500 dark:bg-darkblack-500 text-xl"
                  />
                  <div
                    className={`${
                      showSearchTray ? 'block' : 'hidden'
                    } w-full h-[100px] bg-success-300 absolute left-0 top-14 rounded-b-2xl`}
                  ></div>
                </label>
              </div>
              <div className="flex space-x-[6px] items-center">
                <span>
                  <svg
                    className="stroke-bgray-900 dark:stroke-gray-300"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.975 12.3875C5.975 12.8548 5.83644 13.3115 5.57685 13.7C5.31725 14.0885 4.94828 14.3914 4.51659 14.5702C4.0849 14.749 3.60988 14.7958 3.1516 14.7046C2.69332 14.6134 2.27236 14.3884 1.94196 14.058C1.61156 13.7276 1.38655 13.3067 1.2954 12.8484C1.20424 12.3901 1.25102 11.9151 1.42984 11.4834C1.60865 11.0517 1.91146 10.6827 2.29997 10.4232C2.68848 10.1636 3.14524 10.025 3.6125 10.025H12.3875C12.8548 10.025 13.3115 10.1636 13.7 10.4232C14.0885 10.6827 14.3914 11.0517 14.5702 11.4834C14.749 11.9151 14.7958 12.3901 14.7046 12.8484C14.6134 13.3067 14.3884 13.7276 14.058 14.058C13.7276 14.3884 13.3067 14.6134 12.8484 14.7046C12.3901 14.7958 11.9151 14.749 11.4834 14.5702C11.0517 14.3914 10.6827 14.0885 10.4232 13.7C10.1636 13.3115 10.025 12.8548 10.025 12.3875V3.6125C10.025 3.14524 10.1636 2.68848 10.4232 2.29997C10.6827 1.91146 11.0517 1.60865 11.4834 1.42984C11.9151 1.25102 12.3901 1.20424 12.8484 1.2954C13.3067 1.38655 13.7276 1.61156 14.058 1.94196C14.3884 2.27236 14.6134 2.69332 14.7046 3.1516C14.7958 3.60988 14.749 4.0849 14.5702 4.51659C14.3914 4.94828 14.0885 5.31725 13.7 5.57685C13.3115 5.83644 12.8548 5.975 12.3875 5.975H3.6125C3.14524 5.975 2.68848 5.83644 2.29997 5.57685C1.91146 5.31725 1.60865 4.94828 1.42984 4.51659C1.25102 4.0849 1.20424 3.60988 1.2954 3.1516C1.38655 2.69332 1.61156 2.27236 1.94196 1.94196C2.27236 1.61156 2.69332 1.38655 3.1516 1.2954C3.60988 1.20424 4.0849 1.25102 4.51659 1.42984C4.94828 1.60865 5.31725 1.91146 5.57685 2.29997C5.83644 2.68848 5.975 3.14524 5.975 3.6125V12.3875Z"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <span className="text-base dark:text-bgray-300 text-bgray-900">
                  K
                </span>
              </div>
            </div>
          </div>
          {/*  quick access*/}
          <AccessPopups />
          {/* notification */}
        </div>
      </header>
    </>
  );
};

export default HeaderMain;
