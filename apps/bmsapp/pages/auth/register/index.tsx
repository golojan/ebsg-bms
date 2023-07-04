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
import useSWR from 'swr';
import { fetcher } from 'libs';
import AuthLayout from 'components/layout/auth';

/* eslint-disable-next-line */
export type loginProps = {};

export const Login: NextPage<loginProps> = (props) => {
  const { data: result, error } = useSWR('/api/mdas', fetcher);

  const { register } = useUser();
  const [signup, setSignup] = useState<{
    firstName: string;
    firstNameError: string;
    lastName: string;
    lastNameError: string;
    email: string;
    emailError: string;
    Mda: number;
    MdaError: string;
  }>({
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    email: '',
    emailError: '',
    Mda: Number(null),
    MdaError: '',
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
    refRun(registerButtonRef, 'Please wait...');
    register({
      firstName: signup.firstName,
      lastName: signup.lastName,
      Mda: signup.Mda,
      email: signup.email,
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
    <AuthLayout>
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
                <h3 className="text-center mb-5">Request Profile</h3>

                <Form.Group controlId="firstName" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="First Name"
                    value={signup.firstName}
                    onChange={(e) =>
                      setSignup({ ...signup, firstName: e.target.value })
                    }
                  />
                  {signup.emailError && (
                    <Form.Text className="text-danger">
                      {signup.emailError}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group controlId="lastName" className="mb-3">
                  <Form.Label>Surname</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="Last Name"
                    value={signup.lastName}
                    onChange={(e) =>
                      setSignup({ ...signup, lastName: e.target.value })
                    }
                  />
                  {signup.lastNameError && (
                    <Form.Text className="text-danger">
                      {signup.lastNameError}
                    </Form.Text>
                  )}
                </Form.Group>

                {/* Select Department */}
                <Form.Group controlId="department" className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    aria-label="Select Department"
                    value={signup.Mda}
                    onChange={(e) =>
                      setSignup({ ...signup, Mda: Number(e.target.value) })
                    }
                  >
                    <option value="">Select MDA</option>
                    {result &&
                      result.data &&
                      !error &&
                      result.data.map((mda: any, index: number) => (
                        <option key={index} value={mda.id}>
                          {mda.name}
                        </option>
                      ))}
                  </Form.Select>
                  {signup.MdaError && (
                    <Form.Text className="text-danger">
                      {signup.MdaError}
                    </Form.Text>
                  )}
                </Form.Group>

                <hr className="tw-block" />

                <Form.Group controlId="formBasicEmail" className="mb-3">
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
                  {signup.lastNameError && (
                    <Form.Text className="text-danger">
                      {signup.lastNameError}
                    </Form.Text>
                  )}
                </Form.Group>

                <button
                  className="btn btn-primary tw-w-full btn-block"
                  type="submit"
                  ref={registerButtonRef}
                >
                  Request New Profile
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
    </AuthLayout>
  );
};

export default Login;
