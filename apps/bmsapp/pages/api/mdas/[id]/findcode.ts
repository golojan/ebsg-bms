//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const id = req.query.id as string;
  //find by mdaCode or id or name
  await prisma.mda
    .findUnique({
      where: {
        mdaCode: id,
      },
    })
    .then((mda) => {
      return res.status(200).json({
        status: ApiStatus.MDA_FOUND,
        data: mda,
        error: `MDA_FOUND:${ApiStatus.MDA_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_FOUND,
        error: error,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
