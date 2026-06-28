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
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f1e3c 50%, #0a0f1e 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Logo row */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "36px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 900,
              color: "white",
            }}
          >
            H
          </div>
          <span style={{ fontSize: "24px", fontWeight: 900, color: "white" }}>하랑마케팅</span>
          <div
            style={{
              marginLeft: "12px",
              padding: "4px 14px",
              borderRadius: "999px",
              background: "rgba(59,130,246,0.2)",
              border: "1px solid rgba(59,130,246,0.4)",
              fontSize: "13px",
              color: "#93c5fd",
              fontWeight: 700,
            }}
          >
            10년 경력 · 소상공인 전문
          </div>
        </div>

        {/* Headline */}
        <div style={{ fontSize: "52px", fontWeight: 900, color: "white", lineHeight: 1.2, marginBottom: "20px" }}>
          마케팅비를 쓰는데
          <br />
          <span style={{ color: "#60a5fa" }}>매출이 안 오르나요?</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: "22px", color: "#94a3b8", lineHeight: 1.5, marginBottom: "40px", maxWidth: "700px" }}>
          업종별 맞춤 전략 · 대표 직접 담당 · 상담 비용 0원
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "32px" }}>
          {[
            { val: "500+", label: "완료 프로젝트" },
            { val: "95%", label: "재계약률" },
            { val: "+300%", label: "최대 매출 상승" },
            { val: "0원", label: "상담 비용" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "32px", fontWeight: 900, color: "#3b82f6" }}>{s.val}</span>
              <span style={{ fontSize: "14px", color: "#64748b", marginTop: "2px" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "#334155",
            fontWeight: 600,
          }}
        >
          harangmarketing.com
        </div>
      </div>
    ),
    { ...size }
  );
}
