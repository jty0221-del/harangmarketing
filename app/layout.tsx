import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://harangmarketing.com"),
  title: {
    default: "하랑마케팅 — 상생을 기반으로 한 마케팅",
    template: "%s — 하랑마케팅",
  },
  description:
    "10년 경력 전문가가 직접 담당하는 소상공인 전문 마케팅 대행사. 네이버 플레이스 SEO, 블로그 마케팅, 체험단, 인스타그램 마케팅으로 실제 매출을 올려드립니다. 재계약률 95%.",
  keywords: [
    "마케팅대행사", "소상공인마케팅", "네이버플레이스", "플레이스SEO",
    "블로그마케팅", "체험단모집", "인스타그램마케팅", "하랑마케팅",
    "카페마케팅", "음식점마케팅", "학원마케팅", "맘카페바이럴",
  ],
  authors: [{ name: "하랑마케팅", url: "https://harangmarketing.com" }],
  creator: "하랑마케팅",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://harangmarketing.com",
    siteName: "하랑마케팅",
    title: "하랑마케팅 — 상생을 기반으로 한 마케팅",
    description:
      "10년 경력 전문가가 직접 담당. 네이버 플레이스 SEO·블로그·체험단·인스타그램 마케팅으로 실제 매출을 올려드립니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "하랑마케팅 — 상생을 기반으로 한 마케팅",
    description: "10년 경력 전문가가 직접 담당하는 소상공인 전문 마케팅 대행사",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: {
    // google: "추후 Search Console 인증 코드 추가",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
