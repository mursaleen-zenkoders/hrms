import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('next-auth.session-token')?.value;

  const { pathname } = req.nextUrl.clone();

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  const publicRoutes = ['/login'];

  const protectedRoutes = ['/', '/dashboard'];

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
