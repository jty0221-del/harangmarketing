import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, industry, budget, goals, message } = body;

    const goalsText = goals?.length > 0 ? `\n목표: ${goals.join(", ")}` : "";
    const budgetText = budget ? `\n예산: ${budget}` : "";
    const msgText = message ? `\n추가 문의: ${message}` : "";

    const text = [
      "[하랑마케팅 상담 신청]",
      `이름/업체명: ${name}`,
      `연락처: ${phone}`,
      `업종: ${industry}`,
      budgetText,
      goalsText,
      msgText,
    ]
      .filter(Boolean)
      .join("\n");

    // 네이버 메일 SMTP는 서버리스에서 불안정 — Resend/SendGrid 연동 전까지
    // mailto 방식 대신 환경변수로 웹훅 URL 지원
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
