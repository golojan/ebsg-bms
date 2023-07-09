type Theme = 'light' | 'dark';

type TApiResult = {
  status: ApiStatus;
  data?: object | object[] | null | any;
  error?: object | string | object[];
};

type UserInfo = {
  id: number;
  hasOtp: boolean;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: Role;
};

type MdaInfo = {
  id?: number;
  mdaCode?: string;
  name?: string;
  registered?: boolean;
  personalTotal?: number;
  overheadTotal?: number;
  capitalTotal?: number;
  recurrentTotal?: number;
  expenditureTotal?: number;
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

type TModule = {
  id?: number;
  name?: string;
  description?: string;
};

type TCrud = {
  module?: TModule | null;
  accid?: number;
  role?: string;
  crud?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
};

type ModalProps = {
  show: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
};
