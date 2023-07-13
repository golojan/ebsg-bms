type Theme = 'light' | 'dark';

type TApiResult = {
  status: ApiStatus;
  data?: object | object[] | null | any;
  error?: object | string | object[];
};

type UserInfo = {
  id: number;
  hasOtp?: boolean;
  email?: string;
  mobile?: string;
  firstName?: string;
  lastName?: string;
  mdaId?: number;
  isNew?: boolean;
  enableOtp?: boolean;
  lastLogin?: Date;
  lastSeen?: Date;
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

  fullYearActual_2020?: number;
  fullYearActual_2021?: number;
  fullYearActual_2022?: number;
  fullYearActual_2023?: number;
  fullYearActual_2024?: number;
  fullYearActual_2025?: number;

  approvedBudget_2020?: number;
  approvedBudget_2021?: number;
  approvedBudget_2022?: number;
  approvedBudget_2023?: number;
  approvedBudget_2024?: number;
  approvedBudget_2025?: number;

  performanceBudget_2020?: number;
  performanceBudget_2021?: number;
  performanceBudget_2022?: number;
  performanceBudget_2023?: number;
  performanceBudget_2024?: number;
  performanceBudget_2025?: number;
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
