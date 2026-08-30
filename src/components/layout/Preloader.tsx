"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, EASE_EXPO, prefersReducedMotion } from "@/lib/gsap";

/**
 * First-load curtain: a counter runs to 100, then two panels split away to
 * reveal the hero. Shown once per browser session so navigation stays fast.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const seen = typeof window !== "undefined" && sessionStorage.getItem("clubx-preloaded");
      if (seen || prefersReducedMotion()) {
        setDone(true);
        return;
      }

      document.body.style.overflow = "hidden";
      const counter = { n: 0 };
      const number = root.current?.querySelector("[data-count]");

      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("clubx-preloaded", "1");
          document.body.style.overflow = "";
          setDone(true);
        },
      });

      tl.to(counter, {
        n: 100,
        duration: 1.5,
        ease: "power2.inOut",
        onUpdate: () => {
          if (number) number.textContent = String(Math.round(counter.n)).padStart(3, "0");
        },
      })
        .to("[data-bar]", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0)
        .to("[data-preload-word]", { yPercent: -110, duration: 0.6, ease: EASE_EXPO }, "-=0.2")
        .to(
          "[data-panel]",
          { scaleY: 0, duration: 0.9, stagger: 0.06, ease: EASE_EXPO },
          "-=0.25",
        );

      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: root },
  );

  if (done) return null;

  return (
    <div ref={root} className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 flex" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} data-panel className="h-full flex-1 origin-top bg-ink" />
        ))}
      </div>

      <div className="relative flex flex-col items-center gap-6">
        <div className="overflow-hidden">
          <span data-preload-word className="display block text-5xl sm:text-7xl">
            Club<span className="text-brand">X</span>
          </span>
        </div>
        <div className="h-[2px] w-48 bg-line sm:w-72">
          <span data-bar className="block h-full origin-left scale-x-0 bg-brand" />
        </div>
        <span data-count className="font-mono text-xs tracking-[0.35em] text-muted-2">
          000
        </span>
      </div>
    </div>
  );
}
