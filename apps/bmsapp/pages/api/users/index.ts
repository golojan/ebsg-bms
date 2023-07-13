//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { approved } = req.query;
  const isNew = (approved === 'true' ? false : true) as boolean;

  let clause = {};

  if (approved) {
    clause = {
      where: {
        isNew: isNew,
      },
    };
  }
  await prisma.user
    .findMany(clause)
    .then((users) => {
      return res.status(200).json({
        status: ApiStatus.USER_FOUND,
        data: users,
        error: `USER_FOUND:${ApiStatus.USER_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.USER_NOT_FOUND,
        data: null,
        error: `USER_NOT_FOUND:${ApiStatus.USER_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
