// iornSession options
import { IronSessionOptions } from 'iron-session';
const tokenExpirationInSeconds = 60 * Number(process.env.IRON_SESSION_EXPIRE_IN_MINS);

const ironOptions: IronSessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD || 'password',
  cookieName: 'session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + tokenExpirationInSeconds),
  },
  ttl: tokenExpirationInSeconds,
};

export default ironOptions;
