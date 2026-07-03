"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Clock, Users } from "lucide-react";

export default function EntryPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // 세션당 1회만 표시
    const key = "harang_popup_dismissed";
    if (sessionStorage.getItem(key)) return;

    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("harang_popup_dismissed", "1");
    setOpen(false);
    setDismissed(true);
  };

  if (!open || dismissed) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{ animation: "popupSlideUp 0.35s cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <style>{`
          @keyframes popupSlideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Top gradient bar */}
        <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700" />

        {/* Close */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X size={13} className="text-gray-500" />
        </button>

        <div className="p-6">
          {/* Urgency badge */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-100">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-black text-red-600 uppercase tracking-wider">이번 달 마감 임박</span>
            </div>
          </div>

          <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug" style={{ letterSpacing: "-0.02em" }}>
            이번 달 신규 상담<br />잔여 2자리입니다
          </h3>

          <p className="text-sm text-gray-500 mb-5 leading-relaxed">
            대표가 직접 담당하기 때문에 월 신규 계약을 제한합니다.
            지금 신청하시면 무료 경쟁사 분석 리포트를 함께 드립니다.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "var(--h-surface)", border: "1px solid var(--h-border)" }}>
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Clock size={11} className="text-blue-500" />
                <span className="text-[10px] text-gray-500">평균 응답</span>
              </div>
              <p className="text-sm font-black text-gray-900">10분 이내</p>
            </div>
            <div className="flex-1 rounded-xl p-3 text-center" style={{ background: "var(--h-surface)", border: "1px solid var(--h-border)" }}>
              <div className="flex items-center justify-center gap-1 mb-0.5">
                <Users size={11} className="text-blue-500" />
                <span className="text-[10px] text-gray-500">이번 달 신청</span>
              </div>
              <p className="text-sm font-black text-gray-900">12명 완료</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/free-check"
            onClick={dismiss}
            className="block w-full text-center py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20"
          >
            무료 진단 지금 신청하기
          </Link>

          <button
            onClick={dismiss}
            className="block w-full text-center mt-2.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            오늘은 괜찮습니다
          </button>
        </div>
      </div>
    </div>
  );
}
