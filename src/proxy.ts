import { NextRequest, NextResponse } from 'next/server';

/** Redirect legacy /ar and /en locale prefixes to unprefixed Arabic routes. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localeMatch = pathname.match(/^\/(ar|en)(\/.*)?$/);
  if (localeMatch) {
    const rest = localeMatch[2] || '/';
    const url = request.nextUrl.clone();
    url.pathname = rest === '/' ? '/' : rest;
    return NextResponse.redirect(url, 308);
  }
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\..*).*)'],
};
