import React, { useCallback, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { toFiat } from 'libs/monify';
import Link from 'next/link';
import { StaleHolder } from 'components/all/skeletons';
import { selectedMdaAtom } from 'store';
import { useAtom } from 'jotai';
import { DownloadReports } from 'components/mda/all';
import { toWords } from 'libs';

type MdaProfileProps = {
  busy: boolean;
};
const MdaProfile = (props: MdaProfileProps) => {
  const { busy } = props;
  const [mda] = useAtom(selectedMdaAtom);
  const hasMda = Boolean(mda.id ? true : false);
  const [budget, setBudget] = useState<BudgetInfo>({} as BudgetInfo);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!hasMda && !init) return;
    const _budgets = mda.Budgets;
    const _budget = _budgets?.find((b) => b.year === 2023);
    if (_budget) {
      const _budgetInfo = {
        approvedBudget: _budget.approvedBudget,
        capitalTotal: _budget.capitalTotal,
        overheadTotal: _budget.overheadTotal,
        personalTotal: _budget.personalTotal,
        expenditureTotal: _budget.expenditureTotal,
      };
      return setBudget(_budgetInfo);
      setInit(true);
    }
  }, [mda, hasMda, init]);

  return (
    <>
      {hasMda && mda.registered && (
        <StaleHolder
          busy={busy}
          height={200}
          variant="rectangular"
          animation="pulse"
        >
          <aside className="2xl:w-[382px] w-full bg-white dark:bg-darkblack-600 rounded-lg px-10">
            <header className="flex flex-col items-center text-center -mt-8 pb-3">
              <IconButton className="bg-[#22c55e] text-[#FFFFFF] dark:bg-success-300 dark:text-[#FFFFFF] rounded-full p-4">
                <svg
                  className="stroke-white group-hover:bg-darkblack-600"
                  width={50}
                  height={51}
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 13.5659C5.65685 13.5659 7 12.2228 7 10.5659C7 8.90906 5.65685 7.56592 4 7.56592C2.34315 7.56592 1 8.90906 1 10.5659C1 12.2228 2.34315 13.5659 4 13.5659Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 7.56592C17.6569 7.56592 19 6.22277 19 4.56592C19 2.90906 17.6569 1.56592 16 1.56592C14.3431 1.56592 13 2.90906 13 4.56592C13 6.22277 14.3431 7.56592 16 7.56592Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 19.5659C17.6569 19.5659 19 18.2228 19 16.5659C19 14.9091 17.6569 13.5659 16 13.5659C14.3431 13.5659 13 14.9091 13 16.5659C13 18.2228 14.3431 19.5659 16 19.5659Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.69995 9.26572L13.3 5.86572"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.69995 11.8657L13.3 15.2657"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </IconButton>
              <div className="font-bold text-bgray-500 mt-5 dark:text-white">
                <h2 className="text-success-300 dark:text-success-300 text-2xl">
                  {mda.mdaCode}
                </h2>
              </div>
              <Link
                href={'#'}
                className="text-2xl font-bold text-bgray-700 dark:text-white mt-4"
              >
                {mda.name}
              </Link>
            </header>
            <ul className="py-3 border-t border-b border-gray-200 dark:border-darkblack-400 space-y-2">
              <li className="flex justify-between border border-gray-200 dark:border-darkblack-400 box-border shadow-lg -mx-2 mb-2 p-2 rounded-md bg-gray-300 dark:bg-darkblack-400">
                <span className="font-medium text-gray-900 text-sm dark:text-white ">
                  Budget (2023)
                </span>
                <span className="text-sm font-semibold text-bgray-900 dark:text-white">
                  {toFiat(Number(budget.approvedBudget))}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500 text-sm dark:text-white">
                  Personal Exp.
                </span>
                <span className="text-sm font-semibold text-bgray-900 dark:text-white">
                  {toFiat(Number(budget?.personalTotal))}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500 text-sm dark:text-white">
                  Overhead Exp.
                </span>
                <span className="text-sm font-semibold text-bgray-900 dark:text-white">
                  {toFiat(Number(budget?.overheadTotal))}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500 text-sm dark:text-white">
                  Capital Exp.
                </span>
                <span className="text-sm font-semibold text-bgray-900 dark:text-white">
                  {toFiat(Number(budget?.capitalTotal))}
                </span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium text-gray-500 text-sm dark:text-white">
                  Total Spent
                </span>
                <span className="text-sm font-semibold text-bgray-900 dark:text-white">
                  {toFiat(Number(budget?.expenditureTotal))}
                </span>
              </li>
            </ul>
            <div className="py-6 border-b border-bgray-200 dark:border-darkblack-400 text-center">
              <DownloadReports mda={mda} busy={busy} />
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex gap-4">
                <button className="w-10 h-10 group rounded-full bg-transparent hover:bg-success-300 hover:border-transparent inline-flex items-center justify-center border border-gray-500">
                  <svg
                    className="stroke-bgray-500 group-hover:stroke-white"
                    width={24}
                    height={25}
                    viewBox="0 0 24 25"
                    fill="none"
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
                <button className="w-10 h-10 rounded-full group bg-transparent hover:bg-success-300 hover:border-transparent inline-flex items-center justify-center border border-gray-500">
                  <svg
                    className="stroke-bgray-500 group-hover:stroke-white"
                    width={20}
                    height={21}
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 13.5659C5.65685 13.5659 7 12.2228 7 10.5659C7 8.90906 5.65685 7.56592 4 7.56592C2.34315 7.56592 1 8.90906 1 10.5659C1 12.2228 2.34315 13.5659 4 13.5659Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7.56592C17.6569 7.56592 19 6.22277 19 4.56592C19 2.90906 17.6569 1.56592 16 1.56592C14.3431 1.56592 13 2.90906 13 4.56592C13 6.22277 14.3431 7.56592 16 7.56592Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 19.5659C17.6569 19.5659 19 18.2228 19 16.5659C19 14.9091 17.6569 13.5659 16 13.5659C14.3431 13.5659 13 14.9091 13 16.5659C13 18.2228 14.3431 19.5659 16 19.5659Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.69995 9.26572L13.3 5.86572"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.69995 11.8657L13.3 15.2657"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </aside>
        </StaleHolder>
      )}
    </>
  );
};

export default MdaProfile;
