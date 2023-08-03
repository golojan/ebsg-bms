import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ApiStatus } from 'types/api-status';
import { getUser, getUsers } from 'libs/fetcher';
import { useRouter } from 'next/router';
import { useState } from 'react';

type TloginData = {
  email: string;
  password: string;
};

type TregisterData = {
  firstName: string;
  lastName: string;
  email: string;
  Mda: number;
};

interface useMDAProps {
  busy: boolean;
  users: UserInfo[];
  userCount: number;
  hasUser: boolean;
  user: UserInfo;
  register: (registerData: TregisterData) => Promise<number | null | undefined>;
  login: (loginData: TloginData) => Promise<
    | {
        accid: number;
        status: ApiStatus;
        enableOtp: boolean;
      }
    | null
    | undefined
  >;
  reset: (email: string) => Promise<number | null | undefined>;
  logout: () => Promise<boolean>;
  qrImage: (email: string) => Promise<number | null | undefined>;
  qrVerify: (token: string) => Promise<number>;
  getUserById: (id: number) => UserInfo | null | undefined;
  getUserByEmail: (email: string) => UserInfo | null | undefined;
  getUsersByMda: (mdaId: number) => UserInfo[] | null | undefined;
}

export const useUser = (): useMDAProps => {
  //
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [user, setUser] = useState<UserInfo>({} as UserInfo);
  const [userCount, setUserCount] = useState<number>(0);

  const queryClient = useQueryClient();
  const router = useRouter();
  const { isReady } = router;

  // Get Users
  const { isLoading: usersIsLoading, isFetching: usersIsFetching } = useQuery(
    ['users'],
    () => getUsers(),
    {
      enabled: Boolean(isReady),
      initialData: () => queryClient.getQueryData(['users']),
      onSuccess: (result: TApiResult) => {
        if (result.status === ApiStatus.USER_FOUND) {
          setUsers(result.data);
          setUserCount(Number(result.count));
        } else {
          setUsers([]);
          setUserCount(0);
        }
      },
    }
  );

  // Get Logged in User
  const { isLoading: userIsLoading, isFetching: userIsFetching } = useQuery(
    ['user'],
    () => getUser(),
    {
      enabled: Boolean(isReady),
      initialData: () => queryClient.getQueryData(['user']),
      onSuccess: (result: TApiResult) => {
        if (result.status === ApiStatus.USER_FOUND) {
          setUser(result.data);
        } else {
          setUser({} as UserInfo);
        }
      },
    }
  );

  const busy = Boolean(
    usersIsLoading || usersIsFetching || userIsLoading || userIsFetching
  );

  // check if user is logged in
  const hasUser = Boolean(user?.id ? true : false);

  // Get User by id
  const getUserById = (id: number) => {
    if (users.length > 0 && !busy) {
      const user = users.find((user) => Number(user.id) === id);
      return user;
    } else {
      return null;
    }
  };

  // getUserByEmail
  const getUserByEmail = (email: string) => {
    if (users.length > 0 && !busy) {
      const user = users.find((user) => user.email === email);
      return user;
    } else {
      return null;
    }
  };

  // Get Users by mdaCode
  const getUsersByMda = (mdaId: number) => {
    if (users.length > 0 && !busy) {
      const _users = users?.filter((user: UserInfo) => user.mdaId === mdaId);
      return _users;
    } else {
      return null;
    }
  };

  const login = async (
    loginData: TloginData
  ): Promise<
    | {
        accid: number;
        status: ApiStatus;
        enableOtp: boolean;
      }
    | null
    | undefined
  > => {
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

  const register = async (
    registerData: TregisterData
  ): Promise<number | null | undefined> => {
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

  const reset = async (email: string): Promise<number | null | undefined> => {
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

  const qrImage = async (email: string): Promise<number | null | undefined> => {
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

  return {
    busy,
    users,
    userCount,
    hasUser,
    user,
    register,
    login,
    reset,
    logout,
    qrImage,
    qrVerify,
    getUserById,
    getUserByEmail,
    getUsersByMda,
  };
};
export default useUser;
