import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeft, Clock, TrendingUp, CheckCircle2, ArrowRight, MessageCircle, BookOpen } from "lucide-react";

const POSTS: Record<string, {
  title: string;
  tag: string;
  tagColor: string;
  readTime: string;
  result: string;
  summary: string;
  sections: { heading: string; body: string; tips?: string[] }[];
  cta: string;
}> = {
  "naver-place-algorithm": {
    title: "2024 네이버 플레이스 상위 노출 알고리즘 완전 분석",
    tag: "플레이스 SEO",
    tagColor: "bg-blue-50 text-blue-600",
    readTime: "8분",
    result: "적용 후 플레이스 Top 5 평균 4주",
    summary: "리뷰 수, 답글률, 사진 개수, 저장 수 — 플레이스 순위를 결정하는 7가지 요소를 실제 데이터로 분석했습니다.",
    sections: [
      {
        heading: "플레이스 알고리즘, 어떻게 작동하나요?",
        body: "네이버 플레이스는 단순히 '오래된 매장'이나 '광고비를 많이 쓴 매장'을 상위에 올려주지 않습니다. 검색어와의 연관성, 사용자 반응, 콘텐츠 품질을 종합적으로 평가합니다. 하랑마케팅이 10년간 500개 이상의 프로젝트를 통해 분석한 핵심 지표는 다음과 같습니다.",
        tips: [
          "리뷰 수 및 평점 — 별점 4.0 이상, 리뷰 50개 이상이 Top 10 진입의 기본 조건",
          "사장님 답글률 — 최근 30일 답글률 70% 이상이면 가산점",
          "저장(즐겨찾기) 수 — 실사용자 수요 지표로 최근 가중치 급증",
          "사진 업데이트 빈도 — 최근 30일 내 사진 3장 이상 추가 시 유리",
          "정보 완성도 — 영업시간·메뉴·주소가 100% 채워진 매장 우대",
          "클릭률 (CTR) — 검색 결과에서 얼마나 많이 클릭되는지",
          "방문자 리뷰(포토리뷰) 비중 — 텍스트 리뷰보다 사진 리뷰가 3배 이상 효과적",
        ],
      },
      {
        heading: "경쟁사와 비교해서 어디에 집중해야 하나요?",
        body: "플레이스 SEO는 절대 점수가 아니라 상대 점수입니다. '내 매장이 얼마나 좋은가'가 아니라 '경쟁 매장보다 얼마나 나은가'가 기준입니다. 우선 경쟁사 3~5곳의 리뷰 수, 평점, 사진 수를 조사하세요. 그 중간값보다 20% 이상 높으면 진입이 가능합니다.",
        tips: [
          "경쟁사 리뷰 100개 → 내 매장 목표 120개 이상",
          "경쟁사 사진 50장 → 내 매장 목표 최소 동수 이상 + 최신성",
          "경쟁사 답글률 50% → 내 매장 80% 이상 목표",
        ],
      },
      {
        heading: "지금 바로 할 수 있는 3가지",
        body: "알고리즘을 이해해도 실행하지 않으면 의미 없습니다. 오늘 당장 할 수 있는 세 가지 액션을 정리했습니다.",
        tips: [
          "플레이스 관리자 로그인 → 사진 최소 5장 추가 (실내, 메뉴, 외관 골고루)",
          "최근 3개월 미답글 리뷰 전부 답글 달기 (감사 인사 + 재방문 유도)",
          "주요 메뉴·서비스 키워드로 플레이스 소개글 업데이트",
        ],
      },
    ],
    cta: "플레이스 SEO 전략 상담하기",
  },
  "cafe-blog-keywords": {
    title: "카페 사장님이 꼭 써야 하는 블로그 키워드 30선",
    tag: "블로그 마케팅",
    tagColor: "bg-green-50 text-green-700",
    readTime: "6분",
    result: "카페 블로그 적용 후 월 신규 방문 +43%",
    summary: "지역명+카페, 분위기 카페, 데이트 카페 등 실제 검색량 높은 키워드 목록과 글쓰기 공식을 공개합니다.",
    sections: [
      {
        heading: "왜 키워드가 카페 마케팅의 핵심인가요?",
        body: "카페를 찾는 사람들은 대부분 네이버에서 '지역명+카페'로 검색합니다. 이 검색어에 내 블로그 글이 노출되면 광고비 없이 방문객을 늘릴 수 있습니다. 핵심은 검색량이 높으면서 경쟁이 낮은 '틈새 키워드'를 찾는 것입니다.",
        tips: [],
      },
      {
        heading: "검색량 높은 카페 키워드 30선",
        body: "하랑마케팅이 실제 프로젝트에서 효과를 확인한 키워드들입니다. 지역명을 앞에 붙여서 활용하세요.",
        tips: [
          "지역명+카페 추천 / 지역명+분위기좋은카페",
          "지역명+데이트카페 / 지역명+혼자카페",
          "지역명+스터디카페 / 지역명+작업하기좋은카페",
          "지역명+창가자리카페 / 지역명+뷰맛집",
          "지역명+베이글카페 / 지역명+크로플카페",
          "지역명+애견카페 / 지역명+루프탑카페",
          "지역명+조용한카페 / 지역명+인테리어예쁜카페",
          "지역명+24시카페 / 지역명+야경카페",
          "지역명+주차가능카페 / 지역명+단체모임카페",
          "지역명+아이와함께카페 / 지역명+키즈존카페",
        ],
      },
      {
        heading: "블로그 글쓰기 5단계 공식",
        body: "키워드를 정했다면 이제 글을 써야 합니다. 검색 상위에 오르는 블로그 글의 구조는 단순합니다.",
        tips: [
          "제목: [지역명+키워드] 형태로 제목에 키워드 포함 (예: '일산 분위기좋은카페 추천 TOP5')",
          "서론: 이 글을 읽으면 무엇을 알 수 있는지 2~3줄로 요약",
          "본문: 카페 소개, 메뉴 사진 + 가격, 분위기·인테리어 설명",
          "꿀팁: 주차, 영업시간, 웨이팅 정보 등 실용 정보 포함",
          "마무리: 네이버 플레이스 링크, 인스타그램 태그 삽입",
        ],
      },
    ],
    cta: "블로그 마케팅 상담하기",
  },
  "review-vs-experience": {
    title: "체험단 vs 일반 리뷰 — 뭐가 더 효과적인가?",
    tag: "체험단·리뷰",
    tagColor: "bg-amber-50 text-amber-700",
    readTime: "5분",
    result: "리뷰 전략 최적화 후 전환율 2.1배",
    summary: "체험단은 빠르고 리뷰는 신뢰도가 높습니다. 업종별로 어느 방식이 더 ROI가 높은지 실제 A/B 테스트 결과를 공개합니다.",
    sections: [
      {
        heading: "체험단과 일반 리뷰, 무엇이 다른가요?",
        body: "체험단은 하랑마케팅 같은 대행사가 모집한 '리뷰어'가 방문 후 후기를 남기는 방식입니다. 일반 리뷰는 실제 결제 고객이 자발적으로 남기는 후기입니다. 두 방식은 속도, 비용, 신뢰도 측면에서 완전히 다릅니다.",
        tips: [
          "체험단 — 빠름(2~4주), 사진 품질 높음, 키워드 삽입 가능, 비용 높음",
          "일반 리뷰 — 느림, 신뢰도 높음, 알고리즘 가중치 높음, 비용 낮음",
        ],
      },
      {
        heading: "업종별 최적 조합",
        body: "10년간의 데이터로 업종별로 어느 방식이 더 효과적인지 분석했습니다. 정답은 '둘 다 필요하지만 비중이 다르다'입니다.",
        tips: [
          "카페·베이커리 — 체험단 60% + 리뷰 유도 40% (비주얼 콘텐츠 중요)",
          "음식점·배달 — 리뷰 유도 70% + 체험단 30% (배달앱 자발 리뷰 가중치 큼)",
          "미용·네일 — 체험단 50% + 인스타그램 연동 50% (비포/애프터 효과 극대화)",
          "병원·의원 — 일반 리뷰 80% + 체험단 20% (의료광고법 주의)",
        ],
      },
      {
        heading: "리뷰 마케팅 시작 전 체크리스트",
        body: "리뷰 마케팅을 시작하기 전 반드시 확인해야 할 사항입니다.",
        tips: [
          "플레이스 기본 정보(영업시간, 사진, 메뉴) 완성 여부",
          "현재 평점 3.5점 이상인지 확인 (낮으면 리뷰보다 서비스 개선 먼저)",
          "리뷰에 답글 달 수 있는 시간 확보 (답글률이 순위에 영향)",
          "허위 리뷰 구매 절대 금지 (네이버 제재로 전체 삭제 위험)",
        ],
      },
    ],
    cta: "체험단 모집 대행 문의하기",
  },
  "instagram-reels-beauty": {
    title: "인스타그램 릴스로 예약 폭발 — 미용실 성공 케이스",
    tag: "SNS 마케팅",
    tagColor: "bg-pink-50 text-pink-700",
    readTime: "7분",
    result: "예약률 0% → 완전 마감, 2주",
    summary: "수원 네일샵이 릴스 3개로 2주 만에 예약을 마감한 실제 사례. 어떤 내용을, 어떻게 촬영하고, 무슨 해시태그를 달았는지 공개합니다.",
    sections: [
      {
        heading: "왜 릴스가 미용·네일 업종에 효과적인가요?",
        body: "미용과 네일은 시각적 변화가 극적입니다. 비포/애프터를 보여주는 짧은 영상 하나가 수천 명의 잠재 고객에게 도달합니다. 인스타그램 알고리즘은 팔로워 수와 관계없이 좋은 릴스를 추천 탭에 노출시킵니다. 수원 네일샵 사례에서도 팔로워 300명이었지만 릴스 하나로 2만 뷰가 넘었습니다.",
        tips: [
          "릴스 평균 시청 완료율이 높을수록 추천 탭 노출 증가",
          "저장 수가 좋아요보다 알고리즘 가중치가 2~3배 높음",
          "댓글 달리는 속도(첫 1시간)가 초기 노출 결정",
          "팔로워 수보다 콘텐츠 품질이 핵심",
        ],
      },
      {
        heading: "수원 네일샵이 만든 릴스 3가지",
        body: "하랑마케팅이 직접 기획한 3개 릴스가 예약 마감을 만들었습니다. 각 릴스의 구성과 효과를 공개합니다.",
        tips: [
          "릴스 1: '이 손 주인공 찾아요' — 완성된 네일 클로즈업 + 가격 자막 (조회 2.1만)",
          "릴스 2: 비포/애프터 — 5초 만에 보여주는 변신 + 지역명 해시태그 (저장 340건)",
          "릴스 3: 리뷰 읽기 — 실제 고객 리뷰 음성 + 시술 화면 (예약 문의 67건)",
        ],
      },
      {
        heading: "해시태그 전략",
        body: "무작정 많이 다는 것보다 '지역+업종' 조합이 핵심입니다. 수원 네일샵의 실제 적용 해시태그 조합을 공개합니다.",
        tips: [
          "필수: #수원네일 #수원네일샵 #수원네일아트 (지역 특화)",
          "확장: #네일일상 #젤네일 #네일추천 (업종 일반)",
          "트렌드: #봄네일 #오피스룩네일 (시즌별 트렌드)",
          "총 10~15개 이내, 댓글보다 본문에 포함",
        ],
      },
      {
        heading: "촬영 없이 시작하는 방법",
        body: "전문 카메라 없어도 됩니다. 스마트폰 후면 카메라 + 자연광이면 충분합니다.",
        tips: [
          "촬영: 창가 자연광 + 흰 배경지 (1만원 이하) + 스마트폰 거치대",
          "편집: 캡컷(무료) — 자막·음악·속도 조절 모두 가능",
          "업로드: 오전 11시~오후 1시, 저녁 7~9시 최적 시간대",
          "꾸준함: 주 3회 이상 업로드가 팔로워 증가의 핵심",
        ],
      },
    ],
    cta: "인스타그램 마케팅 상담하기",
  },
  "delivery-review-formula": {
    title: "음식점 배달 매출 2배 만든 리뷰 마케팅 공식",
    tag: "업종별 전략",
    tagColor: "bg-purple-50 text-purple-700",
    readTime: "9분",
    result: "배달 매출 480만 → 1,022만원",
    summary: "배달앱에서 순위를 올리는 방법은 광고비가 아닙니다. 리뷰 수와 평점, 사장님 댓글이 핵심입니다. 서울 마포 음식점의 4개월 과정을 공개합니다.",
    sections: [
      {
        heading: "배달앱 알고리즘의 비밀",
        body: "배달의민족·쿠팡이츠·요기요는 모두 비슷한 기준으로 매장을 순위에 올립니다. 광고비(울트라콜, 오픈리스트)가 상위 노출에 도움이 되지만 리뷰 수와 평점이 더 장기적으로 중요합니다. 리뷰가 많은 매장은 광고비를 줄여도 노출이 유지됩니다.",
        tips: [
          "리뷰 수 — 동일 카테고리 상위 20%가 기본 조건",
          "평점 4.5 이상 유지 — 한 번 내려가면 회복에 2~3배 시간 소요",
          "사장님 댓글률 — 배달의민족 알고리즘에서 활성 매장 가산점",
          "재주문율 — 배달앱 내 고객 충성도 지표로 순위에 영향",
        ],
      },
      {
        heading: "서울 마포 음식점 4개월 과정",
        body: "처음 하랑마케팅과 진행 시작 시 리뷰 10개, 월 배달 매출 480만원이었던 음식점이 어떻게 변했는지 단계별로 공개합니다.",
        tips: [
          "1개월: 사장님 댓글 100% 답글 달기 + 감사 쿠폰 발행 → 재주문 증가",
          "2개월: 리뷰 이벤트(리뷰 작성 시 음료 서비스) → 리뷰 60개 → 80개",
          "3개월: 체험단 10명 투입 → 포토리뷰 20건 확보 → 리뷰 140개",
          "4개월: 리뷰 180개+, 배달 매출 1,022만원 달성",
        ],
      },
      {
        heading: "리뷰 이벤트 실행 방법",
        body: "리뷰를 늘리는 가장 효과적인 방법은 '리뷰 작성 고객에게 혜택 제공'입니다. 단, 배달앱 정책을 지키면서 진행해야 합니다.",
        tips: [
          "허용: '리뷰 작성 시 다음 주문 할인쿠폰' 문자 발송",
          "허용: 주문서에 '리뷰 부탁드립니다 + QR코드' 스티커 부착",
          "금지: 리뷰 내용 지정 요청, 별점 5점 요구",
          "금지: 허위 주문 후 자체 리뷰 작성 (배달앱 계정 정지 위험)",
        ],
      },
      {
        heading: "지금 바로 할 수 있는 3가지",
        body: "오늘 당장 배달앱 리뷰를 늘리기 위해 할 수 있는 실행 목록입니다.",
        tips: [
          "최근 30일 미답글 리뷰 전부 감사 댓글 달기 (20분 작업)",
          "주문서에 '소중한 리뷰 부탁드립니다 :)' 문구 손글씨 메모 추가",
          "평점 1~2점 악성 리뷰에 정중하고 전문적인 답글 달기 (신뢰도 상승)",
        ],
      },
    ],
    cta: "배달·음식점 마케팅 상담하기",
  },
  "small-budget-place-top": {
    title: "마케팅 예산 30만원으로 플레이스 1위 가능한가?",
    tag: "마케팅 비용",
    tagColor: "bg-gray-50 text-gray-700",
    readTime: "6분",
    result: "소규모 예산 사례 3개 플레이스 Top 5 달성",
    summary: "작은 예산으로 가장 효과적인 조합을 찾는 방법. 10년간 500개 프로젝트 데이터를 바탕으로 예산별 최적 전략을 제시합니다.",
    sections: [
      {
        heading: "월 30만원으로 할 수 있는 것",
        body: "결론부터 말씀드리면 '가능합니다', 단 업종과 경쟁 강도에 따라 달라집니다. 10년간 진행한 500건 중 월 30~50만원 예산으로 플레이스 Top 5에 진입한 사례가 60건 이상입니다. 핵심은 예산을 넓게 쓰지 않고 1~2개 채널에 집중하는 것입니다.",
        tips: [
          "플레이스 SEO 최적화 (정보 업데이트 + 사진 + 키워드) → 월 15만원",
          "블로그 포스팅 주 1회 (지역+키워드 최적화) → 월 10~15만원",
          "리뷰 답글 관리 → 직접 진행 권장 (비용 절감)",
        ],
      },
      {
        heading: "예산별 추천 전략",
        body: "예산에 따라 우선순위가 달라져야 합니다. 하랑마케팅의 예산별 권장 채널 조합입니다.",
        tips: [
          "월 30만원 이하: 플레이스 SEO 집중 (가장 ROI 높음)",
          "월 30~50만원: 플레이스 SEO + 블로그 주 1회",
          "월 50~100만원: 플레이스 + 블로그 주 2회 + 리뷰 마케팅",
          "월 100만원+: 멀티채널 (플레이스+블로그+SNS+체험단)",
        ],
      },
      {
        heading: "소규모 예산 성공 사례 3가지",
        body: "실제 월 30~50만원 예산으로 진행한 성공 사례입니다.",
        tips: [
          "경기 파주 카페 — 월 35만원 · 3개월 · '파주카페' 키워드 3위 달성",
          "서울 강북 헤어샵 — 월 40만원 · 4개월 · 플레이스 리뷰 12개 → 85개",
          "인천 중구 피부과 — 월 45만원 · 6개월 · 신규 예약 월 5건 → 28건",
        ],
      },
      {
        heading: "예산 낭비 없이 시작하는 방법",
        body: "마케팅 대행사에 맡기기 전에 먼저 직접 할 수 있는 것부터 시작하면 예산을 절약할 수 있습니다.",
        tips: [
          "플레이스 기본 정보(영업시간·메뉴·가격·사진)를 직접 100% 채우기",
          "리뷰 답글을 직접 달면 답글률이 올라가 순위에 유리",
          "직접 쓴 블로그 1개가 대행 5개보다 효과 없을 수 있음 — 전략 없이는 비추",
          "무료 상담에서 업종·경쟁사 분석 후 투자 우선순위 결정 권장",
        ],
      },
    ],
    cta: "예산별 마케팅 전략 상담하기",
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "포스트를 찾을 수 없습니다" };
  return {
    title: `${post.title} — 하랑마케팅 블로그`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://harangmarketing.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 py-12 md:py-20">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-xs mb-6 transition-colors">
              <ArrowLeft size={13} /> 블로그 목록으로
            </Link>
            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border mb-4 ${post.tagColor}`}>
              <BookOpen size={10} strokeWidth={2.5} /> {post.tag}
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-5">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-6">
              <span className="flex items-center gap-1.5">
                <Clock size={12} strokeWidth={2} /> 읽는 시간 {post.readTime}
              </span>
              <span className="flex items-center gap-1.5 text-blue-400 font-bold">
                <TrendingUp size={12} strokeWidth={2.5} /> {post.result}
              </span>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">{post.summary}</p>
          </div>
        </section>

        {/* Content */}
        <article className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="space-y-10">
              {post.sections.map((section, i) => (
                <section key={i}>
                  <h2 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start gap-2">
                    <span className="shrink-0 w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-[10px] font-black mt-0.5">
                      {i + 1}
                    </span>
                    {section.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-[15px] mb-4">{section.body}</p>
                  {section.tips && section.tips.length > 0 && (
                    <ul className="space-y-2.5">
                      {section.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2.5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                          <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span className="text-sm text-gray-700 leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Author box */}
            <div className="mt-12 bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shrink-0 shadow-sm">
                <span className="text-white font-black text-xl">전</span>
              </div>
              <div>
                <p className="font-black text-gray-900 text-sm mb-0.5">전태영 · 하랑마케팅 대표</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  2014년부터 소상공인 전문 마케팅 대행. 500+ 프로젝트 경험으로 업종별 실전 데이터를 공유합니다.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-black text-white mb-3">{post.cta}</h2>
            <p className="text-blue-100 text-sm mb-7">상담 비용 0원 · 업종 분석 무료 · 24시간 내 연락</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-blue-700 font-black text-sm hover:bg-blue-50 transition-colors shadow-sm"
              >
                무료 상담 신청 <ArrowRight size={14} />
              </Link>
              <a
                href="https://pf.kakao.com/_MuUkG/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-yellow-400 text-gray-900 font-black text-sm hover:bg-yellow-300 transition-colors"
              >
                <MessageCircle size={15} /> 카카오 문의
              </a>
            </div>
          </div>
        </section>

        {/* More posts */}
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
            <p className="text-sm font-bold text-gray-500 mb-4">다른 인사이트도 읽어보세요</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:underline"
            >
              <BookOpen size={14} /> 전체 블로그 보기 <ArrowRight size={13} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
