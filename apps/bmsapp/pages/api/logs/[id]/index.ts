//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const id = Number(req.query.id);
  await prisma.log
    .findUnique({
      where: {
        id: id,
      },
    })
    .then((log) => {
      return res.status(200).json({
        status: ApiStatus.LOG_FOUND,
        data: log,
      });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ status: ApiStatus.LOG_NOT_FOUND, error: error });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
