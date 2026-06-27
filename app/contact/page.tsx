"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Star, ArrowRight } from "lucide-react";

const BUSINESS_TYPES = [
  "카페·베이커리", "음식점·배달", "미용실·네일샵", "피부과·의원·한의원",
  "학원·교육기관", "온라인 쇼핑몰", "인테리어·공사", "부동산·법무",
  "헬스·필라테스·요가", "의류·패션", "기타 소상공인", "마케팅 대행사",
];

const SERVICES_LIST = [
  "블로그 배포(기자단)", "홈페이지형 블로그 제작", "카카오맵 마케팅",
  "체험단 모집 대행", "리뷰 마케팅", "플레이스 SEO 최적화",
  "플레이스 순위상승", "블로그 관리 대행", "맘카페 바이럴",
  "인스타그램 마케팅", "아직 잘 모르겠어요 (추천 받고 싶어요)",
];

const BUDGETS = [
  "월 30만원 미만", "월 30~50만원", "월 50~100만원",
  "월 100~200만원", "월 200만원 이상", "아직 미정",
];

const PROCESS_STEPS = [
  { step: "01", title: "상담 신청", desc: "양식 작성 또는 카카오·전화 문의" },
  { step: "02", title: "현황 분석", desc: "업종·경쟁사·현재 상황 무료 분석" },
  { step: "03", title: "전략 제안", desc: "맞춤 마케팅 전략 + 견적 제안" },
  { step: "04", title: "계약·시작", desc: "계약 후 바로 작업 시작" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", phone: "", businessType: "", service: "", budget: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-600/8 rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-4">Contact</p>
            <h1 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              무료 전략 진단 신청
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl">
              업종과 현재 상황을 알려주시면 맞춤 마케팅 전략을 무료로 분석해드립니다.
              부담 없이 연락해주세요.
            </p>
            <div className="flex flex-wrap gap-4 mt-6 text-sm">
              {[
                { icon: CheckCircle2, text: "상담 비용 0원" },
                { icon: CheckCircle2, text: "계약 강요 없음" },
                { icon: Clock, text: "24시간 내 연락" },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-green-400">
                  <Icon size={14} strokeWidth={2.5} />
                  <span className="text-gray-300">{text}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-10 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.step} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xs shrink-0 shadow-sm">
                    {step.step}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{step.title}</div>
                    <div className="text-xs text-gray-400 mt-0.5 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 md:gap-8">

              {/* Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-md">
                      <CheckCircle2 size={28} className="text-white" strokeWidth={2} />
                    </div>
                    <h2 className="text-xl font-black text-gray-900 mb-2">신청 완료!</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                      소중한 상담 신청 감사합니다.<br />
                      <span className="font-semibold text-gray-700">24시간 이내</span>에 연락드리겠습니다.<br />
                      급하신 경우 카카오톡이나 전화를 이용해주세요.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="https://pf.kakao.com/_MuUkG/chat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-yellow-400 text-gray-900 font-bold text-sm hover:bg-yellow-300 transition-colors"
                      >
                        <MessageCircle size={15} />
                        카카오톡 바로 상담
                      </a>
                      <a
                        href="tel:010-9054-3788"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors"
                      >
                        <Phone size={15} />
                        전화 상담
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-lg font-black text-gray-900 mb-1">상담 신청서 작성</h2>
                    <p className="text-xs text-gray-400 mb-6">모든 항목은 선택 사항이지만, 많이 적어주실수록 더 정확한 제안이 가능합니다.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            이름 / 업체명 <span className="text-blue-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="홍길동 / 하랑카페"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:text-gray-300"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">
                            연락처 <span className="text-blue-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="010-0000-0000"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">업종</label>
                          <select
                            value={form.businessType}
                            onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-700"
                          >
                            <option value="">업종 선택</option>
                            {BUSINESS_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5">관심 서비스</label>
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white text-gray-700"
                          >
                            <option value="">서비스 선택</option>
                            {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">예상 월 예산</label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {BUDGETS.map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setForm({ ...form, budget: b })}
                              className={`px-3 py-2 rounded-xl border text-xs font-medium transition-all ${
                                form.budget === b
                                  ? "border-blue-500 bg-blue-50 text-blue-700 font-bold"
                                  : "border-gray-200 text-gray-500 hover:border-gray-300"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">문의 내용</label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="현재 상황, 목표, 고민 등을 자유롭게 적어주세요&#10;예: '카페 개업 3개월차인데 플레이스 순위가 낮아요. 경쟁이 심한 지역입니다.'"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none placeholder:text-gray-300"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-base transition-colors shadow-sm"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            처리 중...
                          </span>
                        ) : (
                          <>
                            <Send size={15} />
                            무료 전략 진단 신청하기
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-400 text-center">
                        평일 기준 24시간 이내 연락드립니다 · 상담 비용 없음 · 계약 강요 없음
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* Side info */}
              <div className="space-y-4">
                {/* Direct contact */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-4">바로 연락하기</h3>
                  <div className="space-y-3">
                    <a
                      href="https://pf.kakao.com/_MuUkG/chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-yellow-50 hover:bg-yellow-100 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center shadow-sm shrink-0">
                        <MessageCircle size={16} className="text-gray-900" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm">카카오톡 채널</div>
                        <div className="text-xs text-gray-400">지금 바로 채팅 상담</div>
                      </div>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-yellow-500 transition-colors" />
                    </a>

                    <a
                      href="tel:010-9054-3788"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm shrink-0">
                        <Phone size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm">010-9054-3788</div>
                        <div className="text-xs text-gray-400">평일 09:00~18:00</div>
                      </div>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                    </a>

                    <a
                      href="mailto:jty0221@naver.com"
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center shadow-sm shrink-0">
                        <Mail size={16} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm">이메일 문의</div>
                        <div className="text-xs text-gray-400 truncate">jty0221@naver.com</div>
                      </div>
                      <ArrowRight size={13} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center shadow-sm shrink-0">
                      <MapPin size={15} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">주소</div>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        경기 고양시 일산동구 장백로19<br />
                        더루벤투스카운티 501호
                      </p>
                    </div>
                  </div>
                </div>

                {/* What you get */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5">
                  <h4 className="font-bold text-white text-sm mb-3">무료 진단에서 받는 것</h4>
                  <ul className="space-y-2">
                    {[
                      "업종·경쟁사 현황 분석",
                      "최적 마케팅 채널 추천",
                      "예상 성과 및 기간 안내",
                      "맞춤 서비스 패키지 제안",
                      "예산별 우선순위 가이드",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-blue-100">
                        <CheckCircle2 size={12} className="text-blue-300 shrink-0" strokeWidth={2.5} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-blue-500/50">
                    <div className="flex gap-0.5 mb-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={11} className="text-yellow-300 fill-yellow-300" />
                      ))}
                    </div>
                    <p className="text-xs text-blue-200 italic">
                      "상담만 받았는데도 뭘 해야 할지 명확해졌어요"
                    </p>
                    <p className="text-[11px] text-blue-300 mt-1">— 일산 카페 사장님</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
