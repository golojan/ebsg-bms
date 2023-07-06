//Next APi

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  return res
    .status(200)
    .json({ status: ApiStatus.API_BAD_REQUEST, data: {}, error: '' });
}
