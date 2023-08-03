import { DisplayModal } from 'components/modals';
import React from 'react';
import TextBox from 'components/all/ui/TextBox';
import { createRootDir } from 'libs/fetcher';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const AddFolder = () => {
  const [showModal, setShowModal] = React.useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [dirName, setDirName] = React.useState('');
  const [parentId, setParentId] = React.useState<string | undefined>('');
  const { query } = useRouter();

  const { resources: _parentId } = query;
  // const _isArray: boolean = Array.isArray(_parentId);
  // if (_isArray) {
  //   const _parentIdArray = _parentId as string[];
  //   const _parentIdString = _parentIdArray[_parentIdArray.length - 1];
  //   setParentId(_parentIdString);
  // } else {
  //   const parentId = _parentId as string | undefined;
  //   setParentId(parentId as string);
  // }

  const queryClient = useQueryClient();
  const result: TApiResult =
    queryClient.getQueryData(['user']) || ({} as TApiResult);
  const thisUser: UserInfo = result.data as UserInfo;

  const processFolder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dirName) return;
    const { id: userId, mdaId } = thisUser;
    createRootDir({ parentId, dirName, userId, mdaId }).then((res) => {
      console.log(res);
    });
    toggleModal();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center border-dashed border-2 border-bgray-300 dark:border-darkblack-400 rounded-lg md:w-32 md:h-32 w-24 h-24 lg:w-44 lg:h-44">
        <button className="flex flex-col items-center" onClick={toggleModal}>
          <span className="w-10 h-10 rounded-lg items-center inline-flex justify-center bg-[#F8F8F8] dark:bg-darkblack-500">
            <svg
              className="fill-bgray-900 dark:fill-white"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.79995 4.0002C8.79995 3.55837 8.44178 3.2002 7.99995 3.2002C7.55812 3.2002 7.19995 3.55837 7.19995 4.0002V7.2002H3.99995C3.55812 7.2002 3.19995 7.55837 3.19995 8.0002C3.19995 8.44202 3.55812 8.8002 3.99995 8.8002H7.19995V12.0002C7.19995 12.442 7.55812 12.8002 7.99995 12.8002C8.44178 12.8002 8.79995 12.442 8.79995 12.0002V8.8002H12C12.4418 8.8002 12.8 8.44202 12.8 8.0002C12.8 7.55837 12.4418 7.2002 12 7.2002H8.79995V4.0002Z"
              />
            </svg>
          </span>
          <span className="block mt-4 text-bgray-500 font-medium text-base">
            Create Folder
          </span>
        </button>
      </div>
      <DisplayModal show={showModal} toggleModal={toggleModal}>
        <div className="flex flex-col items-center justify-center w-[300px]">
          <header>
            <h2 className="text-lg font-semibold text-bgray-900 dark:text-white">
              Create Folder
            </h2>
          </header>
          <div className="mt-4">
            <form className="flex flex-col" onSubmit={processFolder}>
              <TextBox
                placeholder="Folder Name"
                onChange={(e) => setDirName(e.target.value)}
              />
              <button
                type="submit"
                className="mt-4 bg-bgray-900 dark:bg-white text-white dark:text-bgray-900 font-semibold py-2 rounded-lg"
              >
                Create Folder
              </button>
            </form>
          </div>
        </div>
      </DisplayModal>
    </>
  );
};

export default AddFolder;
