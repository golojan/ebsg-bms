//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { withSessionRoute } from 'libs/session';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.log
    .findMany()
    .then((logs) => {
      return res.status(200).json({
        status: ApiStatus.LOG_FOUND,
        data: logs,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.LOG_NOT_FOUND,
        error: error,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
});
