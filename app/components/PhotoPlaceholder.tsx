import { ImageIcon } from "lucide-react";

interface Props {
  label: string;        // 어떤 사진인지
  hint?: string;        // 촬영/수집 방법
  width?: string;       // Tailwind width class
  height?: string;      // Tailwind height class
  className?: string;
  dark?: boolean;       // 어두운 배경 섹션용
}

export default function PhotoPlaceholder({
  label,
  hint,
  width = "w-full",
  height = "h-48",
  className = "",
  dark = false,
}: Props) {
  return (
    <div
      className={`
        ${width} ${height} ${className}
        relative flex flex-col items-center justify-center gap-2
        rounded-2xl border-2 border-dashed overflow-hidden
        ${dark
          ? "border-white/20 bg-white/5"
          : "border-gray-300 bg-gray-50"
        }
      `}
    >
      {/* 격자 패턴 */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30"
        style={{
          backgroundImage: dark
            ? "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)"
            : "linear-gradient(rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className={`relative flex flex-col items-center gap-2 px-4 text-center`}>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? "bg-white/10" : "bg-gray-200"}`}>
          <ImageIcon size={18} className={dark ? "text-white/50" : "text-gray-400"} strokeWidth={1.5} />
        </div>
        <p className={`text-xs font-bold ${dark ? "text-white/60" : "text-gray-500"}`}>
          {label}
        </p>
        {hint && (
          <p className={`text-[11px] leading-relaxed max-w-[180px] ${dark ? "text-white/35" : "text-gray-400"}`}>
            {hint}
          </p>
        )}
        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${dark ? "bg-white/10 text-white/40" : "bg-gray-200 text-gray-400"}`}>
          사진 교체 예정
        </span>
      </div>
    </div>
  );
}
