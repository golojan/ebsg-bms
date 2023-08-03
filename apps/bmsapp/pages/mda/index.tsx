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
import dynamic from 'next/dynamic';
const RequestTransactions = dynamic(
  () => import('components/all/datatable/RequestTransactions'),
  {
    ssr: false,
  }
);

export const Index: NextPage = (props) => {
  const { getMda, getBudget, busy } = useMDA();
  const mda = getMda() || {};
  const budget = getBudget() || {};

  return (
    <Layout>
      <section className="2xl:flex-1 2xl:mb-0 mb-6">
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
    </Layout>
  );
};

export default Index;
