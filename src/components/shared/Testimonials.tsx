"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gsap, useGSAP, EASE_EXPO, prefersReducedMotion } from "@/lib/gsap";
import { testimonials } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

const AUTOPLAY_MS = 6500;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const quoteRef = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);

  const go = useCallback((next: number) => {
    setIndex((next + testimonials.length) % testimonials.length);
  }, []);

  /* Autoplay, paused while the visitor is interacting with the block. */
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [index, paused, go]);

  /* Crossfade the active quote whenever the index changes. */
  useGSAP(
    () => {
      if (!quoteRef.current || prefersReducedMotion()) return;
      gsap.fromTo(
        quoteRef.current.children,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: EASE_EXPO },
      );
    },
    { dependencies: [index], scope: root },
  );

  const active = testimonials[index];

  return (
    <section
      ref={root}
      className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Member voices" title="What the floor says" />
          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white clip-corner-sm"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white clip-corner-sm"
            >
              →
            </button>
            <span className="ml-3 font-mono text-xs tracking-[0.2em] text-muted-2">
              {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="relative border border-line bg-ink p-8 sm:p-12 clip-corner">
            <span
              className="display pointer-events-none absolute -top-6 right-6 text-[9rem] leading-none text-outline-red opacity-40 sm:text-[12rem]"
              aria-hidden
            >
              &rdquo;
            </span>

            <div ref={quoteRef} aria-live="polite">
              <blockquote className="relative text-xl leading-relaxed text-chalk sm:text-2xl lg:text-[1.7rem] lg:leading-[1.45]">
                {active.quote}
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-[2px] w-10 bg-brand" />
                <div>
                  <p className="text-sm font-semibold text-chalk">{active.name}</p>
                  <p className="text-xs text-muted-2">{active.meta}</p>
                </div>
              </div>
            </div>

            {/* Progress ticks */}
            <div className="mt-10 flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-[3px] flex-1 transition-colors duration-500 ${
                    i === index ? "bg-brand" : "bg-line hover:bg-line-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
