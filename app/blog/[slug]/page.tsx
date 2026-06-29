import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollProgressBar from "../../components/ScrollProgressBar";
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
    tagColor: "bg-blue-50 text-blue-700",
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
    tagColor: "bg-blue-50 text-blue-600",
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
    tagColor: "bg-blue-50 text-blue-700",
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
    tagColor: "bg-indigo-50 text-indigo-700",
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
    tagColor: "bg-blue-50 text-blue-600",
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
  "momcafe-viral-guide": {
    title: "맘카페 바이럴 마케팅 완전 가이드 — 수강생 55% 늘린 실전 전략",
    tag: "업종별 전략",
    tagColor: "bg-indigo-50 text-indigo-700",
    readTime: "7분",
    result: "학원 수강생 3개월 +55%, 카페 방문객 +40%",
    summary: "맘카페는 '구매 결정권을 가진 주부'가 모이는 최고의 로컬 마케팅 채널입니다. 광고처럼 보이지 않으면서 효과를 내는 침투 전략을 공개합니다.",
    sections: [
      {
        heading: "왜 맘카페인가요?",
        body: "맘카페는 네이버 카페 중에서도 지역 기반 주부 커뮤니티입니다. '동네 맛집 어디가 좋아요?', '어린이집 어디가 좋아요?'처럼 실생활 구매 결정을 하는 곳입니다. 이 채널의 가장 큰 장점은 신뢰도입니다. 광고가 아닌 '이웃의 추천'으로 받아들여지기 때문에 전환율이 일반 블로그 대비 2~3배 높습니다.",
        tips: [
          "카페·음식점·학원·키즈 관련 업종에 특히 효과적",
          "주부 타겟 고객이 많은 뷰티·네일·피부과도 높은 전환율",
          "게시글 1건이 100~500명에게 노출되는 고밀도 채널",
        ],
      },
      {
        heading: "맘카페 바이럴의 핵심 원칙",
        body: "맘카페 마케팅이 실패하는 가장 큰 이유는 '광고처럼 보이는 것'입니다. 맘카페 회원들은 광고 게시물을 귀신같이 감지합니다. 성공하는 맘카페 바이럴의 3가지 원칙은 다음과 같습니다.",
        tips: [
          "실사용자 후기처럼 작성 — '사장님 사주셔서' 느낌이 나면 역효과",
          "구체적인 경험 서술 — '맛있었어요'가 아닌 '2시에 갔더니 대기 20분이었고 떡볶이가...'",
          "자연스러운 질문글 활용 — '이 근처 카페 어디 좋아요?' 답변으로 삽입",
          "1회성이 아닌 2~3주에 걸친 분산 게시 (집중하면 어뷰징으로 신고됨)",
        ],
      },
      {
        heading: "업종별 맘카페 콘텐츠 전략",
        body: "업종마다 맘카페에서 어필해야 하는 포인트가 다릅니다. 하랑마케팅이 실제 프로젝트에서 검증한 업종별 전략입니다.",
        tips: [
          "학원 — '아이가 다니고 있는데 선생님이...' 형태의 후기가 가장 효과적. 결과보다 분위기·선생님 친절도 강조",
          "카페 — '아이 데리고 가기 좋아요' + 키즈 공간 사진. 주차 정보 필수 포함",
          "음식점 — '가족 외식으로 갔는데' 스토리 + 아이 메뉴 언급. 반찬 넉넉함·위생 강조",
          "네일·뷰티 — '빠른 예약 가능', '아이 맡기고 다녀올 수 있는 시간' 등 엄마 입장의 편의성 강조",
          "피부과·한의원 — 의학 정보+경험 후기 조합. 원장 친절도가 핵심",
        ],
      },
      {
        heading: "실제 결과 — 고양 학원 3개월 사례",
        body: "경기 고양의 초등학생 대상 영어 학원은 수강생 확보에 어려움을 겪고 있었습니다. 플레이스 SEO는 이미 진행 중이었지만 신규 유입이 정체되었습니다. 하랑마케팅은 고양 맘카페 3곳에 3주에 걸쳐 총 9건의 자연스러운 후기 게시물을 배포했습니다.",
        tips: [
          "1주차: '선생님 추천 받아요' 형태의 질문글 + 답변 댓글로 자연 삽입",
          "2주차: '아이가 다니는데 영어 실력이...' 형태 후기글 게시",
          "3주차: '체험수업 신청했어요' 후기 + 결과 공유",
          "3개월 결과: 수강생 22명 → 34명 (+55%), 문의 전화 월 3건 → 12건",
        ],
      },
      {
        heading: "주의해야 할 것들",
        body: "맘카페 바이럴은 잘못하면 역효과가 납니다. 특히 다음 세 가지는 절대 하지 마세요.",
        tips: [
          "가입 후 바로 홍보글 올리기 — 신규 계정은 광고로 인식됨. 최소 2주 이상 활동 후 진행",
          "같은 내용 여러 카페에 동시 게시 — 카페 간 교류로 바로 발각됨",
          "가격 직접 언급 — '가성비 대박' 등 상업적 표현은 삭제되거나 신뢰도 하락",
          "하루에 집중해서 올리기 — 주 2~3건 이내로 분산",
        ],
      },
    ],
    cta: "맘카페 바이럴 전략 상담하기",
  },
  "naver-place-review-100": {
    title: "네이버 플레이스 리뷰 100개 만들기 — 실전 로드맵",
    tag: "리뷰 마케팅",
    tagColor: "bg-blue-50 text-blue-700",
    readTime: "8분",
    result: "리뷰 0개 → 3개월 만에 127개 달성 사례",
    summary: "리뷰가 없으면 순위가 없고, 순위가 없으면 방문객이 없습니다. 실제로 리뷰 0개에서 3개월 만에 127개를 만든 로드맵을 공개합니다.",
    sections: [
      {
        heading: "왜 리뷰 100개가 기준선인가요?",
        body: "네이버 플레이스 알고리즘에서 리뷰 수는 가장 직관적인 신뢰 지표입니다. 하랑마케팅이 분석한 500개 프로젝트 데이터에 따르면, 경쟁이 보통 수준인 지역에서 리뷰 100개 이상이면 Top 10 진입 가능성이 73%입니다. 100개가 '마법의 숫자'는 아니지만, 대부분의 업종에서 심리적 신뢰 임계점이 되는 기준입니다.",
        tips: [
          "리뷰 50개 미만 — 검색 상위 노출 불리, 신규 방문객 전환율 낮음",
          "리뷰 50~100개 — 경쟁사 대비 기본 신뢰 확보, Top 10~20 가능",
          "리뷰 100개 이상 — 신규 고객의 '여기 믿어도 되겠다' 심리 자동 형성",
          "리뷰 200개+ — 지역 대표 매장 포지션, 광고 없이도 꾸준한 유입",
        ],
      },
      {
        heading: "리뷰 100개 로드맵 — 3개월 플랜",
        body: "리뷰는 단기 집중이 아닌 꾸준한 누적이 핵심입니다. 급격히 늘어나면 플랫폼 필터링에 걸릴 수 있습니다. 월별 목표를 나눠 안전하게 쌓는 로드맵입니다.",
        tips: [
          "1개월차 목표: 20~30개 — 기존 단골 고객에게 직접 요청 (문자·카카오 안내문)",
          "2개월차 목표: 40~50개 추가 — 네이버 예약·주문 연동 후 자동 리뷰 요청 기능 활용",
          "3개월차 목표: 30~40개 추가 — 체험단 소규모 진행 (업종에 따라 5~10명)",
          "매달 말 답글률 100% 유지 — 답글이 없으면 리뷰 작성 동기 떨어짐",
        ],
      },
      {
        heading: "리뷰 요청 문자 템플릿",
        body: "손님에게 직접 부탁하는 것이 가장 효과적이지만, 어색하게 느껴질 수 있습니다. 자연스럽게 요청하는 문자 템플릿을 공개합니다.",
        tips: [
          "기본형: '[매장명]을 이용해주셔서 감사합니다. 다음 방문 시 할인쿠폰 드릴게요! 네이버 리뷰 한 줄만 남겨주시면 큰 도움이 됩니다 → (플레이스 링크)'",
          "구체형: '오늘 [메뉴명] 드셨는데 맛있으셨나요? 솔직한 후기를 남겨주시면 다음에 음료 한 잔 드리겠습니다 :)'",
          "부담 줄이는 멘트: '별점만 눌러주셔도 됩니다. 글 없어도 괜찮아요!'",
          "시기: 방문 직후~12시간 이내가 응답률 가장 높음",
        ],
      },
      {
        heading: "사장님 답글 — 리뷰 유도의 숨겨진 공식",
        body: "리뷰를 쓴 고객에게 정성스러운 답글을 달면 주변 지인도 리뷰를 씁니다. 답글이 새로운 리뷰를 만드는 선순환 구조입니다. 답글 작성 시 핵심 포인트를 정리했습니다.",
        tips: [
          "고객 이름 또는 리뷰 내용을 언급 — '오늘 아메리카노 주문하셨군요, 감사합니다!'",
          "재방문 유도 멘트 포함 — '다음에 또 오시면 신메뉴 꼭 드셔보세요'",
          "키워드 자연 삽입 — '수원 카페' '주차 편한 카페' 등 SEO 키워드 1~2개",
          "답글 길이: 2~4줄이 가장 자연스럽고 플레이스 알고리즘에도 유리",
        ],
      },
      {
        heading: "피해야 할 실수 3가지",
        body: "리뷰를 빠르게 늘리다 보면 역효과가 나는 실수를 범하기 쉽습니다. 10년간 클라이언트가 겪은 실패 패턴을 정리했습니다.",
        tips: [
          "가족·지인 리뷰 집중 — IP·패턴 감지로 삭제될 수 있음, 실제 고객 위주로 진행",
          "단기 집중 (일주일 안에 50개) — 비정상 패턴으로 분류, 분산이 안전",
          "답글 복붙 — 모든 리뷰에 같은 답글은 성의 없어 보이고 SEO에도 불리",
        ],
      },
    ],
    cta: "리뷰 마케팅 전략 상담하기",
  },
  "kakaomap-marketing-guide": {
    title: "카카오맵 마케팅 완전 가이드 — 2개월 만에 Top 3 진입한 방법",
    tag: "카카오맵",
    tagColor: "bg-yellow-50 text-yellow-700",
    readTime: "7분",
    result: "카카오맵 신규 고객 유입 +700% · 2개월",
    summary: "네이버만 신경 쓰다가 카카오맵을 놓치는 사장님이 많습니다. 카카오맵 트렌드 랭킹 상위 진입 전략과 실전 사례를 공개합니다.",
    sections: [
      {
        heading: "왜 카카오맵을 놓치면 안 되나요?",
        body: "국내 지도 앱 사용자의 약 40%가 카카오맵을 씁니다. 특히 30~40대 주부와 직장인 고객층에서 카카오맵 사용 비중이 네이버 지도와 거의 동일합니다. 네이버 플레이스에만 집중하면 이 40% 고객을 경쟁사에게 넘기는 셈입니다. 하랑마케팅이 분석한 500개 프로젝트에서 카카오맵 최적화 후 평균 신규 유입이 30% 이상 증가했습니다.",
        tips: [
          "카카오맵 월 활성 사용자 3,600만 명 이상 (2024년 기준)",
          "카카오맵 '내 주변 검색' 기능 사용률 — 특히 음식점·카페 업종에서 높음",
          "카카오맵 리뷰는 네이버 리뷰와 별개 관리 필요",
          "카카오맵 트렌드 랭킹 — 검색량 증가 매장을 자동 추천",
        ],
      },
      {
        heading: "카카오맵 트렌드 랭킹이란?",
        body: "카카오맵에는 '트렌드 랭킹'이라는 기능이 있습니다. 최근 급격히 검색이 늘어난 매장을 자동으로 추천 상단에 노출시켜주는 알고리즘입니다. 이 랭킹에 진입하면 광고비 없이도 지역 상위에 노출될 수 있습니다. 진입 조건은 단기간 내 검색량·저장·리뷰가 동시에 증가하는 것입니다.",
        tips: [
          "트렌드 랭킹 진입 조건: 1주일 내 리뷰 10개 이상 증가 + 저장 50건 이상",
          "리뷰에 키워드 포함 여부가 검색 노출에 영향",
          "영업시간·메뉴·사진이 100% 완성된 매장이 유리",
          "카카오맵 '매장 관리' 채널 개설 필수 (무료)",
        ],
      },
      {
        heading: "2개월 트렌드 랭킹 Top 3 진입 로드맵",
        body: "경기 부천 치킨집의 실제 사례를 기반으로 작성한 2개월 로드맵입니다. 리뷰 0개에서 시작해 95개를 달성하고 트렌드 랭킹 Top 3에 진입했습니다.",
        tips: [
          "1주차: 매장 관리 채널 개설 + 정보 100% 완성 (메뉴·영업시간·대표번호·사진 10장 이상)",
          "2주차: 기존 단골 고객에게 카카오맵 리뷰 요청 (문자 또는 구두) — 목표 20개",
          "3~4주차: 체험단 10명 모집 → 카카오맵 리뷰 작성 요청",
          "5~6주차: 리뷰 답글 100% + 저장 이벤트 (저장하면 음료 한 잔 제공 등)",
          "7~8주차: 트렌드 랭킹 모니터링 + 성과 확인",
        ],
      },
      {
        heading: "리뷰 작성 유도 멘트 — 카카오맵 특화",
        body: "카카오맵 리뷰는 별점과 텍스트로 구성됩니다. 구체적인 텍스트 리뷰가 있을수록 검색 노출에 유리합니다. 고객에게 자연스럽게 요청하는 멘트를 정리했습니다.",
        tips: [
          "기본형: '카카오맵에도 저희 매장 있어요! 리뷰 남겨주시면 커피 한 잔 드릴게요 :)'",
          "QR 활용: 테이블에 카카오맵 리뷰 QR 코드 부착 — 스캔하면 바로 리뷰 작성 화면",
          "포장 봉투: '다음 방문 시 카카오맵 리뷰 보여주시면 XXX 드립니다' 스티커",
          "영수증: 리뷰 링크 QR 코드 + 한 줄 멘트 인쇄",
        ],
      },
      {
        heading: "네이버 vs 카카오맵 — 같이 해야 하는 이유",
        body: "네이버 플레이스와 카카오맵은 서로 다른 고객층을 커버합니다. 둘을 함께 운영하면 지역 검색 커버리지가 80% 이상으로 늘어납니다. 실제로 두 플랫폼을 병행 운영한 클라이언트는 단독 운영 대비 신규 유입이 평균 1.7배 높았습니다.",
        tips: [
          "네이버 플레이스 — 50대 이상·남성·검색 중심 유입에 강함",
          "카카오맵 — 30~40대·여성·지도 탐색 중심 유입에 강함",
          "두 플랫폼 리뷰 수 격차 최소화 전략 필요",
          "사진·메뉴 정보는 두 플랫폼 동일하게 업데이트",
        ],
      },
    ],
    cta: "카카오맵 마케팅 전략 상담하기",
  },
  "clinic-marketing-guide": {
    title: "의원·한의원 마케팅 완전 가이드 — 초진 예약 3배 만든 6개월 전략",
    tag: "업종별 전략",
    tagColor: "bg-indigo-50 text-indigo-700",
    readTime: "8분",
    result: "초진 예약 +300% · 6개월 · 경기 분당 피부과",
    summary: "병원·한의원 마케팅은 신뢰 구축이 핵심입니다. 원장님 전문성을 블로그로 쌓고, 체험단으로 리뷰를 확보하고, 플레이스 SEO로 상위 노출까지 달성한 실전 6개월 로드맵을 공개합니다.",
    sections: [
      {
        heading: "왜 병원·한의원 마케팅은 다를까요?",
        body: "일반 음식점이나 카페는 '맛있다', '분위기 좋다'로 선택되지만, 의원·한의원은 '믿을 수 있는가'가 첫 번째 선택 기준입니다. 첫 방문 결정 전 환자의 78%가 온라인 정보를 3곳 이상 확인합니다. 블로그 콘텐츠, 리뷰 수, 플레이스 정보 완성도가 신뢰도를 결정합니다.",
        tips: [
          "환자 의사결정 3단계: 검색 → 후기 확인 → 예약 전화",
          "블로그는 원장님 전문성·경험 위주 콘텐츠가 신뢰를 만든다",
          "1성~2성 리뷰 답글이 오히려 신뢰도를 높이는 경우 많음 — 성실한 대응이 핵심",
          "플레이스 사진은 진료실 내부, 원장님 사진, 대기실 순으로 효과적",
        ],
      },
      {
        heading: "경기 분당 피부과 — 6개월 성과 분석",
        body: "의원 개원 3년차였지만 온라인 존재감이 거의 없었습니다. 인스타그램 계정은 있었지만 팔로워 200명, 리뷰는 12개뿐이었습니다. 하랑마케팅과 함께 6개월 만에 초진 예약이 3배 늘었고 월 신규 매출이 2배가 됐습니다.",
        tips: [
          "1개월: 플레이스 정보 완성 + 원장님 블로그 개설 (주 2회 전문 콘텐츠)",
          "2개월: 체험단 15명 모집 → 리뷰 작성 + 인스타 포스팅",
          "3개월: '분당 피부과 추천' 키워드 블로그 Top 5 진입",
          "4~5개월: 플레이스 리뷰 89개 달성, 월 초진 예약 30건 돌파",
          "6개월: '분당 피부과' 플레이스 Top 3, 초진 예약 48건 달성",
        ],
      },
      {
        heading: "블로그 콘텐츠 전략 — 신뢰를 쌓는 주제 공식",
        body: "병원·한의원 블로그에서 가장 효과적인 콘텐츠는 '원장님이 직접 쓴 것처럼 느껴지는 전문성 콘텐츠'입니다. 광고성 홍보가 아닌 정보 제공형 글이 검색 유입과 신뢰 모두 잡습니다.",
        tips: [
          "증상 설명형: '이런 증상이라면 OO일 수 있어요 — 피부과 원장이 직접 설명'",
          "치료 과정 소개형: '레이저 시술 전후 — 실제 환자 사례 (동의 하에 게재)'",
          "오해 바로잡기형: 'OO 시술에 대한 잘못된 상식 5가지'",
          "계절 연계형: '봄철 피부 트러블 — 피부과에서 꼭 받아야 할 관리'",
          "지역 키워드 삽입 필수: '분당 피부과', '판교 피부과', '정자동 피부과' 등",
        ],
      },
      {
        heading: "체험단 운영 — 의료법 테두리 안에서",
        body: "의료·한의원은 과장 광고·허위 사실 기재가 의료법으로 엄격히 규제됩니다. 체험단을 잘못 운영하면 오히려 법적 문제가 생깁니다. 하랑마케팅은 10년 경험으로 의료법 내에서 최대 효과를 내는 방법을 씁니다.",
        tips: [
          "금지: 효능·효과 과장, 완치 보장, '최고' '1등' 표현",
          "허용: 실제 방문 후기, 친절한 원장님 인상, 시설·분위기 묘사",
          "체험단 후기는 경험 중심, 의학적 판단·결과 단정은 제외",
          "리뷰 작성 전 담당자가 사전 안내 필수 — 문제 리뷰 방지",
          "후기에 '광고' 또는 '체험단' 표시 의무 — 미표시 시 공정거래법 위반",
        ],
      },
      {
        heading: "6개월 로드맵 — 지금 바로 시작할 수 있는 단계",
        body: "어디서부터 시작해야 할지 막막하다면 아래 순서대로 진행해보세요. 하랑마케팅이 의원·한의원 업종에서 검증한 6개월 로드맵입니다.",
        tips: [
          "1개월: 플레이스 정보 완성 (사진 15장 이상, 진료과목, 주차, 예약 방법 포함)",
          "2개월: 블로그 개설 + 주 2회 정기 포스팅 (지역 키워드 포함)",
          "3개월: 체험단 10~15명 모집 + 플레이스·블로그 리뷰 유도",
          "4개월: 리뷰 답글 전수 작성 + 환자 재방문 유도 콘텐츠 제작",
          "5개월: 인스타그램 계정 정비 + 전문성 콘텐츠 릴스 3개 이상",
          "6개월: 전체 지표 분석 + 다음 분기 전략 재수립",
        ],
      },
    ],
    cta: "의원·한의원 마케팅 전략 상담하기",
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
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: {
      "@type": "Person",
      name: "하랑마케팅 대표",
      url: "https://harangmarketing.com",
    },
    publisher: {
      "@type": "Organization",
      name: "하랑마케팅",
      url: "https://harangmarketing.com",
      logo: {
        "@type": "ImageObject",
        url: "https://harangmarketing.com/og-image.png",
      },
    },
    url: `https://harangmarketing.com/blog/${slug}`,
    mainEntityOfPage: `https://harangmarketing.com/blog/${slug}`,
    image: "https://harangmarketing.com/og-image.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgressBar />
      <Header />
      <main className="pt-[104px] md:pt-[108px]">
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
            <div className="flex items-center justify-between mb-6">
              <p className="text-base font-black text-gray-900">다른 인사이트도 읽어보세요</p>
              <Link href="/blog" className="inline-flex items-center gap-1 text-blue-600 font-bold text-xs hover:underline">
                전체 보기 <ArrowRight size={11} />
              </Link>
            </div>
            <div className="space-y-3">
              {Object.entries(POSTS)
                .filter(([s]) => s !== slug)
                .slice(0, 3)
                .map(([s, p]) => (
                  <Link key={s} href={`/blog/${s}`}
                    className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:shadow-sm transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                      <BookOpen size={13} className="text-white" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full border mb-1 ${p.tagColor}`}>{p.tag}</span>
                      <p className="text-sm font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">{p.title}</p>
                      <p className="text-[11px] text-blue-500 font-semibold mt-1">{p.result}</p>
                    </div>
                    <ArrowRight size={13} className="text-gray-300 group-hover:text-blue-500 transition-colors shrink-0 mt-1" />
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
