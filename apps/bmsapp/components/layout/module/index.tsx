import style from './navbar.module.scss';
import React, { useState } from 'react';
import Link from 'next/link';
import { Adsense } from '@ctrl/react-adsense';

export const ModuleNavBar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className={style.nav}>
        <div className="tw-w-full tw-min-h-[100] tw-bg-slate-400 tw-sticky">
          <Adsense
            client="ca-pub-0841941306055342"
            slot="8961694178"
            style={{ display: 'block' }}
            layout="in-article"
            format="fluid"
          />
        </div>

        <div className={style.nav_box}>
          <div className={style.sidebartop}></div>
          <div className={style.sidebarlinks}>
            <ul>
              <div className="active-tab" />
              <li>
                <Link href="#">
                  <span className="link hide">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="link hide">Accounts & Roles</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="link hide">Manage MDAs</span>
                </Link>
              </li>
            </ul>
            <ul>
              <div className="active-tab" />
              <li>
                <Link href="/dashbaord">
                  <span className="link">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="link hide">Accounts & Roles</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="link hide">Manage MDAs</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ModuleNavBar;
