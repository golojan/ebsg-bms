import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/v2/layout';
import RequestsIndex from 'components/requests/dashboard';

export const RequestsIO: NextPage = (props) => {
  return (
    <Layout>
      <RequestsIndex />
    </Layout>
  );
};

export default RequestsIO;
