import { NextApiRequest, NextApiResponse } from 'next';
import { authenticator } from '@otplib/preset-default';
import { withSessionRoute } from 'libs/session';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.body;
  const accid = Number(req.session.accid);
  if (!accid) return res.status(200).send({ status: ApiStatus.USER_NOT_FOUND });
  await prisma.user
    .findUnique({
      where: {
        id: accid,
      },
      select: {
        id: true,
        qrcode: true,
      },
    })
    .then(async (userData) => {
      if (!userData) {
        return res
          .status(200)
          .send({ data: null, status: ApiStatus.USER_NOT_FOUND });
      }
      const secret = String(userData.qrcode);
      const isValid = Boolean(authenticator.check(token, secret));
      console.log('isValid', isValid);
      if (isValid) {
        // remove session qrcode
        req.session.qrcode = null;
        await req.session.save();

        return res.status(200).send({
          status: ApiStatus.QRCODE_VALID,
          data: userData,
        });
      } else {
        return res.status(200).send({
          status: ApiStatus.QRCODE_INVALID,
          data: null,
          error: `QRCODE_INVALID:${ApiStatus.QRCODE_INVALID}`,
        });
      }
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.USER_NOT_FOUND,
        data: null,
        error: error,
      });
    });
});
