import { NextApiRequest, NextApiResponse } from 'next';
import qrcode from 'qrcode';
import { authenticator } from 'otplib';

import { withSessionRoute } from 'libs/session';
import { ApiStatus } from 'types/api-status';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accid = Number(req.session.accid);
  if (!accid) return res.status(200).send({ status: ApiStatus.USER_NOT_FOUND });
  await prisma.user
    .findUnique({
      where: {
        id: accid,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        qrcode: true,
      },
    })
    .then(async (userData) => {
      if (!userData) {
        return res
          .status(200)
          .send({ data: null, status: ApiStatus.USER_NOT_FOUND });
      }
      const user = `${userData.email}`;
      const service = 'EBSG.BMS';
      const secret = String(userData.qrcode);
      const otpauth = authenticator.keyuri(user, service, secret);
      await qrcode.toDataURL(otpauth, (err, imageUrl) => {
        if (err) {
          console.log('Error with QRCode', err);
          return res.status(200).send({
            data: null,
            status: ApiStatus.USER_NOT_FOUND,
            error: err,
          });
        }
        return res.status(200).send({
          status: ApiStatus.USER_FOUND,
          data: {
            qrcode: userData ? userData.qrcode : null,
            qrimage: imageUrl,
          },
        });
      });
    })
    .catch((error) => {
      return res.status(200).send({
        status: ApiStatus.USER_NOT_FOUND,
        data: null,
        error: error,
      });
    });
});
