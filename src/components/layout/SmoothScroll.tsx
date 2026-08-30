"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Wires Lenis inertia scrolling into the GSAP ticker so ScrollTrigger stays in
 * sync with the smoothed scroll position. Also flags the document as
 * JS-enabled, which is what lets `[data-anim]` elements start hidden.
 */
export default function SmoothScroll() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");

    if (prefersReducedMotion()) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      lerp: 0.09,
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Images arriving late change page height; keep triggers honest.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timeout = window.setTimeout(refresh, 700);

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      window.clearTimeout(timeout);
      lenis.destroy();
    };
  }, []);

  return null;
}
