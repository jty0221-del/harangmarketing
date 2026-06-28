"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Clock, ArrowRight, Gift, TrendingUp, Star, Calculator } from "lucide-react";

const MESSAGES = [
  {
    badge: "이달 한정",
    badgeColor: "text-red-400",
    dot: "bg-red-400",
    icon: Gift,
    iconColor: "text-amber-400",
    text: <>신규 계약 3팀에게 <span className="text-white font-black">경쟁사 분석 리포트 무료 제공</span> · <span className="text-amber-400 font-bold">잔여 2자리</span></>,
    ctaLabel: "무료 신청",
    ctaHref: "/contact",
  },
  {
    badge: "실시간",
    badgeColor: "text-green-400",
    dot: "bg-green-400",
    icon: TrendingUp,
    iconColor: "text-green-400",
    text: <>이번 달 <span className="text-white font-black">12팀</span>이 무료 진단 신청 완료 · <span className="text-blue-300 font-bold">재계약률 95%</span></>,
    ctaLabel: "진단 신청",
    ctaHref: "/contact",
  },
  {
    badge: "검증",
    badgeColor: "text-amber-400",
    dot: "bg-amber-400",
    icon: Star,
    iconColor: "text-amber-400",
    text: <>10년 경력 대표 직접 담당 · <span className="text-white font-black">500+ 프로젝트 완료</span> · <span className="text-blue-300 font-bold">상담 비용 0원</span></>,
    ctaLabel: "무료 상담",
    ctaHref: "/contact",
  },
  {
    badge: "신규",
    badgeColor: "text-blue-400",
    dot: "bg-blue-400",
    icon: Calculator,
    iconColor: "text-blue-400",
    text: <>3분 만에 내 업종 맞춤 패키지 확인 · <span className="text-white font-black">견적 계산기 무료 오픈</span></>,
    ctaLabel: "계산기 사용",
    ctaHref: "/estimate",
  },
];

export default function AnnouncementBar() {
  const [closed, setClosed] = useState(false);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);

  if (closed) return null;

  const msg = MESSAGES[idx];
  const Icon = msg.icon;

  return (
    <div className="relative bg-gray-950 border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 md:gap-4">
        {/* left badge */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <span className={`w-1.5 h-1.5 rounded-full ${msg.dot} animate-pulse`} />
          <span className={`${msg.badgeColor} font-black text-[11px] uppercase tracking-wider`}>{msg.badge}</span>
        </div>

        {/* divider */}
        <div className="hidden sm:block w-px h-3 bg-white/10" />

        {/* main text */}
        <div className="flex items-center gap-2 text-xs min-w-0">
          <Icon size={11} className={`${msg.iconColor} shrink-0`} strokeWidth={2.5} />
          <span className="text-gray-400 truncate">{msg.text}</span>
        </div>

        {/* CTA — dynamic per message */}
        <Link
          href={msg.ctaHref}
          className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-black text-[11px] transition-colors"
        >
          <Clock size={10} strokeWidth={2.5} />
          {msg.ctaLabel}
          <ArrowRight size={10} strokeWidth={2.5} />
        </Link>
      </div>

      <button
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded hover:bg-white/10 transition-colors text-gray-600 hover:text-gray-300"
        aria-label="닫기"
      >
        <X size={12} />
      </button>
    </div>
  );
}
