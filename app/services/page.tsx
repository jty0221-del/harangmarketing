import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FileText, BookOpen, MapPin, Users, Star,
  Search, TrendingUp, BarChart3, Megaphone, AtSign,
  ArrowRight, MessageCircle, CheckCircle2, ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "마케팅 서비스 — 하랑마케팅",
  description: "블로그 배포, 플레이스 SEO, 체험단, 인스타그램 등 업종별 맞춤 마케팅 서비스를 제공합니다.",
};

const SERVICE_GROUPS = [
  {
    id: "blog",
    groupTitle: "블로그 · 콘텐츠",
    groupDesc: "검색 노출과 브랜드 신뢰도를 동시에 높이는 콘텐츠 전략",
    color: "from-blue-500 to-blue-700",
    services: [
      {
        icon: FileText,
        title: "블로그 배포 (기자단)",
        desc: "전문 작가가 브랜드 맞춤 기사를 작성하고, 네이버 블로그·뉴스 사이트·커뮤니티 등 20개 이상의 채널에 동시 배포합니다.",
        features: ["전문 작가 직접 집필", "20개+ 채널 동시 배포", "SEO 키워드 최적화", "월 성과 리포트"],
        best: "매장 신뢰도를 빠르게 높이고 싶은 분",
      },
      {
        icon: BookOpen,
        title: "홈페이지형 블로그 제작",
        desc: "네이버 블로그를 전문 홈페이지처럼 구성해 첫인상부터 신뢰를 주고, 검색 상위 노출 효과를 극대화합니다.",
        features: ["전문 디자인 구성", "브랜드 스토리 기획", "모바일 최적화", "SEO 최적 구조"],
        best: "온라인 첫인상이 중요한 전문직·병원·학원",
      },
      {
        icon: BarChart3,
        title: "블로그 관리 대행",
        desc: "정기 포스팅 발행과 키워드 SEO로 블로그 지수를 높이고 꾸준한 유입 트래픽을 유지합니다.",
        features: ["주 2~4회 정기 포스팅", "블로그 지수 관리", "키워드 전략 수립", "트래픽 분석"],
        best: "꾸준한 콘텐츠 운영이 필요한 모든 업종",
      },
    ],
  },
  {
    id: "place",
    groupTitle: "플레이스 · 지도",
    groupDesc: "지역 검색에서 가장 먼저 눈에 띄는 자리를 잡습니다",
    color: "from-green-500 to-emerald-600",
    services: [
      {
        icon: Search,
        title: "플레이스 SEO 최적화",
        desc: "네이버 플레이스 알고리즘을 분석해 업종별 핵심 키워드로 상위 노출을 달성합니다. 경쟁사 분석부터 최적화 작업까지 전담합니다.",
        features: ["경쟁사·키워드 분석", "플레이스 정보 최적화", "사진·설명 개선", "순위 모니터링"],
        best: "네이버 플레이스 순위를 올리고 싶은 모든 업종",
      },
      {
        icon: TrendingUp,
        title: "플레이스 순위상승",
        desc: "방문자 수·저장 수·블로그 리뷰 등 복합 지표를 체계적으로 관리해 플레이스 순위를 끌어올립니다.",
        features: ["방문자·저장 수 증대", "블로그 리뷰 연동", "주간 순위 모니터링", "경쟁사 추적"],
        best: "순위 상승이 급한 카페·음식점·미용실",
      },
      {
        icon: MapPin,
        title: "카카오맵 마케팅",
        desc: "카카오맵 플레이스 최적화로 지역 검색 상위에 노출시켜 매장 방문객을 꾸준히 늘립니다.",
        features: ["카카오맵 정보 최적화", "키워드 전략", "리뷰 관리", "사진 최적화"],
        best: "카카오맵 활용도가 높은 지역 매장",
      },
    ],
  },
  {
    id: "review",
    groupTitle: "체험단 · 리뷰",
    groupDesc: "실제 고객의 진심 어린 후기가 새 고객을 만듭니다",
    color: "from-amber-500 to-orange-500",
    services: [
      {
        icon: Users,
        title: "체험단 모집 대행",
        desc: "업종과 타겟에 맞는 인플루언서·일반 체험단을 모집하고 관리해 신뢰도 높은 실후기 콘텐츠를 생성합니다.",
        features: ["타겟 맞춤 체험단 모집", "인플루언서 섭외·관리", "콘텐츠 품질 관리", "SNS 확산 유도"],
        best: "새 메뉴·서비스 론칭, 리뷰 수가 부족한 매장",
      },
      {
        icon: Star,
        title: "리뷰 마케팅",
        desc: "긍정 리뷰를 전략적으로 쌓아 신규 고객의 첫 방문 결정을 이끌어내고 평점을 높입니다. 부정 리뷰 대응 전략도 함께 제공합니다.",
        features: ["리뷰 전략 수립", "부정 리뷰 대응 가이드", "평점 관리", "리뷰 품질 모니터링"],
        best: "리뷰 수가 적거나 평점 관리가 필요한 업종",
      },
    ],
  },
  {
    id: "sns",
    groupTitle: "SNS · 바이럴",
    groupDesc: "소셜 미디어로 브랜드 인지도를 폭발적으로 높입니다",
    color: "from-purple-500 to-violet-600",
    services: [
      {
        icon: AtSign,
        title: "인스타그램 마케팅",
        desc: "비주얼 콘텐츠 기획부터 릴스 제작·광고 캠페인 운영까지 인스타그램 채널 전체를 전담 관리합니다.",
        features: ["피드·릴스 콘텐츠 기획", "광고 캠페인 운영", "팔로워 성장 전략", "월 성과 분석"],
        best: "젊은 고객층을 타겟으로 하는 카페·뷰티·음식점",
      },
      {
        icon: Megaphone,
        title: "맘카페 바이럴",
        desc: "지역 맘카페와 육아 커뮤니티에서 자연스럽게 브랜드를 알려 핵심 타겟층의 입소문을 만들어냅니다.",
        features: ["지역 맘카페 공략", "자연스러운 바이럴 콘텐츠", "타겟 커뮤니티 선정", "반응 모니터링"],
        best: "학원·어린이 관련 업종·지역 음식점",
      },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "계약 기간이 얼마나 되나요?",
    a: "기본 3개월 단위로 진행합니다. 마케팅 효과가 나타나기까지 최소 2~3개월이 필요하기 때문입니다. 성과에 따라 월 단위 연장도 가능합니다.",
  },
  {
    q: "담당자가 계속 바뀌지 않나요?",
    a: "하랑마케팅은 대표가 직접 모든 프로젝트를 담당합니다. 계약부터 종료까지 담당자가 바뀌지 않습니다.",
  },
  {
    q: "어떤 업종이 가장 효과가 좋나요?",
    a: "카페, 음식점, 미용실, 피부과, 학원, 뷰티샵 등 지역 기반 업종에서 특히 효과가 좋습니다. 온라인 쇼핑몰도 블로그·SNS 마케팅으로 좋은 성과를 보입니다.",
  },
  {
    q: "성과는 언제부터 나타나나요?",
    a: "플레이스 SEO는 빠르면 2~4주 내 순위 변화가 나타납니다. 블로그·SNS는 꾸준한 운영을 통해 3개월 이후부터 본격적인 효과가 납니다.",
  },
  {
    q: "비용은 얼마인가요?",
    a: "서비스 종류·업종·목표에 따라 달라집니다. 무료 상담을 통해 현재 상황을 분석한 후 맞춤 견적을 제안해드립니다. 상담 자체는 비용이 없습니다.",
  },
  {
    q: "성과가 없으면 어떻게 되나요?",
    a: "월 2회 상세 리포트를 통해 성과를 투명하게 공유하고, 목표 대비 부진할 경우 전략을 즉시 수정합니다. 95%의 재계약률이 저희의 성과를 증명합니다.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Services</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              업종에 맞는 마케팅을<br />
              <span className="text-blue-400">골라드립니다</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              어떤 서비스를 선택해야 할지 모르겠다면 먼저 무료 상담을 받으세요.
              현재 상황을 분석해 최적의 조합을 제안해드립니다.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {SERVICE_GROUPS.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="px-4 py-2 rounded-full bg-white/8 border border-white/15 text-gray-300 text-sm font-medium hover:bg-white/15 hover:text-white transition-colors"
                >
                  {g.groupTitle}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service groups */}
        {SERVICE_GROUPS.map((group, gi) => (
          <section
            key={group.id}
            id={group.id}
            className={`py-16 md:py-20 ${gi % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-1.5 rounded-full bg-gradient-to-r ${group.color}`} />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{group.groupTitle}</p>
              </div>
              <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-2">{group.groupDesc}</h2>
              <div className="w-px h-8 bg-gray-100 ml-4 mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {group.services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      className="bg-white rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all overflow-hidden"
                    >
                      <div className={`h-1 bg-gradient-to-r ${group.color}`} />
                      <div className="p-6">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-4 shadow-sm`}>
                          <Icon size={17} className="text-white" strokeWidth={2} />
                        </div>
                        <h3 className="font-black text-gray-900 text-[15px] mb-2">{service.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>

                        <div className="space-y-1.5 mb-4">
                          {service.features.map((f) => (
                            <div key={f} className="flex items-center gap-2 text-xs text-gray-500">
                              <CheckCircle2 size={12} className="text-green-500 shrink-0" strokeWidth={2.5} />
                              {f}
                            </div>
                          ))}
                        </div>

                        <div className="pt-4 border-t border-gray-50">
                          <p className="text-[11px] text-gray-400 font-medium mb-0.5">이런 분께 추천</p>
                          <p className="text-xs text-blue-600 font-semibold">{service.best}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">자주 묻는 질문</h2>
              <p className="text-gray-500 text-sm">더 궁금한 점은 무료 상담을 통해 바로 물어보세요</p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none">
                    <span className="font-bold text-gray-900 text-sm md:text-base">{item.q}</span>
                    <ChevronDown
                      size={16}
                      className="text-gray-400 shrink-0 group-open:rotate-180 transition-transform"
                    />
                  </summary>
                  <div className="px-6 pb-5 pt-1">
                    <p className="text-sm text-gray-500 leading-relaxed">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              어떤 서비스가 맞을지 모르겠다면?
            </h2>
            <p className="text-blue-100 mb-8 text-base">
              업종과 현재 상황을 말씀해주시면 최적의 조합을 무료로 추천해드립니다
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                무료 상담 신청
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 border border-white/25 text-white font-bold hover:bg-white/18 transition-colors"
              >
                <MessageCircle size={16} />
                카카오톡 바로 상담
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
