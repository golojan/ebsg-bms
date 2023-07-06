import styles from './layout.module.scss';
import React from 'react';
import Header from './header';
// import Footer from './footer';
import { Row, Col } from 'react-bootstrap';
import LayoutNavBar from './navbar';
import Link from 'next/link';
import { FaTerminal } from 'react-icons/fa';
import ModuleNavBar from './module';
import useModule from 'services/use-module';

type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  const { hasModule, appmodule, busy } = useModule();
  return (
    <>
      <Header />
      <div className={styles.container}>
        <LayoutNavBar />
        <ModuleNavBar />
        <main className={styles.main}>
          <h1>{busy ? 'Loading...' : <>
          {hasModule ? appmodule?.description : 'My Dashboard'}
          </>}</h1>

          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur animi voluptatibus cum maxime distinctio iste quod
            deleniti eius, autem voluptates cumque suscipit iure quasi eligendi
            ullam. Sapiente eligendi porro reprehenderit corrupti error facilis
            quo, fugiat fugit? Maiores aliquam ad, molestiae iste nihil, commodi
            doloremque tempore excepturi aut id ducimus unde?
          </p>
          <Row>
            <Col lg={4} md={6} sm={12} xl={4} className="tw-mb-5">
              {children}
            </Col>
          </Row>
          <p className={styles.copyright}>
            &copy; 2021 - <span>Ebonyi State Government</span> - All Rights
            Reserved | <span>https://golojan.co.uk</span>
          </p>
          <Link
            href={'#'}
            className="text-white tw-absolute tw-bottom-5 tw-right-5 tw-bg-[#3d5af1] tw-rounded-full tw-text-white tw-text-center tw-cursor-pointer tw-z-50 tw-p-4 hover:tw-bg-[#5872f5]  hover:tw-shadow-xl hover:tw-text-white"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <FaTerminal color="#fffff" size={35} />
          </Link>
        </main>
      </div>
    </>
  );
};

export default Layout;
