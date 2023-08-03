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
  const condition = id?.toString() === 'undefined' || id?.toString() === 'null';
  const where = condition ? { parentId: null } : { parentId: id?.toString() };

  console.log(id);
  await prisma.resource
    .findMany({
      where: where,
    })
    .then((resource) => {
      return res.status(200).json({
        status: ApiStatus.RESOURCE_FOUND,
        data: resource,
        error: `RESOURCE_NOT_FOUND:${ApiStatus.RESOURCE_NOT_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.RESOURCE_NOT_FOUND,
        data: null,
        error: `RESOURCE_NOT_FOUND:${ApiStatus.RESOURCE_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
