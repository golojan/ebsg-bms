import { NextApiRequest, NextApiResponse } from 'next';

import { withSessionRoute } from 'libs/session';

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await req.session.destroy();
  return res.send({ status: ApiStatus.USER_LOGGED_OUT });
});
