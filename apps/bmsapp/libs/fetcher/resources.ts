import * as axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const myAxios = axios.default.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getResources = async (parentId: string) => {
  return myAxios.get(`/resources/${parentId}`).then((res) => res.data);
};

export const createRootDir = async ({
  parentId,
  dirName,
  userId,
  mdaId,
}: any) => {
  return myAxios
    .post(`/resources/create`, {
      parentId,
      dirName,
      userId,
      mdaId,
    })
    .then((res) => res.data);
};

export const createDir = async (parentId: string, dir: string) => {
  return myAxios
    .post(`/resources/${parentId}/create`, {
      name: dir,
    })
    .then((res) => res.data);
};
