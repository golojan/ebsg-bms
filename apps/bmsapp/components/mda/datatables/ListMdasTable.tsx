import React, { useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import MdaProfile from './asides/MdaProfile';
import { IconButton } from '@mui/material';
import { selectedMdaAtom, appBase } from 'store';
import { useAtom } from 'jotai';
import { DisplayModal } from 'components/modals/display';
import { ViewModal } from 'components/modals/view';
import { StaleHolder } from 'components/all/skeletons';
import Link from 'next/link';
import { useMDA } from 'services';
import RegisterMda from '../all/RegisterMda';
import UpdateMda from '../all/UpdateMda';

const ListMdasTable = () => {
  // const [init, setInit] = useState<boolean>(false);
  const [baseUrl] = useAtom(appBase);
  const [mda, setSelectedMda] = useAtom(selectedMdaAtom);
  const { mdas, busy } = useMDA();
  const allowedScreens = ['sm', 'md', 'lg'];

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showRegBox, setShowRegBox] = useState<boolean>(false);
  const [showUpdateBox, setShowUpdateBox] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleRegBox = () => {
    setShowRegBox(!showRegBox);
  };

  const toggleUpdateBox = () => {
    setShowUpdateBox(!showUpdateBox);
  };

  const [filteredMda, setFilteredMda] = useState<MdaInfo[]>([]);

  const searchBoxInputRef = React.useRef<HTMLInputElement>(null);
  const searchFilterButton = React.useRef<HTMLButtonElement>(null);

  const [autoFilter, setAutoFilter] = useState<boolean>(true);
  const [statusFilter, setStatusFilter] = useState<boolean>(false);

  const searchAndFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    if (autoFilter) {
      doFilter(searchValue);
    }
  };

  const doFilter = (searchValue = '') => {
    if (searchValue) {
      const _mdas = mdas ? [...mdas] : [];
      const filteredData = _mdas.filter((mda: MdaInfo) => {
        if (!mda.name || !mda.mdaCode) return [];
        // if (statusFilter && !mda.registered) return [];
        return (
          mda.name.toLowerCase().includes(searchValue) ||
          mda.mdaCode.toLowerCase().includes(searchValue)
        );
      });
      setFilteredMda(filteredData);
    } else {
      setFilteredMda(mdas as MdaInfo[]);
    }
  };

  const toggleAutoFilter = () => {
    setAutoFilter(!autoFilter);
    if (searchBoxInputRef.current) {
      searchBoxInputRef.current?.focus();
      // disable the search button
      if (searchFilterButton.current) {
        searchFilterButton.current.disabled = autoFilter;
      }
    }
  };

  const toggleStatusFilter = () => {
    setStatusFilter(!statusFilter);
  };

  React.useEffect(() => {
    if (searchFilterButton.current) {
      searchFilterButton.current.disabled = autoFilter;
    }
    if (mdas) {
      setFilteredMda(mdas);
    }
  }, [mdas, autoFilter]);

  return (
    <>
      <div className="flex 2xl:flex-row 2xl:space-x-11 flex-col space-y-20 relative">
        <div className="2xl:flex-1 w-full 2xl:min-w-[900px] xl:min-w-[900px]">
          <div className="bg-white dark:bg-darkblack-600 rounded-lg p-4 mb-8 items-center flex">
            <div className="flex items-center flex-1 pl-4 xl:border-r border-bgray-400 dark:border-darkblack-400">
              <span className="">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L17 17"
                    stroke="#94A3B8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                ref={searchBoxInputRef}
                onChange={(e) => {
                  searchAndFilter(e);
                }}
                type="search"
                className="border-0 w-full dark:bg-darkblack-600 dark:text-white focus:outline-none focus:ring-0 focus:border-none text-xl"
                placeholder="Search: Ministries, Departments, Agencies..."
              />
            </div>
            <div className="pl-8 md:block hidden">
              <button
                onClick={toggleAutoFilter}
                className="w-10 h-10 group rounded-full bg-transparent hover:bg-success-300 mx-1 hover:border-transparent inline-flex items-center justify-center border border-gray-500"
              >
                <svg
                  className="stroke-bgray-500 group-hover:stroke-white"
                  width={24}
                  height={25}
                  viewBox="0 0 16 16"
                  fill={autoFilter ? '#22c55e' : 'none'}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.49999 1H14.5C14.644 1.05051 14.7745 1.13331 14.8816 1.24206C14.9887 1.35082 15.0695 1.48264 15.1177 1.62742C15.166 1.77221 15.1805 1.92612 15.1601 2.07737C15.1396 2.22861 15.0849 2.37318 15 2.5L9.99998 8V15L5.99999 12V8L0.999985 2.5C0.915076 2.37318 0.860321 2.22861 0.839913 2.07737C0.819506 1.92612 0.833987 1.77221 0.882249 1.62742C0.930511 1.48264 1.01127 1.35082 1.11835 1.24206C1.22542 1.13331 1.35597 1.05051 1.49999 1Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={toggleStatusFilter}
                className="w-10 h-10 group rounded-full bg-transparent hover:bg-success-300 mx-1 hover:border-transparent inline-flex items-center justify-center border border-gray-500"
              >
                <svg
                  className="stroke-bgray-500 group-hover:stroke-white"
                  width={24}
                  height={25}
                  viewBox="0 0 24 25"
                  fill={statusFilter ? '#22c55e' : 'none'}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21.5659L12 16.5659L5 21.5659V5.56592C5 5.03548 5.21071 4.52678 5.58579 4.1517C5.96086 3.77663 6.46957 3.56592 7 3.56592H17C17.5304 3.56592 18.0391 3.77663 18.4142 4.1517C18.7893 4.52678 19 5.03548 19 5.56592V21.5659Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="pl-10 md:block hidden">
              <button
                ref={searchFilterButton}
                onClick={() => {
                  if (searchBoxInputRef.current) {
                    searchBoxInputRef.current?.focus();
                    doFilter(searchBoxInputRef.current.value.toString());
                  }
                }}
                className="py-3 px-10 bg-bgray-600 dark:bg-darkblack-500 rounded-lg text-white font-medium text-sm"
              >
                Search MDA
              </button>
            </div>
          </div>
          <div className="w-full h-[700px] pl-0">
            <StaleHolder
              busy={busy}
              variant="rectangular"
              animation="pulse"
              repeat={5}
              height={97}
            >
              <Virtuoso
                style={{
                  width: '100%',
                  padding: '4px',
                  overflowY: 'auto',
                  overflowX: 'hidden',
                }}
                totalCount={filteredMda?.length ? filteredMda.length : 0}
                aria-busy={busy}
                headers='{"Accept": "application/json", "Content-Type": "application/json"}'
                data={filteredMda ? filteredMda : []}
                itemContent={(index: number, mda: MdaInfo) => {
                  return (
                    <div className="mr-3">
                      <table
                        key={mda.id}
                        id={index.toString()}
                        className="w-[99%] mb-3"
                      >
                        <tbody>
                          <tr
                            className="bg-white dark:bg-darkblack-600 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedMda(mda as MdaInfo);
                              setShowModal(true);
                            }}
                          >
                            <td className="whitespace-pre-wrap py-4 text-sm text-gray-500 rounded-l-lg lg:w-auto w-[400px]">
                              <div className="flex items-center gap-5 relative">
                                <div className="w-[64px] h-[64px] ml-5">
                                  <IconButton className="bg-[#22c55e] text-[#FFFFFF] dark:bg-success-300 dark:text-[#FFFFFF] rounded-full p-5">
                                    <div className="rounded-full p-0 text-white">
                                      {mda?.MdaType
                                        ? mda?.MdaType.charAt(0)
                                        : 'M'}
                                    </div>
                                  </IconButton>
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-bold text-lg text-bgray-900 dark:text-white">
                                    {mda.name}
                                  </h4>
                                  <div>
                                    <span className="font-medium text-base text-bgray-700 dark:text-bgray-50">
                                      {mda.mdaCode}
                                      {mda.registered ? (
                                        <>
                                          <span className="mx-2 bg-bamber-50 dark:bg-darkblack-500 rounded-lg text-sm text-blue-500 font-medium text-am px-3 py-1">
                                            Registered -{' '}
                                            <button
                                              className="text-green-500"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedMda(mda as MdaInfo);
                                                setShowUpdateBox(true);
                                              }}
                                            >
                                              Update Here
                                            </button>
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <span className="mx-2 bg-bamber-50 dark:bg-darkblack-500 rounded-lg text-sm text-bamber-500 font-medium text-am px-3 py-1">
                                            Not Registered -{' '}
                                            <button
                                              className="text-green-500"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedMda(mda as MdaInfo);
                                                setShowRegBox(true);
                                              }}
                                            >
                                              Register Here
                                            </button>
                                          </span>
                                        </>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className=" text-right place-items-end whitespace-nowrap pr-3 py-4 text-sm text-gray-500 rounded-r-lg w-[150px]">
                              {mda.registered ? (
                                <>
                                  <Link
                                    href={`${baseUrl}/${mda.id}/dashboard`}
                                    className="bg-blue-800 hover:bg-blue-700 transition duration-300 ease-in-out ml-6 text-base text-white hover:text-gray-400 py-2 flex items-center justify-center rounded-xl float-right w-[130px] h-[40px]"
                                  >
                                    Dashboard
                                  </Link>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setSelectedMda(mda as MdaInfo);
                                      setShowRegBox(true);
                                    }}
                                    className="bg-red-800 hover:bg-red-700 transition duration-300 ease-in-out ml-6 text-base text-white hover:text-gray-400 py-1 flex items-center justify-center rounded-lg float-right w-[130px] h-[40px]"
                                  >
                                    Register MDA
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  );
                }}
              />
            </StaleHolder>
          </div>
        </div>
      </div>
      <ViewModal
        show={showModal}
        toggleModal={toggleModal}
        screens={allowedScreens}
      >
        <MdaProfile busy={busy} />
      </ViewModal>

      <DisplayModal show={showRegBox} toggleModal={toggleRegBox} busy={busy}>
        <RegisterMda mda={mda} toggleModal={toggleRegBox} />
      </DisplayModal>

      <DisplayModal
        show={showUpdateBox}
        toggleModal={toggleUpdateBox}
        busy={busy}
      >
        <UpdateMda toggleModal={toggleUpdateBox} />
      </DisplayModal>

      <style jsx>{`
        .modal {
          z-index: 9999;
        }
      `}</style>
    </>
  );
};

export default ListMdasTable;
