import React from 'react';
import { Modal } from 'react-bootstrap';

export function ViewModal(props: ModalProps) {
  const { show, children, toggleModal } = props;
  return (
    <Modal
      show={show}
      onHide={toggleModal}
      backdrop="static"
      centered
      animation={false}
    >
      {children}
    </Modal>
  );
}

export default ViewModal;
