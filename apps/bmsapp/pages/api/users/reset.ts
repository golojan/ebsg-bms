//Next APi
import bcryptjs from 'bcryptjs';
import { withSessionRoute } from 'libs/session';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { email } = req.body;
  await prisma.user
    .findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
      },
    })
    .then(async (user: any) => {
      if (!user || user === null) {
        return res.status(404).json({
          status: ApiStatus.USER_NOT_FOUND,
          error: `USER_NOT_FOUND:${ApiStatus.USER_NOT_FOUND}`,
        });
      } else {
        const genPassword = bcryptjs.hashSync('123456', 10);
        return res.status(200).json({
          status: ApiStatus.USER_FOUND,
          data: {
            id: user.id,
            email: user.email,
            password: genPassword,
          },
        });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.USER_NOT_FOUND,
        error: `USER_NOT_FOUND:${ApiStatus.USER_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
});
