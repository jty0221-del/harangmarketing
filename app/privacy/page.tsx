import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침 — 하랑마케팅",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="bg-gray-950 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-2xl md:text-3xl font-black text-white">개인정보처리방침</h1>
            <p className="text-gray-400 text-sm mt-2">최종 수정일: 2024년 1월 1일</p>
          </div>
        </section>
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
              <p className="text-gray-700">
                하랑마케팅(이하 "회사")은 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다.
              </p>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">1. 수집하는 개인정보 항목</h2>
                <p>회사는 서비스 제공을 위해 다음 개인정보를 수집합니다.</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>필수 항목: 이름(업체명), 전화번호</li>
                  <li>선택 항목: 이메일, 업종, 상담 내용</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">2. 개인정보 수집 및 이용 목적</h2>
                <ul className="list-disc pl-5 space-y-1">
                  <li>마케팅 상담 및 서비스 제공</li>
                  <li>계약 이행 및 서비스 안내</li>
                  <li>고객 문의 응대</li>
                </ul>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">3. 개인정보 보유 및 이용 기간</h2>
                <p>수집된 개인정보는 서비스 계약 종료 후 3년간 보관하며, 이후 즉시 파기합니다. 단, 관련 법령에 의해 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">4. 개인정보의 제3자 제공</h2>
                <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 이용자의 동의가 있거나 법령에 특별한 규정이 있는 경우는 예외로 합니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">5. 정보주체의 권리</h2>
                <p>이용자는 언제든지 개인정보 열람, 수정, 삭제, 처리 정지를 요구할 수 있습니다. 요청은 아래 연락처를 통해 하시면 됩니다.</p>
              </div>
              <div>
                <h2 className="text-base font-black text-gray-900 mb-3">6. 개인정보 보호책임자</h2>
                <ul className="list-none space-y-1">
                  <li>· 성명: 전태영</li>
                  <li>· 직책: 대표</li>
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
