import style from './modal.module.scss';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type ViewModalProps = {
  show: boolean;
  title: string;
  toggleModal: () => void;
  children: React.ReactNode;
};

export function ViewModal(props: ViewModalProps) {
  const { show, children, toggleModal, title } = props;
  const modalRef = React.useRef<HTMLDivElement>(null);
  return (
    <Modal
      show={show}
      // onBackdropClick={toggleModal}
      onHide={toggleModal}
      ref={modalRef}
      backdrop="static"
      centered
      className={style.modal}
    >
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save changes</Button>
          <Button variant="secondary" onClick={() => toggleModal()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ViewModal;
