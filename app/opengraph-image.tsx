import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "하랑마케팅 — 소상공인 전문 마케팅 대행사";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #0A1B3D 0%, #0050F2 70%, #1d4ed8 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* 배경 원형 장식 */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 480, height: 480, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
        <div style={{ position: "absolute", bottom: -140, right: 80, width: 340, height: 340, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

        {/* 로고 */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 36 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(255,255,255,0.18)",
              border: "2px solid rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "white",
            }}
          >
            H
          </div>
          <span style={{ fontSize: 28, fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>하랑마케팅</span>
          <div
            style={{
              marginLeft: 8,
              padding: "5px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              fontSize: 14,
              color: "rgba(255,255,255,0.85)",
              fontWeight: 700,
            }}
          >
            소상공인 전문 마케팅 대행사
          </div>
        </div>

        {/* 헤드라인 */}
        <div style={{ fontSize: 56, fontWeight: 900, color: "white", lineHeight: 1.15, letterSpacing: "-0.03em", marginBottom: 20 }}>
          광고비가 아깝다면,
          <br />
          <span style={{ color: "#bfdbfe" }}>하랑마케팅과 상담하세요.</span>
        </div>

        {/* 서브 */}
        <div style={{ fontSize: 22, color: "rgba(255,255,255,0.7)", marginBottom: 44, letterSpacing: "-0.01em" }}>
          대표 직접 담당 · 재계약률 95% · 상담 비용 0원
        </div>

        {/* 통계 배지 */}
        <div style={{ display: "flex", gap: 14 }}>
          {[
            { val: "10년+", label: "마케팅 경력" },
            { val: "500+", label: "완료 프로젝트" },
            { val: "95%", label: "재계약률" },
            { val: "0원", label: "상담 비용" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: 16,
                padding: "14px 22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 28, fontWeight: 900, color: "white", letterSpacing: "-0.02em" }}>{s.val}</span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div style={{ position: "absolute", bottom: 40, right: 80, fontSize: 17, color: "rgba(255,255,255,0.35)", fontWeight: 600, letterSpacing: "0.03em" }}>
          harangmarketing.com
        </div>
      </div>
    ),
    { ...size }
  );
}
