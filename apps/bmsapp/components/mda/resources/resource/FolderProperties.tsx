import { fetcher } from 'libs';
import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { StaleHolder } from 'components/all/skeletons';
import { Resource } from '@prisma/client';

const FolderProperties = () => {
  const router = useRouter();
  // get resource id from url
  const { resources } = router.query;
  // get last resource id from url
  const lastResource = resources?.[resources?.length - 1];
  const hasParent = Boolean(lastResource);
  const [resourceInfo, setResourceInfo] = React.useState<Resource>(
    {} as Resource
  );
  const { isLoading, isValidating } = useSWR<TApiResult>(
    `/api/resources/${lastResource}/info`,
    fetcher,
    {
      onSuccess: (result) => {
        setResourceInfo(result.data);
      },
    }
  );

  const busy = Boolean(isLoading || isValidating);

  return (
    <>
      {hasParent && (
        <div className="col-span-2 2xl:block hidden pl-11 pt-14  2xl:border-l border-success-300 w-full">
          <div className="flex flex-col">
            <StaleHolder
              busy={busy}
              width={120}
              height={120}
              variant="rectangular"
            >
              <svg
                width={120}
                height={120}
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.56578 12.9268H36.2647C38.1443 12.9268 39.8804 13.9307 40.8183 15.5595L45.5417 22.0121C46.4796 23.6408 48.216 24.6448 50.0953 24.6448H120V98.3153C120 102.184 116.863 105.321 112.994 105.321H7.00587C3.13675 105.321 0 102.184 0 98.3153V32.8171C0 27.4018 0.836656 22.0188 2.4805 16.8589C3.08269 14.5432 5.17317 12.9268 7.56578 12.9268Z"
                  fill="#4ADE80"
                />
                <path
                  d="M103.16 23.4395H10.9199V62.4043H103.16V23.4395Z"
                  fill="#EBF0F3"
                />
                <path
                  d="M114.746 16.4297H85.825C83.7683 16.4297 81.9005 17.6297 81.0459 19.5003L76.097 30.3312C75.2421 32.2019 73.3746 33.4019 71.3179 33.4019H0V100.067C0 103.936 3.13675 107.072 7.00587 107.072H112.994C116.863 107.072 120 103.936 120 100.067V21.6841C120 18.7823 117.647 16.4297 114.746 16.4297Z"
                  fill="#22C55E"
                />
              </svg>
            </StaleHolder>

            <StaleHolder busy={busy} height={50}>
              <h3 className="text-2xl text-bgray-600 dark:text-white font-semibold my-3">
                {resourceInfo?.name}
              </h3>
            </StaleHolder>
          </div>
          <div>
            <ul className="space-y-6 pt-7 border-t border-bgray-300 ">
              <li className="flex justify-between">
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  Size
                </span>
                <span className="text-bgray-700 dark:text-bgray-50 text-base font-medium text-left">
                  500 MB
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  Owner
                </span>
                <span className="text-bgray-700 dark:text-bgray-50 text-base font-medium text-left">
                  BankCo.
                </span>
              </li>

              <li className="flex justify-between">
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  Modified
                </span>
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  4 days ago
                </span>
              </li>
              <li className="flex justify-between">
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  Created
                </span>
                <span className="text-bgray-700 dark:text-white text-base font-medium">
                  4 days ago
                </span>
              </li>
            </ul>
          </div>
          <div className="pt-7 border-t border-bgray-300 mt-8">
            <h3 className="text-base font-semibold text-bgray-900 dark:text-white uppercase mb-4">
              File Access Settings
            </h3>
            <div className="flex flex-col space-y-5">
              <div className="flex items-center justify-between">
                <span
                  className="text-base font-medium text-bgray-800 dark:text-white capitalize"
                  id="availability-label"
                >
                  Make Public
                </span>
                <button
                  type="button"
                  className="switch-btn text-center relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none active"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="availability-label"
                  aria-describedby="availability-description"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-5 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-base font-medium dark:text-white text-bgray-800 capitalize"
                  id="availability-label"
                >
                  Read-only
                </span>
                <button
                  type="button"
                  className="switch-btn text-center bg-gray-200 relative inline-flex h-5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 active"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="availability-label"
                  aria-describedby="availability-description"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className="text-base font-medium dark:text-white text-bgray-800 capitalize"
                  id="availability-label"
                >
                  Downloadable
                </span>
                <button
                  type="button"
                  className="switch-btn text-center bg-gray-200 relative inline-flex h-2/5 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 active"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="availability-label"
                  aria-describedby="availability-description"
                >
                  <span
                    aria-hidden="true"
                    className="translate-x-0 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FolderProperties;
