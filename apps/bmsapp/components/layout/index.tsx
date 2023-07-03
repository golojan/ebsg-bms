import styles from './layout.module.scss';
import React from 'react';
import Header from './header';
// import Footer from './footer';
import { Row, Col } from 'react-bootstrap';
import LayoutNavBar from './navbar';
import Link from 'next/link';
import { FaPlus, FaTerminal } from 'react-icons/fa';

type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <LayoutNavBar />
      <main className={styles.main}>
        <h1>My Dashboard</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          animi voluptatibus cum maxime distinctio iste quod deleniti eius,
          autem voluptates cumque suscipit iure quasi eligendi ullam. Sapiente
          eligendi porro reprehenderit corrupti error facilis quo, fugiat fugit?
          Maiores aliquam ad, molestiae iste nihil, commodi doloremque tempore
          excepturi aut id ducimus unde?
        </p>
        <p className={styles.copyright}>
          &copy; 2021 - <span>Ebonyi State Government</span> - All Rights
          Reserved | <span>https://golojan.co.uk</span>
        </p>
        <Link
          href={'#'}
          className="text-white tw-absolute tw-bottom-5 tw-right-5 tw-bg-[#3d5af1] tw-rounded-full tw-text-white tw-text-center tw-cursor-pointer tw-z-50 tw-p-4 hover:tw-bg-[#5872f5]"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <FaTerminal color="#fffff" size={35} />
        </Link>
      </main>
    </div>
  );
};

export default Layout;
