import * as axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const myAxios = axios.default.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getMdas = (): Promise<TApiResult> => {
  return myAxios.get('/mdas').then((res) => res.data);
};

export const getMda = async (id: number): Promise<TApiResult> => {
  if (!id) return Promise.resolve({} as TApiResult);
  return myAxios.get(`/mdas/${id}`).then((res) => res.data);
};

export const getMdasByPage = ({
  page,
  size,
}: {
  page: number;
  size: number;
}): Promise<TApiResult> => {
  return myAxios
    .get(`/mdas/pages?page=${page}&result=${size}`)
    .then((res) => res.data);
};

// export const getMda = (id: number): Promise<TApiResult> => {
//   return axios.get(`/mdas/${id}/findcode`).then((res) => res.data);
// };
