"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PILLARS = [
  { n: "01", t: "Equipment that works", d: "Maintained machines, a full dumbbell run and racks you never have to queue for." },
  { n: "02", t: "Coaching, not supervision", d: "Certified trainers on the floor who correct your form before it becomes an injury." },
  { n: "03", t: "A room worth staying in", d: "Ventilated, clean, well lit — and a snooker floor for when the session is done." },
];

export default function Intro() {
  const root = useRef<HTMLDivElement>(null);

  /* Slow counter-scroll on the photo gives the block depth as it passes. */
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.to("[data-parallax-img]", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-parallax-frame]",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Who we are"
            title="A gym built for H-13, not for a brochure"
            description="Club X sits in the basement floors of U Tower, directly opposite NUST Gate 2. Two levels, a full strength and cardio setup, certified trainers, a snooker floor and a lounge — the kind of place you keep coming back to because it is five minutes from where you already are."
          />

          <Reveal className="mt-10 space-y-px border border-line bg-line" stagger={0.12}>
            {PILLARS.map((p) => (
              <div
                key={p.n}
                className="group flex gap-5 bg-ink px-6 py-6 transition-colors duration-500 hover:bg-surface"
              >
                <span className="display text-2xl text-brand">{p.n}</span>
                <div>
                  <h3 className="text-base font-semibold text-chalk">{p.t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.d}</p>
                </div>
                <span className="ml-auto self-center text-brand opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                  →
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Button href="/about">Our story</Button>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal className="relative">
            <div
              data-parallax-frame
              className="relative aspect-4/5 overflow-hidden clip-corner sm:aspect-3/4 lg:aspect-4/5"
            >
              <div data-parallax-img className="absolute inset-[-8%]">
                <Image
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1600"
                  alt="Members training on the Club X floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover [filter:grayscale(0.65)_contrast(1.1)]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating fact card */}
            <div className="absolute -bottom-6 -left-2 w-56 border border-line bg-ink-2/95 p-5 backdrop-blur-md clip-corner-sm sm:-left-6 lg:-left-10">
              <p className="eyebrow text-brand">Opposite</p>
              <p className="display mt-2 text-3xl leading-none">NUST Gate 2</p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                U Tower, H-13 Islamabad — walk over between classes.
              </p>
            </div>

            {/* Rotating badge */}
            <div className="absolute -right-3 -top-3 hidden h-28 w-28 sm:block lg:-right-8">
              <div className="animate-spin-slow h-full w-full">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <defs>
                    <path
                      id="badge-arc"
                      d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                      fill="none"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    className="fill-muted text-[11px] uppercase tracking-[0.28em]"
                  >
                    <textPath href="#badge-arc">
                      Club X · Gym · Snooker · Lounge ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="absolute inset-0 grid place-items-center">
                <span className="h-2.5 w-2.5 rotate-45 bg-brand" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
