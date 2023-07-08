import style from './mdas.module.scss';
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

type Props = {
  mda: MdaInfo;
  toggleModal: () => void;
};
const ModuleUnregisterMda: React.FC<Props> = (props: Props) => {
  const { mda, toggleModal } = props;
  const handleForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert('clicked');
    toggleModal();
  };
  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>Unregister MDA</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Save MDA - {mda.name}
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleUnregisterMda;
