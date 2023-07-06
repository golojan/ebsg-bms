//Next APi

import { NextApiRequest, NextApiResponse } from 'next';

import { authenticator } from 'otplib';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcryptjs from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { firstName, lastName, email, Mda } = req.body;
  if (!firstName || !lastName || !email || !Mda) {
    return res.status(500).json({
      status: ApiStatus.USER_NOT_CREATED,
      error: `USER_NOT_CREATED:${ApiStatus.USER_NOT_CREATED}`,
    });
  }

  const password = bcryptjs.hashSync('admin', 10);
  const qrcode = authenticator.generateSecret();
  await prisma.user
    .create({
      data: {
        firstName,
        lastName,
        email,
        qrcode,
        password,
        Mda: {
          connect: {
            id: Mda,
          },
        },
      },
      select: {
        id: true,
      },
    })
    .then((user) => {
      console.log(user);
      if (!user || !user.id) {
        return res.status(500).json({
          status: ApiStatus.USER_NOT_CREATED,
          error: `USER_NOT_CREATED:${ApiStatus.USER_NOT_CREATED}`,
        });
      } else {
        return res.status(200).json({
          status: ApiStatus.USER_CREATED,
          data: user,
        });
      }
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ status: ApiStatus.USER_NOT_CREATED, error: error });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
