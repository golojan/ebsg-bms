//Next APi

import { NextApiRequest, NextApiResponse } from 'next';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { withSessionRoute } from 'libs/session';
import { ApiStatus } from 'types/api-status';
export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const user = req.session.user;
  const accid = Number(user.accid);

  const { level, log } = req.body;
  if (!accid)
    return res.status(200).send({
      status: ApiStatus.LOG_NOT_CREATED,
      error: `LOG_NOT_CREATED:${ApiStatus.LOG_NOT_CREATED}`,
    });
  await prisma.log
    .create({
      data: {
        User: {
          connect: {
            id: accid,
          },
        },
        level: level,
        log: log,
      },
    })
    .then((result) => {
      return res.status(200).json({
        status: ApiStatus.LOG_CREATED,
        data: result,
      });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ status: ApiStatus.LOG_NOT_CREATED, error: error });
    })
    .finally(() => {
      prisma.$disconnect();
    });
});
