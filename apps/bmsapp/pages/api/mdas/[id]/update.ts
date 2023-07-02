//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { prisma } from 'libs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.mda
    .findMany()
    .then((mdas) => {
      return res.status(200).json({
        status: ApiStatus.MDA_FOUND,
        data: mdas,
        error: `USERS_FOUND:${ApiStatus.USERS_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({ status: ApiStatus.MDA_NOT_FOUND });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
