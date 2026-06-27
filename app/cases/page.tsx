import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TrendingUp, ArrowRight, MessageCircle, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "진행사례 — 하랑마케팅",
  description: "하랑마케팅과 함께 매출을 올린 실제 사장님들의 성공 사례입니다.",
};

const CASES = [
  {
    category: "카페",
    emoji: "☕",
    location: "경기 일산",
    title: "플레이스 '일산 카페' 키워드 1위 달성",
    period: "3개월",
    services: ["플레이스 SEO", "블로그 배포", "리뷰 마케팅"],
    before: {
      rank: "15위 밖",
      review: "리뷰 8개",
      visitor: "하루 평균 방문 30명",
    },
    after: {
      rank: "1위",
      review: "리뷰 120개+",
      visitor: "하루 평균 방문 80명",
    },
    metric: "+167%",
    metricLabel: "방문객 증가",
    story: "개업 6개월차였지만 근처 카페에 치여 검색에서 전혀 보이지 않았어요. 하랑과 함께 3개월 만에 '일산 카페' 1위가 됐고, 주말엔 대기줄이 생겼습니다.",
    color: "from-amber-500 to-orange-500",
  },
  {
    category: "피부과",
    emoji: "🏥",
    location: "서울 강서",
    title: "인스타그램 신규 예약 300% 달성",
    period: "6개월",
    services: ["인스타그램 마케팅", "체험단 모집", "블로그 관리"],
    before: {
      rank: "팔로워 200명",
      review: "SNS 거의 미운영",
      visitor: "월 신규 예약 20건",
    },
    after: {
      rank: "팔로워 3,800명",
      review: "체험단 후기 60개+",
      visitor: "월 신규 예약 80건",
    },
    metric: "+300%",
    metricLabel: "신규 예약 증가",
    story: "SNS를 어떻게 해야 할지 막막했어요. 인스타그램 전략부터 광고, 체험단까지 모두 맡겼더니 6개월 후엔 예약이 밀릴 정도가 됐습니다.",
    color: "from-rose-500 to-pink-600",
  },
  {
    category: "음식점",
    emoji: "🍽️",
    location: "서울 마포",
    title: "배달앱 매출 2배, 리뷰 10개 → 180개",
    period: "4개월",
    services: ["리뷰 마케팅", "맘카페 바이럴", "블로그 배포"],
    before: {
      rank: "배달앱 노출 저조",
      review: "리뷰 10개 미만",
      visitor: "월 배달 매출 150만원",
    },
    after: {
      rank: "배달앱 상위 노출",
      review: "리뷰 180개+",
      visitor: "월 배달 매출 320만원",
    },
    metric: "+113%",
    metricLabel: "배달 매출 증가",
    story: "맛은 자신 있었는데 리뷰가 없으니 주문이 없더라고요. 리뷰 마케팅과 맘카페 바이럴로 4개월 만에 매출이 두 배가 됐어요.",
    color: "from-green-500 to-emerald-600",
  },
  {
    category: "네일샵",
    emoji: "💅",
    location: "경기 수원",
    title: "개업 3개월 만에 예약 완전 마감",
    period: "3개월",
    services: ["인스타그램 마케팅", "체험단 모집", "카카오맵 마케팅"],
    before: {
      rank: "개업 초기 인지도 없음",
      review: "리뷰 0개",
      visitor: "하루 예약 2~3건",
    },
    after: {
      rank: "수원 네일 검색 상위",
      review: "인스타 팔로워 1,200명",
      visitor: "2주 치 예약 마감",
    },
    metric: "예약 마감",
    metricLabel: "3개월 만에 달성",
    story: "개업하고 손님이 없어 너무 막막했어요. 인스타그램으로 비포애프터 컨텐츠를 올리고 체험단을 모집했더니 3개월 만에 예약이 꽉 찼습니다.",
    color: "from-purple-500 to-violet-600",
  },
  {
    category: "영어학원",
    emoji: "📚",
    location: "경기 고양",
    title: "맘카페 입소문으로 수강생 50% 증가",
    period: "3개월",
    services: ["맘카페 바이럴", "홈페이지형 블로그 제작", "블로그 관리"],
    before: {
      rank: "지역 인지도 낮음",
      review: "블로그 없음",
      visitor: "수강생 40명",
    },
    after: {
      rank: "지역 맘카페 추천 1위",
      review: "블로그 월 방문 500+",
      visitor: "수강생 62명",
    },
    metric: "+55%",
    metricLabel: "수강생 증가",
    story: "학원 앞에 현수막만 걸었었는데 한계가 있더라고요. 맘카페 바이럴 하나로 3개월 만에 수강생이 절반 이상 늘었어요. 이제 입소문이 입소문을 낳아요.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    category: "온라인 쇼핑몰",
    emoji: "🛍️",
    location: "서울",
    title: "블로그 유입 10배 성장, 매출 전환",
    period: "5개월",
    services: ["블로그 관리", "블로그 배포", "체험단 모집"],
    before: {
      rank: "블로그 월 방문 80명",
      review: "제품 후기 거의 없음",
      visitor: "월 매출 500만원",
    },
    after: {
      rank: "블로그 월 방문 900명",
      review: "체험단 후기 40개+",
      visitor: "월 매출 820만원",
    },
    metric: "+64%",
    metricLabel: "매출 증가",
    story: "제품은 좋은데 알아주는 사람이 없었어요. 블로그 SEO와 체험단 후기를 통해 검색 유입이 생기기 시작하더니 5개월 만에 매출이 60% 이상 올랐습니다.",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Cases</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              실제 사장님들의<br />
              <span className="text-blue-400">성공 이야기</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              수치로만 보여주지 않습니다.
              함께 만들어온 성장의 이야기를 직접 읽어보세요.
            </p>
          </div>
        </section>

        {/* Summary stats */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "500+", label: "완료 프로젝트" },
                { value: "95%", label: "재계약률" },
                { value: "6가지+", label: "전문 업종" },
                { value: "300%", label: "최대 매출 상승" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-black text-blue-600 mb-1">{s.value}</div>
                  <div className="text-xs md:text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {CASES.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                >
                  <div className={`h-1.5 bg-gradient-to-r ${c.color}`} />
                  <div className="p-6 md:p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold">
                            {c.category}
                          </span>
                          <span className="text-xs text-gray-400">{c.location}</span>
                        </div>
                        <h3 className="font-black text-gray-900 text-base md:text-lg leading-snug">{c.title}</h3>
                      </div>
                      <div className="text-right shrink-0">
                        <div className={`text-xl md:text-2xl font-black bg-gradient-to-br ${c.color} bg-clip-text text-transparent`}>
                          {c.metric}
                        </div>
                        <div className="text-[10px] text-gray-400">{c.metricLabel}</div>
                      </div>
                    </div>

                    {/* Before / After */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-red-50 rounded-xl p-3">
                        <p className="text-[10px] font-black text-red-400 uppercase tracking-wider mb-2">Before</p>
                        {Object.values(c.before).map((v, i) => (
                          <p key={i} className="text-xs text-gray-500 leading-relaxed">{v}</p>
                        ))}
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3">
                        <p className="text-[10px] font-black text-blue-500 uppercase tracking-wider mb-2">After</p>
                        {Object.values(c.after).map((v, i) => (
                          <p key={i} className="text-xs text-blue-700 leading-relaxed font-medium">{v}</p>
                        ))}
                      </div>
                    </div>

                    {/* Story */}
                    <p className="text-sm text-gray-500 leading-relaxed italic mb-4 border-l-2 border-blue-100 pl-3">
                      "{c.story}"
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Clock size={11} />
                        {c.period} 진행
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {c.services.map((s) => (
                          <span key={s} className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 text-[10px]">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* More cases notice */}
            <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <TrendingUp size={18} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-black text-gray-900 text-lg mb-2">더 많은 성공 사례가 있습니다</h3>
              <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
                업종별 세부 사례와 구체적인 수치는 상담을 통해 공유해드립니다.
                업종이 같은 사례를 찾고 계신다면 바로 물어보세요.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-sm"
              >
                업종별 사례 문의하기
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="flex justify-center gap-0.5 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="text-yellow-300 fill-yellow-300" />
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              다음 성공 사례의 주인공이 되세요
            </h2>
            <p className="text-blue-100 mb-8 text-base">
              업종에 맞는 전략으로 실제 매출 성장을 경험하세요.<br />
              무료 진단으로 시작할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                무료 전략 진단 신청
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 border border-white/25 text-white font-bold hover:bg-white/18 transition-colors"
              >
                <MessageCircle size={16} />
                카카오톡 상담
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
