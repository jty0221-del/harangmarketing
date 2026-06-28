import { ShieldCheck, Award, Clock, ThumbsUp, Star } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    label: "사업자 등록",
    sub: "706-68-00281",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Award,
    label: "10년+ 마케팅 경력",
    sub: "2014년 설립",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: ThumbsUp,
    label: "재계약률 95%",
    sub: "업계 평균 65% 대비",
    color: "from-blue-600 to-blue-800",
  },
  {
    icon: Clock,
    label: "24시간 내 연락",
    sub: "상담 비용 0원",
    color: "from-blue-600 to-indigo-700",
  },
  {
    icon: Star,
    label: "고객 만족도 4.9",
    sub: "500+ 클라이언트 평균",
    color: "from-blue-700 to-indigo-800",
  },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {BADGES.map((b) => {
        const Icon = b.icon;
        return (
          <div
            key={b.label}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm hover:bg-white/14 transition-colors"
          >
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${b.color} flex items-center justify-center shrink-0 shadow-sm`}>
              <Icon size={11} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[11px] font-black text-white">{b.label}</div>
              <div className="text-[10px] text-gray-400">{b.sub}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
