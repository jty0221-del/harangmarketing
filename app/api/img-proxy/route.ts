import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const raw = req.nextUrl.searchParams.get("url");
  if (!raw) return new NextResponse("missing url", { status: 400 });

  let url: string;
  try {
    url = decodeURIComponent(raw);
    new URL(url); // validate
  } catch {
    return new NextResponse("invalid url", { status: 400 });
  }

  // Only allow known Naver CDN domains
  const allowed = [
    "postfiles.pstatic.net",
    "blogfiles.pstatic.net",
    "mblogthumb-phinf.pstatic.net",
    "blogpfthumb-phinf.pstatic.net",
    "phinf.pstatic.net",
  ];
  const host = new URL(url).hostname;
  if (!allowed.some((d) => host.endsWith(d))) {
    return new NextResponse("domain not allowed", { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        Referer: "https://blog.naver.com/",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
    });

    if (!res.ok) return new NextResponse("upstream error", { status: 502 });

    const contentType = res.headers.get("content-type") ?? "image/jpeg";
    const buffer = await res.arrayBuffer();

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
      },
    });
  } catch {
    return new NextResponse("fetch error", { status: 502 });
  }
}
