// pages/api/users/user.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { withSessionRoute } from 'libs/session';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  await prisma.user
    .findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        mobile: true,
        isNew: true,
        Mda: {
          select: {
            id: true,
            mdaCode: true,
            name: true,
          },
        },
        avatar: true,
        mdaId: true,
        enableOtp: true,
        smsNotix: true,
        emailNotix: true,
        pushNotix: true,
        inboxNotix: true,
        loginNotix: true,
        createdAt: true,
        updatedAt: true,
      },
    })
    .then((userData) => {
      return res.status(200).send({
        data: { userData },
        status: ApiStatus.USER_FOUND,
      });
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.USER_NOT_FOUND,
        error: error,
      });
    });
});
