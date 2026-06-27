import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "이용약관 — 하랑마케팅",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-gray-950 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-black text-white">이용약관</h1>
            <p className="text-gray-400 text-sm mt-2">최종 수정일: 2024년 1월 1일</p>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8 prose prose-sm prose-gray max-w-none">
            <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제1조 (목적)</h2>
                <p>이 약관은 하랑마케팅(이하 "회사")이 제공하는 마케팅 대행 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제2조 (서비스 내용)</h2>
                <p>회사는 다음과 같은 마케팅 대행 서비스를 제공합니다.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>네이버 플레이스 SEO 최적화 및 순위상승 서비스</li>
                  <li>블로그 배포(기자단) 및 블로그 관리 대행 서비스</li>
                  <li>체험단 모집 대행 및 리뷰 마케팅 서비스</li>
                  <li>SNS(인스타그램) 마케팅 서비스</li>
                  <li>맘카페·커뮤니티 바이럴 서비스</li>
                  <li>카카오맵 마케팅 서비스</li>
                  <li>기타 디지털 마케팅 관련 서비스</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제3조 (계약 체결)</h2>
                <p>서비스 이용 계약은 이용자가 서비스 이용 신청에 동의하고 회사가 이를 승낙함으로써 성립됩니다. 계약 체결 전 회사는 서비스 내용, 요금, 기간 등에 대해 충분히 안내합니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제4조 (요금 및 결제)</h2>
                <p>서비스 요금은 계약 체결 시 양 당사자가 합의한 금액으로 하며, 결제 방식은 계좌이체, 카드결제 등 협의된 방법에 따릅니다. 월 정기 서비스의 경우 계약 시작 전 선결제를 원칙으로 합니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제5조 (서비스 중단)</h2>
                <p>회사는 다음의 경우 서비스 제공을 일시 중단할 수 있습니다.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>시스템 점검 및 업그레이드</li>
                  <li>천재지변, 불가항력적 사유 발생</li>
                  <li>관련 법령에 의한 제한</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제6조 (이용자 의무)</h2>
                <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>허위 정보 제공 및 타인 명의 도용</li>
                  <li>서비스를 통해 얻은 정보의 무단 복제·배포</li>
                  <li>기타 법령 위반 행위</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제7조 (분쟁 해결)</h2>
                <p>서비스 이용과 관련하여 발생한 분쟁은 상호 협의를 통해 해결하며, 협의가 이루어지지 않을 경우 관련 법령에 따릅니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">제8조 (문의)</h2>
                <p>이 약관에 대한 문의는 아래 연락처로 해주세요.</p>
                <ul className="list-none mt-2 space-y-1">
                  <li>· 대표: 전태영</li>
                  <li>· 전화: 010-9054-3788</li>
                  <li>· 이메일: jty0221@naver.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
