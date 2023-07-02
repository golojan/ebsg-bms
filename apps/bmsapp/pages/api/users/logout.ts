import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';
import { withSessionRoute } from 'libs/session';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await req.session.destroy();
  await req.session.save();
  return res.send({ status: ApiStatus.USER_LOGGED_OUT });
});
