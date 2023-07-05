import style from './navbar.module.scss';
import React from 'react';
import Link from 'next/link';
import { crudAtom } from 'store';
import { useAtom } from 'jotai';

export const ModuleNavBar = () => {
  const [{ accid, module, role }] = useAtom(crudAtom);
  return (
    <>
      {accid ? (
        <>
          <nav className={style.nav}>
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
      ) : null}
    </>
  );
};

export default ModuleNavBar;
