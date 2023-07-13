/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import MaterialTable, { Icons, Column } from '@material-table/core';
import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  BlockRounded,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { timeAgo } from 'libs/datetime';

const tableIcons: Icons<UserInfo> = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

type Props = {
  title: string;
  data: UserInfo[];
  loading: boolean;
};

export const ListRootAccountsTable = (props: Props) => {
  const { title, data, loading } = props;
  const [accid, setAccid] = useState<number | null>(null);

  const columns: Column<UserInfo>[] = [
    {
      title: 'ID',
      field: 'id',
    },
    {
      title: 'First Name',
      field: 'firstName',
    },
    {
      title: 'Last Name',
      field: 'lastName',
    },
    {
      title: 'Last Seen',
      field: 'lastLogin',
      render: (rowData) => {
        return timeAgo(rowData.lastLogin as Date);
      },
    },
    {
      title: 'Actions',
      render: (rowData) => {
        return (
          <div>
            <IconButton
              aria-label="edit"
              disabled={accid === rowData.id}
              onClick={() => {
                setAccid(rowData.id);
                setTimeout(() => {
                  setAccid(-1);
                }, 5000);
              }}
            >
              <Edit />
            </IconButton>
            <IconButton
              aria-label="delete"
              disabled={accid === rowData.id}
              onClick={() => {
                setAccid(rowData.id);
                setTimeout(() => {
                  setAccid(-1);
                }, 5000);
              }}
            >
              <BlockRounded />
            </IconButton>
          </div>
        );
      },
    },
  ];

  const options = {
    paging: true,
    pageSize: 10,
    exportButton: true,
    selection: true,
    sorting: true,
    exportAllData: true,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 100, 200, 300, 400, 500, 1000],
    tableIcons: tableIcons,
    headerStyle: {
      fontWeight: 'bold',
      backgroundColor: '#495057',
      color: '#ffffff',
      lineHeight: '1.5rem',
    },
    rowStyle: (rowData: UserInfo) => ({
      backgroundColor: rowData.isNew === true ? '#c57b7a' : '#ffffff',
    }),
  };
  return (
    <MaterialTable
      title={title}
      isLoading={loading}
      data={data}
      options={options}
      columns={columns}
      icons={tableIcons}
      onRowClick={(evt, row) => {
        setAccid(row?.id ?? null);
      }}
    />
  );
};

export default ListRootAccountsTable;
