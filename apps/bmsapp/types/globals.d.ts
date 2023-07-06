type Theme = 'light' | 'dark';

type TApiResult = {
  status: ApiStatus;
  data?: object | object[] | null | any;
  error?: string;
};

type UserInfo = {
  id: number;
  hasOtp: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  role?: Role;
};

type UserHook = {
  busy: boolean;
  user: UserInfo | null;
  hasUser: boolean;
  login: (loginData: { email: string; password: string }) => Promise<{
    accid: number;
    status: ApiStatus;
    enableOtp: boolean;
  } | null>;
  register: (registerData: {
    firstName: string;
    lastName: string;
    email: string;
    Mda: number;
  }) => Promise<number | null>;
  reset: (email: string) => Promise<number | null>;
  logout: () => Promise<boolean>;
  qrVerify: (token: string) => Promise<number>;
  qrImage: (email: string) => Promise<number | null>;
};

type TCrud = {
  module?: string;
  accid?: number;
  role?: string;
  crud?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
};
