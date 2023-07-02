//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.mda
    .findMany()
    .then((mdas) => {
      return res.status(200).json({
        status: ApiStatus.MDA_FOUND,
        data: mdas,
        error: `MDA_FOUND:${ApiStatus.MDA_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_FOUND,
        data: null,
        error: `MDA_NOT_FOUND:${ApiStatus.MDA_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
