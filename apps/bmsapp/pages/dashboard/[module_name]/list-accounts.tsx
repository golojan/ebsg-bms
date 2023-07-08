import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { ListAccountsTable } from 'components/modules/datatables/user/ListAccountsTable';

export const ListAccounts: NextPage = (props) => {
  const { data: result, isLoading } = useSWR<TApiResult>('/api/users', fetcher);
  const busy = isLoading;

  return (
    <Layout>
      <ListAccountsTable
        title="List Users"
        data={result?.data}
        loading={busy}
      />
    </Layout>
  );
};

export default ListAccounts;
