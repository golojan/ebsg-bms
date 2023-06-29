import { fetcher } from 'libs/fetcher/fetcher';
import styles from './add-box.module.scss';
import useSWR from 'swr';

/* eslint-disable-next-line */
export interface AddBoxProps {}

export function AddBox(props: AddBoxProps) {
  const { data: logs, isLoading, isValidating } = useSWR('/api/logs', fetcher);
  const busy = isLoading || isValidating;

  return (
    <div className={styles['container']}>
      {busy ? <div>Loading...</div> : <>{JSON.stringify(logs?.data)}</>}
      <hr />
      <span className="loading loading-spinner loading-xs"></span>
      <button className="btn btn-primary w-64 rounded-full ">Button</button>
    </div>
  );
}

export default AddBox;
