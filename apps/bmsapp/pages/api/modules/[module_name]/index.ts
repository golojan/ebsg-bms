//Next APi

import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { module_name } = req.query;
  await prisma.module
    .findUnique({
      where: {
        name: module_name as string,
      },
    })
    .then((module) => {
      return res.status(200).json({
        status: ApiStatus.MODULE_FOUND,
        data: module,
        error: `MODULE_FOUND:${ApiStatus.MODULE_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.MODULE_NOT_FOUND,
        data: null,
        error: `MODULE_NOT_FOUND:${ApiStatus.MODULE_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
