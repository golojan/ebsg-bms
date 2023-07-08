/* eslint-disable react/display-name */
import React, { forwardRef, useState } from 'react';
import MaterialTable, { Icons, Column } from '@material-table/core';
import {
  FaPlus as AddBox,
  FaCheck as Check,
  FaChevronRight as ChevronRight,
  FaChevronLeft as ChevronLeft,
  FaEdit as Edit,
  FaTrash as DeleteOutline,
  FaSave as SaveAlt,
  FaFilter as FilterList,
  FaSearch as Search,
  FaArrowDown as ArrowDownward,
  FaTimes as Clear,
  FaRegTrashAlt as Remove,
  FaFirstdraft as FirstPage,
  FaFirstdraft as LastPage,
  FaListAlt as ViewColumn,
} from 'react-icons/fa';

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

export const ListAccountsTable = (props: Props) => {
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
    },
    rowStyle: (rowData: UserInfo) => ({
      backgroundColor: accid === rowData.id ? '#e4e2f5' : '#ffffff',
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
      onRowDoubleClick={(e: any) => {
        e.preventDefault();
        alert('You double clicked on ' + e.target);
        return false;
      }}
    />
  );
};

export default ListAccountsTable;
