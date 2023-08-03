type Theme = 'light' | 'dark';

type TApiResult = {
  status: ApiStatus;
  data?: object | object[] | null | any;
  count?: number;
  error?: object | string | object[];
};

type UserInfo = {
  id: number;
  hasOtp?: boolean;
  email?: string;
  mobile?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  Mda?: MdaInfo;
  mdaId?: number;
  isNew?: boolean;
  enableOtp?: boolean;
  lastLogin?: Date;
  lastSeen?: Date;
  role?: Role;
  smsNotix?: boolean;
  emailNotix?: boolean;
  pushNotix?: boolean;
  inboxNotix?: boolean;
  loginNotix?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

type BudgetInfo = {
  id?: number;

  year?: number;
  startDate?: Date;
  endDate?: Date;

  personalTotal?: number;
  overheadTotal?: number;
  capitalTotal?: number;
  recurrentTotal?: number;
  expenditureTotal?: number;
  approvedBudget?: number;
  performanceBudget?: number;
  fullYearActual?: number;

  Mda?: MdaInfo;
  mdaId?: number;

  createdAt?: Date;
  updatedAt?: Date;
};

type MdaInfo = {
  id?: number;
  name?: string;
  mdaCode?: string;
  MdaType?: string;
  registered?: boolean;
  Users?: UserInfo[];
  Resources?: TResource[];
  Requests?: TRequests[];
  Budgets?: BudgetInfo[];
  createdAt?: Date;
  updatedAt?: Date;
};

type TMdaData = {
  year?: number;
  MdaType?: string;
  mdaCode?: string;
  personalTotal?: number;
  overheadTotal?: number;
  capitalTotal?: number;
  recurrentTotal?: number;
  expenditureTotal?: number;
  approvedBudget?: number;
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
  busy?: boolean;
  show: boolean;
  toggleModal: () => void;
  children: React.ReactNode;
  screens?: string['sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'];
};

type TRequests = {
  id?: number;
  name?: string;
  description?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: number;
  updatedBy?: number;
};
