// lib/withSession.ts

import { withIronSessionApiRoute } from 'iron-session/next';
import { NextApiHandler } from 'next';
import ironOptions from '../iron-config';

export function withSessionRoute(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, ironOptions);
}
