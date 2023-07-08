import React from 'react';
import Layout from 'components/layout';
import { NextPage } from 'next';
import rawMdas from 'data/mdas.json';
import { ListRawMdasTable } from 'components/datatables/mda';

export const ListMdas: NextPage = (props) => {
  return (
    <Layout>
      <ListRawMdasTable
        title="All Ministries, Departments and Agencies"
        data={rawMdas}
        loading={false}
      />
    </Layout>
  );
};

export default ListMdas;
