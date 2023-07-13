import React from 'react';
import ListRootAccountsTable from '../datatables/user/ListRootAccountsTable';
import useSWR from 'swr';
import { fetcher } from 'libs';

type Props = {
  page?: string;
};
const AccountIndex: React.FC<Props> = (props) => {
  const { page } = props;
  const { data: result, isLoading } = useSWR<TApiResult>('/api/users', fetcher);

  return (
    <>
      <ListRootAccountsTable
        title="List All Users"
        data={result?.data}
        loading={isLoading}
      />
    </>
  );
};

export default AccountIndex;
