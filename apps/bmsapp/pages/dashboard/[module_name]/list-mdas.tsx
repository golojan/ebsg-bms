import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import ListMdasTable from 'components/datatables/mda/ListMdasTable';

export const ListMdas: NextPage = () => {
  const {
    data: result,
    isLoading,
    isValidating,
  } = useSWR<TApiResult>('/api/mdas', fetcher);
  const busy = isLoading || isValidating;

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
