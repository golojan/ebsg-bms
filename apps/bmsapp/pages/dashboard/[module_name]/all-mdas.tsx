import React from 'react';
import Layout from 'components/layout';
import { NextPage } from 'next';
import { ListRawMdasTable } from 'components/modules/datatables/mda';
import useSWR from 'swr';
import { fetcher } from 'libs';

export const ListMdas: NextPage = (props) => {
  const { data: result, isLoading } = useSWR<TApiResult>(
    '/api/mdas?registered=false',
    fetcher
  );
  const busy = isLoading;

  return (
    <Layout>
      <ListRawMdasTable
        title="All Ministries, Departments and Agencies"
        data={result?.data}
        loading={busy}
      />
    </Layout>
  );
};

export default ListMdas;
