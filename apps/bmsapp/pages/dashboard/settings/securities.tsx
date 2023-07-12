import Layout from 'components/layout';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { ApiStatus } from 'types/api-status';
import swal from 'sweetalert';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { NextPage } from 'next';
import Image from 'next/image';
import ViewModal from 'components/modals';
import ModuleResetQRCode from 'components/modules/accounts/reset-qrcode';

type SecuritesProps = {
  //
};
const Securities: NextPage<SecuritesProps> = (props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [passData, setPassData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { data: qrCode, error: qrCodeError } = useSWR(
    '/api/users/otp-setup',
    fetcher
  );

  const {
    data: thisUser,
    error,
    isLoading,
  } = useSWR('/api/users/user', fetcher);
  const [userData, setUserData] = useState({
    firstName: thisUser?.data?.firstName,
    lastName: thisUser?.data?.lastName,
    mobile: thisUser?.data?.mobile,
  });

  useEffect(() => {
    if (thisUser?.status === ApiStatus.USER_FOUND && !error) {
      const { data } = thisUser;
      setUserData({
        ...userData,
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
      });
    }
  }, [thisUser, error]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const verifyPassword = () => {
    if (passData.newPassword === passData.confirmPassword) {
      setErrorMsg(null);
      return true;
    } else {
      setErrorMsg('Password does not match: check your entry and try again');
      return false;
    }
  };

  const handleForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!verifyPassword()) {
      return;
    }
    const data = await fetch(
      `/api/users/${thisUser?.data?.id}/update-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(passData),
      }
    );
    const { status } = await data.json();
    if (status === ApiStatus.USER_UPDATED) {
      swal('Success', 'Password Updated successfully', 'success');
    }
  };

  return (
    <Layout>
      <Row>
        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <div className="tw-text-center tw-justify-center tw-align-middle tw-mt-10">
            <h3>Securities & 2FA Signings</h3>
            {!qrCode ? (
              <div>loading...</div>
            ) : (
              <div>
                <Image
                  src={qrCode.data?.qrimage}
                  alt={qrCode?.data?.qrcode}
                  width={300}
                  height={300}
                  className="tw-mx-auto tw-my-3"
                />
                <h2 className="w-full">{qrCode?.data?.qrcode}</h2>
                <Button
                  variant="primary"
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleModal();
                  }}
                >
                  Reset OTP Signature
                </Button>
                <ViewModal show={showModal} toggleModal={toggleModal}>
                  <ModuleResetQRCode
                    user={thisUser?.data}
                    toggleModal={toggleModal}
                  />
                </ViewModal>
              </div>
            )}
          </div>
        </Col>
        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
          <div className="tw-mt-10">
            <h1>
              Change Password <hr />
            </h1>
            <Alert variant="warning">
              <strong>NOTE:</strong> You can use the new password on your next
              login.
            </Alert>
            {errorMsg && (
              <Alert variant="danger">
                <strong>ERROR:</strong> {errorMsg}
              </Alert>
            )}
            <Form onSubmit={handleForm}>
              <Form.Group controlId="oldPassword" className="tw-my-3">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Current Password"
                  value={passData.oldPassword}
                  required
                  onChange={(e) =>
                    setPassData({ ...passData, oldPassword: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="newPassword" className="tw-my-3">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New Password"
                  value={passData.newPassword}
                  required
                  onChange={(e) => {
                    verifyPassword();
                    setPassData({ ...passData, newPassword: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="confirmPassword" className="tw-my-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={passData.confirmPassword}
                  required
                  onChange={(e) => {
                    verifyPassword();
                    setPassData({
                      ...passData,
                      confirmPassword: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="submit" className="tw-my-3">
                <Button variant="primary" type="submit">
                  Change Password
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Securities;
