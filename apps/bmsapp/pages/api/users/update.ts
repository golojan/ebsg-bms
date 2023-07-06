// pages/api/users/user.ts

import { NextApiRequest, NextApiResponse } from 'next';

import { withSessionRoute } from 'libs/session';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.session.user;
  if (!user) return res.status(200).send({ status: ApiStatus.USER_NOT_FOUND });
  const accid = Number(user?.accid);
  console.log(accid);
  await prisma.user
    .update({
      where: {
        id: accid,
      },
      data: {
        lastLogin: new Date(),
      },
      select: {
        id: true,
      },
    })
    .then((updated) => {
      return res.status(200).send({
        data: { ...updated },
        status: ApiStatus.USER_UPDATED,
      });
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.USER_NOT_UPDATED,
        data: null,
        error: error,
      });
    });
});
