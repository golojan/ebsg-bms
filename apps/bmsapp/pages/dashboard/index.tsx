import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useModule from 'services/use-module';
import DashboardIndex from 'components/modules/dashboard';

/* eslint-disable-next-line */
export type dashboardProps = {};

export const Dashboard: NextPage<dashboardProps> = (props) => {
  const { busy } = useModule();
  return (
    <Layout>
      <DashboardIndex />
    </Layout>
  );
};

export default Dashboard;
