//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import moduleData from 'data/modules.json';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.module
    .createMany({
      data: moduleData,
      skipDuplicates: true,
    })
    .then((mdas) => {
      return res.status(200).json({
        status: ApiStatus.MODULE_FOUND,
        data: mdas,
        error: `MODULE_FOUND:${ApiStatus.MODULE_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({ status: ApiStatus.MODULE_NOT_FOUND });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
