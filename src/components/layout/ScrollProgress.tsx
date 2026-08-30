"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Thin red progress rail pinned to the top of the viewport. */
export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.25 },
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]">
      <div
        ref={ref}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-brand-deep via-brand to-brand-bright"
      />
    </div>
  );
}
