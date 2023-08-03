// middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getIronSession } from 'iron-session/edge';
import ironOptions from 'libs/iron-config';
import { MiddlewareFactory } from './types';

export const withLogging: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = request.nextUrl;
    const protectedPaths = ['/dashboard', '/mda', '/admin'];

    // Auth paths
    const authPath = '/auth';
    const isAuthPath = pathname.startsWith(authPath);
    // OTP Path
    const otpPath = '/otp';
    const isOtpPath = pathname.startsWith(otpPath);
    //

    const matchesProtectedPath = protectedPaths.some((path) =>
      pathname.startsWith(path)
    );
    const response = (await next(request, _next)) as NextResponse;
    const session = await getIronSession(request, response, ironOptions);
    const user = session.user;

    if (matchesProtectedPath) {
      if (user) {
        const hasOtp = Boolean(user.hasOtp);
        if (hasOtp) {
          const url = new URL(`/otp`, request.url);
          url.searchParams.set('callbackUrl', encodeURI(request.url));

          return NextResponse.redirect(url);
        }
      } else {
        const url = new URL(`/auth/login`, request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        return NextResponse.redirect(url);
      }
      return next(request, _next);
    }

    if (isOtpPath) {
      if (user) {
        const hasOtp = Boolean(user.hasOtp);
        if (hasOtp) {
          return next(request, _next);
        } else {
          const url = new URL(`/mda`, request.url);
          return NextResponse.redirect(url);
        }
      } else {
        const url = new URL(`/auth/login`, request.url);
        url.searchParams.set('callbackUrl', encodeURI(request.url));
        return NextResponse.redirect(url);
      }
    }

    if (isAuthPath) {
      if (user) {
        const hasOtp = Boolean(user.hasOtp);
        if (hasOtp) {
          const url = new URL(`/otp`, request.url);
          url.searchParams.set('callbackUrl', encodeURI(request.url));
          return NextResponse.redirect(url);
        } else {
          const url = new URL(`/mda`, request.url);
          return NextResponse.redirect(url);
        }
      }
      return next(request, _next);
    }
    return next(request, _next);
  };
};

export default withLogging;
