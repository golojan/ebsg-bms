import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import ironOptions from 'libs/iron-config';

export const middleware = async (
  request: NextRequest,
  event: NextFetchEvent
): Promise<Response | undefined> => {
  const response = NextResponse.next();
  const protectedPage = '/dashboard';
  const pathname = request.nextUrl.pathname;
  const session = await getIronSession(request, response, ironOptions);
  const { accid } = session;
  if (!accid) {
    if (pathname.includes(protectedPage)) {
      return NextResponse.redirect(new URL('/auth'));
    }
  }
  return response;
};

export const config = {
  matcher: ['/dashboard/:path*', '/dashboard'],
};
