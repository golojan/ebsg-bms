import styles from './layout.module.scss';
import React from 'react';
import Header from './header';
// import Footer from './footer';
import { Row, Col } from 'react-bootstrap';
import LayoutNavBar from './navbar/navebar';

type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <LayoutNavBar />
      <Header />

      <main>
        <h1>My Dashboard</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          animi voluptatibus cum maxime distinctio iste quod deleniti eius,
          autem voluptates cumque suscipit iure quasi eligendi ullam. Sapiente
          eligendi porro reprehenderit corrupti error facilis quo, fugiat fugit?
          Maiores aliquam ad, molestiae iste nihil, commodi doloremque tempore
          excepturi aut id ducimus unde?
        </p>
        <p className="copyright">
          &copy; 2021 - <span>Aqumex</span> All Rights Reserved.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
