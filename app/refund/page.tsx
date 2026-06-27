import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "환불/취소 정책 — 하랑마케팅",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-gray-950 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-black text-white">환불 / 취소 정책</h1>
            <p className="text-gray-400 text-sm mt-2">최종 수정일: 2024년 1월 1일</p>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                <p className="text-blue-800 text-sm font-medium">
                  하랑마케팅은 투명한 환불 정책을 통해 고객과의 신뢰를 유지합니다.
                  환불 및 취소에 관한 궁금한 점은 언제든지 문의해주세요.
                </p>
              </div>

              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">1. 계약 취소 및 환불 원칙</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">서비스 시작 전 취소</h3>
                    <p>계약 체결 후 서비스 시작 전에 취소하는 경우, 결제 금액 전액을 환불해드립니다.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">서비스 진행 중 취소 (1개월 이내)</h3>
                    <p>서비스 시작 후 14일 이내 취소 요청 시, 진행된 작업 비용을 제외한 금액을 환불해드립니다.</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 text-sm mb-2">서비스 진행 중 취소 (1개월 이후)</h3>
                    <p>서비스 시작 후 1개월이 지난 경우, 당월 서비스 비용은 환불이 어려우며 다음 달부터 계약 해지가 가능합니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">2. 환불 불가 항목</h2>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>이미 배포 완료된 블로그 기사·콘텐츠</li>
                  <li>체험단 모집 완료 및 체험 진행 비용</li>
                  <li>이미 실행된 광고 비용</li>
                  <li>고객 귀책 사유로 인한 서비스 중단</li>
                </ul>
              </div>

              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">3. 환불 절차</h2>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>취소·환불 요청 (전화 또는 이메일)</li>
                  <li>담당자 확인 및 환불 금액 산정 (1~2 영업일)</li>
                  <li>환불 금액 안내 및 동의</li>
                  <li>환불 처리 (동의 후 3~5 영업일 이내)</li>
                </ol>
              </div>

              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">4. 문의</h2>
                <p>환불·취소 관련 문의는 아래 연락처로 해주세요.</p>
                <ul className="list-none mt-2 space-y-1">
                  <li>· 전화: 010-9054-3788</li>
                  <li>· 이메일: jty0221@naver.com</li>
                </ul>
                <div className="mt-5">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                    문의하기
                  </Link>
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
