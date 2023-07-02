//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { authenticator } from 'otplib';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
  const qrcode = authenticator.generateSecret();
  await prisma.user
    .create({
      data: {
        firstName,
        lastName,
        email,
        qrcode,
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
