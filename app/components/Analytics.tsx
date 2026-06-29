"use client";

// gtag 전환 이벤트 헬퍼
// GA4 측정 ID를 G-XXXXXXXXXX → 실제 ID로 교체 후 사용

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

// 주요 전환 이벤트
export const GA_EVENTS = {
  contactFormStart: () => trackEvent("contact_form_start"),
  contactFormSubmit: (industry: string) => trackEvent("contact_form_submit", { industry }),
  kakaoClick: (source: string) => trackEvent("kakao_click", { source }),
  phoneClick: (source: string) => trackEvent("phone_click", { source }),
  freeCheckStart: () => trackEvent("free_check_start"),
  estimateStart: () => trackEvent("estimate_start"),
  blogPostView: (slug: string) => trackEvent("blog_post_view", { slug }),
};
