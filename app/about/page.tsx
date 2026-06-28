import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TrustBadges from "../components/TrustBadges";
import ScrollReveal from "../components/ScrollReveal";
import Link from "next/link";
import { Award, Target, Heart, TrendingUp, CheckCircle2, ArrowRight, Quote, Users, Star, BarChart3, Handshake, ShieldCheck, Clock, MessageCircle, Coffee, UtensilsCrossed } from "lucide-react";
import PhotoPlaceholder from "../components/PhotoPlaceholder";

export const metadata: Metadata = {
  title: "회사소개 — 하랑마케팅 | 10년 경력 소상공인 전문 마케팅 대행사",
  description: "2014년 설립, 500+ 프로젝트, 재계약률 95%. 대표가 직접 담당하는 소상공인 전문 마케팅 대행사 하랑마케팅의 스토리와 철학을 소개합니다.",
  keywords: ["하랑마케팅 소개", "소상공인 마케팅 대행사", "마케팅 대행사 경력", "마케팅 대행사 신뢰"],
  openGraph: {
    title: "하랑마케팅 — 10년 경력, 대표 직접 담당",
    description: "2014년부터 500+ 소상공인과 함께 성장해온 하랑마케팅의 이야기.",
    url: "https://harangmarketing.com/about",
  },
};

const MILESTONES = [
  { year: "2014", title: "하랑마케팅 설립", desc: "소상공인 전문 마케팅 대행 시작. '상생'을 첫 번째 가치로 내세움", badge: "창업" },
  { year: "2016", title: "100번째 프로젝트 완료", desc: "카페·음식점·미용 업종 특화 노하우 축적. 재계약률 80% 돌파", badge: "재계약률 80%" },
  { year: "2019", title: "네이버 플레이스 SEO 특화", desc: "플레이스 알고리즘 분석·최적화 시스템 구축. 업계 선도 시작", badge: "플레이스 전문" },
  { year: "2021", title: "300번째 프로젝트", desc: "재계약률 90% 돌파. 입소문만으로 신규 클라이언트 유입 시작", badge: "재계약률 90%" },
  { year: "2023", title: "SNS 마케팅 확장", desc: "인스타그램·맘카페 바이럴 서비스 론칭. 멀티채널 통합 전략 완성", badge: "채널 확장" },
  { year: "2024", title: "500번째 프로젝트", desc: "재계약률 95% 달성. 업종별 맞춤 전략 데이터베이스 완성", badge: "재계약률 95%" },
];

const VALUES = [
  { icon: Heart, title: "상생", desc: "클라이언트가 성장해야 하랑도 성장합니다. 단기 계약보다 장기 파트너십을 추구하며, 모든 의사결정의 기준은 '클라이언트 매출'입니다.", color: "from-blue-600 to-blue-800" },
  { icon: Target, title: "맞춤 전략", desc: "카페와 병원, 학원은 전략이 달라야 합니다. 일괄 패키지 없이 업종별 데이터와 경쟁사 분석을 기반으로 맞춤 설계합니다.", color: "from-blue-500 to-blue-700" },
  { icon: Award, title: "검증된 전문성", desc: "10년간 500+ 프로젝트를 통해 쌓은 실전 경험과 데이터로 결과를 만들어냅니다. 이론이 아닌 현장에서 검증된 방법만 사용합니다.", color: "from-blue-700 to-indigo-700" },
  { icon: TrendingUp, title: "매출 중심", desc: "노출 수·클릭 수가 아니라 실제 매출과 방문객 증대를 목표로 운영합니다. 성과가 없으면 전략을 즉시 바꿉니다.", color: "from-blue-600 to-blue-900" },
];

