//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { authenticator } from 'otplib';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcryptjs from 'bcryptjs';
import { withSessionRoute } from 'libs/session';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { accid, firstName, lastName, mobile, mdaId, password } = req.body;

  if (!firstName || !lastName || !mobile || !mdaId || !password) {
    return res.status(500).json({
      status: ApiStatus.USER_NOT_UPDATED,
      error: `USER_NOT_UPDATED:${ApiStatus.USER_NOT_UPDATED}`,
    });
  }

  const qrcode = authenticator.generateSecret();
  const salt = bcryptjs.genSaltSync(10);
  const enc_password = bcryptjs.hashSync(password, salt);

  await prisma.user
    .update({
      where: {
        id: Number(accid),
      },
      data: {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        qrcode: qrcode,
        password: enc_password,
        isNew: true,
        Mda: {
          connect: {
            id: mdaId,
          },
        },
      },
      select: {
        id: true,
      },
    })
    .then((user) => {
      if (!user || !user.id) {
        return res.status(500).json({
          status: ApiStatus.USER_NOT_UPDATED,
          error: `USER_NOT_UPDATED:${ApiStatus.USER_NOT_UPDATED}`,
        });
      } else {
        return res.status(200).json({
          status: ApiStatus.USER_UPDATED,
          data: user,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(500)
        .json({ status: ApiStatus.USER_NOT_CREATED, error: error });
    })
    .finally(() => {
      prisma.$disconnect();
    });
});
