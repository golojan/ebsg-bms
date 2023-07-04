import { IronSession, IronSessionData } from 'iron-session';

declare module 'iron-session' {
  interface IronSessionData {
    user: {
      accid: number;
      hasOtp?: boolean;
      mdas?: number[];
    };
  }
}