const TEAM_SKILLS = [
  "네이버 플레이스 SEO", "블로그 콘텐츠 마케팅", "인스타그램 광고 운영",
  "체험단 모집·관리", "맘카페 바이럴", "카카오맵 최적화",
  "데이터 기반 분석", "경쟁사 벤치마킹", "매출 전환 전략",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">About</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              상생을 기반으로 한<br /><span className="text-blue-400">진심 마케팅</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mb-8">
              하랑마케팅은 2014년부터 소상공인·자영업자와 함께 성장해온 업종별 맞춤 마케팅 전문 대행사입니다.
            </p>
            <TrustBadges />
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">우리의 이야기</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-snug">
                  "마케팅은 비용이 아니라<br /><span className="text-blue-600">투자여야 합니다"</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>2014년, 하랑마케팅은 소박한 목표 하나로 시작했습니다. <strong className="text-gray-900">"돈은 없어도 마케팅이 필요한 사장님들 곁에 있어드리자."</strong></p>
                  <p>수많은 소상공인분들이 광고비를 써도 효과를 못 보는 이유는 하나입니다. 업종 특성을 무시한 일괄 마케팅 때문입니다. 카페와 피부과, 학원은 완전히 다른 전략이 필요합니다.</p>
                  <p>하랑은 10년간 500개 이상의 프로젝트를 통해 업종별 맞춤 전략과 데이터를 쌓아왔습니다. 그 경험이 지금의 95% 재계약률로 이어졌습니다.</p>
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 shadow-sm">
                    <Quote size={13} className="text-white" />
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed font-medium italic">
                    "클라이언트의 성공이 곧 하랑의 성공입니다. 그래서 저희는 항상 매출에 직결되는 것만 합니다."
                  </p>
                  <p className="text-xs text-blue-600 mt-2 font-bold">— 대표 전태영</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "2014년", label: "설립", sub: "10년 역사", icon: Clock, color: "from-blue-500 to-blue-700" },
                  { value: "500+", label: "완료 프로젝트", sub: "모든 업종", icon: BarChart3, color: "from-blue-600 to-blue-800" },
                  { value: "95%", label: "재계약률", sub: "업계 최고 수준", icon: Handshake, color: "from-blue-500 to-blue-700" },
                  { value: "300%", label: "최대 매출 상승", sub: "실제 달성 수치", icon: TrendingUp, color: "from-blue-700 to-indigo-700" },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-3 shadow-sm`}>
                        <Icon size={17} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="text-2xl font-black text-gray-900 mb-0.5">{s.value}</div>
                      <div className="text-sm font-bold text-gray-700">{s.label}</div>
                      <div className="text-xs text-gray-400">{s.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CEO Profile */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <PhotoPlaceholder
                  label="대표 전태영 대표 프로필 사진"
                  hint="정장 또는 캐주얼 정장 착용 / 밝은 배경 / 세로형 인물 사진"
                  width="w-28 md:w-36"
                  height="h-28 md:h-36"
                />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <a href="https://blog.naver.com/harangmarketing" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-green-600 text-white text-[11px] font-bold hover:bg-green-500 transition-colors">
                  <span className="font-black">N</span> 블로그
                </a>
              </div>
              {/* Info */}
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">대표 소개</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">전태영</h2>
                <p className="text-gray-500 text-sm mb-5">하랑마케팅 대표 · 소상공인 마케팅 전문가 · 10년 경력</p>
                <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                  <p>2014년 소상공인 전문 마케팅 대행을 시작해 10년간 카페·음식점·미용·병원·학원·쇼핑몰 등 6개 업종에서 <strong className="text-gray-900">500건 이상의 프로젝트</strong>를 직접 진행했습니다.</p>
                  <p>모든 프로젝트를 외주 없이 대표가 직접 담당합니다. 계약부터 전략 수립, 콘텐츠 제작, 성과 보고까지 <strong className="text-gray-900">담당자가 바뀌는 일이 없습니다.</strong></p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { val: "10년+", label: "마케팅 경력" },
                    { val: "500+", label: "완료 프로젝트" },
                    { val: "95%", label: "재계약률" },
                    { val: "6개", label: "특화 업종" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center">
                      <div className="text-lg font-black text-blue-600">{s.val}</div>
                      <div className="text-[11px] text-gray-500">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">전문 역량</p>
            <h2 className="text-xl font-black text-gray-900 mb-6">이런 것들을 잘합니다</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {TEAM_SKILLS.map((s) => (
                <span key={s} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-gray-100 text-sm text-gray-700 font-medium shadow-sm">
                  <CheckCircle2 size={13} className="text-blue-500" strokeWidth={2.5} />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Why Harang */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">차별화 포인트</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">왜 하랑을 선택하는가</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  num: "01",
                  color: "from-blue-500 to-blue-700",
                  title: "업종별 데이터가 다릅니다",
                  desc: "카페와 병원은 핵심 키워드도, 리뷰 전략도, SNS 채널도 전부 다릅니다. 10년간 6개 업종 500개 프로젝트로 쌓은 업종별 데이터베이스가 있습니다.",
                  proof: "6개 업종 특화 전략 보유",
                },
                {
                  num: "02",
                  color: "from-blue-600 to-blue-800",
                  title: "대표가 직접 담당합니다",
                  desc: "계약 후 신입 직원에게 넘기지 않습니다. 10년 경력의 대표가 계약부터 성과 보고까지 직접 담당합니다. 담당자가 바뀌어 처음부터 설명하는 일은 없습니다.",
                  proof: "500+ 프로젝트 전부 대표 직접",
                },
                {
                  num: "03",
                  color: "from-blue-500 to-indigo-700",
                  title: "매출 숫자로 말합니다",
                  desc: "노출 수·클릭 수가 아닌 방문객·예약·매출 변화로 성과를 보고합니다. 숫자가 없으면 전략을 즉시 바꿉니다. 그것이 95% 재계약률의 이유입니다.",
                  proof: "재계약률 95% · 10년 유지",
                },
              ].map((item) => (
                <div key={item.num} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <div className={`inline-flex px-2.5 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-black mb-4`}>
                    {item.num}
                  </div>
                  <h3 className="font-black text-gray-900 text-base mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
                    <CheckCircle2 size={12} strokeWidth={2.5} />
                    {item.proof}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">핵심 가치</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">어떤 프로젝트에서도 흔들리지 않는 원칙</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {VALUES.map((v, i) => {
                const Icon = v.icon;
                return (
                  <ScrollReveal key={v.title} delay={i * 100}>
                  <div className="bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={20} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">연혁</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">10년의 걸음</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-100" />
              <div className="space-y-6">
                {MILESTONES.map((m, i) => (
                  <ScrollReveal key={m.year} delay={i * 80}>
                  <div className="flex gap-6 relative">
                    <div className="w-[72px] shrink-0 text-right pt-1">
                      <span className="text-sm font-black text-blue-600">{m.year}</span>
                    </div>
                    <div className="relative pb-6">
                      <div className="absolute -left-[25px] top-2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-black text-gray-900 text-[15px]">{m.title}</h3>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black border border-blue-100">{m.badge}</span>
                      </div>
                      <p className="text-sm text-gray-400">{m.desc}</p>
                    </div>
                  </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CEO */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">대표 소개</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">모든 프로젝트를 직접 담당합니다</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
                {/* Left panel */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 flex flex-col items-center justify-center text-center">
                  <PhotoPlaceholder
                    label="대표 사진"
                    hint="실제 사진으로 교체 예정"
                    width="w-28"
                    height="h-32"
                    className="mb-4 rounded-2xl"
                    dark
                  />
                  <h3 className="font-black text-white text-lg mb-0.5">전태영</h3>
                  <p className="text-blue-200 text-xs mb-4">대표 · 마케팅 경력 10년+</p>
                  <div className="flex gap-0.5 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={13} className="text-yellow-300 fill-yellow-300" />)}
                  </div>
                  <p className="text-blue-100 text-[11px]">고객 만족도 4.9/5.0</p>
                </div>
                {/* Right panel */}
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["네이버 플레이스 SEO 전문가", "소상공인 마케팅 컨설턴트", "500+ 프로젝트 경험"].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">{tag}</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    대형 대행사에서 10년간 수백 개 매장 마케팅을 담당했습니다.
                    그런데 한 가지가 항상 마음에 걸렸어요. 신입 직원이 담당하고, 패키지를 팔고, 숫자만 보고하는 방식이요.
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    그래서 독립해 하랑마케팅을 만들었습니다.
                    <span className="text-gray-900 font-semibold"> 계약부터 성과 리포트까지 대표인 제가 직접 합니다.</span>
                    담당자가 바뀌어 처음부터 다시 설명하는 일은 없습니다.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { val: "10년+", label: "현장 경력" },
                      { val: "500+", label: "직접 담당" },
                      { val: "95%", label: "재계약률" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white rounded-xl p-3.5 border border-gray-100 text-center">
                        <div className="text-lg font-black text-blue-600 mb-0.5">{s.val}</div>
                        <div className="text-[11px] text-gray-400">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <Quote size={14} className="text-blue-300 mb-2" />
                    <p className="text-sm text-blue-800 leading-relaxed italic font-medium">
                      "상담할 때 항상 먼저 말씀드립니다. 이 예산, 이 업종이면 기대할 수 있는 결과가 이것입니다 — 라고. 과장 없이, 현실적으로."
                    </p>
                    <p className="text-xs text-blue-600 mt-2 font-bold">— 대표 전태영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-10 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">하랑마케팅이 증명하는 숫자</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { val: "2014", label: "설립 연도", icon: Clock, color: "from-blue-500 to-blue-700" },
                { val: "500+", label: "완료 프로젝트", icon: BarChart3, color: "from-blue-600 to-blue-800" },
                { val: "95%", label: "재계약률", icon: Handshake, color: "from-blue-500 to-blue-700" },
                { val: "6개", label: "업종 특화 전략", icon: Target, color: "from-blue-700 to-indigo-700" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 text-center shadow-sm hover:shadow-md transition-shadow">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-3 shadow-sm`}>
                      <Icon size={16} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="text-2xl font-black text-gray-900 mb-0.5">{s.val}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 클라이언트 후기 */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">클라이언트 목소리</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">함께한 사장님들의 이야기</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  name: "박 사장님",
                  biz: "경기 일산 카페",
                  period: "7개월째 진행 중",
                  result: "방문객 +167%",
                  quote: "전에는 마케팅 대행사가 뭘 했는지도 몰랐는데, 하랑은 매달 숫자로 보여줘서 믿음이 갑니다.",
                  color: "from-blue-600 to-blue-800",
                },
                {
                  name: "이 원장님",
                  biz: "경기 분당 피부과",
                  period: "5개월 진행",
                  result: "신규 예약 +300%",
                  quote: "병원 마케팅 전문 업체가 따로 있는 줄 알았는데 하랑이 더 잘 아시더라고요. 데이터를 직접 보여주셔서 신뢰했습니다.",
                  color: "from-blue-500 to-blue-700",
                },
                {
                  name: "최 원장님",
                  biz: "서울 목동 태권도 학원",
                  period: "3개월 진행",
                  result: "수강생 +55%",
                  quote: "처음에는 반신반의했어요. 근데 2달 만에 대기자가 생겼습니다. 지금도 계속 진행 중이에요.",
                  color: "from-blue-700 to-indigo-700",
                },
              ].map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center shadow-sm`}>
                      <span className="text-white font-black text-sm">{t.name[0]}</span>
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">{t.result}</span>
                  </div>
                  <div className="mb-3">
                    <div className="font-black text-gray-900 text-sm">{t.name}</div>
                    <div className="text-[11px] text-gray-400">{t.biz} · {t.period}</div>
                  </div>
                  <div className="flex gap-1.5">
                    <Quote size={12} className="text-gray-300 shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-500 leading-relaxed italic">{t.quote}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 업종별 실적 배지 */}
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">업종별 실적</p>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">어떤 업종이든 결과가 있습니다</h2>
              <p className="text-gray-400 text-sm mt-2">2014~2024 실제 성과 기준</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { icon: Coffee, industry: "카페·베이커리", stat: "+167%", label: "방문객", color: "from-amber-500 to-orange-500" },
                { icon: UtensilsCrossed, industry: "음식점·배달", stat: "+113%", label: "배달 매출", color: "from-red-500 to-rose-600" },
                { icon: Award, industry: "미용·뷰티", stat: "예약 마감", label: "2개월 내", color: "from-pink-500 to-rose-500" },
                { icon: ShieldCheck, industry: "의원·피부과", stat: "+300%", label: "신규 예약", color: "from-blue-500 to-blue-700" },
                { icon: Target, industry: "학원·교육", stat: "+55%", label: "수강생", color: "from-indigo-500 to-violet-600" },
                { icon: TrendingUp, industry: "온라인 쇼핑몰", stat: "+64%", label: "월 매출", color: "from-green-500 to-emerald-600" },
              ].map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.industry} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center mb-3 shadow-sm`}>
                      <Icon size={16} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="text-base font-black text-gray-900 leading-tight">{ind.stat}</div>
                    <div className="text-[10px] text-gray-400 mb-1">{ind.label}</div>
                    <div className="text-[10px] font-bold text-gray-500 leading-tight">{ind.industry}</div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-[11px] text-gray-400 mt-5">* 업종·지역·시작 시점에 따라 다를 수 있습니다. 정확한 예상 성과는 무료 상담에서 안내드립니다.</p>
          </div>
        </section>

        {/* 업종별 실적 데이터 */}
        <section className="py-14 md:py-18 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">10년 데이터</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">업종별 평균 성과</h2>
              <p className="text-gray-500 text-sm mt-2">500건+ 프로젝트에서 집계한 실제 평균 수치입니다</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { category: "카페·베이커리", metric: "+167%", label: "월 방문객", period: "평균 3개월", color: "from-amber-500 to-orange-500", bg: "bg-amber-50", border: "border-amber-100" },
                { category: "음식점·배달", metric: "+113%", label: "배달 매출", period: "평균 4개월", color: "from-red-500 to-rose-600", bg: "bg-red-50", border: "border-red-100" },
                { category: "미용·네일·뷰티", metric: "예약 마감", label: "달성률", period: "평균 3개월", color: "from-pink-500 to-rose-500", bg: "bg-pink-50", border: "border-pink-100" },
                { category: "의원·한의원", metric: "+300%", label: "신규 예약", period: "평균 6개월", color: "from-blue-500 to-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
                { category: "학원·교육", metric: "+55%", label: "수강생", period: "평균 3개월", color: "from-indigo-500 to-violet-600", bg: "bg-indigo-50", border: "border-indigo-100" },
                { category: "온라인 쇼핑몰", metric: "+64%", label: "월 매출", period: "평균 5개월", color: "from-green-500 to-emerald-600", bg: "bg-green-50", border: "border-green-100" },
              ].map((item) => (
                <div key={item.category} className={`${item.bg} border ${item.border} rounded-2xl p-4 md:p-5`}>
                  <p className="text-xs font-bold text-gray-500 mb-2">{item.category}</p>
                  <p className={`text-2xl md:text-3xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-0.5`}>{item.metric}</p>
                  <p className="text-xs text-gray-600 font-bold">{item.label}</p>
                  <p className="text-[11px] text-gray-400 mt-1">{item.period}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">* 업종별 경쟁 강도와 예산에 따라 개인 결과는 다를 수 있습니다. 상담 시 업종별 현실적 기대치를 안내드립니다.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-20 bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 relative overflow-hidden">
          <div className="absolute -top-20 right-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8 text-center">
            <div className="flex gap-0.5 justify-center mb-4">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="text-amber-300 fill-amber-300" />)}
              <span className="text-gray-400 text-xs ml-2 mt-0.5">고객 만족도 4.9 · 재계약률 95%</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-snug">하랑과 함께 성장해보세요</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md mx-auto">
              상담 비용 없음 · 계약 강요 없음 · 24시간 내 대표 직접 연락<br />
              500번째 성공 사례의 주인공이 되세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/free-check" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-black hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30">
                무료 플레이스 진단 <ArrowRight size={15} />
              </Link>
              <a href="https://pf.kakao.com/_MuUkG/chat" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 text-gray-900 font-black hover:bg-yellow-300 transition-colors">
                <MessageCircle size={15} /> 카카오 바로 상담
              </a>
              <Link href="/cases" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/8 border border-white/15 text-white font-bold hover:bg-white/15 transition-colors">
                성공 사례 보기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
