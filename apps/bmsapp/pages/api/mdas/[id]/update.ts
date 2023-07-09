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
  const {
    name,
    personalTotal,
    overheadTotal,
    capitalTotal,
    recurrentTotal,
    expenditureTotal,
  } = req.body;

  await prisma.mda
    .update({
      where: { mdaCode: id as string },
      data: {
        name: name as string,
        personalTotal: parseFloat(personalTotal),
        overheadTotal: parseFloat(overheadTotal),
        capitalTotal: parseFloat(capitalTotal),
        recurrentTotal: parseFloat(recurrentTotal),
        expenditureTotal: parseFloat(expenditureTotal),
      },
    })
    .then((mda) => {
      console.log(mda);
      return res.status(200).json({
        status: ApiStatus.MDA_UPDATED,
        data: mda,
        error: `MDA_UPDATED:${ApiStatus.MDA_UPDATED}`,
      });
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_UPDATED,
        error: `MDA_NOT_UPDATED:${ApiStatus.MDA_NOT_UPDATED}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
