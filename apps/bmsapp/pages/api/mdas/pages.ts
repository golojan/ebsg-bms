//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { page, size } = req.query;
  const offset = (Number(page) - 1) * Number(size);

  await prisma
    .$transaction([
      prisma.mda.count(),
      prisma.mda.findMany({
        orderBy: { id: 'asc' },
      }),
    ])
    .then((result) => {
      return res.status(200).json({
        count: result[0] | 0,
        status: ApiStatus.MDA_FOUND,
        data: result[1],
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
