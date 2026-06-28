"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Phone, MessageCircle, ArrowRight, CheckCircle2, Clock,
  Search, FileText, TrendingUp, BarChart3, RefreshCw, Handshake, ChevronDown,
} from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Phone,
    title: "무료 상담 신청",
    duration: "D-Day",
    color: "from-blue-500 to-blue-700",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "카카오톡 또는 전화로 연락하시면 됩니다. 상담 비용은 0원이며, 부담 없이 현재 상황을 말씀해 주세요.",
    details: [
      "카카오톡 채널 / 전화 / 홈페이지 폼 중 편한 방법으로",
      "현재 운영 중인 플랫폼·업종·고민 간단히 공유",
      "담당자가 1영업일 내 연락드립니다",
    ],
  },
  {
    number: "02",
    icon: Search,
    title: "무료 경쟁사 분석",
    duration: "D+1~2",
    color: "from-blue-500 to-blue-700",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "네이버 플레이스·블로그·SNS 현황과 경쟁사를 비교 분석한 리포트를 무료로 제공합니다.",
    details: [
      "내 매장 현재 순위·리뷰·콘텐츠 현황 진단",
      "경쟁사 상위 3곳 전략 분석",
      "업종별 맞춤 성장 기회 도출",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "맞춤 전략 제안",
    duration: "D+3",
    color: "from-blue-600 to-indigo-700",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "분석 결과를 바탕으로 예산·기간·목표에 딱 맞는 마케팅 플랜을 제안드립니다.",
    details: [
      "월 예산별 최적 서비스 조합 제안",
      "3·6개월 예상 성과 수치 제시",
      "진행 우선순위·타임라인 안내",
    ],
  },
  {
    number: "04",
    icon: Handshake,
    title: "계약 및 킥오프",
    duration: "D+4~7",
    color: "from-blue-500 to-blue-700",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "계약 후 즉시 담당 매니저가 배정되며 킥오프 미팅에서 세부 실행 계획을 확정합니다.",
    details: [
      "표준 계약서 작성 (전자서명 가능)",
      "전담 매니저 1:1 배정",
      "계정 권한·소재·자료 인수인계",
    ],
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "실행 및 콘텐츠 제작",
    duration: "1개월~",
    color: "from-blue-600 to-blue-800",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "블로그·플레이스·SNS 채널별 콘텐츠를 제작·배포하고, 리뷰·체험단 캠페인을 가동합니다.",
    details: [
      "주 2회 이상 콘텐츠 업로드",
      "키워드 최적화 블로그 발행",
      "리뷰 캠페인·체험단 모집 진행",
    ],
  },
  {
    number: "06",
    icon: BarChart3,
    title: "월간 성과 리포트",
    duration: "매월 말",
    color: "from-blue-700 to-indigo-800",
    ring: "ring-blue-200",
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-700",
    desc: "순위·방문자·리뷰·문의 등 핵심 KPI를 매월 리포트로 공유하고 다음 달 전략을 조정합니다.",
    details: [
      "플랫폼별 순위·노출·클릭 수치 공유",
      "전월 대비 성과 분석",
      "다음 달 전략 수정·개선 방향 협의",
    ],
  },
];

