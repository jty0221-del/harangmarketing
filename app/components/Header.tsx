"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MessageCircle } from "lucide-react";

const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  {
    label: "서비스",
    href: "/services",
    sub: [
      { label: "블로그·기자단", href: "/services#blog" },
      { label: "플레이스 SEO", href: "/services#place" },
      { label: "SNS 마케팅", href: "/services#sns" },
      { label: "체험단·리뷰", href: "/services#review" },
      { label: "마케팅 인사이트", href: "/blog" },
      { label: "패키지 견적 계산기", href: "/estimate" },
      { label: "진행 과정", href: "/process" },
    ],
  },
  { label: "진행사례", href: "/cases" },
  { label: "FAQ", href: "/faq" },
  { label: "상담신청", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-black text-[13px] tracking-tight">H</span>
            </div>
            <div>
              <span
                className={`font-black text-[17px] tracking-tight transition-colors ${
                  scrolled || !isHome ? "text-gray-900" : "text-white"
                }`}
              >
                하랑<span className="text-blue-500">마케팅</span>
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) =>
              item.sub ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      pathname.startsWith(item.href)
                        ? scrolled || !isHome
                          ? "text-blue-600"
                          : "text-blue-300"
                        : scrolled || !isHome
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden py-1">
                      {item.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === item.href
                      ? scrolled || !isHome
                        ? "bg-blue-50 text-blue-600"
                        : "bg-white/10 text-white"
                      : scrolled || !isHome
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      : "text-gray-300 hover:text-white hover:bg-white/8"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="tel:010-9054-3788"
              className={`hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition-colors ${scrolled || !isHome ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white"}`}
            >
              <Phone size={13} strokeWidth={2} />
              <span className="font-semibold text-xs">010-9054-3788</span>
            </a>
            <a
              href="https://pf.kakao.com/_MuUkG/chat"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-2 flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-bold transition-colors ${scrolled || !isHome ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300" : "bg-yellow-400/90 text-gray-900 hover:bg-yellow-300"}`}
            >
              <MessageCircle size={13} strokeWidth={2.5} />
              <span className="hidden lg:inline">카카오 상담</span>
            </a>
            <Link
              href="/contact"
              className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              무료 진단
            </Link>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled || !isHome
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="메뉴 열기"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          {/* 브랜드 미니 헤더 */}
          <div className="px-4 pt-4 pb-3 border-b border-gray-100">
            <div className="text-xs font-black text-gray-900">하랑마케팅</div>
            <div className="text-[11px] text-gray-400">10년 경력 · 소상공인 전문 · 대표 직접 담당</div>
          </div>
          <div className="px-4 py-3 space-y-0.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    pathname === item.href || pathname.startsWith(item.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="ml-4 mt-0.5 space-y-0.5 mb-1">
                    {item.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 rounded-lg text-xs text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        · {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-4 pb-4 pt-2 border-t border-gray-100 space-y-2">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-1.5 w-full py-3.5 rounded-xl bg-blue-600 text-white font-black text-sm"
            >
              무료 진단 신청 (0원)
            </Link>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-yellow-400 text-gray-900 font-bold text-sm"
              >
                <MessageCircle size={13} strokeWidth={2.5} />카카오 상담
              </a>
              <a
                href="tel:010-9054-3788"
                className="flex items-center justify-center gap-1.5 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm"
              >
                <Phone size={13} strokeWidth={2.5} />전화 상담
              </a>
            </div>
            <p className="text-center text-[10px] text-gray-400">상담 비용 0원 · 계약 강요 없음 · 24시간 내 연락</p>
          </div>
        </div>
      )}
    </header>
  );
}
