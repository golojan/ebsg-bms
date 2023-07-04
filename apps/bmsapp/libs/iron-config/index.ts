// iornSession options
import { IronSessionOptions } from 'iron-session';
import { serialize, parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

const tokenExpirationInSeconds =
  60 * Number(process.env.IRON_SESSION_EXPIRE_IN_MINS);

const ironOptions: IronSessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD || 'password',
  cookieName: 'session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: tokenExpirationInSeconds,
    sameSite: 'strict',
    path: '/',
  },
  ttl: tokenExpirationInSeconds,
};

export function setSession(
  req: NextApiRequest,
  res: NextApiResponse,
  sessionData: any
) {
  const session = { ...req.session, ...sessionData };
  const serializedSession = serialize(
    ironOptions.cookieName,
    session,
    ironOptions.cookieOptions
  );
  res.setHeader('Set-Cookie', serializedSession);
}

export function getSession(req: NextApiRequest) {
  return parse(req.headers.cookie ?? '')[ironOptions.cookieName] ?? {};
}

export default ironOptions;
