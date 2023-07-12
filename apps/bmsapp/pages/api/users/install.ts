//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
import { authenticator } from 'otplib';
const prisma = new PrismaClient();
import bcryptjs from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const qrcode = authenticator.generateSecret();
  const salt = bcryptjs.genSaltSync(10);
  const enc_password = bcryptjs.hashSync('admin', salt);
  await prisma.user
    .create({
      data: {
        firstName: 'EBSG',
        lastName: 'Admin',
        email: 'agu.chux@yahoo.com',
        mobile: '08012345678',
        qrcode: qrcode,
        password: enc_password,
        isNew: true,
      },
      select: {
        id: true,
      },
    })
    .then((user) => {
      return res.status(200).json({
        status: ApiStatus.USER_CREATED,
        data: user,
        error: `USER_CREATED:${ApiStatus.USER_CREATED}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({ status: ApiStatus.USER_NOT_CREATED });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
