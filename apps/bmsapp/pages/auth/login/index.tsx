import style from '../auth.module.scss';
import React, {
  SyntheticEvent,
  useState,
  useRef,
  MutableRefObject,
} from 'react';
import { NextPage } from 'next';
import { useUser } from 'services/use-user';
import validator from 'validator';
import { refRun, refStop } from 'libs/formrunnner';
import { useRouter } from 'next/router';
import { ApiStatus } from 'types/api-status';

import AuthLayout from 'components/layout/auth';

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
        const { status, enableOtp } = res;
        const otp = Boolean(enableOtp);
        if (status === ApiStatus.USER_FOUND) {
          if (otp) {
            router.push('/otp');
            refStop(loginButtonRef, 'Login to Dashboard');
          } else {
            router.push('/mda');
            refStop(loginButtonRef, 'Login to Dashboard');
          }
        } else if (status === ApiStatus.USER_NOT_FOUND) {
          refStop(loginButtonRef, 'Login to Dashboard');
        }
      } else {
        alert('Something went wrong, please try again');
        refStop(loginButtonRef, 'Login to Dashboard');
      }
    });
  };

  return (
    <AuthLayout>
      <header className="text-center mb-8">
        <h2 className="text-bgray-900 dark:text-white text-4xl font-semibold font-poppins mb-2">
          Sign in to e.Budget
        </h2>
        <p className="font-urbanis text-base font-medium text-bgray-600 dark:text-bgray-50">
          Government of Ebonyi State, Nigeria
        </p>
      </header>

      <div className="relative mt-6 mb-5">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-darkblack-400" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white dark:bg-darkblack-500 px-2 text-base text-bgray-600">
            continue with your email and password
          </span>
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          {logon.emailError && (
            <span className="text-danger">{logon.emailError}</span>
          )}
          <input
            type="email"
            name="email"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
            placeholder="Username or email"
            value={logon.email}
            onChange={(e) => setLogon({ ...logon, email: e.target.value })}
          />
        </div>
        <div className="mb-6 relative">
          {logon.passwordError && (
            <span className="text-danger">{logon.passwordError}</span>
          )}
          <input
            type="password"
            name="password"
            autoCapitalize="off"
            autoCorrect="off"
            autoComplete="off"
            className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
            placeholder="Password"
            value={logon.password}
            onChange={(e) => setLogon({ ...logon, password: e.target.value })}
          />
          <button className="absolute top-4 right-4 bottom-4">
            <svg
              width={22}
              height={20}
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1L20 19"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.58445 8.58704C9.20917 8.96205 8.99823 9.47079 8.99805 10.0013C8.99786 10.5319 9.20844 11.0408 9.58345 11.416C9.95847 11.7913 10.4672 12.0023 10.9977 12.0024C11.5283 12.0026 12.0372 11.7921 12.4125 11.417"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.363 3.36506C9.22042 3.11978 10.1082 2.9969 11 3.00006C15 3.00006 18.333 5.33306 21 10.0001C20.222 11.3611 19.388 12.5241 18.497 13.4881M16.357 15.3491C14.726 16.4491 12.942 17.0001 11 17.0001C7 17.0001 3.667 14.6671 1 10.0001C2.369 7.60506 3.913 5.82506 5.632 4.65906"
                stroke="#718096"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-between mb-7">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              className="w-5 h-5 dark:bg-darkblack-500 focus:ring-transparent rounded-full border border-bgray-300 focus:accent-success-300 text-success-300"
              name="remember"
              id="remember"
              checked={logon.remember}
              onChange={(e) =>
                setLogon({ ...logon, remember: e.target.checked })
              }
            />
            <label
              htmlFor="remember"
              className="text-bgray-900 dark:text-white text-base font-semibold"
            >
              Remember me
            </label>
          </div>
          <div>
            <a
              href="#"
              data-target="#multi-step-modal"
              className="modal-open text-success-300 font-semibold text-base underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          ref={loginButtonRef}
          className="py-3.5 flex items-center justify-center text-white font-bold bg-success-300 hover:bg-success-400 transition-all rounded-lg w-full"
        >
          Login to Dashboard
        </button>
      </form>
      <p className="text-center text-bgray-900 dark:text-bgray-50 text-base font-medium pt-7">
        Don’t have an account? -{' '}
        <a href="#" className="font-semibold underline">
          Request Profile
        </a>
      </p>
    </AuthLayout>
  );
};

export default Login;