const FAQS = [
  { q: "상담 후 꼭 계약해야 하나요?", a: "아닙니다. 무료 분석과 제안까지는 완전 무료이며 의무가 없습니다. 제안이 마음에 드실 때만 계약하시면 됩니다." },
  { q: "계약 기간은 얼마인가요?", a: "기본 3개월 단위이며, 성과에 따라 월 단위 연장도 가능합니다. 장기 계약 강요는 없습니다." },
  { q: "중간에 서비스를 변경할 수 있나요?", a: "가능합니다. 월 리포트 협의 시 서비스 항목을 추가·변경·교체할 수 있습니다." },
  { q: "결과가 나오는 데 얼마나 걸리나요?", a: "업종과 경쟁 강도에 따라 다르나 보통 1개월 차부터 순위 변화가 시작되고, 3개월 차에 가시적 성과가 납니다." },
  { q: "담당자가 자주 바뀌지 않나요?", a: "대표가 직접 전략을 수립하고 담당합니다. 일반 대행사처럼 신입 직원에게 맡기지 않으며, 10년+ 경력의 대표가 계약 기간 내내 1:1로 담당합니다." },
  { q: "작업 내용을 어떻게 확인할 수 있나요?", a: "매월 말 플랫폼별 순위·리뷰 수·방문자 수 등 수치가 담긴 상세 리포트를 제공합니다. 언제든지 카카오톡으로 진행 상황을 문의하실 수 있습니다." },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/6 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Process</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
              상담부터 성과까지<br /><span className="text-blue-400">6단계 진행 과정</span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
              처음 연락하면 어떻게 진행되는지 미리 알고 오시면 더 빠르게 시작할 수 있어요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm transition-colors shadow-lg shadow-blue-900/30"
              >
                지금 무료 상담 신청 <ArrowRight size={15} />
              </Link>
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black text-sm transition-colors"
              >
                <MessageCircle size={15} />
                카카오로 먼저 물어보기
              </a>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="relative">
              {/* vertical line desktop */}
              <div className="hidden md:block absolute left-[52px] top-8 bottom-8 w-px bg-gray-200" />

              <div className="space-y-6 md:space-y-8">
                {STEPS.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.number} className="relative flex gap-4 md:gap-6 group">
                      {/* Icon column */}
                      <div className="shrink-0 flex flex-col items-center">
                        <div className={`w-[52px] h-[52px] md:w-[56px] md:h-[56px] rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md ring-4 ${step.ring} relative z-10`}>
                          <Icon size={20} className="text-white" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`flex-1 ${step.bg} border ${step.border} rounded-2xl p-4 md:p-5 group-hover:shadow-md transition-shadow`}>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <span className={`text-[10px] font-black ${step.text} uppercase tracking-widest`}>Step {step.number}</span>
                            <h3 className="text-base md:text-lg font-black text-gray-900 leading-tight">{step.title}</h3>
                          </div>
                          <span className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg ${step.bg} border ${step.border} ${step.text} text-[11px] font-bold`}>
                            <Clock size={10} strokeWidth={2.5} />
                            {step.duration}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{step.desc}</p>
                        <ul className="space-y-1">
                          {step.details.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-xs text-gray-500">
                              <CheckCircle2 size={12} className={`${step.text} shrink-0 mt-0.5`} strokeWidth={2.5} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* After 6 steps CTA */}
            <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-center">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={20} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="text-white font-black text-lg md:text-xl mb-2">6단계 후, 지속적인 성장 사이클</h3>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm mx-auto mb-6">
                리포트 → 전략 개선 → 실행 사이클을 반복하면서 매달 더 나은 성과를 만들어 갑니다.
                재계약률 95%가 이 과정에서 나옵니다.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white text-blue-700 font-black text-sm hover:bg-blue-50 transition-colors shadow-sm"
              >
                지금 첫 번째 단계 시작하기 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Timeline summary strip */}
        <section className="py-8 bg-white border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center mb-5">일반적인 진행 타임라인</p>
            <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
              {[
                { label: "상담", sub: "D-Day", w: "w-16", active: true },
                { label: "분석", sub: "D+1~2", w: "w-20", active: true },
                { label: "제안", sub: "D+3", w: "w-16", active: true },
                { label: "계약", sub: "D+4~7", w: "w-20", active: true },
                { label: "실행", sub: "1개월~", w: "w-24 flex-1", active: false },
                { label: "리포트", sub: "매월 말", w: "w-20", active: false },
              ].map((t, i, arr) => (
                <div key={t.label} className="flex items-center shrink-0 last:shrink">
                  <div className={`flex flex-col items-center gap-1 px-3 py-2.5 rounded-xl ${t.active ? "bg-blue-600" : "bg-gray-100"}`}>
                    <span className={`text-xs font-black ${t.active ? "text-white" : "text-gray-500"}`}>{t.label}</span>
                    <span className={`text-[10px] ${t.active ? "text-blue-200" : "text-gray-400"}`}>{t.sub}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <div className={`h-0.5 w-6 shrink-0 ${t.active && arr[i + 1]?.active ? "bg-blue-400" : "bg-gray-200"}`} />
                  )}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-400 text-center mt-4">· 파란색: 계약 전 무료 제공 단계 · 회색: 계약 후 진행</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">FAQ</p>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">자주 묻는 질문</h2>
            </div>
            <div className="space-y-2">
              {FAQS.map((faq, i) => (
                <details key={faq.q} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-colors">
                  <summary className="flex items-center gap-3 p-5 cursor-pointer list-none select-none hover:bg-blue-50/30 transition-colors">
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-800 text-sm flex-1">Q. {faq.q}</span>
                    <ChevronDown size={15} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 pt-3 ml-9 text-sm text-gray-500 leading-relaxed border-t border-blue-50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Mini testimonials */}
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest text-center mb-6">이 과정을 거친 사장님들의 이야기</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "A 카페 대표", loc: "경기 일산", quote: "상담부터 리포트까지 전부 대표님이 직접 챙겨주셨어요. 3개월 만에 플레이스 1위가 됐습니다.", period: "3개월" },
                { name: "B 네일샵 대표", loc: "경기 수원", quote: "처음에 반신반의했는데, 2주 지나니까 예약이 들어오기 시작하더라고요. 지금은 2주 치가 꽉 찼어요.", period: "2개월" },
                { name: "C 음식점 대표", loc: "서울 마포", quote: "리뷰가 10개도 안 됐는데, 4개월 후엔 180개가 됐어요. 배달 매출도 두 배 이상 올랐습니다.", period: "4개월" },
              ].map((t) => (
                <div key={t.name} className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" className="shrink-0"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed italic mb-4">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black text-gray-800">{t.name}</p>
                      <p className="text-[10px] text-gray-400">{t.loc}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-700 text-[10px] font-bold">{t.period} 진행</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-lg md:text-xl font-black text-gray-900 mb-2">준비되셨나요?</h2>
            <p className="text-gray-500 text-sm mb-6">상담 비용 0원 · 부담 없이 시작해보세요</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors shadow-sm"
              >
                무료 상담 신청 <ArrowRight size={14} />
              </Link>
              <Link
                href="/estimate"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                패키지 견적 계산기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
