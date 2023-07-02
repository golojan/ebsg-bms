import { IronSession, IronSessionData } from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    accid?: number;
    qrcode?: string;
    mdas?: number[];
  }
}
