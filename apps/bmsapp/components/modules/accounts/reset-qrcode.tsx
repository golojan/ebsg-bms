import style from './accounts.module.scss';
import React from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import Image from 'next/image';

type Props = {
  user: UserInfo;
  toggleModal: () => void;
};
const ModuleResetQRCode: React.FC<Props> = (props: Props) => {
  const [busy, setBusy] = React.useState<boolean>(false);
  const { user, toggleModal } = props;
  const [qr, setQr] = React.useState<{
    show: boolean;
    qrcode: string | null;
    qrimage: string | null;
  }>({
    show: false,
    qrcode: null,
    qrimage: null,
  });

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setBusy(true);
    const result = await fetch(`/api/users/reset-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { status, data } = await result.json();
    if (status === ApiStatus.USER_UPDATED) {
      setQr({
        show: true,
        qrcode: data?.qrcode,
        qrimage: data.qrimage,
      });
      // swal('Success', '2FA Signature Reset', 'success');
      // toggleModal();
    }
    setBusy(false);
  };

  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>
            Reset <strong>2FA</strong> Signature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            You are about to reset your 2FA signature. This will disable your
            2FA signature and you will need to setup a new one. Are you sure you
            want to continue?
          </p>

          {busy && (
            <Alert variant="info">
              <strong>
                Please wait... we are resetting your current Two Factor
                Authentication Signature (2FA){' '}
              </strong>
            </Alert>
          )}

          {!qr.show && !busy && (
            <Alert variant="danger">
              <strong>NOTE:</strong> You will need to setup a new 2FA signature
              by rescanning the QR code in your account security settings.
            </Alert>
          )}

          {qr.show && qr && !busy && (
            <>
              <div className="tw-text-center tw-justify-center tw-align-middle">
                <Image
                  src={String(qr.qrimage)}
                  alt={String(qr.qrcode)}
                  width={300}
                  height={300}
                  className="tw-mx-auto tw-my-3"
                />
                <h2 className="w-full">{qr.qrcode}</h2>
              </div>
              <Alert variant="success">
                <strong>NOTE:</strong> Please scan the QR code above to setup
                your new 2FA signature.
              </Alert>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Yes, Reset Signature
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleResetQRCode;
