import React from 'react';
import { BudgetBox } from 'components/mda/all';
import { useRouter } from 'next/router';
import { useMDA } from 'services';

export const AsideAi = () => {
  const router = useRouter();
  const allowedPaths = ['mda'];
  const paths = router.asPath.split('/').filter((x) => x);
  const pathsCount = paths.length;
  const hasAllowedPath = Boolean(allowedPaths.includes(paths[0]));
  const { getMda, busy, getBudget } = useMDA();
  const mda = getMda() || {};
  const budget = getBudget() || {};
  return (
    <>
      {hasAllowedPath && pathsCount <= 1 && (
        <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
          <BudgetBox mda={mda} budget={budget} busy={busy} />
        </section>
      )}
    </>
  );
};

export default AsideAi;
