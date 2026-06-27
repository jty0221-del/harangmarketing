"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Phone,
  MessageCircle,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  FileText,
  MapPin,
  Search,
  BookOpen,
  Megaphone,
  AtSign,
  ChevronRight,
  ShieldCheck,
  Clock,
  Handshake,
  Quote,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const SERVICES = [
  {
    icon: FileText,
    title: "블로그 배포(기자단)",
    desc: "전문 작가가 브랜드 맞춤 기사를 작성하고, 뉴스 사이트·커뮤니티 등 다양한 채널에 동시 배포합니다.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: BookOpen,
    title: "홈페이지형 블로그 제작",
    desc: "네이버 블로그를 전문 홈페이지처럼 구성해 브랜드 신뢰도를 높이고 검색 상위 노출을 이끌어냅니다.",
    color: "from-green-500 to-green-700",
  },
  {
    icon: MapPin,
    title: "카카오맵 마케팅",
    desc: "카카오맵 플레이스 정보 최적화로 지역 검색 상위에 노출시켜 매장 방문객을 꾸준히 늘립니다.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "체험단 모집 대행",
    desc: "업종에 맞는 타겟 인플루언서와 일반 체험단을 모집해 신뢰도 높은 실후기 콘텐츠를 만들어냅니다.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Star,
    title: "리뷰 마케팅",
    desc: "긍정 리뷰를 전략적으로 쌓아 신규 고객의 첫 방문 결정을 이끌어내고 평점을 높입니다.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    icon: Search,
    title: "플레이스 SEO 최적화",
    desc: "네이버 플레이스 알고리즘 분석 기반으로 업종별 핵심 키워드 상위 노출을 달성합니다.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "플레이스 순위상승",
    desc: "방문자 수·저장 수·블로그 리뷰 등 복합 지표를 체계적으로 관리해 순위를 끌어올립니다.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "블로그 관리 대행",
    desc: "정기 포스팅과 SEO 최적화로 블로그 지수를 높이고 꾸준한 유입 트래픽을 유지합니다.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Megaphone,
    title: "맘카페 바이럴",
    desc: "지역 맘카페와 육아 커뮤니티를 통해 핵심 타겟층에게 자연스럽게 브랜드를 알립니다.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: AtSign,
    title: "인스타그램 마케팅",
    desc: "비주얼 콘텐츠 기획부터 릴스·광고 운영까지, 인스타그램 채널 성장을 전담합니다.",
    color: "from-violet-500 to-purple-600",
  },
];

const COMPARE_ITEMS = [
  {
    category: "전략 설계",
    harang: "업종별 맞춤형 전략 (카페·병원·쇼핑몰 특화)",
    general: "일괄 패키지, 템플릿 기반",
  },
  {
    category: "분석 방식",
    harang: "데이터 기반, 매출 직접 연동 추적",
    general: "노출·클릭 수 위주, 감각 운영",
  },
  {
    category: "보고 체계",
    harang: "월 2회 상세 리포트 + 주간 최적화",
    general: "월 1회 간단 보고, 설정 후 방치",
  },
  {
    category: "담당자",
    harang: "10년 경력 전문가 1:1 전담",
    general: "신입 담당자 수시 교체",
  },
];

const PAIN_POINTS = [
  {
    icon: "01",
    q: "광고비는 쓰는데 매출이 안 늘어요",
    a: "업종 특성을 무시한 일괄 마케팅이 원인입니다. 하랑은 카페·병원·쇼핑몰 등 업종별 데이터를 기반으로 매출에 직결되는 전략만 설계합니다.",
  },
  {
    icon: "02",
    q: "보고서를 봐도 뭔지 모르겠어요",
    a: "복잡한 마케팅 용어 대신 매출·방문객·예약 수 등 사장님이 바로 이해할 수 있는 지표로 월 2회 상세하게 보고드립니다.",
  },
  {
    icon: "03",
    q: "담당자가 계속 바뀌어서 지쳐요",
    a: "하랑은 계약부터 종료까지 대표가 직접 담당합니다. 10년 경력의 전문가가 처음부터 끝까지 함께합니다.",
  },
];

