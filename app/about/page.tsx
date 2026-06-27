import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { Award, Target, Heart, TrendingUp, CheckCircle2, ArrowRight, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "회사소개 — 하랑마케팅",
  description: "10년 경력 전문가가 직접 담당하는 소상공인 전문 마케팅 대행사, 하랑마케팅을 소개합니다.",
};

const MILESTONES = [
  { year: "2014", title: "하랑마케팅 설립", desc: "소상공인 전문 마케팅 대행 시작" },
  { year: "2016", title: "100번째 프로젝트 완료", desc: "카페·음식점·미용 업종 특화 노하우 축적" },
  { year: "2019", title: "네이버 플레이스 SEO 특화", desc: "플레이스 알고리즘 분석 전문 팀 구성" },
  { year: "2021", title: "300번째 프로젝트", desc: "재계약률 90% 돌파, 입소문 마케팅으로 성장" },
  { year: "2023", title: "SNS 마케팅 확장", desc: "인스타그램·맘카페 바이럴 서비스 론칭" },
  { year: "2024", title: "500번째 프로젝트 완료", desc: "재계약률 95%, 업종별 맞춤 전략 체계화" },
];

const VALUES = [
  {
    icon: Heart,
    title: "상생",
    desc: "클라이언트가 성장해야 하랑도 성장합니다. 단기 계약보다 장기 파트너십을 추구합니다.",
    color: "from-rose-500 to-pink-600",
  },
  {
    icon: Target,
    title: "맞춤 전략",
    desc: "카페와 병원, 학원은 전략이 달라야 합니다. 업종별 데이터를 기반으로 맞춤 설계합니다.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Award,
    title: "검증된 전문성",
    desc: "10년간 500+ 프로젝트를 통해 쌓은 실전 경험과 데이터로 결과를 만들어냅니다.",
    color: "from-amber-500 to-yellow-600",
  },
  {
    icon: TrendingUp,
    title: "매출 중심",
    desc: "노출 수·클릭 수가 아니라 실제 매출과 방문객 증대를 목표로 운영합니다.",
    color: "from-green-500 to-emerald-600",
  },
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
              상생을 기반으로 한<br />
              <span className="text-blue-400">진심 마케팅</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              하랑마케팅은 2014년부터 소상공인·자영업자와 함께 성장해온
              업종별 맞춤 마케팅 전문 대행사입니다.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">우리의 이야기</p>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-snug">
                  "마케팅은 비용이 아니라<br />
                  <span className="text-blue-600">투자여야 합니다"</span>
                </h2>
                <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                  <p>
                    2014년, 하랑마케팅은 소박한 목표 하나로 시작했습니다.
                    "돈은 없어도 마케팅이 필요한 사장님들 곁에 있어드리자."
                  </p>
                  <p>
                    수많은 소상공인분들이 광고비를 써도 효과를 못 보는 이유는 하나입니다.
                    업종 특성을 무시한 일괄 마케팅 때문입니다.
                    카페와 피부과, 학원은 완전히 다른 전략이 필요합니다.
                  </p>
                  <p>
                    하랑은 10년간 500개 이상의 프로젝트를 통해 업종별 맞춤 전략과
                    데이터를 쌓아왔습니다. 그 경험이 지금의 95% 재계약률로 이어졌습니다.
                  </p>
                </div>

                <div className="mt-8 p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-3 shadow-sm">
                    <Quote size={13} className="text-white" />
                  </div>
                  <p className="text-sm text-blue-800 leading-relaxed font-medium italic">
                    "클라이언트의 성공이 곧 하랑의 성공입니다.
                    그래서 저희는 항상 매출에 직결되는 것만 합니다."
                  </p>
                  <p className="text-xs text-blue-600 mt-2 font-bold">— 대표 전태영</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "2014년", label: "설립", sub: "10년 역사" },
                  { value: "500+", label: "프로젝트", sub: "완료 건수" },
                  { value: "95%", label: "재계약률", sub: "업계 최고 수준" },
                  { value: "300%", label: "최대 매출 상승", sub: "실제 달성 수치" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-50 rounded-2xl p-5 border border-gray-100 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-black text-blue-600 mb-0.5">{s.value}</div>
                    <div className="text-sm font-bold text-gray-800">{s.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">핵심 가치</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">
                어떤 프로젝트에서도 흔들리지 않는 원칙
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-gray-100">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon size={20} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-black text-gray-900 text-lg mb-2">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">연혁</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900">10년의 걸음</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gray-100" />
              <div className="space-y-6">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="flex gap-6 relative">
                    <div className="w-[72px] shrink-0 text-right">
                      <span className="text-sm font-black text-blue-600">{m.year}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
                      <div className={`pb-6 ${i === MILESTONES.length - 1 ? "" : ""}`}>
                        <h3 className="font-bold text-gray-900 text-[15px] mb-0.5">{m.title}</h3>
                        <p className="text-sm text-gray-400">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CEO */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-5 shadow-md">
                <span className="text-white font-black text-2xl">전</span>
              </div>
              <h2 className="text-xl font-black text-gray-900 mb-1">대표 전태영</h2>
              <p className="text-blue-600 text-sm font-semibold mb-6">하랑마케팅 대표 · 마케팅 경력 10년+</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {["네이버 플레이스 SEO 전문가", "소상공인 마케팅 컨설턴트", "500+ 프로젝트 경험"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
                마케팅 대행사에서 10년간 경험을 쌓고 독립해 하랑마케팅을 설립했습니다.
                모든 프로젝트에 대표가 직접 참여하며, 클라이언트의 매출 성장을 최우선으로 생각합니다.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-black text-white mb-4">
              하랑과 함께 성장해보세요
            </h2>
            <p className="text-blue-100 text-sm mb-6">
              업종별 맞춤 전략으로 실제 매출 증대를 경험하세요
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors"
              >
                무료 상담 신청
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/cases"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/25 text-white font-bold hover:bg-white/20 transition-colors"
              >
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
