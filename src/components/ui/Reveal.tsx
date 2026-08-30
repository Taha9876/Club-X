"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, EASE, prefersReducedMotion } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Render as a different tag when the wrapper is semantically meaningful. */
  as?: ElementType;
  delay?: number;
  /** Distance travelled on the way in. */
  y?: number;
  /** Stagger the direct children instead of moving the wrapper as one block. */
  stagger?: number;
  start?: string;
};

/**
 * Scroll-triggered entrance. The wrapper carries `data-anim`, so it is hidden by
 * CSS only once JS is confirmed — no-JS visitors still see everything.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 40,
  stagger,
  start = "top 85%",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
        return;
      }

      const targets = stagger ? Array.from(el.children) : [el];
      gsap.set(el, { opacity: 1 });
      if (stagger) gsap.set(targets, { opacity: 0 });

      gsap.fromTo(
        targets,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: EASE,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start, once: true },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} data-anim className={className}>
      {children}
    </Tag>
  );
}
