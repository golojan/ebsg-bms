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
import { useUser } from 'services/use-user';
import validator from 'validator';
import { refRun, refStop } from 'libs/formrunnner';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export type loginProps = {};

export const Login: NextPage<loginProps> = (props) => {
  const { login } = useUser();
  const [logon, setLogon] = useState<{
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
    remember: boolean;
  }>({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    remember: false,
  });

  const router = useRouter();
  const loginButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validator.isEmail(logon.email)) {
      setLogon({
        ...logon,
        emailError: 'Please enter a valid email address',
      });
      return;
    }

    if (logon.password.length < 4) {
      setLogon({
        ...logon,
        passwordError: 'Password must be at least 6 characters',
      });
      return;
    }

    refRun(loginButtonRef, 'Please wait...');
    login({
      email: logon.email,
      password: logon.password,
    }).then((res) => {
      if (res) {
        router.push('/dashboard');
      } else {
        alert('Something went wrong, please try again');
      }
    });
    refStop(loginButtonRef, 'Login to Dashboard');
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
      <Card className="card tw-w-[400px]">
        <Form onSubmit={handleLogin}>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12} className="p-5">
              <h3 className="text-center mb-3">MDA Login</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
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
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter password"
                  value={logon.password}
                  onChange={(e) =>
                    setLogon({ ...logon, password: e.target.value })
                  }
                />
                {logon.emailError && (
                  <Form.Text className="text-danger">
                    {logon.emailError}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={logon.remember}
                  onChange={(e) =>
                    setLogon({ ...logon, remember: e.target.checked })
                  }
                />
              </Form.Group>

              <button
                className="btn btn-primary tw-w-full btn-block"
                type="submit"
                ref={loginButtonRef}
              >
                Login to Dashboard
              </button>

              <div className="text-center tw-mt-5">
                <Link
                  href="/auth/register"
                  className="tw-text-blue-500 tw-text-sm tw-font-semibold tw-mb-3"
                >
                  Request Profile
                </Link>
                <span> | </span>
                <Link
                  href="/auth/reset"
                  className="tw-text-blue-500 tw-text-sm tw-font-semibold tw-mb-3"
                >
                  Reset password
                </Link>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
