//Next APi

import { NextApiRequest, NextApiResponse } from 'next';
import { ApiStatus } from 'types/api-status';

// sample list of 100 users
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TApiResult>
) {
  return res.status(200).json({
    status: ApiStatus.USER_FOUND,
    data: users,
    error: `USER_FOUND:${ApiStatus.USER_FOUND}`,
  });
}
