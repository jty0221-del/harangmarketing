"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  Coffee, UtensilsCrossed, Scissors, Stethoscope, GraduationCap, ShoppingBag, HelpCircle,
  MapPin, Star, BookOpen, AtSign, Users, Megaphone, TrendingUp, BarChart3,
  ChevronRight, ArrowRight, CheckCircle2, MessageCircle, Calculator,
} from "lucide-react";

const INDUSTRIES = [
  { id: "cafe", icon: Coffee, label: "카페·베이커리", color: "from-amber-500 to-orange-500",
    topServices: ["플레이스 SEO", "인스타그램 마케팅", "리뷰 마케팅"],
    avgResult: "방문객 +167%", caseLabel: "경기 일산 카페 3개월" },
  { id: "food", icon: UtensilsCrossed, label: "음식점·배달", color: "from-red-500 to-rose-600",
    topServices: ["리뷰 마케팅", "맘카페 바이럴", "블로그 배포"],
    avgResult: "매출 +113%", caseLabel: "서울 마포 음식점 4개월" },
  { id: "beauty", icon: Scissors, label: "미용·네일·뷰티", color: "from-pink-500 to-rose-500",
    topServices: ["인스타그램 마케팅", "체험단 모집", "카카오맵 마케팅"],
    avgResult: "예약 완전 마감", caseLabel: "수원 네일샵 3개월" },
  { id: "medical", icon: Stethoscope, label: "의원·한의원·피부과", color: "from-blue-500 to-cyan-600",
    topServices: ["블로그 관리", "체험단 모집", "플레이스 SEO"],
    avgResult: "신규예약 +300%", caseLabel: "경기 분당 피부과 6개월" },
  { id: "edu", icon: GraduationCap, label: "학원·교육", color: "from-indigo-500 to-purple-600",
    topServices: ["맘카페 바이럴", "홈페이지형 블로그", "블로그 관리"],
    avgResult: "수강생 +55%", caseLabel: "경기 고양 학원 3개월" },
  { id: "shop", icon: ShoppingBag, label: "온라인 쇼핑몰", color: "from-green-500 to-emerald-600",
    topServices: ["블로그 SEO", "체험단 모집", "블로그 배포"],
    avgResult: "매출 +64%", caseLabel: "전국 온라인 5개월" },
  { id: "other", icon: HelpCircle, label: "기타 업종", color: "from-gray-500 to-gray-700",
    topServices: ["무료 상담 후 맞춤 추천"],
    avgResult: "업종별 맞춤 분석", caseLabel: "상담 후 전략 수립" },
];

const BUDGETS = [
  { id: "b1", label: "월 30만원 미만", tier: "lite" },
  { id: "b2", label: "월 30~50만원", tier: "starter" },
  { id: "b3", label: "월 50~100만원", tier: "growth" },
  { id: "b4", label: "월 100~200만원", tier: "pro" },
  { id: "b5", label: "월 200만원 이상", tier: "full" },
  { id: "b6", label: "아직 미정", tier: "consult" },
];

const GOALS = [
  { id: "place", icon: MapPin, label: "플레이스 순위 올리기" },
  { id: "review", icon: Star, label: "리뷰·후기 늘리기" },
  { id: "blog", icon: BookOpen, label: "블로그 검색 노출" },
  { id: "sns", icon: AtSign, label: "SNS 팔로워·인지도" },
  { id: "viral", icon: Megaphone, label: "맘카페 입소문" },
  { id: "experience", icon: Users, label: "체험단 모집" },
  { id: "sales", icon: TrendingUp, label: "직접 매출 증대" },
  { id: "brand", icon: BarChart3, label: "브랜드 신뢰도" },
];

type Tier = "lite" | "starter" | "growth" | "pro" | "full" | "consult";

const TIER_PACKAGES: Record<Tier, { name: string; priceLabel: string; color: string; services: string[]; roi: string; timeline: string }> = {
  lite: {
    name: "라이트 플랜", priceLabel: "월 20~29만원", color: "from-gray-500 to-gray-700",
    services: ["플레이스 SEO 기초 최적화", "블로그 키워드 분석"],
    roi: "ROI 1.5배 예상", timeline: "성과 기대 3~4개월",
  },
  starter: {
    name: "스타터 플랜", priceLabel: "월 30~49만원", color: "from-blue-500 to-blue-700",
    services: ["플레이스 SEO 최적화", "블로그 관리 (주 2회)", "월 리포트 1회"],
    roi: "ROI 1.8배 예상", timeline: "성과 기대 2~3개월",
  },
  growth: {
    name: "그로스 플랜", priceLabel: "월 50~99만원", color: "from-blue-600 to-indigo-700",
    services: ["플레이스 SEO + 순위상승", "블로그 배포 (월 4건)", "리뷰 마케팅", "월 리포트 2회"],
    roi: "ROI 2.4배 예상", timeline: "성과 기대 2~3개월",
  },
  pro: {
    name: "프로 플랜", priceLabel: "월 100~199만원", color: "from-blue-600 to-indigo-700",
    services: ["플레이스 SEO + 순위상승", "블로그 배포 (월 8건)", "체험단 모집 대행", "리뷰 마케팅", "인스타그램 기초", "주간 최적화"],
    roi: "ROI 2.8배 예상", timeline: "성과 기대 1~2개월",
  },
  full: {
    name: "풀패키지 플랜", priceLabel: "월 200만원~", color: "from-blue-700 to-blue-900",
    services: ["모든 채널 통합 운영", "멀티채널 콘텐츠 전략", "체험단 + 인스타그램 + 맘카페", "주간 전담 리포트", "대표 직접 전략 미팅"],
    roi: "ROI 3.1배 예상", timeline: "성과 기대 1개월~",
  },
  consult: {
    name: "맞춤 상담 플랜", priceLabel: "예산 협의", color: "from-blue-500 to-blue-700",
    services: ["무료 상담 후 맞춤 설계", "업종별 최적 조합 추천", "예산 범위 내 최대 효과"],
    roi: "업종별 평균 ROI 2배+", timeline: "상담 당일 전략 제안",
  },
};

