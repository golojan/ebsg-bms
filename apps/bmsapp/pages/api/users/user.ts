// pages/api/users/user.ts

import { NextApiRequest, NextApiResponse } from 'next';

import { withSessionRoute } from 'libs/session';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = req.session.user;
  if (!user) return res.status(200).send({ status: ApiStatus.USER_NOT_FOUND });
  const hasOtp = Boolean(user.hasOtp) || false;
  await prisma.user
    .findUnique({
      where: {
        id: Number(user?.accid),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    .then((userData) => {
      return res.status(200).send({
        data: { ...userData, hasOtp },
        status: ApiStatus.USER_FOUND,
      });
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.USER_NOT_FOUND,
        data: null,
        error: error,
      });
    });
});
