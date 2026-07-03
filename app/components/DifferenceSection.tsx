"use client";

import { X, Check, AlertCircle } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const COMPARISONS = [
  {
    pain: "계약하면 담당자가 바뀐다",
    harang: "대표가 처음부터 끝까지 직접 담당",
    detail: "10년간 단 한 번도 담당자를 교체한 적이 없습니다.",
  },
  {
    pain: "성과 없어도 월 비용 그대로 청구",
    harang: "3개월 목표 미달 시 다음 달 비용 조정",
    detail: "계약 전에 성과 가능 여부를 먼저 솔직하게 말씀드립니다.",
  },
  {
    pain: "전략 없이 광고비만 쓴다",
    harang: "업종별 데이터 기반 맞춤 전략 설계",
    detail: "카페, 병원, 학원은 최적 채널이 다릅니다. 일괄 전략은 돈 낭비입니다.",
  },
  {
    pain: "보고서가 너무 복잡해서 이해 못 함",
    harang: "방문객·예약·매출 수치로 월 2회 명확 보고",
    detail: "마케팅 용어 없이 사장님이 바로 이해할 수 있는 수치만 보고합니다.",
  },
  {
    pain: "외주·프리랜서에 재하청 후 품질 하락",
    harang: "외주 없음 · 하랑 내부 직접 처리 100%",
    detail: "대행사가 또 대행사에 맡기는 구조, 하랑은 절대 하지 않습니다.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--h-bg)" }}>
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="w-6 h-[2px] bg-amber-500" />
              <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-500">하랑이 다른 이유</span>
              <div className="w-6 h-[2px] bg-amber-500" />
            </div>
            <h2
              className="text-2xl md:text-3xl font-black mb-3"
              style={{ color: "var(--h-dark)", letterSpacing: "-0.03em" }}
            >
              다른 대행사에서 실망하셨다면<br className="sm:hidden" /> 이 표를 먼저 보세요
            </h2>
            <p className="text-sm" style={{ color: "var(--h-muted)" }}>
              과장 없이 — 실제로 어떻게 다른지 비교해드립니다
            </p>
          </div>
        </RevealOnScroll>

        {/* Comparison table */}
        <div className="overflow-x-auto -mx-4 px-4">
          <div className="min-w-[580px]">
            {/* Header row */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="rounded-xl px-4 py-3 flex items-center gap-2" style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}>
                <div className="w-6 h-6 rounded-lg bg-red-500 flex items-center justify-center shrink-0">
                  <X size={12} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-xs font-black text-red-700">일반 대행사의 현실</span>
              </div>
              <div className="rounded-xl px-4 py-3 flex items-center gap-2" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <div className="w-6 h-6 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-xs font-black text-blue-700">하랑마케팅</span>
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {COMPARISONS.map((row, idx) => (
                <RevealOnScroll key={row.pain} delay={idx * 60}>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Left — pain */}
                    <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: "#FFF7F7", border: "1px solid #FEE2E2" }}>
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={10} className="text-red-500" strokeWidth={3} />
                      </div>
                      <p className="text-sm text-red-800 font-semibold leading-snug">{row.pain}</p>
                    </div>
                    {/* Right — harang */}
                    <div className="rounded-2xl p-4 flex flex-col gap-1" style={{ background: "#F0F7FF", border: "1px solid #DBEAFE" }}>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={10} className="text-blue-600" strokeWidth={3} />
                        </div>
                        <p className="text-sm text-blue-900 font-black leading-snug">{row.harang}</p>
                      </div>
                      <p className="text-[11px] text-blue-600 leading-relaxed pl-8">{row.detail}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-100">
              <AlertCircle size={14} className="text-amber-600" strokeWidth={2} />
              <p className="text-xs text-amber-700 font-semibold">
                이 약속을 지키지 못하면 속이면 10배 보상을 드립니다
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
