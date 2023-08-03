//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  const { parentId, dirName, userId, mdaId } = req.body;

  console.log(parentId);

  const withParent: any =
    parentId === undefined
      ? {
          data: {
            name: dirName,
            resourceType: 'folder',
            user: {
              connect: {
                id: userId,
              },
            },
            mda: {
              connect: {
                id: mdaId,
              },
            },
          },
        }
      : {
          data: {
            name: dirName,
            resourceType: 'folder',
            parent: {
              connect: {
                id: parentId.toString(),
              },
            },
            user: {
              connect: {
                id: userId,
              },
            },
            mda: {
              connect: {
                id: mdaId,
              },
            },
          },
        };
  await prisma.resource
    .create(withParent)
    .then((resource) => {
      return res.status(200).json({
        status: ApiStatus.RESOURCE_FOUND,
        data: resource,
        error: `RESOURCE_FOUND:${ApiStatus.RESOURCE_FOUND}`,
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
