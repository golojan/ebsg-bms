// middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import ironOptions from 'libs/iron-config';
import { MiddlewareFactory } from './types';

export const withSession: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = (await next(request, _next)) as NextResponse;
    // const session = await getIronSession(request, response, ironOptions);
    // const user = session.user;
    // console.log(user);
    // if (user) {
    //   // updath last login
    //   await fetch(`${process.env.API_URL}api/users/update`)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    //   // const result = await response.json();
    //   // console.log(result);
    //   // updath last login
    // }
    return next(request, _next);
  };
};

export default withSession;
