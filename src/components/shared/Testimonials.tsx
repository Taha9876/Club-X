"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";

const AUTOPLAY_MS = 7000;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (next: number) =>
    setIndex((next + testimonials.length) % testimonials.length);

  /* Autoplay, paused while the visitor is interacting with the block. */
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const active = testimonials[index];

  return (
    <section
      className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="glow pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 opacity-60"
        aria-hidden
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Google reviews" title="What members say" />
          <p className="mt-6 text-sm text-muted">
            Rated <span className="font-semibold text-chalk">4.3 / 5</span> across 83 Google
            reviews.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous review"
              className="grid h-12 w-12 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white clip-corner-sm"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next review"
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

            {/* Keyed so the entrance replays whenever the quote changes */}
            <div key={index} className="rise min-h-[15rem] sm:min-h-[13rem]" aria-live="polite">
              <blockquote className="relative text-lg leading-relaxed text-chalk sm:text-xl lg:text-2xl lg:leading-[1.5]">
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
                  aria-label={`Show review ${i + 1}`}
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