function getRecommendation(industryId: string, budgetId: string, goals: string[]) {
  const ind = INDUSTRIES.find((i) => i.id === industryId);
  const bud = BUDGETS.find((b) => b.id === budgetId);
  const tier = (bud?.tier ?? "consult") as Tier;
  const pkg = TIER_PACKAGES[tier];

  const goalMap: Record<string, string> = {
    place: "플레이스 SEO 최적화",
    review: "리뷰 마케팅",
    blog: "블로그 관리 대행",
    sns: "인스타그램 마케팅",
    viral: "맘카페 바이럴",
    experience: "체험단 모집 대행",
  };

  const priority: string[] = [];
  if (ind) ind.topServices.forEach((s) => { if (!priority.includes(s)) priority.push(s); });
  goals.forEach((g) => {
    const mapped = goalMap[g];
    if (mapped && !priority.includes(mapped)) priority.push(mapped);
  });

  return { pkg, priority: priority.slice(0, 4), industry: ind };
}

export default function EstimatePage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  const rec = step === 4 ? getRecommendation(selectedIndustry, selectedBudget, selectedGoals) : null;

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-14 relative overflow-hidden">
          <div className="absolute top-0 right-1/3 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-5">
              <Calculator size={11} strokeWidth={2.5} />
              무료 · 3분 · 맞춤 설계
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">
              내 매장에 맞는<br /><span className="text-blue-400">마케팅 패키지</span>를 찾아드립니다
            </h1>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              업종·예산·목표를 선택하면 10년 경력 데이터로<br className="hidden sm:block" />
              최적의 마케팅 조합과 예상 ROI를 제안합니다.
            </p>
          </div>
        </section>

        {/* Quiz */}
        <section className="py-10 md:py-16 bg-gray-50 min-h-[60vh]">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            {/* Progress */}
            <div className="flex items-center gap-1.5 mb-10">
              {([1, 2, 3, 4] as const).map((s) => (
                <div key={s} className="flex items-center gap-1.5 flex-1">
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                    step > s ? "bg-blue-600 text-white" : step === s ? "bg-blue-600 text-white ring-4 ring-blue-100" : "bg-gray-200 text-gray-400"
                  }`}>
                    {step > s ? <CheckCircle2 size={12} /> : s}
                  </div>
                  {s < 4 && <div className={`h-0.5 flex-1 transition-colors ${step > s ? "bg-blue-600" : "bg-gray-200"}`} />}
                </div>
              ))}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">업종을 선택해주세요</h2>
                <p className="text-gray-500 text-sm mb-6">업종마다 효과적인 마케팅 채널이 다릅니다.</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
                  {INDUSTRIES.map((ind) => {
                    const Icon = ind.icon;
                    const sel = selectedIndustry === ind.id;
                    return (
                      <button key={ind.id} onClick={() => setSelectedIndustry(ind.id)}
                        className={`flex flex-col items-center gap-2.5 p-4 rounded-2xl border text-center transition-all ${
                          sel ? "border-blue-500 bg-blue-50 shadow-sm" : "border-gray-200 bg-white hover:border-blue-200 hover:bg-blue-50/40"
                        }`}>
                        <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-sm`}>
                          <Icon size={18} className="text-white" strokeWidth={2} />
                        </div>
                        <span className={`text-xs font-bold leading-tight ${sel ? "text-blue-700" : "text-gray-700"}`}>{ind.label}</span>
                        {sel && <CheckCircle2 size={12} className="text-blue-500" />}
                      </button>
                    );
                  })}
                </div>
                <div className="flex justify-end">
                  <button disabled={!selectedIndustry} onClick={() => setStep(2)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all ${
                      selectedIndustry ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                    다음 단계 <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">월 마케팅 예산은?</h2>
                <p className="text-gray-500 text-sm mb-6">예산 범위에서 최고 효율의 조합을 설계합니다.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {BUDGETS.map((b) => {
                    const sel = selectedBudget === b.id;
                    return (
                      <button key={b.id} onClick={() => setSelectedBudget(b.id)}
                        className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all ${
                          sel ? "border-blue-500 bg-blue-50 shadow-sm" : "border-gray-200 bg-white hover:border-blue-200"
                        }`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                          sel ? "border-blue-500 bg-blue-500" : "border-gray-300"
                        }`}>
                          {sel && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <span className={`text-sm font-bold ${sel ? "text-blue-700" : "text-gray-700"}`}>{b.label}</span>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 font-semibold">← 이전</button>
                  <button disabled={!selectedBudget} onClick={() => setStep(3)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all ${
                      selectedBudget ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                    다음 단계 <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">가장 원하는 목표는?</h2>
                <p className="text-gray-500 text-sm mb-6">복수 선택 가능합니다.</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {GOALS.map((g) => {
                    const Icon = g.icon;
                    const sel = selectedGoals.includes(g.id);
                    return (
                      <button key={g.id} onClick={() => toggleGoal(g.id)}
                        className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all text-center ${
                          sel ? "border-blue-500 bg-blue-50 shadow-sm" : "border-gray-200 bg-white hover:border-blue-200"
                        }`}>
                        <Icon size={18} className={sel ? "text-blue-600" : "text-gray-400"} strokeWidth={2} />
                        <span className={`text-xs font-bold leading-tight ${sel ? "text-blue-700" : "text-gray-600"}`}>{g.label}</span>
                        {sel && <CheckCircle2 size={12} className="text-blue-500" />}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center justify-between">
                  <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-gray-600 font-semibold">← 이전</button>
                  <button disabled={selectedGoals.length === 0} onClick={() => setStep(4)}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm transition-all ${
                      selectedGoals.length > 0 ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm" : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}>
                    결과 보기 <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Result */}
            {step === 4 && rec && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
                    <CheckCircle2 size={12} strokeWidth={2.5} />
                    맞춤 패키지 완성
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-gray-900">
                    {rec.industry?.label ?? ""} 맞춤 추천 플랜
                  </h2>
                </div>

                <div className={`bg-gradient-to-br ${rec.pkg.color} rounded-2xl p-6 mb-5 text-white`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">추천 패키지</p>
                      <h3 className="text-2xl font-black">{rec.pkg.name}</h3>
                      <p className="text-white/80 text-sm font-semibold mt-0.5">{rec.pkg.priceLabel}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-white/60 mb-0.5">예상 성과</div>
                      <div className="text-sm font-black">{rec.pkg.roi}</div>
                      <div className="text-xs text-white/70">{rec.pkg.timeline}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {rec.pkg.services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={13} className="text-white/70 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {rec.priority.length > 0 && (
                  <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-5">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">업종 우선 추천 서비스</p>
                    <div className="flex flex-wrap gap-2">
                      {rec.priority.map((s) => (
                        <span key={s} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700 font-semibold">
                          <CheckCircle2 size={11} className="text-blue-400" strokeWidth={2.5} />
                          {s}
                        </span>
                      ))}
                    </div>
                    {rec.industry && (
                      <p className="text-xs text-gray-400 mt-3">
                        참고 사례: {rec.industry.caseLabel} —{" "}
                        <span className="font-bold text-blue-600">{rec.industry.avgResult}</span>
                      </p>
                    )}
                  </div>
                )}

                {rec.industry && rec.industry.id !== "other" && (
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                      <TrendingUp size={18} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-xs text-blue-500 font-bold mb-0.5">유사 업종 실제 사례</p>
                      <p className="text-sm font-black text-blue-900">{rec.industry.caseLabel}</p>
                      <p className="text-xs text-blue-700 font-bold mt-0.5">결과: {rec.industry.avgResult}</p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
                  <p className="text-sm font-bold text-gray-700 mb-1">이 플랜이 나에게 맞는지 확인하고 싶으신가요?</p>
                  <p className="text-xs text-gray-400 mb-4">무료 상담에서 더 정밀한 전략과 실제 견적을 알려드립니다. 계약 강요 없음.</p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href={`/contact?estimate=${encodeURIComponent(rec.pkg.name)}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors shadow-sm">
                      이 플랜으로 무료 상담 신청 <ArrowRight size={14} />
                    </Link>
                    <a href="https://pf.kakao.com/_MuUkG/chat" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-yellow-400 text-gray-900 font-black text-sm hover:bg-yellow-300 transition-colors">
                      <MessageCircle size={14} />
                      카카오로 바로 문의
                    </a>
                  </div>
                  <button onClick={() => { setStep(1); setSelectedIndustry(""); setSelectedBudget(""); setSelectedGoals([]); }}
                    className="mt-3 text-xs text-gray-400 hover:text-gray-600 underline">
                    처음부터 다시 하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Trust Strip */}
        <section className="py-8 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-gray-500">
              {["상담 비용 0원", "계약 강요 없음", "24시간 내 연락", "대표 직접 담당", "10년 경력", "재계약률 95%"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-blue-500" strokeWidth={2.5} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
