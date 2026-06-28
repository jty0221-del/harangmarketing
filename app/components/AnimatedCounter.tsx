"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ to, duration = 1800, suffix = "", prefix = "", decimals = 0 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(parseFloat((eased * to).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, decimals]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.floor(value)}{suffix}
    </span>
  );
}
