import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { useAtom } from 'jotai';
import { crudAtom } from 'store';

export const useModule = () => {
  const router = useRouter();

  const { module_name } = router.query;
  const [crud, setCrud] = useAtom(crudAtom);

  const {
    data: result,
    isLoading,
    isValidating,
  } = useSWR(`/api/modules/${module_name}`, fetcher);

  const finished = Boolean(result);

  const appmodule: TModule = finished ? result?.data : null;

  const hasModule = Boolean(appmodule);
  const busy = Boolean(isLoading || isValidating);

  useEffect(() => {
    if (!busy && finished) {
      if (hasModule) {
        setCrud({
          ...crud,
          module: appmodule,
        });
      } else {
        setCrud({
          ...crud,
          module: null,
        });
      }
    }
  }, [finished, busy]);

  // const register = async (registerData: {
  //   firstName: string;
  //   lastName: string;
  //   email: string;
  //   Mda: number;
  // }): Promise<number | null> => {
  //   const result = await fetch('/api/users/create', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(registerData),
  //   });
  //   const { status, data }: TApiResult = await result.json();
  //   return status === ApiStatus.USER_CREATED ? data.id : null;
  // };

  return {
    busy,
    hasModule,
    appmodule,
  };
};

export default useModule;
