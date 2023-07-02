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
  const { email, password } = req.body;
  await prisma.user
    .findUnique({
      where: {
        email: email,
      },
      select: {
        id: true,
        email: true,
        password: true,
      },
    })
    .then(async (user) => {
      console.log(user);
      if (!user || user === null) {
        return res.status(404).json({
          status: ApiStatus.USER_NOT_FOUND,
          error: `USER_NOT_FOUND:${ApiStatus.USER_NOT_FOUND}`,
        });
      } else {
        const isPasswordValid = Boolean(password === user.password);
        console.log(isPasswordValid);
        // const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (isPasswordValid) {
          // save session
          req.session.accid = user.id;
          req.session.mdas = [];
          await req.session.save();
          return res.status(200).json({
            status: ApiStatus.USER_FOUND,
            data: {
              id: user.id,
              email: user.email,
            },
            error: `USER_FOUND:${ApiStatus.USER_FOUND}`,
          });
        } else {
          return res.status(401).json({
            status: ApiStatus.USER_NOT_FOUND,
            error: `USER_NOT_FOUND:${ApiStatus.USER_NOT_FOUND}`,
          });
        }
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
