import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/v2/layout';
import Integration from 'components/mda/integration';

export const Integrations: NextPage = (props) => {
  return (
    <Layout>
      <Integration />
    </Layout>
  );
};

export default Integrations;
