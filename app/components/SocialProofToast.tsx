"use client";

import { useState, useEffect, useCallback } from "react";
import { X, MessageCircle, Phone, FileText } from "lucide-react";

type ToastType = "kakao" | "call" | "form";

interface ToastItem {
  id: number;
  type: ToastType;
  location: string;
  business: string;
  action: string;
  ago: string;
}

const POOL: Omit<ToastItem, "id">[] = [
  { type: "kakao", location: "경기 일산", business: "카페 사장님", action: "카카오 채널 문의", ago: "방금 전" },
  { type: "form", location: "서울 마포", business: "음식점 대표님", action: "무료 진단 신청", ago: "3분 전" },
  { type: "call", location: "경기 수원", business: "네일샵 원장님", action: "전화 상담 신청", ago: "8분 전" },
  { type: "kakao", location: "서울 강남", business: "피부과 원장님", action: "카카오 채널 문의", ago: "12분 전" },
  { type: "form", location: "인천 연수", business: "학원 원장님", action: "무료 진단 신청", ago: "19분 전" },
  { type: "call", location: "경기 고양", business: "베이커리 사장님", action: "전화 상담 신청", ago: "방금 전" },
  { type: "kakao", location: "서울 은평", business: "헤어샵 원장님", action: "카카오 채널 문의", ago: "5분 전" },
  { type: "form", location: "경기 성남", business: "쇼핑몰 대표님", action: "무료 진단 신청", ago: "21분 전" },
  { type: "call", location: "서울 노원", business: "한의원 원장님", action: "전화 상담 신청", ago: "34분 전" },
  { type: "kakao", location: "부산 해운대", business: "카페 사장님", action: "카카오 채널 문의", ago: "2분 전" },
];

const ICON_MAP: Record<ToastType, typeof MessageCircle> = {
  kakao: MessageCircle,
  call: Phone,
  form: FileText,
};

const COLOR_MAP: Record<ToastType, { bg: string; icon: string; dot: string }> = {
  kakao: { bg: "bg-yellow-400", icon: "text-gray-900", dot: "bg-yellow-400" },
  call: { bg: "bg-blue-600", icon: "text-white", dot: "bg-blue-500" },
  form: { bg: "bg-green-500", icon: "text-white", dot: "bg-green-500" },
};

let counter = 0;

export default function SocialProofToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [poolIdx, setPoolIdx] = useState(0);
  const [dismissed, setDismissed] = useState<number[]>([]);

  const showNext = useCallback(() => {
    const item = POOL[poolIdx % POOL.length];
    const id = ++counter;
    setToasts((prev) => [...prev.slice(-1), { ...item, id }]);
    setPoolIdx((p) => (p + 1) % POOL.length);

    // auto-remove after 5s
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, [poolIdx]);

  useEffect(() => {
    // first toast after 8s, then every 18s
    const first = setTimeout(showNext, 8000);
    const interval = setInterval(showNext, 18000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const visible = toasts.filter((t) => !dismissed.includes(t.id));
  if (visible.length === 0) return null;

  return (
    <div className="fixed bottom-24 left-3 md:bottom-10 md:left-5 z-30 flex flex-col gap-2 max-w-[260px] md:max-w-[290px] pointer-events-none">
      {visible.map((toast) => {
        const Icon = ICON_MAP[toast.type];
        const color = COLOR_MAP[toast.type];
        return (
          <div
            key={toast.id}
            className="pointer-events-auto bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex items-start gap-2.5 animate-slide-up"
          >
            {/* Icon */}
            <div className={`w-9 h-9 rounded-xl ${color.bg} flex items-center justify-center shrink-0 shadow-sm`}>
              <Icon size={15} className={color.icon} strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className={`w-1.5 h-1.5 rounded-full ${color.dot} shrink-0`} />
                <p className="text-[10px] text-gray-400 truncate">{toast.location} · {toast.ago}</p>
              </div>
              <p className="text-xs font-bold text-gray-800 leading-tight truncate">{toast.business}</p>
              <p className="text-[11px] text-gray-500">{toast.action}했습니다</p>
            </div>

            {/* Close */}
            <button
              onClick={() => setDismissed((prev) => [...prev, toast.id])}
              className="shrink-0 p-0.5 rounded text-gray-300 hover:text-gray-500 transition-colors mt-0.5"
              aria-label="닫기"
            >
              <X size={11} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
