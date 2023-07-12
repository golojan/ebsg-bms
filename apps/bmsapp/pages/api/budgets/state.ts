//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  await prisma.mda
    .aggregate({
      where: {
        registered: true,
      },
      _sum: {
        personalTotal: true,
        overheadTotal: true,
        capitalTotal: true,
        recurrentTotal: true,
        expenditureTotal: true,
        fullYearActual_2020: true,
        fullYearActual_2021: true,
        fullYearActual_2022: true,
        fullYearActual_2023: true,
        fullYearActual_2024: true,
        fullYearActual_2025: true,

        approvedBudget_2020: true,
        approvedBudget_2021: true,
        approvedBudget_2022: true,
        approvedBudget_2023: true,
        approvedBudget_2024: true,
        approvedBudget_2025: true,

        performanceBudget_2020: true,
        performanceBudget_2021: true,
        performanceBudget_2022: true,
        performanceBudget_2023: true,
        performanceBudget_2024: true,
        performanceBudget_2025: true,
      },
    })
    .then((mdas) => {
      return res.status(200).json({
        status: ApiStatus.MDA_FOUND,
        data: mdas,
        error: `MDA_FOUND:${ApiStatus.MDA_FOUND}`,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_FOUND,
        data: null,
        error: `MDA_NOT_FOUND:${ApiStatus.MDA_NOT_FOUND}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
