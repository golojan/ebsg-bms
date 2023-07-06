import styles from './modal-layout.module.scss';

/* eslint-disable-next-line */
export interface ModalLayoutProps {
  children: React.ReactNode;
}

export function ModalLayout(props: ModalLayoutProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>{props.children}</div>
    </div>
  );
}

