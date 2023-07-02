import { NextApiRequest, NextApiResponse } from 'next';

import { withSessionRoute } from 'libs/session';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accid = Number(req.session.accid);
  if (!accid) return res.status(200).send({ status: ApiStatus.LOG_NOT_FOUND });
  await prisma.log
    .findMany({
      where: {
        userId: accid,
      },
    })
    .then((logs) => {
      return res.status(200).send({ status: ApiStatus.LOG_FOUND, data: logs });
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.LOG_NOT_FOUND,
        error: error,
      });
    });
});
