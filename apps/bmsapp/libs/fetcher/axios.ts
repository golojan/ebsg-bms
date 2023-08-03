import * as axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const myAxios = axios.default.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
