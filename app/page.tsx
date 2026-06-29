"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, X, Phone, MessageCircle,
  TrendingUp, Users, Star, BarChart3, FileText, MapPin,
  Search, BookOpen, Megaphone, AtSign, ChevronRight, ChevronDown,
  ShieldCheck, Clock, Handshake, Quote,
  Coffee, Scissors, GraduationCap, Stethoscope,
  UtensilsCrossed, ShoppingBag, Calculator,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedCounter from "./components/AnimatedCounter";
import PhotoPlaceholder from "./components/PhotoPlaceholder";

/* ─── Data ─────────────────────────────────────── */

const INDUSTRIES = [
  {
    icon: Coffee,
    name: "카페·베이커리",
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["플레이스 상위 노출", "포토리뷰 전략", "인스타 비주얼"],
    result: "+167%",
    resultLabel: "월 방문객",
    before: "일 방문 28명",
    after: "일 방문 75명",
    duration: "3개월",
    location: "경기 일산",
  },
  {
    icon: UtensilsCrossed,
    name: "음식점·배달",
    color: "from-blue-600 to-indigo-700",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["배달앱 리뷰 쌓기", "맘카페 바이럴", "블로그 맛집 등록"],
    result: "+113%",
    resultLabel: "월 매출",
    before: "월 매출 480만",
    after: "월 매출 1,022만",
    duration: "4개월",
    location: "서울 성수",
  },
  {
    icon: Scissors,
    name: "미용·네일·뷰티",
    color: "from-blue-500 to-blue-700",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["인스타 포트폴리오", "체험단 모집", "예약 전환 최적화"],
    result: "예약 완전 마감",
    resultLabel: "진행 2주 후",
    before: "예약 가동률 41%",
    after: "예약 100% 마감",
    duration: "2개월",
    location: "인천 부평",
  },
  {
    icon: Stethoscope,
    name: "의원·한의원·피부과",
    color: "from-blue-600 to-blue-800",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["블로그 신뢰도 강화", "체험단 후기", "플레이스 SEO"],
    result: "+300%",
    resultLabel: "신규 예약",
    before: "월 신규 12건",
    after: "월 신규 48건",
    duration: "5개월",
    location: "경기 분당",
  },
  {
    icon: GraduationCap,
    name: "학원·교육",
    color: "from-blue-700 to-indigo-800",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["맘카페 입소문", "홈페이지형 블로그", "블로그 관리"],
    result: "+55%",
    resultLabel: "수강생",
    before: "수강생 62명",
    after: "수강생 96명",
    duration: "3개월",
    location: "서울 목동",
  },
  {
    icon: ShoppingBag,
    name: "온라인 쇼핑몰",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    borderLight: "border-blue-100",
    points: ["블로그 SEO", "체험단 후기", "콘텐츠 마케팅"],
    result: "+64%",
    resultLabel: "월 매출",
    before: "월 매출 230만",
    after: "월 매출 377만",
    duration: "4개월",
    location: "전국 온라인",
  },
];

const SERVICES = [
  { icon: Search, title: "플레이스 SEO 최적화", desc: "네이버 플레이스 알고리즘 분석으로 업종별 핵심 키워드 상위 노출을 달성합니다.", color: "from-blue-600 to-blue-700", popular: true },
  { icon: Star, title: "리뷰 마케팅", desc: "긍정 리뷰를 전략적으로 쌓아 신규 고객의 첫 방문 결정을 이끌어냅니다.", color: "from-blue-500 to-blue-700", popular: true },
  { icon: AtSign, title: "인스타그램 마케팅", desc: "콘텐츠 기획부터 릴스·광고 운영까지 인스타그램 채널 성장을 전담합니다.", color: "from-blue-600 to-indigo-700", popular: true },
  { icon: FileText, title: "블로그 배포(기자단)", desc: "전문 작가가 브랜드 맞춤 기사를 작성하고 20개+ 채널에 동시 배포합니다.", color: "from-blue-500 to-blue-700" },
  { icon: BookOpen, title: "홈페이지형 블로그 제작", desc: "네이버 블로그를 전문 홈페이지처럼 구성해 신뢰도와 검색 노출을 높입니다.", color: "from-blue-600 to-blue-800" },
  { icon: MapPin, title: "카카오맵 마케팅", desc: "카카오맵 플레이스 최적화로 지역 검색 상위 노출 및 방문객을 늘립니다.", color: "from-blue-500 to-blue-700" },
  { icon: Users, title: "체험단 모집 대행", desc: "타겟 인플루언서·일반 체험단을 모집해 신뢰도 높은 실후기를 만듭니다.", color: "from-blue-600 to-indigo-700" },
  { icon: TrendingUp, title: "플레이스 순위상승", desc: "방문자·저장 수·블로그 리뷰 등 복합 지표를 관리해 순위를 끌어올립니다.", color: "from-blue-600 to-blue-800" },
  { icon: BarChart3, title: "블로그 관리 대행", desc: "정기 포스팅과 SEO 최적화로 블로그 지수를 높이고 꾸준한 트래픽을 유지합니다.", color: "from-blue-500 to-blue-700" },
  { icon: Megaphone, title: "맘카페 바이럴", desc: "지역 맘카페·육아 커뮤니티를 통해 핵심 타겟층에게 브랜드를 알립니다.", color: "from-blue-600 to-blue-800" },
];

const COMPARE_ITEMS = [
  { category: "전략 설계", harang: "업종별 맞춤형 전략 (카페·병원·쇼핑몰 특화)", general: "일괄 패키지, 템플릿 기반" },
  { category: "분석 방식", harang: "데이터 기반, 매출 직접 연동 추적", general: "노출·클릭 수 위주, 감각 운영" },
  { category: "보고 체계", harang: "월 2회 상세 리포트 + 주간 최적화", general: "월 1회 간단 보고, 설정 후 방치" },
  { category: "담당자", harang: "10년 경력 대표가 1:1 전담", general: "신입 담당자 수시 교체" },
  { category: "성과 기준", harang: "실제 방문객·예약·매출 기준", general: "노출 수·팔로워 수 등 허수 지표" },
  { category: "소통 방식", harang: "카카오·전화 24시간 응대, 직접 연락", general: "이메일·업무시스템, 응답 지연 빈번" },
];

const PROCESS_STEPS = [
  { step: "01", title: "무료 상담 신청", desc: "전화·카카오·폼 중 편한 방법으로 연락해주세요. 부담 없습니다.", icon: MessageCircle, color: "from-blue-500 to-blue-700" },
  { step: "02", title: "현황 무료 분석", desc: "업종·경쟁사·현재 순위를 분석해 문제점과 기회를 정리합니다.", icon: Search, color: "from-blue-600 to-blue-800" },
  { step: "03", title: "맞춤 전략 제안", desc: "분석 결과를 바탕으로 업종에 맞는 전략과 견적을 제안합니다.", icon: FileText, color: "from-blue-700 to-indigo-700" },
  { step: "04", title: "계약 후 즉시 시작", desc: "계약 당일부터 작업이 시작됩니다. 월 2회 상세 리포트로 성과를 확인합니다.", icon: TrendingUp, color: "from-blue-600 to-blue-800" },
];

const PACKAGES = [
  {
    name: "스타터",
    priceHint: "월 30~50만원대",
    desc: "처음 시작하는 분들을 위한 기본 패키지",
    roi: "ROI 평균 1.8배",
    features: ["플레이스 SEO 최적화", "블로그 관리 (주 2회)", "월 리포트 1회"],
    color: "from-blue-500 to-blue-600",
    popular: false,
  },
  {
    name: "그로스",
    priceHint: "월 70~100만원대",
    desc: "빠른 성장이 필요한 매장을 위한 핵심 패키지",
    roi: "ROI 평균 2.4배",
    features: ["플레이스 SEO + 순위상승", "블로그 배포 (월 4건)", "체험단 모집 대행", "리뷰 마케팅", "월 리포트 2회"],
    color: "from-blue-600 to-indigo-600",
    popular: true,
  },
  {
    name: "풀패키지",
    priceHint: "월 150만원~",
    desc: "멀티채널 통합 운영이 필요한 업체",
    roi: "ROI 평균 3.1배",
    features: ["그로스 전체 포함", "인스타그램 마케팅", "맘카페 바이럴", "카카오맵 마케팅", "주간 최적화 리포트"],
    color: "from-blue-700 to-indigo-800",
    popular: false,
  },
];

const TESTIMONIALS = [
  { name: "카페 사장님", location: "경기 일산", text: "3개월 만에 '일산 카페' 키워드 1위가 됐어요. 주말엔 대기줄이 생겼습니다.", service: "플레이스 SEO", stars: 5 },
  { name: "피부과 원장님", location: "서울 강서", text: "인스타그램 신규 예약이 6개월 만에 3배가 됐습니다. 보고서도 이해하기 쉬웠어요.", service: "인스타그램 마케팅", stars: 5 },
  { name: "학원 원장님", location: "경기 고양", text: "맘카페 바이럴 하나로 수강생이 50% 늘었습니다. 지역 엄마들 사이에서 입소문이 났어요.", service: "맘카페 바이럴", stars: 5 },
];

const TRUST_ITEMS = [
  { icon: ShieldCheck, title: "검증된 10년 경력", desc: "2014년부터 500개 이상 프로젝트 직접 진행", color: "from-blue-600 to-blue-800" },
  { icon: Handshake, title: "95% 재계약률", desc: "성과로 증명. 고객이 먼저 다시 찾는 대행사", color: "from-blue-500 to-blue-700" },
  { icon: Clock, title: "24시간 내 응답", desc: "문의 후 24시간 이내 연락, 평일 항상 대응", color: "from-blue-600 to-indigo-700" },
  { icon: TrendingUp, title: "매출 중심 관리", desc: "노출 수가 아닌 실제 매출 증대를 목표로 운영", color: "from-blue-700 to-indigo-800" },
];

/* ─── Countdown Hook ────────────────────────────── */

