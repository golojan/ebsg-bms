//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.module
    .findMany()
    .then((modules) => {
      return res.status(200).json({
        status: ApiStatus.MODULE_FOUND,
        data: modules,
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
