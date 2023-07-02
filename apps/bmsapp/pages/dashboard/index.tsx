import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import Image from 'next/image';

/* eslint-disable-next-line */
export type dashboardProps = {};

export const Dashboard: NextPage<dashboardProps> = (props) => {
  return (
    <Layout>
      <Row>
        <Col className="tw-bg-red-500" xs={12} md={6} lg={6}></Col>
      </Row>
    </Layout>
  );
};

export default Dashboard;
