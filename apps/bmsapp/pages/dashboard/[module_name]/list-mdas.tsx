import React from 'react';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import ListMdasTable from 'components/modules/datatables/mda/ListMdasTable';

export const ListMdas: NextPage = (props) => {
  const { data: result, isLoading } = useSWR<TApiResult>(
    '/api/mdas?registered=true',
    fetcher
  );
  const busy = isLoading;

  return (
    <Layout>
      <ListMdasTable
        title="List Active MDAs"
        data={result?.data}
        loading={busy}
      />
    </Layout>
  );
};

export default ListMdas;
