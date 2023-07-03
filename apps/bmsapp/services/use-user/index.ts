import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from 'libs';
import { ApiStatus } from 'types/api-status';

interface IProps {
  redirectTo?: string;
  redirectIfFound?: boolean;
}

export const useUser = ({
  redirectTo,
  redirectIfFound,
}: IProps = {}): UserHook => {
  const { data: result } = useSWR('/api/users/user', fetcher);

  const finished = Boolean(result);
  const user: UserInfo = finished ? result?.data : null;
  const hasUser = Boolean(user);

  useEffect(() => {
    if (!finished) return;
  }, [finished]);

  const router = useRouter();

  const login = async (loginData: {
    email: string;
    password: string;
  }): Promise<{
    accid: number;
    status: ApiStatus;
    enableOtp: boolean;
  } | null> => {
    const result = await fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const { status, data }: TApiResult = await result.json();
    if (status === ApiStatus.USER_FOUND) {
      return {
        accid: data.id,
        status: status,
        enableOtp: data.enableOtp,
      };
    } else {
      return null;
    }
  };

  const register = async (registerData: {
    firstName: string;
    lastName: string;
    email: string;
    Mda: number;
  }): Promise<number | null> => {
    const result = await fetch('/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    });
    const { status, data }: TApiResult = await result.json();
    return status === ApiStatus.USER_CREATED ? data.id : null;
  };

  const reset = async (email: string): Promise<number | null> => {
    const result = await fetch('/api/users/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });
    const { status, data }: TApiResult = await result.json();
    return status === ApiStatus.USER_RESET ? data.id : null;
  };

  const qrImage = async (email: string): Promise<number | null> => {
    const result = await fetch('/api/users/otp-setup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    });
    const { status, data }: TApiResult = await result.json();
    return status === ApiStatus.QRCODE_FOUND ? data.id : null;
  };

  const qrVerify = async (token: string): Promise<number> => {
    const result = await fetch('/api/users/otp-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    });
    const { status }: TApiResult = await result.json();
    return status;
  };

  const logout = async (): Promise<boolean> => {
    const result = await fetch('/api/users/logout');
    const { status }: TApiResult = await result.json();
    if (status === ApiStatus.USER_LOGGED_OUT) {
      router.push('/auth');
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!redirectTo || !finished) return;
    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !hasUser) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && hasUser)
    ) {
      Router.push(redirectTo);
    }
  }, [redirectTo, redirectIfFound, finished, hasUser]);

  return {
    hasUser,
    user,
    register,
    login,
    reset,
    logout,
    qrImage,
    qrVerify,
  };
};
