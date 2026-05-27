import { useState, useEffect, useRef } from "react";

export function useCountUp(end: number, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isActive) {
          setIsActive(true);
        }
      },
      { threshold: 0.3 }
    );

    const el = ref.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;
    const startTime = performance.now();
    const range = end - start;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(start + range * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isActive, end, start, duration]);

  return { count, ref };
}
