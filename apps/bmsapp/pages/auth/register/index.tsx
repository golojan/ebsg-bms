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
  const { register } = useUser();
  const [signup, setSignup] = useState<{
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
  const registerButtonRef = useRef() as MutableRefObject<HTMLButtonElement>;

  const handleRegister = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!validator.isEmail(signup.email)) {
      setSignup({
        ...signup,
        emailError: 'Please enter a valid email address',
      });
      return;
    }

    if (signup.password.length < 4) {
      setSignup({
        ...signup,
        passwordError: 'Password must be at least 6 characters',
      });
      return;
    }

    refRun(registerButtonRef, 'Please wait...');
    register({
      email: signup.email,
      password: signup.password,
    }).then((res) => {
      if (res) {
        router.push('/auth/verify');
      } else {
        alert('Something went wrong, please try again');
      }
    });
    refStop(registerButtonRef, 'Login to Dashboard');
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
        <Form onSubmit={handleRegister}>
          <Row>
            <Col lg={12} md={12} sm={12} xl={12} className="p-5">
              <h3 className="text-center mb-3">Request MDA Profile</h3>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  required
                  autoComplete="off"
                  placeholder="Enter email address"
                  value={signup.email}
                  onChange={(e) =>
                    setSignup({ ...signup, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  required
                  placeholder="Enter password"
                  value={signup.password}
                  onChange={(e) =>
                    setSignup({ ...signup, password: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember me"
                  checked={signup.remember}
                  onChange={(e) =>
                    setSignup({ ...signup, remember: e.target.checked })
                  }
                />
              </Form.Group>

              <button
                className="btn btn-primary tw-w-full btn-block"
                type="submit"
                ref={registerButtonRef}
              >
                Login to Dashboard
              </button>

              <div className="text-center tw-mt-5 tw-block">
                Profiled? -{' '}
                <Link
                  href="/auth/login"
                  className="tw-text-blue-500 tw-text-sm tw-font-semibold tw-mb-3"
                >
                  Login to Dashboard
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