function useMonthEndCountdown() {
  const getSecondsLeft = () => {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    return Math.max(0, Math.floor((end.getTime() - now.getTime()) / 1000));
  };
  const [secs, setSecs] = useState<number | null>(null);
  useEffect(() => {
    setSecs(getSecondsLeft());
    const id = setInterval(() => setSecs(getSecondsLeft()), 1000);
    return () => clearInterval(id);
  }, []);
  const d = secs === null ? null : Math.floor(secs / 86400);
  const h = secs === null ? null : Math.floor((secs % 86400) / 3600);
  const m = secs === null ? null : Math.floor((secs % 3600) / 60);
  const s = secs === null ? null : secs % 60;
  return { d, h, m, s };
}

/* ─── ChecklistSection ──────────────────────────── */

const CHECKLIST_ITEMS = [
  "플레이스에 우리 매장이 3페이지 이후에 있다",
  "리뷰가 경쟁 매장에 비해 현저히 적다",
  "SNS는 있는데 팔로워가 늘지 않는다",
  "마케팅 대행사에 맡겼는데 효과를 모르겠다",
  "광고비 대비 실제 방문객이 늘지 않는다",
  "블로그 포스팅이 검색에 잘 안 잡힌다",
  "어떤 마케팅을 해야 할지 방향을 모르겠다",
  "담당자가 자주 바뀌어 처음부터 다시 설명해야 했다",
];

