import React from 'react';
import { Modal } from 'react-bootstrap';

export function OTPLockModal(props: ModalProps) {
  const { show, children, toggleModal } = props;
  return (
    <Modal show={show} backdrop="static" centered animation={false}>
      {children}
    </Modal>
  );
}

export default OTPLockModal;
