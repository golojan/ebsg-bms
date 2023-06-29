import styles from './button-ui.module.scss';

/* eslint-disable-next-line */
export interface ButtonUiProps {}

export function ButtonUi(props: ButtonUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ButtonUi!</h1>
    </div>
  );
}

export default ButtonUi;
