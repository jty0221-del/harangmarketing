import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top band */}
      <div className="border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-sm">
                  <span className="text-white font-black text-[13px]">H</span>
                </div>
                <span className="font-black text-white text-[17px]">하랑마케팅</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                상생을 기반으로 한 마케팅.<br />
                10년 경력, 직접 담당합니다.
              </p>
              <div className="flex gap-2">
                {[
                  { label: "Blog", href: "https://blog.naver.com/harangmarketing", bg: "bg-green-600", letter: "N" },
                  { label: "Kakao", href: "https://pf.kakao.com/_MuUkG/chat", bg: "bg-yellow-400", letter: "K", dark: true },
                  { label: "Insta", href: "https://www.instagram.com/harangmarketing/", bg: "bg-gradient-to-br from-purple-600 to-pink-500", letter: "I" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    className={`w-8 h-8 rounded-lg ${s.bg} flex items-center justify-center font-bold text-xs hover:opacity-80 transition-opacity shadow-sm ${s.dark ? "text-gray-900" : "text-white"}`}
                  >
                    {s.letter}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">서비스</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  ["블로그 배포", "/services"],
                  ["플레이스 SEO", "/services"],
                  ["체험단·리뷰", "/services"],
                  ["인스타그램", "/services"],
                  ["맘카페 바이럴", "/services"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-gray-200 transition-colors text-gray-500">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">바로가기</h4>
              <ul className="space-y-2.5 text-sm">
                {[
                  ["회사소개", "/about"],
                  ["마케팅상품", "/services"],
                  ["진행사례", "/cases"],
                  ["상담신청", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="hover:text-gray-200 transition-colors text-gray-500">
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="https://blog.naver.com/harangmarketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-gray-200 transition-colors text-gray-500"
                  >
                    네이버 블로그
                    <ExternalLink size={11} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">연락처</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="tel:010-9054-3788" className="flex items-center gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                      <Phone size={12} className="text-blue-400" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">010-9054-3788</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:jty0221@naver.com" className="flex items-center gap-2.5 group">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0">
                      <Mail size={12} className="text-blue-400" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors">jty0221@naver.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={12} className="text-blue-400" />
                    </div>
                    <span className="text-gray-500 leading-relaxed text-xs">
                      경기 고양시 일산동구 장백로19<br />더루벤투스카운티 501호
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-xs text-gray-600 space-y-1">
            <p>대표: 전태영 · 사업자등록번호: 706-68-00281 · 통신판매업신고: 2020-서울강서-1482</p>
            <p>개인정보보호책임자: 전태영</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
            <Link href="/terms" className="hover:text-gray-400 transition-colors">이용약관</Link>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors font-semibold text-gray-500">개인정보처리방침</Link>
            <Link href="/refund" className="hover:text-gray-400 transition-colors">환불/취소 정책</Link>
          </div>
        </div>
        <p className="text-xs text-gray-700 mt-4">© 2024 하랑마케팅. All rights reserved.</p>
      </div>
    </footer>
  );
}
