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

import ViewModal from 'components/modals';

const tableIcons: Icons<MdaInfo> = {
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
  data: MdaInfo[];
  loading: boolean;
};

export const ListMdasTable = (props: Props) => {
  const { title, data, loading } = props;
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState<string>('view');
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [mda, setMDA] = useState<string | null>(null);
  const columns: Column<MdaInfo>[] = [
    {
      title: 'MDA Code',
      field: 'mdaCode',
    },
    {
      title: 'Name of MDA',
      field: 'name',
    },
    {
      title: '-',
      field: 'action',
      render: (rowData: MdaInfo) => (
        <div className="tw-w-full tw-flex tw-justify-end">
          <button
            className="btn btn-primary tw-mx-1"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Unregister
          </button>
          <button className="btn btn-primary tw-mx-1">Edit</button>
          <ViewModal
            show={showModal}
            toggleModal={toggleModal}
            title="Edit MDA"
          >
            <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-p-5">
         
            </div>
          </ViewModal>
          ;
        </div>
      ),
    },
  ];

  const localization: any = {
    addRemoveColumns: 'Add or remove columns',
    nRowsSelected: '{0} row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportCSVName: 'Export as CSV',
    exportPDFName: 'Export as PDF',
    searchTooltip: 'Search',
    searchPlaceholder: 'Search',
    searchAriaLabel: 'Search',
    clearSearchAriaLabel: 'Clear Search',
  };

  const options = {
    paging: true,
    pageSize: 10,
    exportButton: true,
    selection: true,
    exports: ['csv', 'pdf'],
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
    rowStyle: (rowData: MdaInfo) => ({
      backgroundColor: mda === rowData.mdaCode ? '#e4e2f5' : '#ffffff',
    }),
    exportCsv: (columns: Column<MdaInfo>[], data: MdaInfo[]) => {
      const csvData = data.map((item) => {
        return {
          mdaCode: item.mdaCode,
          name: item.name,
        };
      });
      const csvColumns = columns.map((item) => {
        return {
          title: item.title,
          field: item.field,
        };
      });
      const csv = [csvColumns, ...csvData];
      return csv;
    },
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
        setMDA(row?.mdaCode ?? null);
      }}
      onRowDoubleClick={(evt, row) => {
        const rowData = row as MdaInfo;
        const mda = rowData.mdaCode;
        setMDA(mda ?? null);
      }}
      localization={localization}
    />
  );
};

export default ListMdasTable;
