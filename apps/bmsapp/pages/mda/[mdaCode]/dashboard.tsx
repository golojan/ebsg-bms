import React from 'react';
import { NextPage } from 'next';
// import Login from './auth/login';
import Layout from 'components/layout/v2/layout';
import {
  DownloadReports,
  IndicatorBox,
  InfomationBox,
  MdaActivityChartBox,
  MdaEfficiencyBox,
} from 'components/mda/all';
import { useMDA } from 'services';
import DashboardAsideAi from 'components/layout/v2/sidebars/dashboard-aside-ai';
import { useRouter } from 'next/router';
import { StaleHolder } from 'components/all/skeletons';
import { IconButton } from '@mui/material';
import { FaPlus } from 'react-icons/fa';
import { RequestTransactions } from 'components/all/datatable';

export const Index: NextPage = (props) => {
  const { busy, getMdaById, getBudgetByMdaId } = useMDA();
  const { query } = useRouter();
  const mdaCode = Number(query.mdaCode);
  const mda = getMdaById(mdaCode) || {};
  const budget = getBudgetByMdaId(mdaCode) || {};
  return (
    <Layout>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
        <div className="relative bg-white dark:bg-darkblack-600 h-[70px] mb-[23px] items-center gap-6 py-3 px-4">
          <StaleHolder busy={busy} height={30}>
            <h2 className="text-darkblack-500 dark:text-white text-xl font-bold mx-0 float-left">
              <IconButton className="bg-[#22c55e] text-[#FFFFFF] dark:bg-success-300 dark:text-[#FFFFFF] rounded-full p-3 mr-3">
                <svg
                  className="stroke-white group-hover:bg-darkblack-600"
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
              </IconButton>
              {mda?.name}
            </h2>
            <IconButton className="bg-[#22c55e] text-[#FFFFFF] dark:bg-[#22c55e] hover:bg-[#075524] dark:text-[#FFFFFF] rounded-full p-3 float-right">
              <FaPlus
                color="#FFFFFF"
                className="text-white dark:text-[#FFFFFF]"
              />
            </IconButton>
          </StaleHolder>
        </div>
        {/* total widget*/}
        <div className="w-full mb-[24px]">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-[24px]">
            <IndicatorBox
              title="Capital Expenditure"
              amount={Number(budget?.capitalTotal)}
              busy={busy}
            />
            <IndicatorBox
              title="Recurring Expenditure"
              amount={Number(budget?.recurrentTotal)}
              busy={busy}
            />
            <IndicatorBox
              title="Total Expenditure"
              amount={Number(budget?.expenditureTotal)}
              busy={busy}
            />
            <IndicatorBox
              title="Overhead Expenditure"
              amount={Number(budget?.overheadTotal)}
              busy={busy}
            />
            <IndicatorBox
              title="Personal Expenditure"
              amount={Number(budget?.personalTotal)}
              busy={busy}
            />
            <InfomationBox busy={busy}>
              <DownloadReports mda={mda} busy={busy} />
            </InfomationBox>
          </div>
        </div>
        {/* revenue, flow */}
        <div className="w-full mb-[24px] xl:flex xl:space-x-[24px]">
          <MdaActivityChartBox />
          <MdaEfficiencyBox />
        </div>
        {/*list table*/}
        <RequestTransactions
          data={[
            {
              id: '103003892',
              mda: 'Governors OFfice',
              amount: '$320,800',
              progress: 'started',
              start_date: '2011/04/25',
            },
          ]}
        />
      </section>
      <DashboardAsideAi />
    </Layout>
  );
};

export default Index;
