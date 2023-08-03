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
    userId,
    year,
    MdaType,
    personalTotal,
    overheadTotal,
    capitalTotal,
    recurrentTotal,
    expenditureTotal,
    approvedBudget,
  } = req.body;
  //count the number of budget for the year and mda
  await prisma.budget
    .count({
      where: {
        AND: [
          { year: Number(year) },
          {
            Mda: {
              id: Number(id),
            },
          },
        ],
      },
    })
    .then(async (budgetCount) => {
      console.log(budgetCount);
      const _budgetCount = Number(budgetCount);
      if (_budgetCount <= 0) {
        // update the mda status
        await prisma.mda
          .update({
            where: { id: Number(id) },
            data: {
              registered: true,
              MdaType: MdaType,
              registeredAt: new Date(),
            },
          })
          .then(async (updated) => {
            console.log(updated);
            // Create a new budget
            await prisma.budget
              .create({
                data: {
                  year: Number(year),
                  personalTotal: parseFloat(personalTotal),
                  overheadTotal: parseFloat(overheadTotal),
                  capitalTotal: parseFloat(capitalTotal),
                  recurrentTotal: parseFloat(recurrentTotal),
                  expenditureTotal: parseFloat(expenditureTotal),
                  approvedBudget: parseFloat(approvedBudget),
                  Mda: {
                    connect: { id: Number(id) },
                  },
                },
              })
              .then((budget) => {
                console.log(budget);
                return res.status(200).json({
                  status: ApiStatus.MDA_REGISTERED,
                  data: budget,
                  error: `MDA_REGISTERED:${ApiStatus.MDA_REGISTERED}`,
                });
              })
              .catch((error) => {
                console.log(error);
                return res.status(500).json({
                  status: ApiStatus.MDA_NOT_REGISTERED,
                  error: `MDA_NOT_REGISTERED:${ApiStatus.MDA_NOT_REGISTERED}`,
                });
              })
              .catch((error) => {
                console.log(error);
                return res.status(500).json({
                  status: ApiStatus.MDA_NOT_REGISTERED,
                  error: `MDA_NOT_REGISTERED:${ApiStatus.MDA_NOT_REGISTERED}`,
                });
              });
          })
          .catch((error) => {
            console.log(error);
            return res.status(500).json({
              status: ApiStatus.MDA_NOT_REGISTERED,
              error: `MDA_NOT_REGISTERED:${ApiStatus.MDA_NOT_REGISTERED}`,
            });
          });
      } else {
        return res.status(500).json({
          status: ApiStatus.MDA_NOT_REGISTERED,
          error: `MDA_NOT_REGISTERED:${ApiStatus.MDA_NOT_REGISTERED}`,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json({
        status: ApiStatus.MDA_NOT_REGISTERED,
        error: `MDA_NOT_REGISTERED:${ApiStatus.MDA_NOT_REGISTERED}`,
      });
    })
    .finally(() => {
      prisma.$disconnect();
    });
}
