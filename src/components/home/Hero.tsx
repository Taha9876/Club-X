"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, EASE_EXPO, prefersReducedMotion } from "@/lib/gsap";
import { site } from "@/lib/site";
import Marquee from "@/components/ui/Marquee";

const TITLE = "CLUB X";

const CHIPS = [
  { label: "Strength Floor", pos: "left-[4%] top-[26%]", depth: 42 },
  { label: "Snooker", pos: "right-[6%] top-[32%]", depth: 60 },
  { label: "Open till late", pos: "left-[10%] bottom-[30%]", depth: 30 },
  { label: "Certified Trainers", pos: "right-[9%] bottom-[27%]", depth: 50 },
];

/**
 * Hero "scene": a stack of parallax layers (photo, glow, perspective grid,
 * rotating rings, floating chips, headline) that respond to both the pointer
 * and the scroll position. Everything is depth-tagged via `data-depth`, so the
 * pointer handler can move each layer proportionally in one pass.
 */
export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const reduced = prefersReducedMotion();

      /* ---------- Entrance ---------- */
      const tl = gsap.timeline({ delay: reduced ? 0 : 0.15 });

      gsap.set("[data-anim]", { opacity: 1 });

      if (!reduced) {
        tl.fromTo(
          "[data-hero-photo]",
          { scale: 1.35, opacity: 0, filter: "blur(18px)" },
          { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.9, ease: EASE_EXPO },
        )
          .fromTo(
            "[data-hero-grid]",
            { opacity: 0, yPercent: 20 },
            { opacity: 1, yPercent: 0, duration: 1.6, ease: EASE_EXPO },
            "-=1.5",
          )
          .fromTo(
            "[data-hero-ring]",
            { scale: 0.4, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.6, stagger: 0.12, ease: EASE_EXPO },
            "-=1.4",
          )
          .fromTo(
            "[data-hero-char]",
            { yPercent: 125, opacity: 0, rotateX: -70 },
            {
              yPercent: 0,
              opacity: 1,
              rotateX: 0,
              duration: 1.3,
              stagger: 0.06,
              ease: EASE_EXPO,
            },
            "-=1.2",
          )
          .fromTo(
            "[data-hero-up]",
            { y: 34, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.09, ease: "power3.out" },
            "-=0.9",
          )
          .fromTo(
            "[data-hero-chip]",
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.9, stagger: 0.1, ease: "back.out(1.8)" },
            "-=0.85",
          );
      }

      if (reduced) return;

      /* ---------- Pointer parallax ---------- */
      const layers = gsap.utils.toArray<HTMLElement>("[data-depth]");
      const setters = layers.map((layer) => ({
        depth: Number(layer.dataset.depth) || 20,
        x: gsap.quickTo(layer, "x", { duration: 0.9, ease: "power3.out" }),
        y: gsap.quickTo(layer, "y", { duration: 0.9, ease: "power3.out" }),
      }));

      const onMove = (e: PointerEvent) => {
        const rx = e.clientX / window.innerWidth - 0.5;
        const ry = e.clientY / window.innerHeight - 0.5;
        setters.forEach((s) => {
          s.x(-rx * s.depth);
          s.y(-ry * s.depth);
        });
      };

      const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      if (isFinePointer) window.addEventListener("pointermove", onMove, { passive: true });

      /* ---------- Scroll-driven exit ---------- */
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      scrollTl
        .to("[data-hero-photo]", { scale: 1.22, yPercent: 12, ease: "none" }, 0)
        .to("[data-hero-title]", { yPercent: -32, opacity: 0.15, ease: "none" }, 0)
        .to("[data-hero-up]", { y: -70, opacity: 0, ease: "none" }, 0)
        .to("[data-hero-chip]", { opacity: 0, scale: 0.8, ease: "none" }, 0)
        .to("[data-hero-ring]", { scale: 1.35, opacity: 0, ease: "none" }, 0)
        .to("[data-hero-veil]", { opacity: 1, ease: "none" }, 0);

      /* ---------- Idle motion ---------- */
      gsap.to("[data-hero-glow]", {
        scale: 1.16,
        opacity: 0.85,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => window.removeEventListener("pointermove", onMove);
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-28"
      aria-label="Club X — gym, snooker and lounge in H-13 Islamabad"
    >
      {/* ---------- Layer: photograph ---------- */}
      <div data-depth="14" className="absolute inset-[-4%] z-0">
        <div data-anim data-hero-photo className="relative h-full w-full will-change-transform">
          <Image
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2400"
            alt="The Club X training floor at night"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45 [filter:grayscale(1)_contrast(1.25)_brightness(0.55)]"
          />
        </div>
      </div>

      {/* Red duotone wash + vignette */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(225,15,33,0.22),transparent_70%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-ink via-ink/55 to-ink"
      />
      <div
        data-hero-veil
        aria-hidden
        className="absolute inset-0 z-[6] bg-ink opacity-0"
      />

      {/* ---------- Layer: perspective grid floor ---------- */}
      <div
        data-anim
        data-hero-grid
        aria-hidden
        className="pointer-events-none absolute inset-x-[-30%] bottom-0 z-[2] h-[62%] [perspective:520px]"
      >
        <div className="grid-bg h-full w-full origin-bottom [transform:rotateX(72deg)] opacity-60 [mask-image:linear-gradient(to_top,#000_5%,transparent_75%)]" />
      </div>

      {/* ---------- Layer: glow blobs ---------- */}
      {/* Centering stays on the wrapper; GSAP owns the inner transform */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          data-hero-glow
          data-depth="26"
          className="h-[520px] w-[520px] rounded-full bg-brand/22 blur-[120px] sm:h-[720px] sm:w-[720px]"
        />
      </div>
      <div
        data-depth="44"
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 z-[2] h-64 w-64 rounded-full bg-brand-deep/35 blur-[100px]"
      />

      {/* ---------- Layer: rotating rings ---------- */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[46%] z-[3] -translate-x-1/2 -translate-y-1/2"
      >
        {/* Rotation lives on an inner element so GSAP owns the outer transform */}
        <div data-anim data-hero-ring data-depth="34">
          <div className="animate-spin-slower">
            <svg width="620" height="620" viewBox="0 0 620 620" className="max-w-[92vw]">
              <circle
                cx="310"
                cy="310"
                r="300"
                fill="none"
                stroke="rgba(225,15,33,0.35)"
                strokeWidth="1"
                strokeDasharray="3 12"
              />
              <circle
                cx="310"
                cy="310"
                r="238"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div
          data-anim
          data-hero-ring
          data-depth="58"
          className="absolute inset-0 grid place-items-center"
        >
          <div className="animate-spin-slow">
            <svg width="430" height="430" viewBox="0 0 430 430" className="max-w-[72vw]">
              <circle
                cx="215"
                cy="215"
                r="200"
                fill="none"
                stroke="rgba(225,15,33,0.55)"
                strokeWidth="1.5"
                strokeDasharray="140 40 60 40"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ---------- Layer: floating chips ---------- */}
      {CHIPS.map((chip) => (
        <span
          key={chip.label}
          data-anim
          data-hero-chip
          data-depth={chip.depth}
          className={`pointer-events-none absolute z-[5] hidden items-center gap-2 border border-line-2/70 bg-ink-2/70 px-3.5 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-muted backdrop-blur-md lg:inline-flex clip-corner-sm ${chip.pos}`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
          {chip.label}
        </span>
      ))}

      {/* ---------- Content ---------- */}
      <div className="container-x relative z-10 flex flex-1 flex-col justify-center pb-10">
        <div data-anim data-hero-up className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-brand" />
          <span className="eyebrow text-brand">{site.city} — Since Day One</span>
        </div>

        <h1
          data-hero-title
          data-depth="10"
          className="display mt-6 text-[22vw] leading-[0.82] sm:text-[19vw] lg:text-[15rem]"
          style={{ perspective: "800px" }}
        >
          {Array.from(TITLE).map((char, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <span
                data-anim
                data-hero-char
                className={`inline-block will-change-transform ${
                  char === "X" ? "text-brand red-glow" : ""
                }`}
              >
                {char === " " ? " " : char}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p
            data-anim
            data-hero-up
            className="max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            Gym, snooker and lounge under one roof — right opposite{" "}
            <span className="text-chalk">NUST Gate 2</span>. Built for people who
            actually show up.
          </p>

          <div data-anim data-hero-up className="flex flex-wrap items-center gap-3">
            <Link
              href="/membership"
              className="group relative overflow-hidden bg-brand px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white clip-corner-sm"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <span className="relative">Start Training</span>
            </Link>
            <Link
              href="/facilities"
              className="group relative overflow-hidden border border-line-2 px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-chalk clip-corner-sm"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-brand transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
              <span className="relative">Take a Tour</span>
            </Link>
          </div>
        </div>

        {/* Meta rail */}
        <div
          data-anim
          data-hero-up
          className="mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4"
        >
          {[
            { k: "Location", v: "U Tower, H-13" },
            { k: "Open", v: "6 AM — 12 AM" },
            { k: "Also here", v: "Snooker floor" },
            { k: "Call", v: site.phone },
          ].map((item) => (
            <div key={item.k} className="bg-ink/80 px-4 py-4 backdrop-blur-sm">
              <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-2">
                {item.k}
              </p>
              <p className="mt-1.5 text-sm font-medium text-chalk">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        data-anim
        data-hero-up
        className="container-x relative z-10 hidden items-center gap-3 pb-4 sm:flex"
      >
        <span className="eyebrow text-muted-2">Scroll</span>
        <span className="relative h-10 w-[1px] overflow-hidden bg-line">
          <span className="absolute inset-x-0 top-0 h-4 animate-[float-y_2.2s_ease-in-out_infinite] bg-brand" />
        </span>
      </div>

      <Marquee
        items={["Strength", "Cardio", "Snooker", "Personal Training", "Functional"]}
        variant="outline"
        className="relative z-10 border-t border-line py-5"
      />
    </section>
  );
}
