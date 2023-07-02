import { fetcher } from 'libs/fetcher/fetcher';
import styles from './add-box.module.scss';
import useSWR from 'swr';
import { Mda } from '@prisma/client';
import { Loader } from 'components/loaders/loaders';

/* eslint-disable-next-line */
export interface AddBoxProps {}

export function AddBox(props: AddBoxProps) {
  const { data: logs, isLoading, isValidating } = useSWR('/api/mdas', fetcher);
  const busy = isLoading || isValidating;
  return (
    <div className={styles['container']}>
      {busy ? (
        <Loader />
      ) : (
        <>
          {logs?.data.map((log: Mda, index: number) => (
            <div key={index}>
              <h1>{log.name}</h1>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default AddBox;
