import styles from './layout.module.scss';
import React, { useEffect } from 'react';
import Header from './header';
// import Footer from './footer';
import { Row, Col, Alert } from 'react-bootstrap';
import LayoutNavBar from './navbar';
import Link from 'next/link';
import { FaTerminal } from 'react-icons/fa';
import ModuleNavBar from './module';
import TerminalNavBar from './terminal';
import useModule from 'services/use-module';
import { DotLoader } from 'react-spinners';
import ViewModal from 'components/modals';
import ModuleSetupOtp from 'components/modules/dashboard/setup-otp';

import { useUser } from 'services';
type LayoutProps = {
  children?: React.ReactNode;
};
export const Layout = ({ children }: LayoutProps) => {
  const { hasModule, appmodule, busy } = useModule();
  const { user } = useUser();
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    if (user && user.isNew) {
      setShowModal(true);
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <LayoutNavBar />
        <ModuleNavBar />
        <main className={styles.main}>
          <h1>
            {busy ? (
              <DotLoader size={35} color="#414549" />
            ) : (
              <>
                {hasModule ? appmodule?.description : 'My Dashboard'}
                <h5 className="tw-my-2 p-0 tw-text-gray-600 tw-backdrop-grayscale-0">
                  Access Rights:
                </h5>
              </>
            )}
          </h1>
          <Alert
            className="text tw-mb-5 tw-w-full tw-text-xl"
            variant="success"
          >
            <Alert.Heading>NOTICE:</Alert.Heading> This portal is in demo mode.
            Do not present for official use. All data used during this demo are
            dummy data, secure and might be deleted by the end of the demo.
          </Alert>
          <Row>
            <Col xs={12} md={12} lg={12} xl={12} xxl={12} className="tw-mb-5">
              {children}
            </Col>
          </Row>
          <p className={styles.copyright}>
            &copy; 2021 - <span>Ebonyi State Government</span>
          </p>
        </main>
        {/* <TerminalNavBar /> */}
      </div>
      <ViewModal
        show={showModal}
        toggleModal={toggleModal}
        key={user ? user.id : 0}
      >
        <ModuleSetupOtp user={user as UserInfo} toggleModal={toggleModal} />
      </ViewModal>
    </>
  );
};

export default Layout;
