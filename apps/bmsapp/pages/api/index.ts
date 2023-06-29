//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  return res
    .status(200)
    .json({ status: ApiStatus.API_BAD_REQUEST, data: {}, error: '' });
}
