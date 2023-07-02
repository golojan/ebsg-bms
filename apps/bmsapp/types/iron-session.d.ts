import { IronSession } from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    accid?: number;
    mdas?: number[];
  }
}
