import React, { useEffect } from 'react';
import { AsideAi, AsideMain, AsideOverlay, AsideSub } from './sidebars';
import { HeaderMain, HeaderMobile } from './headers';
import { drawerOpenAtom, screenAtom } from 'store';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

type layoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: layoutProps) => {
  const [drawerOpen] = useAtom(drawerOpenAtom);
  const { isReady } = useRouter();
  const [screen, setScreen] = useAtom(screenAtom);

  useEffect(() => {
    if (!isReady) return;
    // get screen size
    const setWindowsSize = () => {
      const width = Number(window.innerWidth);
      if (width <= 640) {
        setScreen('sm');
      } else if (width <= 768) {
        setScreen('md');
      } else if (width <= 1024) {
        setScreen('lg');
      } else if (width <= 1280) {
        setScreen('xl');
      } else if (width <= 1536) {
        setScreen('2xl');
      } else {
        setScreen('3xl');
      }
    };
    setWindowsSize();
    window.addEventListener('resize', setWindowsSize);
    return () => {
      window.removeEventListener('resize', setWindowsSize);
    };
  }, [isReady]);

  return (
    <>
      <div
        className={`w-full layout-wrapper ${drawerOpen ? 'active' : ''} 
      `}
      >
        <div className="w-full flex relative">
          <AsideMain />
          <AsideOverlay />
          <AsideSub />
          <div className="body-wrapper dark:bg-darkblack-500 flex-1 overflow-x-hidden">
            <HeaderMain />
            <HeaderMobile />
            <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
              <div className="2xl:flex 2xl:space-x-[48px]">
                {children}
                <AsideAi />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
