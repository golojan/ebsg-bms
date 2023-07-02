import style from '../auth.module.scss';
import React, {
  SyntheticEvent,
  useState,
  useRef,
  MutableRefObject,
} from 'react';
import { Row, Col, Form, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';
import validator from 'validator';
import { useUser } from 'services/use-user';
import { refRun, refStop } from 'libs/formrunnner';

/* eslint-disable-next-line */
export type resetProps = {};

export const Reset: NextPage<resetProps> = (props) => {
  const { reset } = useUser();
  const resetButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const [logon, setLogon] = useState<{
    email: string;
    emailError: string | null;
  }>({
    email: '',
    emailError: null,
  });

  const handleReset = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validator.isEmail(logon.email)) {
      setLogon({
        ...logon,
        emailError: 'Please enter a valid email address',
      });
      return;
    }
    refRun(resetButtonRef, 'Please wait...');
    reset(logon.email).then((res) => {
      if (res) {
        alert(JSON.stringify(res));
        alert('Reset password link has been sent to your email address');
      } else {
        alert('Something went wrong, please try again');
      }
    });
    refStop(resetButtonRef, 'Reset Password');
  };

  return (
    <div className={style.auth}>
      <Image
        src="/logo.png"
        alt="logo"
        className="tw-my-3"
        width={120}
        height={120}
      />
      <Card className="card tw-w-[400px] tw-rounded">
        <Form onSubmit={handleReset}>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12} className="p-5">
              <h3 className="text-center mb-3">Reset Account</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  autoComplete="off"
                  placeholder="Enter email address"
                  value={logon.email}
                  onChange={(e) =>
                    setLogon({ ...logon, email: e.target.value })
                  }
                />
                {logon.emailError && (
                  <Form.Text className="text-danger">
                    {logon.emailError}
                  </Form.Text>
                )}
              </Form.Group>
              <div className="text-center tw-mt-5">
                <Link
                  href="/auth/register"
                  className="tw-text-blue-500 tw-text-sm tw-font-semibold tw-mb-3 tw-block"
                >
                  Request Profile
                </Link>
                <span> | </span>
                <Link
                  href="/auth/login"
                  className="tw-text-blue-500 tw-text-sm tw-font-semibold tw-mb-3 tw-block"
                >
                  Login to MDA
                </Link>
              </div>
              <button
                className="btn btn-primary tw-w-full btn-block"
                type="submit"
                ref={resetButtonRef}
              >
                Reset Password
              </button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Reset;
