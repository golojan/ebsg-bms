import * as axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const myAxios = axios.default.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUsers = (): Promise<TApiResult> => {
  return myAxios.get('/users').then((res) => res.data);
};

export const getUser = async (): Promise<TApiResult> => {
  return myAxios.get(`/users/user`).then((res) => res.data);
};
