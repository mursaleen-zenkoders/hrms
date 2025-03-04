import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value;
  const tokenProduction = req.cookies.get(
    '__Secure-next-auth.session-token',
  )?.value;

  const isToken = token || tokenProduction;

  const { pathname } = req.nextUrl.clone();

  if (pathname === '/' || pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/dashboard/home', req.url));
  }

  const publicRoutes = ['/login'];

  const protectedRoutes = [
    '/',
    '/dashboard',
    '/dashboard/home',
    '/dashboard/attendance',
    '/dashboard/announcements',
    '/dashboard/standup',
  ];

  if (isToken && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!isToken && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
