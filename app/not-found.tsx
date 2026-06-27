import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-[80vh] flex items-center bg-gray-50">
        <div className="max-w-lg mx-auto px-4 text-center py-20">
          <div className="text-8xl font-black text-gray-100 mb-4">404</div>
          <h1 className="text-2xl font-black text-gray-900 mb-3">페이지를 찾을 수 없어요</h1>
          <p className="text-gray-400 text-base mb-8">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
            >
              <Home size={15} />
              홈으로 돌아가기
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-50 transition-colors"
            >
              상담 신청하기
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
