import type { Metadata, Viewport } from "next";
import "./globals.css";
import FloatingCTA from "./components/FloatingCTA";
import SocialProofToast from "./components/SocialProofToast";

export const metadata: Metadata = {
  metadataBase: new URL("https://harangmarketing.com"),
  title: {
    default: "하랑마케팅 — 소상공인 마케팅 대행사 | 재계약률 95% · 10년 경력 · 플레이스·블로그·체험단",
    template: "%s — 하랑마케팅",
  },
  description:
    "마케팅비 쓰는데 매출이 안 오르시나요? 10년 경력 대표가 직접 담당합니다. 네이버 플레이스 SEO, 블로그, 체험단, 인스타그램으로 실제 방문객·예약·매출을 올려드립니다. 재계약률 95% · 상담 비용 0원 · 500+ 프로젝트 완료.",
  keywords: [
    "마케팅대행사", "소상공인마케팅", "자영업자마케팅",
    "네이버플레이스", "플레이스SEO", "플레이스상위노출",
    "블로그마케팅", "블로그상위노출", "블로그배포",
    "체험단모집", "체험단대행", "리뷰마케팅",
    "인스타그램마케팅", "SNS마케팅", "맘카페바이럴",
    "하랑마케팅", "카페마케팅", "음식점마케팅",
    "학원마케팅", "미용실마케팅", "피부과마케팅",
    "경기도마케팅", "일산마케팅", "고양시마케팅",
    "카카오맵마케팅", "지역마케팅", "소상공인광고",
  ],
  authors: [{ name: "하랑마케팅", url: "https://harangmarketing.com" }],
  creator: "하랑마케팅",
  publisher: "하랑마케팅",
  alternates: {
    canonical: "https://harangmarketing.com",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://harangmarketing.com",
    siteName: "하랑마케팅",
    title: "하랑마케팅 — 소상공인 전문 마케팅 대행사",
    description:
      "10년 경력 대표가 직접 담당. 플레이스 SEO·블로그·체험단·인스타그램 마케팅으로 매출 최대 +300%. 재계약률 95% · 상담 비용 0원.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "하랑마케팅 — 소상공인 전문 마케팅 대행사",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "하랑마케팅 — 소상공인 전문 마케팅 대행사",
    description: "10년 경력 대표 직접 담당 · 플레이스 SEO · 블로그 · 체험단 · 인스타그램 · 재계약률 95%",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "harangmarketing-verification",
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
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "하랑마케팅 상담 비용이 얼마인가요?",
                  "acceptedAnswer": { "@type": "Answer", "text": "상담 비용은 완전 무료입니다. 경쟁사 분석과 전략 제안까지 0원으로 제공합니다. 계약 강요도 없습니다." }
                },
                {
                  "@type": "Question",
                  "name": "네이버 플레이스 상위 노출까지 얼마나 걸리나요?",
                  "acceptedAnswer": { "@type": "Answer", "text": "업종과 경쟁 강도에 따라 다르지만 보통 1개월 차부터 순위 변화가 시작되고 3개월 차에 Top 5 진입이 가능합니다. 실제로 일산 카페 사례에서 3개월 만에 1위를 달성했습니다." }
                },
                {
                  "@type": "Question",
                  "name": "어떤 업종에 특화되어 있나요?",
                  "acceptedAnswer": { "@type": "Answer", "text": "카페·베이커리, 음식점·배달, 미용·네일·뷰티, 의원·한의원·피부과, 학원·교육, 온라인 쇼핑몰 등 6개 업종에 특화되어 있습니다. 10년간 500건 이상의 실전 경험을 보유하고 있습니다." }
                },
                {
                  "@type": "Question",
                  "name": "성과가 없으면 어떻게 되나요?",
                  "acceptedAnswer": { "@type": "Answer", "text": "3개월 안에 협의한 목표치를 달성하지 못하면 다음 달 비용을 조정합니다. 계약 전에 성과 가능 여부를 솔직하게 먼저 안내드립니다." }
                },
                {
                  "@type": "Question",
                  "name": "최소 계약 기간이 얼마인가요?",
                  "acceptedAnswer": { "@type": "Answer", "text": "기본 3개월 단위이며 성과에 따라 월 단위 연장도 가능합니다. 장기 계약 강요는 없습니다." }
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "하랑마케팅",
              "description": "10년 경력 대표가 직접 담당하는 소상공인 전문 마케팅 대행사. 네이버 플레이스 SEO, 블로그 마케팅, 체험단, 인스타그램 마케팅.",
              "url": "https://harangmarketing.com",
              "telephone": "010-7541-9054",
              "email": "jty0221@naver.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "장백로19 더루벤투스카운티 501호",
                "addressLocality": "일산동구",
                "addressRegion": "경기도 고양시",
                "addressCountry": "KR",
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "500",
              },
              "priceRange": "월 30만원~",
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://blog.naver.com/harangmarketing",
                "https://www.instagram.com/harangmarketing/",
                "https://pf.kakao.com/_MuUkG",
              ],
            }),
          }}
        />
        {children}
        <FloatingCTA />
        <SocialProofToast />
      </body>
    </html>
  );
}
