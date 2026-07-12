import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, ADMIN_COOKIE_NAME } from "./app/lib/admin-auth";

export const runtime = "nodejs";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();
  const token = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
