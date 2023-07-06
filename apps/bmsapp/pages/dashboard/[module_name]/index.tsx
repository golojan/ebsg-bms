import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useModule from 'services/use-module';
/* eslint-disable-next-line */
export type dashboardProps = {};

export const ModuleDashboard: NextPage<dashboardProps> = (props) => {
  const { appmodule, busy } = useModule();
  return (
    <Layout>
      <Row>
        <Col className="tw-bg-red-500" xs={12} md={6} lg={6}>
          {!busy && JSON.stringify(appmodule)}
        </Col>
      </Row>
    </Layout>
  );
};

export default ModuleDashboard;
