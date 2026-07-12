import { NextRequest, NextResponse } from "next/server";
import { createSessionToken, ADMIN_COOKIE_NAME } from "../../../lib/admin-auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    return NextResponse.json({ ok: false, error: "관리자 비밀번호가 설정되지 않았습니다" }, { status: 500 });
  }
  if (password !== adminPassword) {
    return NextResponse.json({ ok: false, error: "비밀번호가 일치하지 않습니다" }, { status: 401 });
  }

  const token = createSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
