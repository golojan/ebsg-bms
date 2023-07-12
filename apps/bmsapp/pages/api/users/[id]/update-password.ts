//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import bcryptjs from 'bcryptjs';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { id } = req.query;
  const { oldPassword, newPassword, confirmPassword } = req.body;
  if (!id || !oldPassword || !newPassword || !confirmPassword) {
    return res.status(500).json({
      status: ApiStatus.USER_NOT_UPDATED,
      error: `USER_NOT_UPDATED:${ApiStatus.USER_NOT_UPDATED}`,
    });
  }
  if (newPassword !== confirmPassword) {
    return res.status(500).json({
      status: ApiStatus.USER_NOT_UPDATED,
      error: `USER_NOT_UPDATED:${ApiStatus.USER_NOT_UPDATED}`,
    });
  }

  const salt = bcryptjs.genSaltSync(10);
  const password = bcryptjs.hashSync(newPassword, salt);

  await prisma.user
    .update({
      where: {
        id: Number(id),
      },
      data: {
        password: password,
      },
      select: {
        id: true,
      },
    })
    .then((user) => {
      return res.status(200).json({
        status: ApiStatus.USER_UPDATED,
        data: user,
      });
    })
    .catch((error) => {
      return res
        .status(500)
        .json({ status: ApiStatus.USER_NOT_UPDATED, error: error });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
