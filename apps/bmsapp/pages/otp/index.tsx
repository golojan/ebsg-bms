import style from './otp.module.scss';
import React, { MutableRefObject, useRef, useState } from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Image from 'next/image';
import { NextPage } from 'next';
import { FaLock } from 'react-icons/fa';
import { refRun, refStop } from 'libs/formrunnner';
import { useUser } from 'services/use-user';
import { ApiStatus } from 'types/api-status';
import { useRouter } from 'next/router';
import AuthLayout from 'components/layout/auth';

/* eslint-disable-next-line */
export type resetProps = {};
export const Reset: NextPage<resetProps> = (props) => {
  const { qrVerify } = useUser();
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState('');
  const { push } = useRouter();

  const tokenButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const handleToken = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (token.length < 6) {
      setTokenError('Please enter a valid token');
      return;
    }
    refRun(tokenButtonRef, 'Please wait...');
    qrVerify(token).then((status: number) => {
      if (Number(status) === ApiStatus.QRCODE_VALID) {
        push('/dashboard');
      } else {
        setTokenError('The token you entered is invalid');
      }
    });
    refStop(tokenButtonRef, 'Verify Token');
  };

  return (
    <AuthLayout>
      <div className={style.auth}>
        <Image
          src="/logo.png"
          alt="logo"
          className="tw-my-3"
          width={120}
          height={120}
        />
        <Card className="card tw-w-[400px] tw-rounded">
          <Form onSubmit={handleToken}>
            <Row>
              <Col lg={12} md={12} sm={12} xl={12} className="p-5">
                <div className="text-center my-4 tw-items-center tw-justify-center">
                  <FaLock
                    className="text-primary tw-relative tw-mx-auto tw-text-green-500"
                    size={50}
                    fontSize={50}
                  />
                </div>
                <h3 className="text-center mb-3">2FA Verification</h3>

                <div className="text-center tw-mt-5">
                  <Form.Group controlId="token">
                    <Form.Label>Enter 6-Digit Token</Form.Label>
                    <Form.Control
                      className="tw-text-center"
                      style={{
                        letterSpacing: '0.9rem',
                        fontSize: '1.5rem',
                      }}
                      pattern="[0-9]{6}"
                      type="text"
                      maxLength={6}
                      autoComplete="off"
                      placeholder="* * * * * *"
                      value={token}
                      onChange={(e) => {
                        setToken(e.target.value);
                        setTokenError('');
                      }}
                    />
                    {tokenError && (
                      <Form.Text className="text-danger">
                        {tokenError}
                      </Form.Text>
                    )}
                  </Form.Group>
                </div>

                <p className="text-center alert alert-info tw-mt-5">
                  Use your Google Authenticator to verifiy ownership of the
                  account.
                </p>

                <button
                  className="btn btn-primary tw-w-full btn-block"
                  type="submit"
                  ref={tokenButtonRef}
                >
                  Verify Token
                </button>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    </AuthLayout>
  );
};

export default Reset;
