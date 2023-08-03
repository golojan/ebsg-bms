//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.resource
    .findMany()
    .then((resources) => {
      return res.status(200).json({
        status: ApiStatus.RESOURCE_FOUND,
        data: resources,
        error: `RESOURCE_NOT_FOUND:${ApiStatus.RESOURCE_NOT_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.RESOURCE_NOT_FOUND,
        data: null,
        error: `RESOURCE_NOT_FOUND:${ApiStatus.RESOURCE_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
