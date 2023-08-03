import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiStatus } from 'types/api-status';
import { getMdas } from 'libs/fetcher/mdas';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useUser } from 'services';
import { budgetYearAtom } from 'store';
import { useAtom } from 'jotai';

interface useMDAProps {
  busy: boolean;
  mdas: MdaInfo[] | null | undefined;
  mdaCount: number;
  getMda: () => MdaInfo | null | undefined;
  getMdaById: (id: number) => MdaInfo | null | undefined;
  getMdaByCode: (code: string) => MdaInfo | null | undefined;
  getBudgetByMdaId: (id: number) => BudgetInfo | null | undefined;
  getBudget: () => BudgetInfo | null | undefined;
}

export const useMDA = (): useMDAProps => {
  const { user, busy: loadingUser } = useUser();
  const [mdas, setMdas] = useState<MdaInfo[]>([]);
  const [mdaCount, setMdaCount] = useState<number>(0);

  const [budgetYear] = useAtom(budgetYearAtom);

  const queryClient = useQueryClient();
  const router = useRouter();
  const { isReady } = router;
  const { isLoading, isFetching } = useQuery(['mdas'], () => getMdas(), {
    enabled: Boolean(isReady),
    initialData: () => queryClient.getQueryData(['mdas']),
    onSuccess: (result: TApiResult) => {
      if (result.status === ApiStatus.MDA_FOUND) {
        setMdas(result.data);
        setMdaCount(Number(result.count));
      } else {
        setMdas([]);
        setMdaCount(0);
      }
    },
  });

  const busy = Boolean(isLoading || isFetching);

  // Get Mda by id
  const getMdaById = (id: number) => {
    if (mdas.length > 0 && !busy) {
      const mda = mdas.find((mda) => Number(mda.id) === id);
      return mda;
    } else {
      return null;
    }
  };

  // getMdaByCode
  const getMdaByCode = (code: string) => {
    if (mdas.length > 0 && !busy) {
      const mda = mdas.find((mda) => mda.mdaCode === code);
      return mda;
    } else {
      return null;
    }
  };

  const getBudgetByMdaId = (id: number): BudgetInfo | null => {
    if (id > 0 && !busy && !loadingUser) {
      const _mda = getMdaById(id);
      if (_mda) {
        const _budgets = _mda.Budgets || [];
        const _budget = _budgets?.find((b) => b.year === budgetYear);
        if (_budget) return _budget;
      }
      return null;
    }
    return null;
  };

  const mdaIdOfCurrentUser = user?.mdaId ? Number(user.mdaId) : 0;

  const getMda = (): MdaInfo | null => {
    if (mdaIdOfCurrentUser > 0 && !busy && !loadingUser) {
      const mda = getMdaById(mdaIdOfCurrentUser);
      if (mda) {
        return mda;
      } else {
        return null;
      }
    }
    return null;
  };

  const getBudget = (): BudgetInfo | null => {
    if (mdaIdOfCurrentUser > 0 && !busy && !loadingUser) {
      const mda = getMdaById(mdaIdOfCurrentUser);
      if (mda) {
        const _budgets = mda.Budgets || [];
        const _budget = _budgets?.find((b) => b.year === budgetYear);
        if (_budget) return _budget;
      }
    }
    return null;
  };

  return {
    busy,
    mdas,
    mdaCount,
    getMda,
    getBudget,
    getMdaById,
    getMdaByCode,
    getBudgetByMdaId,
  };
};
export default useMDA;
