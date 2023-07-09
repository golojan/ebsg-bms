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
import Link from 'next/link';

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

import ViewModal from 'components/modals';
import ModuleEditMda from 'components/modules/mdas/edit-mda';
import { toFiat } from 'libs/monify';

export const ListMdasTable = (props: Props) => {
  const { title, data, loading } = props;
  // Modal Settings
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [selectedMda, setSelectedMda] = useState<string | null>(null);
  const [mda, setMDA] = useState<MdaInfo>({} as MdaInfo);
  const [view, setView] = useState<string>('edit');
  // Modal Settings

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
      title: 'Total.Recurrent',
      field: 'recurrentTotal',
      render: (rowData: MdaInfo) => (
        <div>
          {toFiat(
            Number(rowData?.recurrentTotal ? rowData?.recurrentTotal : 0)
          )}
        </div>
      ),
    },
    {
      title: 'Total.Expenditure',
      field: 'expenditureTotal',
      render: (rowData: MdaInfo) => (
        <div>
          {toFiat(
            Number(rowData?.expenditureTotal ? rowData?.expenditureTotal : 0)
          )}
        </div>
      ),
    },
    {
      title: '-',
      field: 'action',
      render: (rowData: MdaInfo) => (
        <div className="tw-w-full tw-flex tw-justify-end">
          <Link
            className="btn btn-success tw-mx-1"
            href={`/dashboard/mdas/view-mda/${rowData.mdaCode}`}
          >
            MDA Dashboard
          </Link>
          <button
            className="btn btn-primary tw-mx-1"
            onClick={() => {
              setView('edit');
              setMDA(rowData);
              setShowModal(true);
            }}
          >
            Edit MDA
          </button>
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
      backgroundColor: selectedMda === rowData.mdaCode ? '#e4e2f5' : '#ffffff',
    }),
  };

  return (
    <>
      <MaterialTable
        title={title}
        isLoading={loading}
        data={data}
        options={options}
        columns={columns}
        icons={tableIcons}
        onRowClick={(evt, row) => {
          setSelectedMda(row?.mdaCode ?? null);
        }}
        localization={localization}
      />
      <ViewModal show={showModal} toggleModal={toggleModal}>
        {view === 'edit' && (
          <ModuleEditMda mda={mda} toggleModal={toggleModal} />
        )}
      </ViewModal>
    </>
  );
};

export default ListMdasTable;
