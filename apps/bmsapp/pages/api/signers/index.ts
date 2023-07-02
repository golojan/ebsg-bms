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
    status: ApiStatus.USERS_FOUND,
    data: users,
    error: `USERS_FOUND:${ApiStatus.USERS_FOUND}`,
  });
}
