import style from './dashboard.module.scss';
import React, { useEffect } from 'react';
import { Modal, Button, Form, Alert, Row, Col } from 'react-bootstrap';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import useSWR from 'swr';
import { fetcher } from 'libs';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  user: UserInfo;
  toggleModal: () => void;
};
const ModuleSetupOtp: React.FC<Props> = (props: Props) => {
  const { user, toggleModal } = props;
  const [otp, setOtp] = React.useState<string>('');
  const [userData, setUserData] = React.useState<{
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    isNew?: boolean;
    enableOtp: boolean;
    qrcode: string;
    qrimage: string;
  }>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    isNew: false,
    enableOtp: false,
    qrcode: '',
    qrimage: '',
  });

  const [qr, setQr] = React.useState<{
    show: boolean;
    qrcode: string | null;
    qrimage: string | null;
  }>({
    show: false,
    qrcode: null,
    qrimage: null,
  });

  const { data: qrcodeData, isLoading } = useSWR(
    `/api/users/otp-setup`,
    fetcher
  );

  useEffect(() => {
    setUserData({
      ...userData,
      firstName: String(user.firstName),
      lastName: String(user.lastName),
      email: String(user.email),
      mobile: String(user.mobile),
      isNew: Boolean(user.isNew),
      enableOtp: Boolean(user.enableOtp),
    });

    if (qrcodeData?.status === ApiStatus.USER_FOUND) {
      const { data } = qrcodeData;
      setQr({
        show: true,
        qrcode: data?.qrcode,
        qrimage: data.qrimage,
      });
    }
  }, [user, qrcodeData]);

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = await fetch(`/api/users/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: otp,
      }),
    });
    const { status } = await data.json();
    if (status === ApiStatus.QRCODE_VALID) {
      swal(
        'OTP Setup Successful',
        `Congratulations ${user.firstName}, you have successfully activated OTP on your account.`,
        'success'
      );
      toggleModal();
    } else {
      swal(
        'OTP Setup Failed',
        `Sorry ${user.firstName}, it seemed there was an issue setting up your OPT on Google Authenticator`,
        'error'
      );
    }
  };

  return (
    <Form onSubmit={handleForm}>
      <Modal.Dialog className={style.dialog}>
        <Modal.Header closeButton>
          <Modal.Title>
            <strong>
              {user.firstName} {user.lastName}
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="tw-mt-2">
            <Alert variant="primary">
              <Alert.Heading>OTP Setup</Alert.Heading>
              <p>
                <strong>
                  {user.firstName} {user.lastName}
                </strong>{' '}
                Head over to your App Store and download the{' '}
                <Link
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                >
                  Google Authenticator
                </Link>{' '}
                Application. Scan the QR code below to setup your OTP.
              </p>
            </Alert>
          </Form.Group>
          <hr />

          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
              {qr.show && (
                <Form.Group className="tw-mt-2">
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
                </Form.Group>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer className="tw-bg-[#2f5581]">
          <Row>
            <Col>
              <Form.Group controlId="otpToken" className="tw-m-0 tw-p-0">
                <Form.Control
                  type="text"
                  value={otp}
                  placeholder="Enter OTP Token"
                  required
                  onChange={(e) => {
                    setOtp(e.target.value);
                  }}
                  className="tw-w-full"
                />
              </Form.Group>
            </Col>
            <Col>
              <Button
                variant="primary"
                className="tw-block tw-w-full"
                type="submit"
              >
                Verify OTP
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal.Dialog>
    </Form>
  );
};

export default ModuleSetupOtp;
