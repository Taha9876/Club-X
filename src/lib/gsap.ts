"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** Shared easing so every section moves with the same personality. */
export const EASE = "power3.out";
export const EASE_EXPO = "expo.out";

/** True when the visitor has asked the OS for reduced motion. */
export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Splits a string into per-character spans, keeping words unbreakable.
 * Returns markup-ready groups so callers can stagger chars without a paid plugin.
 */
export function splitToChars(text: string) {
  return text.split(" ").map((word) => ({
    word,
    chars: Array.from(word),
  }));
}

export { gsap, ScrollTrigger, useGSAP };
