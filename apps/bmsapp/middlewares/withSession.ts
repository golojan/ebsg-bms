// middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import ironOptions from 'libs/iron-config';
import { MiddlewareFactory } from './types';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const withSession: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = (await next(request, _next)) as NextResponse;
    const session = await getIronSession(request, response, ironOptions);
    const user = session.user;
    if (user) {
      // updath last login
      await prisma.user.update({
        where: {
          id: user.accid,
        },
        data: {
          lastSeen: new Date(),
        },
      });
    }
    return next(request, _next);
  };
};

export default withSession;
