"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

/** Counts up once the number scrolls into view. */
export default function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const format = (n: number) => Math.round(n).toLocaleString("en-US");

      if (prefersReducedMotion()) {
        el.textContent = format(value) + suffix;
        return;
      }

      const counter = { n: 0 };
      gsap.to(counter, {
        n: value,
        duration: 2.1,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = format(counter.n) + suffix;
        },
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    },
    { scope: ref, dependencies: [value, suffix] },
  );

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