function ChecklistSection() {
  const [checked, setChecked] = React.useState<Set<number>>(new Set());
  const toggle = (i: number) => setChecked((prev) => {
    const next = new Set(prev);
    if (next.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  const count = checked.size;
  const urgency = count >= 5 ? { text: "즉시 전략 점검이 필요합니다", color: "text-red-400" }
    : count >= 3 ? { text: "마케팅 방향 재설정이 필요합니다", color: "text-amber-400" }
    : count >= 1 ? { text: "개선 여지가 있습니다", color: "text-blue-400" }
    : { text: "해당 항목을 클릭해보세요", color: "text-gray-500" };

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-950 to-blue-950 rounded-2xl p-6 md:p-10">
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">Self-Check</p>
            <h2 className="text-xl md:text-2xl font-black text-white mb-2">
              지금 이 중 하나라도 해당되시나요?
            </h2>
            <p className="text-gray-400 text-sm">해당 항목을 클릭하면 얼마나 시급한지 알 수 있습니다</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {CHECKLIST_ITEMS.map((item, i) => (
              <button
                key={item}
                onClick={() => toggle(i)}
                className={`flex items-start gap-3 rounded-xl px-4 py-3 border text-left transition-all ${
                  checked.has(i)
                    ? "bg-blue-600/20 border-blue-500/50"
                    : "bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20"
                }`}
              >
                <div className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                  checked.has(i) ? "border-blue-400 bg-blue-500" : "border-white/20 bg-white/10"
                }`}>
                  {checked.has(i) && <CheckCircle2 size={10} className="text-white" strokeWidth={3} />}
                </div>
                <span className={`text-sm leading-relaxed transition-colors ${checked.has(i) ? "text-white font-semibold" : "text-gray-400"}`}>
                  {item}
                </span>
              </button>
            ))}
          </div>
          {/* Counter */}
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3">
              <div className="text-2xl font-black text-white">{count}<span className="text-gray-500 text-base font-normal">/8</span></div>
              <div className={`text-sm font-bold ${urgency.color}`}>{urgency.text}</div>
            </div>
          </div>

          {/* 진단 결과 — 3개 이상 체크 시 */}
          {count >= 3 && (
            <div className="mb-6 bg-white/5 border border-white/12 rounded-xl p-5">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">하랑마케팅 추천 솔루션</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: "플레이스 SEO", desc: "검색·지도 노출 상위 진입", color: "bg-blue-500/20 border-blue-500/30 text-blue-300" },
                  { label: "블로그 마케팅", desc: "키워드 검색 유입 증대", color: "bg-blue-400/20 border-blue-400/30 text-blue-200" },
                  { label: "리뷰 마케팅", desc: "신뢰도·재방문율 상승", color: "bg-indigo-500/20 border-indigo-500/30 text-indigo-300" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl border px-3 py-2.5 ${s.color}`}>
                    <div className="font-black text-sm mb-0.5">{s.label}</div>
                    <div className="text-[11px] opacity-75">{s.desc}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">· 무료 상담에서 업종별 최적 조합을 안내해드립니다</p>
            </div>
          )}

          <div className="text-center">
            <Link href={count > 0 ? `/contact?checklist=${count}` : "/contact"}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-colors shadow-lg shadow-blue-600/25">
              {count >= 3 ? `${count}가지 문제 지금 해결하기` : count > 0 ? `${count}가지 무료 진단받기` : "무료 전략 진단 신청"}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Component ─────────────────────────────────── */

function PromoSection() {
  const { d, h, m, s } = useMonthEndCountdown();
  const pad = (n: number | null) => n === null ? "--" : String(n).padStart(2, "0");
  return (
    <section className="py-10 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-blue-100">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-black text-blue-600 uppercase tracking-widest">이번 달 한정</span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-1">
              신규 상담 3팀에게 무료 경쟁사 분석 리포트 제공
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              내 업종 상위 경쟁 매장 분석 · 키워드 격차 리포트 · 맞춤 전략 제안 — 비용 없이 받아보세요.
            </p>
            {/* Countdown */}
            <div className="inline-flex items-center gap-1.5 bg-white border border-blue-200 rounded-xl px-3 py-2 shadow-sm">
              <span className="text-[10px] text-gray-400 font-semibold mr-1">마감까지</span>
              {[{ val: pad(d), label: "일" }, { val: pad(h), label: "시간" }, { val: pad(m), label: "분" }, { val: pad(s), label: "초" }].map(({ val, label }, i) => (
                <React.Fragment key={label}>
                  {i > 0 && <span className="text-blue-400 font-black text-sm">:</span>}
                  <div className="flex flex-col items-center">
                    <span className="text-base font-black text-gray-900 tabular-nums leading-none">{val}</span>
                    <span className="text-[8px] text-gray-400">{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className={`w-6 h-6 rounded-lg border text-[10px] font-black flex items-center justify-center ${n <= 1 ? "bg-blue-100 border-blue-200 text-blue-400 line-through" : n <= 2 ? "bg-blue-100 border-blue-200 text-blue-600" : "bg-gray-100 border-gray-200 text-gray-300"}`}>
                    {n}
                  </div>
                ))}
              </div>
              <span className="text-xs text-gray-400">3팀 중 1팀 남음</span>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors shadow-sm">
              지금 신청하기 <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const HOME_FAQS = [
  {
    q: "상담 비용이 있나요?",
    a: "아니요, 완전 무료입니다. 초기 상담부터 경쟁사 분석 리포트까지 비용이 없습니다. 계약 여부와 관계없이 현황 분석 자료를 드립니다.",
  },
  {
    q: "계약 최소 기간이 얼마나 되나요?",
    a: "최소 3개월을 권장합니다. 플레이스 SEO는 2~4주부터 순위 변동이 시작되고, 블로그는 3개월부터 검색 유입이 안정됩니다. 1개월 단위 계약도 가능하지만 성과가 충분히 나오기 전에 종료될 수 있습니다.",
  },
  {
    q: "성과가 보장되나요?",
    a: "100% 보장은 드리기 어렵습니다. 다만 95%의 재계약률과 500곳 이상의 실제 성과가 증명합니다. 진행 전 업종·지역 경쟁 현황을 분석해 현실적인 예상 수치를 먼저 알려드립니다.",
  },
  {
    q: "외주 작가가 아닌 대표가 직접 하는 건가요?",
    a: "네, 하랑마케팅은 대표가 직접 전략을 수립하고 담당합니다. 외주 제작도 대표 감수 후 납품됩니다. 중간 관리자나 외주에 떠넘기는 방식은 사용하지 않습니다.",
  },
  {
    q: "어떤 업종이든 가능한가요?",
    a: "카페, 음식점, 미용, 병원·의원, 학원, 쇼핑몰 등 소상공인·1인 사업자라면 모두 가능합니다. 다만 일부 업종(성인 콘텐츠, 불법 사업자 등)은 진행이 어렵습니다.",
  },
  {
    q: "지역 제한이 있나요?",
    a: "전국 가능합니다. 서울·경기·인천 수도권뿐 아니라 부산, 대구, 대전, 광주 등 전국 어디든 온라인으로 진행할 수 있습니다. 현장 방문이 필요한 경우 협의합니다.",
  },
];

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">상담 전에 가장 많이 물어보시는 것들</h2>
          <p className="text-gray-500 text-sm">더 궁금한 게 있으시면 카카오톡으로 바로 물어보세요</p>
        </div>
        <div className="space-y-2">
          {HOME_FAQS.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 text-sm">{faq.q}</span>
                <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:underline">
            전체 FAQ 보기 <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>

        {/* ══ Hero ══ */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden pt-[104px] md:pt-[108px]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/6 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/6 rounded-full blur-3xl" />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-center">
            <div className="max-w-2xl lg:max-w-none">
              <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-white/12 text-gray-300 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  지금 상담 가능
                </div>
                <div className="h-3 w-px bg-white/10" />
                <span className="text-xs text-gray-500 font-medium">2014년 설립 · 10년 경력 · 500+ 대표님</span>
              </div>

              <h1 className="text-[42px] md:text-[54px] lg:text-[62px] font-black text-white leading-[1.1] tracking-tight mb-6">
                매출이 오르는<br />
                마케팅만 합니다
              </h1>

              <p className="text-base md:text-[17px] text-gray-400 leading-relaxed mb-3 max-w-lg">
                카페 창업 실패를 경험한 대표가 직접 운영합니다.
                <span className="text-white font-semibold"> 대표님의 돈을 제 돈처럼 </span>무겁게 생각하며,
                <span className="text-white font-semibold"> 업종별 맞춤 전략</span>으로 실제 매출을 올려드립니다.
              </p>
              <p className="text-sm text-gray-600 mb-10 flex flex-wrap gap-x-4 gap-y-1">
                {["대표 직접 담당", "외주 없음", "속이면 10배 보상", "24시간 소통"].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-blue-500" />{t}
                  </span>
                ))}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/free-check" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-base transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-0.5">
                  무료 플레이스 진단 받기 <ArrowRight size={17} />
                </Link>
                <Link href="/estimate" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/8 hover:bg-white/14 border border-white/15 text-white font-semibold text-base transition-all">
                  패키지 견적 계산기 <ChevronRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-xs text-gray-500">
                {["상담 비용 0원", "계약 강요 없음", "24시간 내 연락"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-blue-400" /> {t}
                  </span>
                ))}
              </div>

              {/* Social proof strip */}
              <div className="mt-10 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="flex -space-x-2 shrink-0">
                  {[
                    { name: "김", g: "from-blue-400 to-blue-600" },
                    { name: "박", g: "from-blue-500 to-blue-700" },
                    { name: "이", g: "from-blue-600 to-indigo-700" },
                    { name: "최", g: "from-indigo-500 to-blue-700" },
                    { name: "전", g: "from-blue-700 to-blue-900" },
                  ].map((p, i) => (
                    <div key={i} className={`w-9 h-9 rounded-full border-2 border-gray-900 bg-gradient-to-br ${p.g} flex items-center justify-center text-white text-[11px] font-black`}>
                      {p.name}
                    </div>
                  ))}
                </div>
                <div className="min-w-0">
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={11} className="text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-amber-300 text-xs font-bold ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-snug">
                    <span className="text-white font-black">이번 달 12팀</span>이 무료 진단을 신청했습니다
                    <span className="ml-2 text-[10px] text-red-400 font-bold bg-red-500/15 px-1.5 py-0.5 rounded">잔여 2자리</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hero photo placeholder */}
            <div className="hidden lg:block">
              <PhotoPlaceholder
                label="대표님 실제 작업 현장 사진"
                hint="노트북·화면 보며 분석 중인 모습 / 또는 클라이언트와 미팅 장면 / 가로:세로 = 3:4 비율 권장"
                width="w-full"
                height="h-[480px]"
                dark
                className="shadow-2xl"
              />
            </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 md:mt-20">
              {[
                { value: "500+", label: "완료 프로젝트", sub: "10년간 8개 업종", proof: "누적 고객사 수", icon: Users, color: "from-blue-500 to-blue-700" },
                { value: "95%", label: "재계약률", sub: "업계 평균 65% 대비", proof: "2024년 기준", icon: Handshake, color: "from-blue-600 to-blue-800" },
                { value: "+300%", label: "신규 예약 최대 증가", sub: "피부과·한의원 사례", proof: "실측 예약 기준", icon: TrendingUp, color: "from-blue-600 to-indigo-700" },
                { value: "24h", label: "상담 연락 보장", sub: "신청 후 24시간 이내", proof: "대표 직접 응답", icon: ShieldCheck, color: "from-blue-700 to-indigo-800" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white/5 border border-white/8 rounded-2xl p-4 md:p-5 hover:bg-white/10 transition-colors group">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform`}>
                      <Icon size={15} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="text-2xl md:text-3xl font-black text-white mb-0.5">{s.value}</div>
                    <div className="text-xs md:text-sm text-gray-300 font-semibold mb-0.5">{s.label}</div>
                    <div className="text-[11px] text-gray-500">{s.sub}</div>
                    <div className="text-[10px] text-gray-700 mt-1.5 pt-1.5 border-t border-white/5">{s.proof}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ 신뢰 마퀸 배너 ══ */}
        <div className="bg-blue-600 py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {([
              { text: "플레이스 Top 5 진입 · 평균 4주 만에", dot: "bg-white/60" },
              { text: "재계약률 95% · 500+ 프로젝트", dot: "bg-blue-200" },
              { text: "신규 예약 +300% · 서울 강서 피부과", dot: "bg-white/60" },
              { text: "대표 직접 담당 · 외주 없음", dot: "bg-blue-200" },
              { text: "방문객 +167% · 경기 일산 카페", dot: "bg-white/60" },
              { text: "배달 매출 +113% · 서울 마포 음식점", dot: "bg-blue-200" },
              { text: "수강생 +55% · 경기 고양 학원", dot: "bg-white/60" },
              { text: "예약 완전 마감 · 수원 네일샵", dot: "bg-blue-200" },
              { text: "상담 비용 0원 · 계약 강요 없음", dot: "bg-white/60" },
              { text: "10년+ 경력 · 업종별 맞춤 전략", dot: "bg-blue-200" },
              { text: "24시간 내 연락 보장", dot: "bg-white/60" },
              { text: "이번 달 신규 상담 잔여 2자리", dot: "bg-blue-200" },
              { text: "ROI 평균 2.4배 · 3개월 실측치", dot: "bg-white/60" },
              { text: "블로그 지역 키워드 3주 만에 상위권", dot: "bg-blue-200" },
              { text: "한의원 초진 예약 +200% · 경기 안양", dot: "bg-white/60" },
              { text: "카카오맵 리뷰 0 → 95개 · 2개월", dot: "bg-blue-200" },
              { text: "리뷰 127개 달성 · 3개월 로드맵", dot: "bg-white/60" },
            ] as { text: string; dot: string }[])
              .concat(([
                { text: "플레이스 Top 5 진입 · 평균 4주 만에", dot: "bg-white/60" },
                { text: "재계약률 95% · 500+ 프로젝트", dot: "bg-blue-200" },
                { text: "신규 예약 +300% · 서울 강서 피부과", dot: "bg-white/60" },
                { text: "대표 직접 담당 · 외주 없음", dot: "bg-blue-200" },
                { text: "방문객 +167% · 경기 일산 카페", dot: "bg-white/60" },
                { text: "배달 매출 +113% · 서울 마포 음식점", dot: "bg-blue-200" },
                { text: "수강생 +55% · 경기 고양 학원", dot: "bg-white/60" },
                { text: "예약 완전 마감 · 수원 네일샵", dot: "bg-blue-200" },
                { text: "상담 비용 0원 · 계약 강요 없음", dot: "bg-white/60" },
                { text: "10년+ 경력 · 업종별 맞춤 전략", dot: "bg-blue-200" },
                { text: "24시간 내 연락 보장", dot: "bg-white/60" },
                { text: "이번 달 신규 상담 잔여 2자리", dot: "bg-blue-200" },
                { text: "ROI 평균 2.4배 · 3개월 실측치", dot: "bg-white/60" },
                { text: "블로그 지역 키워드 3주 만에 상위권", dot: "bg-blue-200" },
                { text: "한의원 초진 예약 +200% · 경기 안양", dot: "bg-white/60" },
                { text: "카카오맵 리뷰 0 → 95개 · 2개월", dot: "bg-blue-200" },
                { text: "리뷰 127개 달성 · 3개월 로드맵", dot: "bg-white/60" },
              ] as { text: string; dot: string }[]))
              .map((item, i) => (
                <span key={i} className="flex items-center gap-3 px-6 text-xs text-white font-semibold">
                  <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                  {item.text}
                </span>
              ))}
          </div>
        </div>

        {/* ══ 플랫폼 신뢰 스트립 ══ */}
        <section className="py-8 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest shrink-0">운영 플랫폼</p>
              <div className="h-px flex-1 bg-gray-100 hidden sm:block" />
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 md:gap-6">
                {[
                  { name: "네이버 플레이스", color: "text-green-600", bg: "bg-green-50", border: "border-green-100", letter: "N" },
                  { name: "카카오맵", color: "text-yellow-700", bg: "bg-yellow-50", border: "border-yellow-100", letter: "K" },
                  { name: "배달의민족", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100", letter: "B" },
                  { name: "쿠팡이츠", color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-100", letter: "C" },
                  { name: "인스타그램", color: "text-purple-700", bg: "bg-purple-50", border: "border-purple-100", letter: "I" },
                  { name: "구글 리뷰", color: "text-red-600", bg: "bg-red-50", border: "border-red-100", letter: "G" },
                ].map((p) => (
                  <div key={p.name} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg ${p.bg} border ${p.border} flex items-center justify-center text-[11px] font-black ${p.color}`}>
                      {p.letter}
                    </div>
                    <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ 견적 계산기 배너 ══ */}
        <section className="py-8 bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 border-b border-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-black text-blue-600 uppercase tracking-widest mb-1">신규 · 3분 완성</p>
                <p className="text-base md:text-lg font-black text-gray-900">
                  내 업종·예산에 맞는 마케팅 패키지가 궁금하신가요?
                </p>
                <p className="text-sm text-gray-500">업종을 선택하면 예상 ROI와 추천 패키지를 즉시 계산해드립니다</p>
              </div>
              <Link href="/estimate"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">
                <Calculator size={15} />
                패키지 견적 계산기
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 업종별 특화 ══ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">실제 성과 데이터</p>
                  <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight">
                    내 업종에도<br />효과가 있을까요?
                  </h2>
                </div>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  같은 업종 실제 클라이언트의 before·after 수치입니다.<br />
                  카드를 클릭하면 해당 업종 무료 진단을 신청할 수 있습니다.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {INDUSTRIES.map((ind) => {
                const Icon = ind.icon;
                return (
                  <Link key={ind.name} href={`/contact?industry=${encodeURIComponent(ind.name)}`} className="group relative rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 block">
                    {/* Photo placeholder */}
                    <div className="relative">
                      <PhotoPlaceholder
                        label={`${ind.name} 실제 매장 사진`}
                        hint="실제 클라이언트 매장 외관 또는 내부 사진"
                        height="h-40"
                        className="rounded-none"
                      />
                      {/* Result badge over photo */}
                      <div className={`absolute top-3 right-3 bg-gradient-to-r ${ind.color} text-white px-2.5 py-1.5 rounded-xl text-sm font-black shadow-lg`}>
                        {ind.result}
                        <div className="text-[9px] text-white/80 font-normal">{ind.resultLabel}</div>
                      </div>
                    </div>
                    <div className="p-5">
                      {/* header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${ind.color} flex items-center justify-center shadow-sm shrink-0`}>
                            <Icon size={16} className="text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="font-black text-gray-900 text-sm leading-tight">{ind.name}</h3>
                            <p className="text-[11px] text-gray-400 mt-0.5">{ind.location} · {ind.duration}</p>
                          </div>
                        </div>
                      </div>

                      {/* before / after */}
                      <div className="flex items-center gap-2 mb-4 bg-white rounded-xl p-3 border border-white/80 shadow-sm">
                        <div className="flex-1 text-center">
                          <div className="text-[10px] font-bold text-red-400 mb-1">BEFORE</div>
                          <div className="text-xs font-semibold text-gray-600">{ind.before}</div>
                        </div>
                        <ChevronRight size={14} className="text-gray-300 shrink-0" />
                        <div className="flex-1 text-center">
                          <div className="text-[10px] font-bold text-blue-600 mb-1">AFTER</div>
                          <div className="text-xs font-bold text-gray-900">{ind.after}</div>
                        </div>
                      </div>

                      {/* strategy points */}
                      <ul className="space-y-1 mb-4">
                        {ind.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-[11px] text-gray-500">
                            <CheckCircle2 size={11} className="text-blue-500 shrink-0" strokeWidth={2.5} />
                            {p}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center gap-1 text-xs text-blue-600 font-bold group-hover:gap-2 transition-all">
                        이 업종 무료 진단받기 <ArrowRight size={11} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">위 업종 외에도 상담 가능합니다</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-sm"
              >
                내 업종 무료 진단 받기
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 고민 해결 ══ */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">왜 하랑인가</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">이런 고민, 해결된 증거 있습니다</h2>
              <p className="text-gray-400 text-sm">마케팅 대행사와 일해본 사장님들이 가장 많이 하는 말 — 하랑이 어떻게 바꿨는지</p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "광고비는 쓰는데 매출이 안 늘어요",
                  a: "업종 특성을 무시한 일괄 마케팅이 원인입니다. 하랑은 카페·병원·쇼핑몰 등 업종별 데이터 기반 맞춤 전략만 설계합니다.",
                  result: "매출 평균 +89%",
                  period: "계약 3개월 내",
                  icon: TrendingUp,
                  iconColor: "from-blue-500 to-blue-700",
                  cardBorder: "border-blue-100",
                  badgeBg: "bg-blue-50",
                  badgeText: "text-blue-700",
                },
                {
                  q: "보고서를 봐도 뭔지 모르겠어요",
                  a: "복잡한 마케팅 용어 없이 매출·방문객·예약 수 등 사장님이 바로 이해할 수 있는 지표로 월 2회 명확하게 보고드립니다.",
                  result: "재계약률 91%",
                  period: "투명한 성과 보고 덕분",
                  icon: BarChart3,
                  iconColor: "from-blue-600 to-blue-800",
                  cardBorder: "border-blue-100",
                  badgeBg: "bg-blue-50",
                  badgeText: "text-blue-700",
                },
                {
                  q: "담당자가 계속 바뀌어서 지쳐요",
                  a: "하랑은 계약부터 종료까지 대표가 직접 담당합니다. 10년 경력의 전문가가 처음부터 끝까지 함께합니다.",
                  result: "담당자 교체 0회",
                  period: "10년간 기록",
                  icon: Handshake,
                  iconColor: "from-blue-600 to-indigo-700",
                  cardBorder: "border-blue-100",
                  badgeBg: "bg-blue-50",
                  badgeText: "text-blue-700",
                },
                {
                  q: "마케팅이 효과 있는지 도통 모르겠어요",
                  a: "방문자 수·리뷰 증감·순위 변화를 숫자로 정리한 월 리포트를 드립니다. 대표가 직접 설명해드리니 용어를 몰라도 이해할 수 있습니다.",
                  result: "성과 투명 공개",
                  period: "월 2회 리포트",
                  icon: BarChart3,
                  iconColor: "from-blue-700 to-indigo-800",
                  cardBorder: "border-blue-100",
                  badgeBg: "bg-blue-50",
                  badgeText: "text-blue-700",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.q} className="bg-white rounded-2xl border border-gray-100 p-5 md:p-7 hover:shadow-lg transition-all group">
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                      {/* content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-2">고객 고민</p>
                        <h3 className="font-black text-gray-900 text-base md:text-lg leading-snug mb-2">"{item.q}"</h3>
                        <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-blue-200 pl-3">{item.a}</p>
                      </div>
                      {/* result badge */}
                      <div className="shrink-0">
                        <div className={`inline-flex flex-col items-center gap-0.5 px-5 py-4 rounded-2xl ${item.badgeBg} border border-gray-100 min-w-[100px] text-center`}>
                          <span className={`text-lg md:text-xl font-black ${item.badgeText}`}>{item.result}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{item.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ 대표 소개 ══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-5">About CEO</p>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  실패해 본 대표가<br />성공하는 길을<br />가장 잘 압니다
                </h2>

                {/* Quote highlight */}
                <div className="relative bg-gray-950 rounded-2xl p-6 mb-7">
                  <div className="absolute top-4 left-5 text-5xl font-black text-blue-600/20 leading-none select-none">"</div>
                  <p className="relative text-gray-300 text-base md:text-[17px] leading-relaxed pl-4">
                    대표님은 사업의 본질에만 집중하십시오.<br />
                    골치 아픈 홍보와 전략은 하랑이<br className="hidden sm:block" /> 대신 고민하고 실행하겠습니다.
                  </p>
                  <p className="text-xs text-gray-600 mt-4 pl-4">— 하랑마케팅 대표</p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  해병대 장교로 전역 후 전 재산을 털어 카페를 창업했다가 실패했습니다. 그때 마케팅 대행사에게 사기도 당했습니다.
                  그 절박함을 직접 겪었기 때문에 <strong className="text-gray-800">대표님의 돈을 제 돈처럼 무겁게 생각합니다.</strong>
                  이후 10년간 현장을 직접 뛰어 500곳 이상의 매장과 함께 성장해왔습니다.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-7">
                  {[
                    { label: "해병대 장교 출신", sub: "리더십·책임감" },
                    { label: "카페 창업 실패", sub: "현장 공감" },
                    { label: "10년+ 경력", sub: "직접 담당" },
                    { label: "500+ 클라이언트", sub: "검증된 성과" },
                    { label: "속이면 10배 보상", sub: "신뢰 보장" },
                    { label: "외주 없음", sub: "대표가 전담" },
                  ].map((b) => (
                    <div key={b.label} className="bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5">
                      <div className="text-xs font-black text-gray-900 mb-0.5">{b.label}</div>
                      <div className="text-[10px] text-gray-400">{b.sub}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gray-950 hover:bg-gray-800 text-white font-bold text-sm transition-colors"
                >
                  대표와 직접 상담하기 <ArrowRight size={14} />
                </Link>
              </div>

              {/* Photo */}
              <div>
                <PhotoPlaceholder
                  label="대표 프로필 사진"
                  hint="실제 사진으로 교체 예정 · 세로 비율 (3:4) 권장"
                  width="w-full"
                  height="h-[440px]"
                  className="rounded-2xl shadow-lg"
                />
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: "10년+", label: "마케팅 경력" },
                    { val: "95%", label: "재계약률" },
                    { val: "500+", label: "완료 프로젝트" },
                  ].map(s => (
                    <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl py-3">
                      <div className="text-base font-black text-gray-900">{s.val}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 체크리스트 공감 ══ */}
        <ChecklistSection />

        {/* ══ 신뢰 지표 (카운터) ══ */}
        <section className="py-14 md:py-20 bg-gray-950 relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-32 bg-blue-600/8 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-96 h-32 bg-indigo-600/8 blur-3xl rounded-full" />
          </div>
          <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-widest mb-10">10년 운영 데이터</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { to: 500, suffix: "+", label: "완료 프로젝트", sub: "2014년~현재", color: "text-white" },
                { to: 95, suffix: "%", label: "재계약률", sub: "업계 최고 수준", color: "text-white" },
                { to: 10, suffix: "년+", label: "대표 경력", sub: "직접 담당", color: "text-white" },
                { to: 300, suffix: "%", label: "최대 매출 상승", sub: "실제 달성 수치", color: "text-white" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${item.color}`}>
                    <AnimatedCounter to={item.to} suffix={item.suffix} duration={1600} />
                  </div>
                  <div className="text-sm md:text-base font-bold text-white mb-0.5">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.sub}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {TRUST_ITEMS.map((item) => (
                <div key={item.title} className="flex flex-col items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-400" strokeWidth={2} />
                  <p className="text-xs font-bold text-white">{item.title}</p>
                  <p className="text-[10px] text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 결과 보장 약속 ══ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">하랑의 약속</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                결과가 없으면 말씀드립니다
              </h2>
              <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
                과장된 약속보다 정직한 진단을 드립니다.<br />
                계약 전에 성과 가능 여부를 먼저 솔직하게 말씀드립니다.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "무결과 시 비용 조정",
                  desc: "3개월 안에 협의한 목표치를 달성하지 못하면 다음 달 비용을 조정합니다. 눈속임 없이.",
                },
                {
                  icon: Handshake,
                  title: "대표 직접 담당",
                  desc: "외주·인턴 없이 대표가 직접 매장을 분석하고 전략을 세웁니다. 담당자가 바뀌는 일이 없습니다.",
                },
                {
                  icon: Clock,
                  title: "24시간 내 연락 보장",
                  desc: "상담 신청 후 24시간 이내에 반드시 연락드립니다. 응답이 늦으면 먼저 연락드립니다.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 shadow-sm">
                      <Icon size={18} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-black text-white text-base mb-2">{item.title}</h3>
                    <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link href="/free-check"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-sm">
                무료 플레이스 진단 신청
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 진행 프로세스 ══ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">프로세스</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                어떻게 진행되나요?
              </h2>
              <p className="text-gray-500 text-base">상담 신청부터 성과 확인까지 4단계면 됩니다</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-indigo-400 z-0" />

              {PROCESS_STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="relative z-10 flex flex-col md:items-center text-left md:text-center px-3 pb-8 md:pb-0">
                    {/* Mobile connector */}
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="md:hidden absolute left-5 top-12 bottom-0 w-px bg-blue-100" />
                    )}
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md mb-4 shrink-0`}>
                      <Icon size={17} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="text-xs font-black text-blue-500 mb-1">{s.step}</div>
                    <h3 className="font-black text-gray-900 text-sm md:text-base mb-1.5">{s.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed max-w-[160px] mx-auto md:mx-0">{s.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm">
                01단계 시작하기 (무료)
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 무료 마케팅 인사이트 ══ */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
                  <BookOpen size={10} strokeWidth={2.5} /> 무료 마케팅 인사이트
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  10년 노하우, 무료로 읽어보세요
                </h2>
                <p className="text-gray-400 text-sm">실전에서 검증된 소상공인 마케팅 전략을 공개합니다</p>
              </div>
              <Link href="/blog"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm">
                인사이트 전체보기 <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  tag: "플레이스 SEO",
                  headerColor: "from-blue-600 to-blue-800",
                  title: "네이버 플레이스 순위 올리는 핵심 3가지",
                  desc: "리뷰 수, 키워드 세팅, 저장수. 이 세 가지만 잡아도 경쟁 매장보다 2배 빠르게 상위에 오릅니다.",
                  readTime: "3분",
                  views: "12,400",
                  icon: Search,
                },
                {
                  tag: "리뷰 마케팅",
                  headerColor: "from-blue-500 to-indigo-600",
                  title: "리뷰 하나가 신규 고객 10명을 데려오는 이유",
                  desc: "리뷰는 단순 평점이 아닙니다. 검색 알고리즘과 신뢰도를 동시에 올리는 방법을 소개합니다.",
                  readTime: "4분",
                  views: "8,730",
                  icon: Star,
                },
                {
                  tag: "업종별 전략",
                  headerColor: "from-blue-700 to-indigo-800",
                  title: "카페·의원·학원 — 마케팅 채널이 달라야 하는 이유",
                  desc: "같은 비용을 써도 업종에 맞는 채널을 선택해야 ROI가 나옵니다. 업종별 최적 채널 선택 가이드.",
                  readTime: "5분",
                  views: "6,210",
                  icon: BarChart3,
                },
              ].map((post) => {
                const PostIcon = post.icon;
                return (
                  <Link key={post.title} href="/blog"
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                    <div className={`bg-gradient-to-br ${post.headerColor} p-5`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                          <PostIcon size={16} className="text-white" strokeWidth={2} />
                        </div>
                        <span className="text-[10px] text-white/70 font-semibold">{post.views} 조회</span>
                      </div>
                      <span className="text-[11px] font-black text-white/90 uppercase tracking-wider">{post.tag}</span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-black text-gray-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors flex-1">{post.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-4">{post.desc}</p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-[11px] text-gray-400">{post.readTime} 읽기</span>
                        <div className="flex items-center gap-1 text-xs text-blue-600 font-bold group-hover:gap-2 transition-all">
                          읽으러 가기 <ArrowRight size={11} />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
              {/* 더보기 카드 */}
              <Link href="/blog"
                className="group bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl border border-white/5 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col items-center justify-center p-8 text-center min-h-[220px]">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <BookOpen size={18} className="text-white" strokeWidth={1.5} />
                </div>
                <p className="text-white font-black text-sm mb-1">인사이트 더 보기</p>
                <p className="text-gray-400 text-xs mb-4">10년 노하우 전략 · 업종별 성공 공식</p>
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-bold group-hover:bg-white/20 transition-colors">
                  전체 글 보기 <ArrowRight size={11} />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ══ SNS ══ */}
        <section className="py-10 md:py-14 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-6">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">SNS 채널에서도 만나보세요</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "네이버 블로그",
                  sub: "누적 조회 120만+",
                  desc: "마케팅 팁·성공 사례·업종별 전략 무료 공개",
                  preview: "최근 글: 네이버 플레이스 3개월 만에 1위 올린 방법",
                  href: "https://blog.naver.com/harangmarketing",
                  bg: "bg-green-500",
                  ring: "ring-green-100",
                  textColor: "text-green-600",
                  letter: "N",
                },
                {
                  label: "카카오톡 채널",
                  sub: "평균 응답 10분 이내",
                  desc: "지금 바로 무료 상담 연결",
                  preview: "현재 상담 가능 · 24시간 운영",
                  href: "https://pf.kakao.com/_MuUkG/chat",
                  bg: "bg-yellow-400",
                  ring: "ring-yellow-100",
                  textColor: "text-yellow-600",
                  darkText: true,
                  letter: "K",
                },
                {
                  label: "인스타그램",
                  sub: "작업 포트폴리오",
                  desc: "진행 현장·성공 사례·최신 소식",
                  preview: "팔로우하면 매주 마케팅 팁 무료 제공",
                  href: "https://www.instagram.com/harangmarketing/",
                  bg: "bg-gradient-to-br from-purple-500 to-pink-500",
                  ring: "ring-purple-100",
                  textColor: "text-purple-600",
                  letter: "I",
                },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all overflow-hidden">
                  <div className="flex items-center gap-4 p-5 pb-3">
                    <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center font-black text-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform ${s.darkText ? "text-gray-900" : "text-white"}`}>
                      {s.letter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="font-bold text-gray-900 text-sm">{s.label}</div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full bg-gray-50 ${s.textColor}`}>{s.sub}</span>
                      </div>
                      <div className="text-xs text-gray-400">{s.desc}</div>
                    </div>
                    <ChevronRight size={14} className="text-gray-300 shrink-0 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="mx-5 mb-4 px-3 py-2 rounded-lg bg-gray-50 border border-gray-100">
                    <p className="text-[11px] text-gray-400 truncate">{s.preview}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 서비스 ══ */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">서비스</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">카페·병원·학원, 업종마다<br className="md:hidden" /> 전략이 다릅니다</h2>
              <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">일괄 패키지 없이 업종별 데이터 기반으로 가장 효과적인 서비스를 추천해드립니다. 어떤 걸 선택할지 몰라도 됩니다.</p>
            </div>

            {/* 인기 3대 서비스 */}
            <div className="mb-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-black text-blue-600 uppercase tracking-widest">인기 서비스</span>
                <div className="h-px flex-1 bg-blue-100" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {SERVICES.filter((s) => s.popular).map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.title} href="/services" className="group bg-white rounded-2xl p-5 border border-blue-200 ring-1 ring-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all relative block">
                      <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-black">인기</span>
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                        <Icon size={18} className="text-white" strokeWidth={2} />
                      </div>
                      <h3 className="font-black text-gray-900 text-[15px] mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                      <div className="flex items-center gap-1 text-blue-600 text-xs font-bold group-hover:gap-2 transition-all">
                        자세히 보기 <ArrowRight size={11} />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* 나머지 서비스 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">추가 서비스</span>
                <div className="h-px flex-1 bg-gray-100" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {SERVICES.filter((s) => !s.popular).map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link key={service.title} href="/services" className="group flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon size={15} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 text-xs mb-1 leading-tight">{service.title}</h3>
                        <p className="text-[11px] text-gray-400 leading-relaxed line-clamp-2">{service.desc}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="text-center mt-10">
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors shadow-sm">
                어떤 서비스가 맞는지 무료 진단받기 <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 네이버 플레이스 원리 ══ */}
        <section className="py-14 md:py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full mb-4">
                  <Search size={10} strokeWidth={2.5} /> 10년 분석 인사이트
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-5 leading-snug">
                  네이버 플레이스 상위 노출,<br /><span className="text-blue-600">이 3가지가 핵심입니다</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  많은 분들이 "사진만 예쁘게 올리면 되는 거 아닌가요?"라고 물어보세요.
                  하랑이 10년간 500개 매장을 분석한 결과는 다릅니다.
                </p>
                <div className="space-y-4">
                  {[
                    { rank: "1위", factor: "리뷰 수 · 최신성", weight: "40%", desc: "리뷰가 많고 최근에 달린 매장이 알고리즘에서 우선순위를 가집니다. 답글 달린 리뷰는 추가 가점.", bar: "w-[80%]", color: "bg-blue-500" },
                    { rank: "2위", factor: "키워드 일치도", weight: "35%", desc: "업체명·카테고리·소개글의 키워드가 검색어와 얼마나 맞는지 분석합니다. 숨겨진 태그도 포함.", bar: "w-[70%]", color: "bg-indigo-500" },
                    { rank: "3위", factor: "저장수 · 클릭률", weight: "25%", desc: "플레이스 저장 및 클릭이 많을수록 인기 매장으로 인식됩니다. 체험단·SNS 연동이 여기를 올립니다.", bar: "w-[50%]", color: "bg-blue-700" },
                  ].map((f) => (
                    <div key={f.rank} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-white bg-blue-600 rounded-full w-5 h-5 flex items-center justify-center">{f.rank.charAt(0)}</span>
                          <span className="text-sm font-bold text-gray-900">{f.factor}</span>
                        </div>
                        <span className="text-xs font-black text-blue-600">{f.weight}</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full mb-2">
                        <div className={`h-full rounded-full ${f.color} ${f.bar}`} />
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-black text-gray-900 text-base">경쟁 매장과 비교해보세요</h3>
                    <span className="text-[10px] text-blue-600 font-black bg-blue-50 border border-blue-100 px-2 py-1 rounded-lg">실제 사례 기반</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "리뷰 수", you: "12개", comp: "87개", bad: true },
                      { label: "최근 리뷰", you: "3개월 전", comp: "어제", bad: true },
                      { label: "키워드 설정", you: "미설정", comp: "20개+", bad: true },
                      { label: "플레이스 저장", you: "낮음", comp: "높음", bad: true },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-[80px_1fr_1fr] gap-2 text-xs">
                        <span className="text-gray-400 pt-1">{row.label}</span>
                        <div className="flex items-center gap-1.5 bg-red-50 border border-red-100 rounded-lg px-2.5 py-1.5 text-red-600 font-semibold">
                          <X size={10} strokeWidth={3} />{row.you}
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 rounded-lg px-2.5 py-1.5 text-green-600 font-semibold">
                          <CheckCircle2 size={10} strokeWidth={3} />{row.comp}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2 text-[10px] text-center">
                    <div className="text-red-500 font-bold">내 매장 (예시)</div>
                    <div className="text-green-600 font-bold">경쟁 매장 (예시)</div>
                  </div>
                </div>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors">
                  내 매장 플레이스 무료 진단받기 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 패키지 가격대 ══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">패키지</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">대략적인 가격대가 궁금하신가요?</h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto">
                아래는 예시 패키지이며, 실제 견적은 업종·목표·상황에 따라 달라집니다.<br />
                상담 후 최적 조합을 제안해드립니다.
              </p>
            </div>

            {/* ROI 계산 힌트 */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 md:p-6 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {[
                  { label: "월 마케팅 비용", value: "50만원", note: "그로스 패키지 기준" },
                  { label: "평균 매출 증가", value: "+120만원", note: "3개월 평균 실측치" },
                  { label: "투자 대비 수익", value: "2.4배", note: "ROI 기준" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl md:text-2xl font-black text-blue-600">{item.value}</div>
                    <div className="text-xs font-bold text-gray-700 mt-0.5">{item.label}</div>
                    <div className="text-[10px] text-gray-400">{item.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 text-center mt-4">* 실제 수치는 업종·지역·시작 상태에 따라 다릅니다. 무료 상담에서 업종별 예상 ROI를 안내해드립니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {PACKAGES.map((pkg) => (
                <div key={pkg.name} className={`relative rounded-2xl border overflow-hidden ${pkg.popular ? "border-blue-300 shadow-xl shadow-blue-100" : "border-gray-200 shadow-sm"}`}>
                  {pkg.popular && (
                    <div className="bg-blue-600 text-white text-xs font-black text-center py-2 tracking-wider uppercase">
                      가장 많이 선택
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`inline-flex px-3 py-1.5 rounded-full bg-gradient-to-r ${pkg.color} text-white text-xs font-black`}>
                        {pkg.name}
                      </div>
                      <span className="text-[10px] font-black text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded-lg">{pkg.roi}</span>
                    </div>
                    <div className="text-lg font-black text-gray-900 mb-0.5">{pkg.priceHint}</div>
                    <p className="text-xs text-gray-400 mb-5">{pkg.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0" strokeWidth={2.5} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact"
                      className={`block text-center py-3 rounded-xl font-bold text-sm transition-colors ${pkg.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                      이 패키지 문의하기
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              * 가격은 서비스 구성·업종·목표에 따라 달라집니다. 정확한 견적은 무료 상담 후 안내드립니다.
            </p>
          </div>
        </section>

        {/* ══ 비교표 ══ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4">
                <ShieldCheck size={11} strokeWidth={2.5} /> 직접 비교
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">하랑마케팅이 다른 이유</h2>
              <p className="text-gray-500 text-base">선택 전, 꼭 확인해보세요</p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <div className="grid grid-cols-[160px_1fr_1fr]">
                <div className="bg-gray-950 p-5 text-gray-500 text-xs font-bold uppercase tracking-wider flex items-end">구분</div>
                <div className="bg-blue-600 p-5 text-center">
                  <div className="text-white font-black text-sm tracking-wide">하랑마케팅</div>
                  <div className="text-blue-200 text-[11px] mt-0.5">10년 경력 · 데이터 기반</div>
                </div>
                <div className="bg-gray-800 p-5 text-center">
                  <div className="text-gray-300 font-bold text-sm">일반 대행사</div>
                  <div className="text-gray-500 text-[11px] mt-0.5">일반적인 경우</div>
                </div>
              </div>
              {COMPARE_ITEMS.map((item, i) => (
                <div key={item.category} className={`grid grid-cols-[160px_1fr_1fr] border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <div className="p-4 md:p-5 font-black text-gray-600 text-xs flex items-center border-r border-gray-100">{item.category}</div>
                  <div className="p-4 md:p-5 bg-blue-50/40 border-r border-blue-100">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={10} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-800 text-xs md:text-sm leading-relaxed font-medium">{item.harang}</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={9} className="text-red-400" strokeWidth={3} />
                      </div>
                      <span className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.general}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-[160px_1fr_1fr] border-t border-gray-200">
                <div className="bg-gray-50 p-4" />
                <div className="bg-blue-600 p-4 text-center">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-white text-xs font-black bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                    무료 상담 신청 <ArrowRight size={11} />
                  </Link>
                </div>
                <div className="bg-gray-800 p-4" />
              </div>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
              {COMPARE_ITEMS.map((item) => (
                <div key={item.category} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="bg-gray-900 px-4 py-2.5 text-xs font-black text-gray-300">{item.category}</div>
                  <div className="divide-y divide-gray-100">
                    <div className="flex items-start gap-3 p-4 bg-blue-50/50">
                      <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-blue-600 mb-0.5">하랑마케팅</div>
                        <span className="text-gray-800 text-xs leading-relaxed font-medium">{item.harang}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <X size={10} className="text-red-400" strokeWidth={3} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-gray-400 mb-0.5">일반 대행사</div>
                        <span className="text-gray-400 text-xs leading-relaxed">{item.general}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-blue-600 text-white text-sm font-black mt-2 hover:bg-blue-700 transition-colors">
                무료 상담 신청 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 성공 사례 미리보기 ══ */}
        <section className="py-14 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">진행 사례</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">실제 매장, 실제 수치입니다</h2>
                <p className="text-gray-400 text-sm">과장 없는 실제 클라이언트의 before·after 데이터</p>
              </div>
              <Link href="/cases" className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:underline shrink-0">
                전체 사례 보기 <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                {
                  industry: "카페",
                  location: "경기 일산",
                  service: "플레이스 SEO + 블로그",
                  before: { label: "플레이스 순위", value: "12위" },
                  after: { label: "플레이스 순위", value: "2위" },
                  period: "6주",
                  highlight: "월 매출 +47%",
                  color: "from-blue-500 to-blue-700",
                  icon: Coffee,
                },
                {
                  industry: "미용실",
                  location: "서울 강서",
                  service: "블로그 + 체험단",
                  before: { label: "월 신규 고객", value: "8명" },
                  after: { label: "월 신규 고객", value: "31명" },
                  period: "3개월",
                  highlight: "신규 유입 3.9배",
                  color: "from-blue-600 to-indigo-700",
                  icon: Scissors,
                },
                {
                  industry: "음식점",
                  location: "인천 부평",
                  service: "플레이스 SEO + 리뷰",
                  before: { label: "리뷰 개수", value: "12개" },
                  after: { label: "리뷰 개수", value: "86개" },
                  period: "4개월",
                  highlight: "예약 문의 4배",
                  color: "from-blue-700 to-blue-900",
                  icon: UtensilsCrossed,
                },
                {
                  industry: "한의원",
                  location: "경기 안양",
                  service: "블로그 + 플레이스 SEO",
                  before: { label: "초진 예약", value: "월 15건" },
                  after: { label: "초진 예약", value: "월 45건" },
                  period: "4개월",
                  highlight: "초진 예약 +200%",
                  color: "from-blue-600 to-indigo-700",
                  icon: Stethoscope,
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.industry} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    {/* 그라데이션 비주얼 헤더 (사진 대체) */}
                    <div className={`bg-gradient-to-br ${c.color} px-5 py-6 relative overflow-hidden`}>
                      <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full" />
                      <div className="absolute -right-2 -bottom-6 w-14 h-14 bg-white/8 rounded-full" />
                      <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 shadow-sm">
                          <Icon size={18} className="text-white" strokeWidth={2} />
                        </div>
                        <div className="text-white font-black text-base leading-tight">{c.industry}</div>
                        <div className="text-white/70 text-[11px] mt-0.5">{c.location}</div>
                        <div className="mt-3 inline-flex items-center gap-1 bg-white/15 border border-white/20 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          {c.service}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="bg-red-50 border border-red-100 rounded-xl p-2.5 text-center">
                          <div className="text-[9px] font-black text-red-400 mb-0.5 uppercase">Before</div>
                          <div className="text-[10px] text-gray-400 mb-1 leading-tight">{c.before.label}</div>
                          <div className="text-sm font-black text-red-500">{c.before.value}</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-2.5 text-center">
                          <div className="text-[9px] font-black text-blue-600 mb-0.5 uppercase">After</div>
                          <div className="text-[10px] text-gray-400 mb-1 leading-tight">{c.after.label}</div>
                          <div className="text-sm font-black text-blue-700">{c.after.value}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-gray-400">{c.period}</span>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">{c.highlight}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link href="/cases"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-bold text-sm hover:border-blue-300 hover:text-blue-600 transition-colors">
                더 많은 사례 보기 <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 후기 ══ */}
        <section className="py-16 md:py-28 bg-gray-950 relative overflow-hidden">
          {/* subtle grid bg */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-[0.2em] mb-4">Client Testimonials</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                  실제 사장님들의<br />성장 이야기
                </h2>
              </div>
              <div className="flex items-center gap-8 shrink-0">
                {[
                  { val: "4.9", unit: "/5", label: "평균 만족도" },
                  { val: "95", unit: "%", label: "재계약률" },
                  { val: "500", unit: "+", label: "누적 고객사" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white">
                      {s.val}<span className="text-blue-400 text-lg">{s.unit}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {[
                {
                  name: "카페 사장님", location: "경기 일산", service: "플레이스 SEO", initial: "카",
                  metric: "+167%", metricLabel: "방문객 증가", period: "3개월",
                  accentColor: "from-blue-500 to-blue-700",
                  text: "3개월 만에 '일산 카페' 키워드 1위가 됐어요. 주말엔 대기줄이 생겼습니다. 처음엔 반신반의했는데 정말 효과가 있을 줄 몰랐어요.",
                },
                {
                  name: "피부과 원장님", location: "서울 강서", service: "인스타그램 마케팅", initial: "피",
                  metric: "+300%", metricLabel: "신규 예약 증가", period: "6개월",
                  accentColor: "from-indigo-500 to-purple-600",
                  text: "인스타그램 신규 예약이 6개월 만에 3배가 됐습니다. 보고서도 이해하기 쉬웠고, 대표님이 항상 직접 연락 주시는 게 신뢰가 갔어요.",
                },
                {
                  name: "학원 원장님", location: "경기 고양", service: "맘카페 바이럴", initial: "학",
                  metric: "+55%", metricLabel: "수강생 증가", period: "2개월",
                  accentColor: "from-blue-600 to-indigo-700",
                  text: "맘카페 바이럴 하나로 수강생이 50% 늘었습니다. 지역 엄마들 사이에서 입소문이 났어요. 이전 대행사랑 비교가 안 될 정도예요.",
                },
              ].map((t) => (
                <div key={t.name} className="group relative bg-white/5 border border-white/8 rounded-3xl overflow-hidden hover:bg-white/8 hover:border-white/15 transition-all duration-300 flex flex-col">
                  {/* Large quote mark */}
                  <div className="absolute top-5 right-6 text-[80px] font-black text-white/[0.04] leading-none select-none pointer-events-none">"</div>

                  {/* Accent top bar */}
                  <div className={`h-1 bg-gradient-to-r ${t.accentColor}`} />

                  <div className="p-7 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-gray-300 text-[15px] leading-relaxed flex-1 mb-7">
                      "{t.text}"
                    </p>

                    {/* Bottom */}
                    <div className="flex items-end justify-between pt-5 border-t border-white/8">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.accentColor} flex items-center justify-center shrink-0`}>
                          <span className="text-white font-black text-sm">{t.initial}</span>
                        </div>
                        <div>
                          <div className="font-bold text-white text-sm">{t.name}</div>
                          <div className="text-xs text-gray-500">{t.location} · {t.service}</div>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className={`text-2xl font-black bg-gradient-to-r ${t.accentColor} bg-clip-text text-transparent`}>{t.metric}</div>
                        <div className="text-[10px] text-gray-500">{t.metricLabel} · {t.period}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/cases" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-400 hover:text-white hover:border-white/30 font-semibold text-sm transition-all">
                전체 사례 보기 <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 기간별 성과 타임라인 ══ */}
        <section className="py-14 md:py-20 bg-gray-950">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">성과 타임라인</p>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                언제부터 효과가 나타날까요?
              </h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">500+ 프로젝트 데이터 기반 평균 타임라인입니다. 업종·경쟁 강도에 따라 달라질 수 있습니다.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  period: "1개월차",
                  color: "from-blue-500 to-blue-700",
                  borderColor: "border-blue-500/30",
                  items: [
                    "플레이스 정보 최적화 완료",
                    "블로그 키워드 3~5건 게시",
                    "초기 순위 변화 시작",
                    "체험단 리뷰 10개+ 확보",
                  ],
                  highlight: "순위 변화 감지",
                },
                {
                  period: "3개월차",
                  color: "from-blue-600 to-indigo-700",
                  borderColor: "border-blue-600/30",
                  items: [
                    "플레이스 Top 5~10 진입",
                    "블로그 월 방문자 100명+",
                    "리뷰 30개 이상 축적",
                    "SNS 팔로워 300~500명",
                  ],
                  highlight: "대부분 성과 체감",
                },
                {
                  period: "6개월차",
                  color: "from-blue-700 to-indigo-800",
                  borderColor: "border-indigo-500/30",
                  items: [
                    "주요 키워드 1~3위 목표",
                    "브랜드 인지도 지역 내 정착",
                    "리뷰 100개+ 자생 구조",
                    "신규 고객 월 30명+ 유입",
                  ],
                  highlight: "매출 지속 우상향",
                },
              ].map((phase) => (
                <div key={phase.period} className={`bg-white/5 border ${phase.borderColor} rounded-2xl overflow-hidden`}>
                  <div className={`bg-gradient-to-br ${phase.color} px-5 py-4`}>
                    <div className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">목표</div>
                    <div className="text-white font-black text-xl">{phase.period}</div>
                    <div className="text-blue-100 text-xs font-semibold mt-1">{phase.highlight}</div>
                  </div>
                  <div className="p-5 space-y-2.5">
                    {phase.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} className="text-blue-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm text-gray-300 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-xs mb-4">* 위 수치는 평균값이며 업종·예산·경쟁 강도에 따라 달라집니다.</p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm transition-colors shadow-sm">
                내 업종 예상 성과 상담받기 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 마케팅 인사이트 ══ */}
        <section className="py-14 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">마케팅 인사이트</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">소상공인이 꼭 알아야 할 것들</h2>
                <p className="text-gray-400 text-sm">10년 현장 경험에서 나온 실전 인사이트</p>
              </div>
              <Link href="/blog"
                className="inline-flex items-center gap-1.5 text-blue-600 font-bold text-sm hover:underline shrink-0">
                인사이트 전체 보기 <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                {
                  tag: "플레이스 SEO",
                  tagColor: "bg-blue-50 text-blue-600 border-blue-100",
                  title: "2024 네이버 플레이스 상위 노출 알고리즘 완전 분석",
                  preview: "리뷰 수, 답글률, 저장 수 — 순위를 결정하는 7가지 요소를 실제 데이터로 분석했습니다.",
                  readTime: "8분",
                  accent: "border-l-blue-500",
                  href: "/blog/naver-place-algorithm",
                },
                {
                  tag: "리뷰 마케팅",
                  tagColor: "bg-blue-50 text-blue-600 border-blue-100",
                  title: "네이버 플레이스 리뷰 100개 만들기 — 실전 로드맵",
                  preview: "리뷰 요청 문자 템플릿, 사장님 답글 공식, 3개월 단계별 로드맵을 공개합니다.",
                  readTime: "8분",
                  accent: "border-l-blue-500",
                  href: "/blog/naver-place-review-100",
                },
                {
                  tag: "업종별 전략",
                  tagColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
                  title: "맘카페 바이럴 마케팅 완전 가이드 — 수강생 55% 늘린 전략",
                  preview: "광고처럼 보이지 않으면서 효과를 내는 침투 전략, 업종별 콘텐츠 포인트를 공개합니다.",
                  readTime: "7분",
                  accent: "border-l-indigo-500",
                  href: "/blog/momcafe-viral-guide",
                },
                {
                  tag: "SNS 마케팅",
                  tagColor: "bg-blue-50 text-blue-700 border-blue-100",
                  title: "인스타그램 릴스로 예약 폭발 — 미용실 성공 케이스",
                  preview: "수원 네일샵이 릴스 3개로 2주 만에 예약을 마감한 실제 사례와 해시태그 전략.",
                  readTime: "7분",
                  accent: "border-l-blue-600",
                  href: "/blog/instagram-reels-beauty",
                },
              ].map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden border-l-4 ${post.accent}`}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2.5 py-1 rounded-full border text-[10px] font-black ${post.tagColor}`}>{post.tag}</span>
                      <span className="text-[10px] text-gray-300">{post.readTime}</span>
                    </div>
                    <h3 className="font-black text-gray-900 text-sm leading-snug mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">{post.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{post.preview}</p>
                    <div className="flex items-center gap-1 mt-4 text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                      읽기 <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 이달의 프로모션 ══ */}
        <PromoSection />

        {/* ══ 자주 묻는 질문 (홈) ══ */}
        <section id="faq" className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">상담 전에 궁금하신 것들</h2>
            </div>
            <div className="space-y-2">
              {[
                { q: "상담만 해도 되나요? 계약 강요가 있지 않나요?", a: "상담 비용은 0원이며 계약 강요는 절대 없습니다. 분석 결과를 공유해드리고, 진행 여부는 전적으로 사장님 결정입니다." },
                { q: "효과가 없으면 어떻게 되나요?", a: "매월 성과를 함께 검토합니다. 목표에 미달하면 전략을 즉시 수정합니다. 95% 재계약률이 증거입니다." },
                { q: "소규모 매장도 가능한가요?", a: "네, 소규모 1인 매장부터 가능합니다. 예산에 맞는 우선순위를 함께 정하고, 가장 효과적인 채널부터 시작합니다." },
                { q: "얼마나 기다리면 효과가 나오나요?", a: "서비스마다 다르지만, 플레이스 SEO는 3~4주, 블로그는 2~3개월, SNS는 1~2개월이 일반적입니다. 첫 상담 때 현실적인 기간을 안내드립니다." },
                { q: "이미 다른 대행사를 쓰고 있는데 바꿔도 되나요?", a: "네, 기존 계약 종료 후 자연스럽게 전환하시면 됩니다. 이전 대행사의 작업 내역을 분석해서 개선점을 함께 찾아드립니다. 이미 대행사를 바꾸신 분들이 전체 클라이언트의 약 40%입니다." },
                { q: "전화·카카오 상담과 홈페이지 상담 신청 중 어떤 게 더 좋나요?", a: "급하시면 전화나 카카오가 빠릅니다. 업종·매장 상황을 미리 적어서 신청 폼으로 남겨주시면 사전 분석 후 연락드려 더 알찬 상담이 됩니다. 둘 다 24시간 내 응대합니다." },
              ].map((faq, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-colors">
                  <summary className="flex items-center gap-3 p-5 cursor-pointer list-none select-none hover:bg-blue-50/30 transition-colors">
                    <span className="w-6 h-6 rounded-lg bg-blue-600 text-white text-[11px] font-black flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <span className="font-bold text-gray-800 text-sm flex-1">{faq.q}</span>
                    <ChevronDown size={15} className="text-gray-400 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 pt-3 ml-9 text-sm text-gray-500 leading-relaxed border-t border-blue-50">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/faq" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                전체 FAQ 보기 (6개 카테고리) <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 오늘 상담이 맞는 분 ══ */}
        <section className="py-14 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">하랑마케팅 적합 여부 확인</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">혹시 이런 상황이신가요?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { text: "광고비를 쓰는데 매출이 안 오른다", severe: true },
                { text: "네이버 플레이스에서 경쟁사에 계속 밀린다", severe: true },
                { text: "리뷰가 적어서 신규 고객 유입이 안 된다", severe: false },
                { text: "SNS를 해야 하는데 어떻게 해야 할지 모른다", severe: false },
                { text: "이전 대행사 결과가 기대에 못 미쳤다", severe: true },
                { text: "마케팅을 처음 시작하려는데 어디서부터 해야 할지 모른다", severe: false },
              ].map((item) => (
                <div key={item.text} className={`flex items-start gap-3 p-4 rounded-xl border ${item.severe ? "bg-red-50 border-red-100" : "bg-gray-50 border-gray-100"}`}>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.severe ? "bg-red-100" : "bg-gray-200"}`}>
                    <CheckCircle2 size={11} className={item.severe ? "text-red-500" : "text-gray-400"} strokeWidth={3} />
                  </div>
                  <p className={`text-sm font-medium leading-snug ${item.severe ? "text-red-700" : "text-gray-600"}`}>{item.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <p className="text-blue-200 text-sm font-semibold mb-2">1개라도 해당된다면</p>
                  <h3 className="text-xl font-black text-white mb-2">지금 바로 무료 진단을 받아보세요</h3>
                  <ul className="space-y-1.5 mt-3">
                    {["경쟁사 현황 분석", "마케팅 공백 진단", "예산별 채널 추천", "현실적 성과 안내"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-blue-200">
                        <CheckCircle2 size={11} className="text-blue-300 shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  <Link href="/free-check"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-700 font-black text-sm hover:bg-blue-50 transition-colors shadow-sm whitespace-nowrap">
                    무료 플레이스 진단받기 <ArrowRight size={14} />
                  </Link>
                  <a href="https://pf.kakao.com/_MuUkG/chat" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 text-gray-900 font-bold text-sm hover:bg-yellow-300 transition-colors whitespace-nowrap">
                    <MessageCircle size={13} /> 카카오로 바로 상담
                  </a>
                  <p className="text-center text-[11px] text-blue-300">24시간 내 연락 · 비용 0원</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 상담 진행 프로세스 ══ */}
        <section className="py-14 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">진행 과정</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">신청하면 이렇게 진행됩니다</h2>
              <p className="text-gray-400 text-sm">상담 신청 후 어떤 순서로 진행되는지 미리 확인하세요</p>
            </div>

            {/* 데스크톱: 가로 타임라인 */}
            <div className="hidden md:grid grid-cols-4 gap-0 relative mb-10">
              {/* 연결선 */}
              <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 z-0" />
              {[
                {
                  step: "01",
                  icon: FileText,
                  title: "상담 신청",
                  desc: "간단한 정보 입력\n(업종·현재 상황·목표)",
                  time: "2분",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  step: "02",
                  icon: Search,
                  title: "사전 분석",
                  desc: "경쟁사·키워드·현재\n노출 현황 파악",
                  time: "24시간 이내",
                  color: "from-indigo-500 to-blue-600",
                },
                {
                  step: "03",
                  icon: MessageCircle,
                  title: "무료 전략 상담",
                  desc: "분석 결과 공유\n맞춤 전략 제안",
                  time: "20~30분",
                  color: "from-blue-600 to-indigo-700",
                },
                {
                  step: "04",
                  icon: TrendingUp,
                  title: "시작 여부 결정",
                  desc: "계약 강요 없이\n사장님이 결정",
                  time: "비용 0원",
                  color: "from-blue-700 to-indigo-800",
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex flex-col items-center relative z-10 px-3">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg mb-3`}>
                      <Icon size={22} className="text-white" strokeWidth={2} />
                    </div>
                    <span className="text-[10px] font-black text-gray-300 mb-1">STEP {s.step}</span>
                    <h3 className="text-sm font-black text-gray-900 mb-1.5 text-center">{s.title}</h3>
                    <p className="text-[11px] text-gray-400 text-center leading-relaxed whitespace-pre-line mb-2">{s.desc}</p>
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">{s.time}</span>
                  </div>
                );
              })}
            </div>

            {/* 모바일: 세로 타임라인 */}
            <div className="md:hidden space-y-3 mb-8">
              {[
                { step: "1", icon: FileText, title: "상담 신청", desc: "간단한 정보 입력 (업종·현재 상황·목표)", time: "2분", color: "from-blue-500 to-blue-600" },
                { step: "2", icon: Search, title: "사전 분석", desc: "경쟁사·키워드·현재 노출 현황 파악", time: "24시간 이내", color: "from-indigo-500 to-blue-600" },
                { step: "3", icon: MessageCircle, title: "무료 전략 상담", desc: "분석 결과 공유 및 맞춤 전략 제안", time: "20~30분", color: "from-blue-600 to-indigo-700" },
                { step: "4", icon: TrendingUp, title: "시작 여부 결정", desc: "계약 강요 없이 사장님이 결정", time: "비용 0원", color: "from-blue-700 to-indigo-800" },
              ].map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.step} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon size={16} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h3 className="text-sm font-black text-gray-900">STEP {s.step} · {s.title}</h3>
                        <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full shrink-0">{s.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-600 rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-blue-200 text-xs font-semibold mb-1">지금 바로 시작할 수 있습니다</p>
                <p className="text-white font-black text-base">상담 신청부터 전략 제안까지 비용 0원 · 부담 없이 시작하세요</p>
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-blue-700 font-black text-sm hover:bg-blue-50 transition-colors shadow-sm shrink-0 whitespace-nowrap">
                무료 상담 신청 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ 긴급성 배너 ══ */}
        <section className="py-10 md:py-14 bg-gray-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Clock, label: "이번 달 신규 접수", value: "2자리 남음", sub: "선착순 마감 원칙", color: "from-blue-600 to-indigo-700" },
                { icon: TrendingUp, label: "평균 매출 상승", value: "+34%", sub: "3개월 기준 평균", color: "from-blue-600 to-blue-800" },
                { icon: ShieldCheck, label: "100% 무료 상담", value: "0원", sub: "계약 강요 없음", color: "from-blue-500 to-blue-700" },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon size={18} className="text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{stat.label}</div>
                      <div className="text-xl font-black text-white">{stat.value}</div>
                      <div className="text-[11px] text-gray-600">{stat.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══ 상담 신청 시 받게 되는 것 ══ */}
        <section className="py-14 md:py-20 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">무료 상담 혜택</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">지금 상담 신청하면 받게 되는 것</h2>
              <p className="text-gray-400 text-sm mt-2">비용 0원 · 계약 강요 없음 · 1영업일 내 전달</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  icon: Search,
                  title: "플레이스 현황 진단",
                  desc: "내 매장의 네이버 플레이스 순위·리뷰·정보 완성도를 체크합니다.",
                  badge: "무료",
                },
                {
                  icon: Users,
                  title: "경쟁사 3곳 비교",
                  desc: "상위 노출 중인 경쟁 매장의 전략을 분석해 차이점을 찾아드립니다.",
                  badge: "무료",
                },
                {
                  icon: TrendingUp,
                  title: "3개월 성과 예측",
                  desc: "업종·예산·현재 순위를 기반으로 달성 가능한 목표 수치를 제시합니다.",
                  badge: "무료",
                },
                {
                  icon: FileText,
                  title: "맞춤 전략 제안서",
                  desc: "예산에 맞는 최적 서비스 조합과 실행 우선순위를 정리해 드립니다.",
                  badge: "무료",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:bg-white hover:shadow-md transition-all group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
                        <Icon size={17} className="text-white" strokeWidth={2} />
                      </div>
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">{item.badge}</span>
                    </div>
                    <h3 className="font-black text-gray-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-sm shrink-0 mx-auto sm:mx-0">
                <Clock size={17} className="text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-black text-blue-900 mb-0.5">1영업일 내 대표가 직접 연락드립니다</p>
                <p className="text-xs text-blue-700">상담 내용은 철저히 비밀이 유지되며, 계약 강요는 일절 없습니다.</p>
              </div>
              <Link href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-colors whitespace-nowrap shrink-0">
                지금 신청 <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══ FAQ 섹션 ══ */}
        <HomeFAQ />

        {/* ══ 무료 가이드 리드 마그넷 ══ */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 mb-4">
                    <FileText size={12} className="text-white" />
                    <span className="text-white text-xs font-bold">무료 가이드</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
                    플레이스 순위를 올리는<br />7가지 체크리스트
                  </h2>
                  <p className="text-blue-100 text-sm leading-relaxed mb-6">
                    10년간 500개 매장 데이터에서 추출한 플레이스 SEO 핵심 포인트.
                    지금 무료 상담 신청하면 PDF로 바로 보내드립니다.
                  </p>
                  <div className="space-y-2">
                    {[
                      "리뷰 수·답글률·사진 수 최적 기준표",
                      "경쟁사 분석 방법 3단계",
                      "한 달 만에 순위 오르는 우선순위 액션 7가지",
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-blue-200 shrink-0" strokeWidth={2.5} />
                        <span className="text-blue-100 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 lg:w-52">
                  <Link href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-black px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm text-center">
                    무료 가이드 받기 <ArrowRight size={15} />
                  </Link>
                  <p className="text-blue-200 text-xs text-center">상담 신청 후 카카오톡으로 전송</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 최종 CTA ══ */}
        <section className="py-20 md:py-32 bg-gray-950 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-blue-600/8 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-indigo-600/8 blur-3xl rounded-full" />
            <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
          </div>

          <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-gray-400 text-xs font-medium">지금 상담 가능 · 오늘 3명 신청</span>
            </div>

            <h2 className="text-[36px] md:text-[52px] font-black text-white leading-tight mb-5">
              오늘 상담하면,<br />
              <span className="text-blue-400">내일 전략 리포트</span>가 옵니다
            </h2>

            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto">
              업종·경쟁사·현재 순위를 분석해<br className="hidden md:block" />
              무엇을 먼저 해야 할지 정확히 알려드립니다. 비용 0원.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-[18px] rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-base transition-all shadow-2xl shadow-blue-600/30 hover:-translate-y-0.5">
                <FileText size={16} /> 무료 상담 신청 (0원)
              </Link>
              <a href="https://pf.kakao.com/_MuUkG/chat" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-base transition-all">
                <MessageCircle size={16} /> 카카오톡 상담
              </a>
              <a href="tel:010-7541-9054"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/15 hover:border-white/30 text-white font-medium text-base transition-all">
                <Phone size={16} /> 010-7541-9054
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { icon: ShieldCheck, text: "상담 비용 0원" },
                { icon: Handshake, text: "계약 강요 없음" },
                { icon: Clock, text: "24시간 내 대표 직접 연락" },
                { icon: Star, text: "4.9 / 5.0 만족도" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Icon size={12} className="text-blue-500" strokeWidth={2} />
                  {text}
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
