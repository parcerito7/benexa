"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;       // número final (ej. 1200)
  duration?: number;   // ms (por defecto 1200)
  suffix?: string;     // ej. "+"
};

export default function Counter({ value, duration = 1200, suffix = "" }: Props) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onIntersect = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const from = 0;
        const to = value;

        const step = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          setCurrent(Math.round(from + (to - from) * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    };

    const obs = new IntersectionObserver(onIntersect, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{current.toLocaleString()}{suffix}</span>;
}
