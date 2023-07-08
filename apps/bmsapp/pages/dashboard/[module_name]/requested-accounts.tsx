import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Layout from 'components/layout';
import { NextPage } from 'next';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { RequestedAccountsTable } from 'components/datatables/user';

export const RequestedAccounts: NextPage = (props) => {
  const {
    data: result,
    isLoading,
    isValidating,
  } = useSWR<TApiResult>('/api/users', fetcher);
  const busy = isLoading || isValidating;
  return (
    <Layout>
      <RequestedAccountsTable
        title="Accounts Signup Requests"
        data={result?.data}
        loading={busy}
      />
    </Layout>
  );
};

export default RequestedAccounts;
