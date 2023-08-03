import React from 'react';
import { NextPage } from 'next';
import Layout from 'components/layout/v2/layout';
import ListMdasTable from 'components/mda/datatables/ListMdasTable';

export const Integrations: NextPage = (props) => {
  return (
    <Layout>
      <ListMdasTable />
    </Layout>
  );
};

export default Integrations;
