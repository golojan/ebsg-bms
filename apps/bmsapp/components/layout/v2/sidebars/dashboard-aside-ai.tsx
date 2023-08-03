import React from 'react';
import { BudgetBox } from 'components/mda/all';
import { useMDA } from 'services';
import { useRouter } from 'next/router';

export const DashboardAsideAi = () => {
  const { getMdaById, busy, getBudgetByMdaId } = useMDA();
  const router = useRouter();
  const mdaCode = Number(router.query.mdaCode);
  const mda = getMdaById(mdaCode) || {};
  const budget = getBudgetByMdaId(mdaCode) || {};
  return (
    <>
      <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
        <BudgetBox mda={mda} budget={budget} busy={busy} />
      </section>
    </>
  );
};

export default DashboardAsideAi;
