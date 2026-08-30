"use client";

import { useRef, type ElementType } from "react";
import { gsap, useGSAP, EASE_EXPO, prefersReducedMotion } from "@/lib/gsap";

type SplitHeadingProps = {
  text: string;
  className?: string;
  as?: ElementType;
  /** "chars" reads punchier on short hero lines, "words" on paragraphs. */
  mode?: "chars" | "words";
  delay?: number;
  /** Play immediately (hero) instead of waiting for the scroll trigger. */
  immediate?: boolean;
  stagger?: number;
};

/**
 * Masked line-by-line reveal built from plain spans — each unit slides up out of
 * an overflow-hidden mask, which is what gives the type its "stamped" feel.
 */
export default function SplitHeading({
  text,
  className,
  as: Tag = "h2",
  mode = "words",
  delay = 0,
  immediate = false,
  stagger,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const units = el.querySelectorAll<HTMLElement>("[data-unit]");

      if (prefersReducedMotion()) {
        gsap.set(el, { opacity: 1 });
        gsap.set(units, { y: 0, opacity: 1 });
        return;
      }

      gsap.set(el, { opacity: 1 });
      gsap.fromTo(
        units,
        { yPercent: 118, opacity: 0, rotate: mode === "chars" ? 4 : 0 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 1.15,
          delay,
          ease: EASE_EXPO,
          stagger: stagger ?? (mode === "chars" ? 0.03 : 0.075),
          scrollTrigger: immediate ? undefined : { trigger: el, start: "top 88%", once: true },
        },
      );
    },
    { scope: ref, dependencies: [text] },
  );

  const words = text.split(" ");

  return (
    <Tag ref={ref} data-anim className={className}>
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="inline-block whitespace-nowrap">
          {mode === "chars" ? (
            Array.from(word).map((char, ci) => (
              <span key={ci} className="inline-block overflow-hidden align-bottom">
                <span data-unit className="inline-block will-change-transform">
                  {char}
                </span>
              </span>
            ))
          ) : (
            <span className="inline-block overflow-hidden align-bottom pb-[0.12em]">
              <span data-unit className="inline-block will-change-transform">
                {word}
              </span>
            </span>
          )}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Tag>
  );
}