const TESTIMONIALS = [
  {
    name: "카페 사장님",
    location: "경기 일산",
    text: "3개월 만에 네이버 플레이스 '일산 카페' 키워드 1위가 됐어요. 매달 방문객이 눈에 띄게 늘고 있습니다.",
    service: "플레이스 SEO",
    stars: 5,
  },
  {
    name: "피부과 원장님",
    location: "서울 강서",
    text: "인스타그램 신규 예약이 6개월 만에 3배가 됐습니다. 보고서도 이해하기 쉽고, 담당자 분이 친절하게 설명해주셔서 믿음이 갔어요.",
    service: "인스타그램 마케팅",
    stars: 5,
  },
  {
    name: "학원 원장님",
    location: "경기 고양",
    text: "맘카페 바이럴 하나로 수강생이 50% 늘었습니다. 지역 엄마들 사이에서 자연스럽게 입소문이 났어요.",
    service: "맘카페 바이럴",
    stars: 5,
  },
];

const TRUST_ITEMS = [
  {
    icon: ShieldCheck,
    title: "검증된 10년 경력",
    desc: "2014년부터 500개 이상의 프로젝트를 직접 진행한 실전 경험",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Handshake,
    title: "95% 재계약률",
    desc: "성과로 증명하는 신뢰. 고객이 먼저 다시 찾는 대행사",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Clock,
    title: "24시간 내 응답",
    desc: "문의 후 24시간 이내 연락, 평일 항상 대응 가능",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: TrendingUp,
    title: "매출 중심 지표",
    desc: "노출 수가 아닌 실제 매출 증대를 목표로 관리",
    color: "from-amber-500 to-orange-500",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden pt-16">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-2xl" />
            {/* Grid lines */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-8 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                10년 경력 전문가 직접 관리
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.15] tracking-tight mb-6">
                마케팅에 돈만 쓰고<br />
                <span className="text-blue-400">효과를 못 보고</span> 계신가요?
              </h1>

              <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4 max-w-lg">
                하랑마케팅은 업종별 맞춤 전략과 데이터 기반 분석으로
                마케팅 비용을 <span className="text-white font-semibold">실제 매출</span>로 바꿔드립니다.
              </p>
              <p className="text-sm text-gray-500 mb-10">
                카페·음식점·병원·뷰티·학원·쇼핑몰 전문 · 재계약률 95%
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-500/30 hover:-translate-y-0.5"
                >
                  무료 전략 진단 받기
                  <ArrowRight size={17} />
                </Link>
                <Link
                  href="/cases"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/8 hover:bg-white/12 border border-white/15 text-white font-semibold text-base transition-all"
                >
                  성공 사례 보기
                  <ChevronRight size={16} />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-green-400" />
                  상담 비용 0원
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-green-400" />
                  계약 강요 없음
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-green-400" />
                  24시간 내 연락
                </span>
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16 md:mt-20">
              {[
                { value: "500+", label: "프로젝트 완료", sub: "2014년~" },
                { value: "95%", label: "재계약률", sub: "업계 평균 60%" },
                { value: "300%", label: "최대 매출 상승", sub: "실제 달성 수치" },
                { value: "10년+", label: "마케팅 경력", sub: "대표 직접 담당" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/8 rounded-2xl p-4 md:p-5"
                >
                  <div className="text-2xl md:text-3xl font-black text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 font-medium">{stat.label}</div>
                  <div className="text-[11px] text-gray-600 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">왜 하랑인가</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                이런 고민, 저희가 해결해드립니다
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto">
                수백 명의 사장님과 함께하며 가장 많이 들은 고민들입니다
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {PAIN_POINTS.map((item) => (
                <div
                  key={item.icon}
                  className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl font-black text-gray-100 mb-4 leading-none">{item.icon}</div>
                  <h3 className="font-black text-gray-900 text-base md:text-lg mb-3 leading-snug">
                    "{item.q}"
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Trust ── */}
        <section className="py-16 md:py-20 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center md:text-left">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 shadow-sm mx-auto md:mx-0`}
                    >
                      <Icon size={18} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SNS ── */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-center text-xs text-gray-400 mb-6 font-semibold uppercase tracking-widest">
              SNS 채널에서도 만나보세요
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  label: "네이버 블로그",
                  desc: "마케팅 팁·성공 사례·업종별 전략",
                  href: "https://blog.naver.com/harangmarketing",
                  bg: "bg-green-500",
                  letter: "N",
                },
                {
                  label: "카카오톡 채널",
                  desc: "지금 바로 무료 상담 가능",
                  href: "https://pf.kakao.com/_MuUkG/chat",
                  bg: "bg-yellow-400",
                  letter: "K",
                },
                {
                  label: "인스타그램",
                  desc: "작업 포트폴리오·최신 소식",
                  href: "https://www.instagram.com/harangmarketing/",
                  bg: "bg-gradient-to-br from-purple-500 to-pink-500",
                  letter: "I",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-white font-black text-xl shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                  >
                    {s.letter}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-gray-900 text-sm mb-0.5">{s.label}</div>
                    <div className="text-xs text-gray-400">{s.desc}</div>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 shrink-0 ml-auto group-hover:text-blue-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">서비스</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                업종에 맞는 마케팅을 골라드립니다
              </h2>
              <p className="text-gray-500 text-base max-w-xl mx-auto">
                어떤 서비스를 선택해야 할지 모르겠다면 먼저 무료 상담을 받아보세요
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 hover:border-blue-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={17} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-[15px] mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-gray-800 transition-colors"
              >
                서비스 전체 보기
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Compare ── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">비교</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                하랑마케팅이 다른 이유
              </h2>
              <p className="text-gray-500 text-base">
                일반 대행사와 직접 비교해보세요
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-[1fr_1fr_1fr] bg-gray-900">
                <div className="p-4 md:p-5 text-gray-400 text-xs font-bold uppercase tracking-wider">구분</div>
                <div className="p-4 md:p-5 text-center">
                  <span className="text-blue-300 text-xs font-black uppercase tracking-wider">하랑마케팅</span>
                </div>
                <div className="p-4 md:p-5 text-center">
                  <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">일반 대행사</span>
                </div>
              </div>

              {COMPARE_ITEMS.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-[1fr_1fr_1fr] text-sm border-t border-gray-100 ${i % 2 === 1 ? "bg-gray-50/50" : "bg-white"}`}
                >
                  <div className="p-4 md:p-5 font-bold text-gray-700 text-xs md:text-sm flex items-center">
                    {item.category}
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-800 text-xs md:text-sm leading-relaxed">{item.harang}</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-5">
                    <div className="flex items-start gap-2">
                      <X size={14} className="text-red-300 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-gray-400 text-xs md:text-sm leading-relaxed">{item.general}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">후기</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                실제 사장님들의 이야기
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                >
                  <div className="flex items-center gap-0.5 mb-4">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 shadow-sm">
                    <Quote size={13} className="text-white" strokeWidth={2} />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-5">{t.text}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.location}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                      {t.service}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 leading-tight">
              지금 바로 무료 전략 진단을<br className="hidden md:block" /> 받아보세요
            </h2>
            <p className="text-blue-100 text-base md:text-lg mb-3 leading-relaxed">
              업종·경쟁사·현재 상황을 분석해 최적의 마케팅 방향을 제안해드립니다.
            </p>
            <p className="text-blue-200/70 text-sm mb-10">상담 비용 없음 · 계약 강요 없음 · 24시간 내 연락</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 font-black text-base hover:bg-blue-50 transition-colors shadow-xl shadow-blue-900/30"
              >
                <FileText size={16} />
                무료 상담 신청
              </Link>
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 border border-white/25 text-white font-bold text-base hover:bg-white/18 transition-colors"
              >
                <MessageCircle size={16} />
                카카오톡 상담
              </a>
              <a
                href="tel:010-9054-3788"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 border border-white/25 text-white font-bold text-base hover:bg-white/18 transition-colors"
              >
                <Phone size={16} />
                전화 상담
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
