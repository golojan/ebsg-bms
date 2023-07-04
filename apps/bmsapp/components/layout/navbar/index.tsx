import style from './navbar.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import { _IMAGES } from 'constants/images';
import { FaTachometerAlt, FaListAlt } from 'react-icons/fa';
import { useUser } from 'services/use-user';
import Link from 'next/link';

export const LayoutNavBar = () => {
  const { logout } = useUser();
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className={style.nav}>
        <div className={style.sidebartop}>
          <Link
            href={'#'}
            className="tw-absolute tw-top-[0] -tw-right-[45px] tw-bg-[#3d5af1] tw-rounded-full tw-text-white tw-text-center tw-cursor-pointer tw-z-50 tw-p-4 hover:tw-bg-[#5872f5] hover:tw-shadow-xl hover:tw-text-white"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FaListAlt color="#fffff" size={35} />
          </Link>
          <Image src={_IMAGES.LOGO} width={50} className="logo" alt="" />
          <h3 className="hide">eBudget</h3>
        </div>

        <div className={style.search}>
          <i className="bx bx-search" />
          <input type="text" className="hide" placeholder="Quick Search ..." />
        </div>

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
          <h4 className="hide">Portal Settings</h4>
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
          <h4 className="hide">Activities</h4>
          <ul>
            <div className="active-tab" />
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}
              >
                <span className="link hide">Exit & Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={style.sidebarfooter}>
          <div className="account">
            <Link href="#">
              <FaTachometerAlt size={50} color="#FFFFFF" />
            </Link>
          </div>

          {/* <div className="admin-user tooltip-element" data-tooltip={1}>
            <div className="admin-profile hide">
              <img src="img/face-1.png" alt="" />
              <div className="admin-info">
                <h3>John Doe</h3>
                <h5>Admin</h5>
              </div>
            </div>
            <a href="#" className="log-out">
              <i className="bx bx-log-out" />
            </a>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default LayoutNavBar;
