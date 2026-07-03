"use client";

import { useState } from "react";
import { Star, MessageCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "박",
    avatarBg: "#F59E0B",
    name: "박 대표님",
    business: "경기 일산 카페",
    rating: 5,
    date: "2025년 03월",
    text: "처음엔 반신반의했는데 3개월 만에 플레이스 Top 3 들어왔어요. 주말 예약이 꽉 차는 걸 처음 경험해봤습니다. 대표님이 직접 챙겨주셔서 믿음이 갔어요.",
    result: "방문객 +167%",
    months: "3개월",
  },
  {
    id: 2,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "이",
    avatarBg: "#8B5CF6",
    name: "이 원장님",
    business: "경기 안양 한의원",
    rating: 5,
    date: "2025년 02월",
    text: "다른 대행사에서 1년 써봤는데 효과를 못 느꼈어요. 하랑은 첫 달부터 예약 전화가 늘기 시작했고, 4개월째 지금은 월 신규 환자가 2.7배가 됐습니다.",
    result: "월 신규 예약 +175%",
    months: "4개월",
  },
  {
    id: 3,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "최",
    avatarBg: "#059669",
    name: "최 대표님",
    business: "경기 파주 네일샵",
    rating: 5,
    date: "2025년 01월",
    text: "SNS 직접 하다가 너무 힘들어서 맡겼는데, 6주 만에 예약이 꽉 찼어요. 이제 마케팅 걱정 없이 시술에만 집중할 수 있어서 진짜 만족합니다.",
    result: "예약 완전 마감",
    months: "6주",
  },
  {
    id: 4,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "정",
    avatarBg: "#DC2626",
    name: "정 대표님",
    business: "경기 고양 음식점",
    rating: 5,
    date: "2024년 12월",
    text: "배달 주문이 안 나와서 걱정이었는데 4개월 만에 매출이 두 배 넘게 늘었어요. 솔직하게 말씀해주시는 스타일이 제일 마음에 들었고, 재계약 당연히 했습니다.",
    result: "배달 매출 +113%",
    months: "4개월",
  },
  {
    id: 5,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "한",
    avatarBg: "#0EA5E9",
    name: "한 원장님",
    business: "경기 고양 입시학원",
    rating: 5,
    date: "2024년 11월",
    text: "수강생이 안 늘어서 폐업 고민까지 했었는데, 지금은 대기 신청을 받고 있어요. 맘카페 바이럴이 생각보다 강력하더라고요. 포기하지 않길 잘했습니다.",
    result: "수강생 +55%",
    months: "3개월",
  },
  {
    id: 6,
    platform: "카카오톡",
    platformColor: "#FEE500",
    platformTextColor: "#3A1D1D",
    avatar: "김",
    avatarBg: "#3B82F6",
    name: "김 대표님",
    business: "경기 일산 베이커리",
    rating: 5,
    date: "2024년 10월",
    text: "리뷰가 0개였는데 2개월 만에 78개 쌓였어요. 카카오맵에서도 검색이 되기 시작하고, 주말 피크 때는 웨이팅이 생겼습니다. 정말 눈에 보이는 변화가 있어요.",
    result: "리뷰 0→78개",
    months: "2개월",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

function KakaoCard({ review, isActive }: { review: typeof REVIEWS[0]; isActive: boolean }) {
  return (
    <div
      className={`w-full max-w-sm mx-auto flex-shrink-0 transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}
    >
      {/* Phone frame */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100" style={{ boxShadow: isActive ? "0 20px 60px rgba(0,0,0,0.15)" : undefined }}>
        {/* Platform header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black"
            style={{ background: review.platformColor, color: review.platformTextColor }}
          >
            {review.platform === "카카오톡" ? "K" : "N"}
          </div>
          <span className="text-xs font-bold text-gray-600">{review.platform} 후기</span>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[10px] text-gray-400">인증 후기</span>
          </div>
        </div>

        {/* Chat area */}
        <div className="p-4" style={{ background: "#B2C7D9" }}>
          {/* Harang message bubble (left) */}
          <div className="flex items-start gap-2 mb-3">
            <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm">
              <span className="text-[11px] font-black text-gray-800">하랑</span>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-600 mb-1">하랑마케팅</p>
              <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[200px] shadow-sm">
                <p className="text-xs text-gray-700 leading-relaxed">안녕하세요 {review.name}! 이번 달 성과 공유드립니다 ☞ <strong>{review.result}</strong> 달성했습니다.</p>
              </div>
            </div>
          </div>

          {/* Customer reply (right) */}
          <div className="flex flex-col items-end gap-1">
            <div
              className="rounded-2xl rounded-tr-sm px-3 py-2.5 max-w-[220px] shadow-sm"
              style={{ background: "#FEE500" }}
            >
              <p className="text-xs text-gray-800 leading-relaxed font-medium">"{review.text}"</p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-gray-500">{review.date}</span>
              <div className="flex">
                <div className="w-3 h-3 rounded-full bg-blue-200" />
                <div className="w-3 h-3 rounded-full bg-blue-300 -ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Review footer */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white shrink-0"
                style={{ background: review.avatarBg }}
              >
                {review.avatar}
              </div>
              <span className="text-xs font-bold text-gray-800">{review.name}</span>
            </div>
            <p className="text-[10px] text-gray-400">{review.business}</p>
          </div>
          <div className="text-right">
            <StarRating count={review.rating} />
            <p className="text-[10px] text-gray-400 mt-0.5">{review.months} 만에</p>
          </div>
        </div>
      </div>

      {/* Result badge below card */}
      <div className="mt-3 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-black shadow-sm">
          {review.result}
        </span>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length);

  const visible = [
    REVIEWS[(current - 1 + REVIEWS.length) % REVIEWS.length],
    REVIEWS[current],
    REVIEWS[(current + 1) % REVIEWS.length],
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center gap-3 justify-center mb-4">
            <div className="w-6 h-[2px] bg-amber-500" />
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-500">실제 고객 후기</span>
            <div className="w-6 h-[2px] bg-amber-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3" style={{ letterSpacing: "-0.03em" }}>
            직접 경험한 대표님들이<br className="sm:hidden" /> 말씀하십니다
          </h2>
          <p className="text-sm text-gray-500">광고 없음 · 실제 클라이언트 카카오톡 후기만 모았습니다</p>

          {/* Trust numbers */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-black text-gray-900">4.9</span>
              <span className="text-xs text-gray-400">/ 500+ 리뷰</span>
            </div>
            <div className="w-px h-4 bg-gray-200" />
            <span className="text-xs text-gray-500">재계약률 <strong className="text-blue-600">95%</strong></span>
            <div className="w-px h-4 bg-gray-200" />
            <span className="text-xs text-gray-500">상담 비용 <strong className="text-blue-600">0원</strong></span>
          </div>
        </div>

        {/* Cards carousel */}
        <div className="relative">
          {/* Desktop: show 3 cards */}
          <div className="hidden md:flex items-center justify-center gap-4">
            {visible.map((review, idx) => (
              <KakaoCard key={review.id} review={review} isActive={idx === 1} />
            ))}
          </div>

          {/* Mobile: show 1 card */}
          <div className="md:hidden flex justify-center">
            <KakaoCard key={REVIEWS[current].id} review={REVIEWS[current]} isActive={true} />
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} className="text-gray-600" />
            </button>

            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${i === current ? "w-5 h-2 bg-blue-600" : "w-2 h-2 bg-gray-200 hover:bg-gray-300"}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="relative rounded-2xl p-6 border border-gray-100 bg-gray-50">
            <Quote size={24} className="text-blue-200 mb-3 mx-auto" />
            <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">
              후기는 절대 조작하지 않습니다. 모든 후기는 실제 계약 클라이언트분들께서 직접 남겨주신 카카오톡 메시지입니다.
            </p>
            <p className="text-xs text-gray-400 mt-3">— 하랑마케팅 대표</p>
          </div>
        </div>
      </div>
    </section>
  );
}
