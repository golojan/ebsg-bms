import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/v2/layout';
import Resources from 'components/mda/resources';

export const Integrations: NextPage = (props) => {
  return (
    <Layout>
      <Resources />
    </Layout>
  );
};

export default Integrations;
