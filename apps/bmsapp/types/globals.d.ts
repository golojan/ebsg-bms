type Theme = 'light' | 'dark';

type TApiResult = {
  status: ApiStatus;
  data?: object | object[] | null | any;
  error?: string;
};

type UserInfo = {
  id: number;
  email?: string;
  password?: string;
  name?: string;
};
