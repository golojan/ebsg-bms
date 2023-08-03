//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { id } = req.query;
  const { smsNotix, emailNotix, pushNotix, inboxNotix, loginNotix } = req.body;
  console.log(req.body);
  await prisma.user
    .update({
      where: {
        id: Number(id),
      },
      data: {
        smsNotix: Boolean(smsNotix),
        emailNotix: Boolean(emailNotix),
        pushNotix: Boolean(pushNotix),
        inboxNotix: Boolean(inboxNotix),
        loginNotix: Boolean(loginNotix),
      },
      select: {
        id: true,
      },
    })
    .then((user) => {
      console.log(user);
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
