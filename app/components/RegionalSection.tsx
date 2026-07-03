import { MapPin, TrendingUp, Users, Star } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const REGIONS = [
  {
    name: "고양시 일산",
    tag: "주요 거점",
    desc: "일산동구·서구 카페, 음식점, 학원 집중 운영 지역",
    cases: 120,
    color: "border-blue-200 bg-blue-50",
    tagColor: "bg-blue-600 text-white",
  },
  {
    name: "고양시 화정·덕양",
    tag: "성장 지역",
    desc: "화정·원당·능곡 상권 소상공인 집중 케어",
    cases: 68,
    color: "border-indigo-200 bg-indigo-50",
    tagColor: "bg-indigo-600 text-white",
  },
  {
    name: "파주시",
    tag: "확장 지역",
    desc: "금촌·운정신도시 신규 개업 매장 중심 마케팅",
    cases: 54,
    color: "border-violet-200 bg-violet-50",
    tagColor: "bg-violet-600 text-white",
  },
  {
    name: "김포시",
    tag: "서부 지역",
    desc: "김포한강신도시·풍무동 상권 플레이스 특화",
    cases: 41,
    color: "border-sky-200 bg-sky-50",
    tagColor: "bg-sky-600 text-white",
  },
  {
    name: "양주·동두천",
    tag: "북부 지역",
    desc: "회천신도시 신생 매장 초반 브랜딩 집중 지원",
    cases: 28,
    color: "border-teal-200 bg-teal-50",
    tagColor: "bg-teal-600 text-white",
  },
  {
    name: "서울·수도권",
    tag: "광역 대응",
    desc: "마포·은평·서대문 등 수도권 전 지역 대응 가능",
    cases: 190,
    color: "border-amber-200 bg-amber-50",
    tagColor: "bg-amber-600 text-white",
  },
];

const STATS = [
  { icon: MapPin, val: "경기 북부", sub: "주력 거점" },
  { icon: Users, val: "500+", sub: "누적 클라이언트" },
  { icon: TrendingUp, val: "10년+", sub: "경기 지역 현장 경력" },
  { icon: Star, val: "95%", sub: "재계약률" },
];

export default function RegionalSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px]" style={{ background: "var(--h-amber)" }} />
                <span className="text-[11px] font-black uppercase tracking-[0.22em]" style={{ color: "var(--h-amber)" }}>지역 밀착 마케팅</span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-black leading-tight"
                style={{ color: "var(--h-dark)", letterSpacing: "-0.03em" }}
              >
                경기 북부 소상공인을<br className="md:hidden" /> 가장 잘 아는 대행사
              </h2>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--h-muted)" }}>
                일산에서 10년 동안 직접 발로 뛰었습니다.<br />
                지역 상권, 경쟁 매장, 타겟 고객층을 누구보다 잘 알고 있습니다.
              </p>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-3 shrink-0">
              {STATS.map(({ icon: Icon, val, sub }) => (
                <div
                  key={sub}
                  className="flex flex-col items-center text-center px-4 py-3 rounded-xl"
                  style={{ background: "var(--h-surface)", border: "1px solid var(--h-border)" }}
                >
                  <Icon size={14} strokeWidth={2} className="mb-1.5" style={{ color: "var(--h-blue)" }} />
                  <span className="text-base font-black" style={{ color: "var(--h-dark)" }}>{val}</span>
                  <span className="text-[10px] mt-0.5" style={{ color: "var(--h-muted)" }}>{sub}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Region cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {REGIONS.map((r, i) => (
            <RevealOnScroll key={r.name} delay={i * 50}>
              <div className={`rounded-2xl border p-4 h-full flex flex-col gap-2 ${r.color}`}>
                <span className={`self-start text-[10px] font-black px-2 py-0.5 rounded-full ${r.tagColor}`}>
                  {r.tag}
                </span>
                <p className="font-black text-sm text-gray-900 leading-snug">{r.name}</p>
                <p className="text-[11px] text-gray-500 leading-snug flex-1">{r.desc}</p>
                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={10} className="text-gray-400" />
                  <span className="text-[10px] text-gray-400 font-semibold">케이스 {r.cases}+건</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* 지역 선택 CTA */}
        <RevealOnScroll>
          <div className="mt-8 rounded-2xl p-5 md:p-7 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ background: "var(--h-surface)", border: "1px solid var(--h-border)" }}>
            <div>
              <p className="font-black text-gray-900 text-sm md:text-base">
                우리 지역 경쟁 매장 현황이 궁금하신가요?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                지역별 플레이스 순위 · 경쟁사 리뷰 현황 · 공략 키워드까지 무료로 분석해드립니다
              </p>
            </div>
            <a
              href="/free-check"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white transition-colors hover:opacity-90 shadow-sm"
              style={{ background: "var(--h-blue)" }}
            >
              <MapPin size={14} />
              우리 지역 무료 분석 받기
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
