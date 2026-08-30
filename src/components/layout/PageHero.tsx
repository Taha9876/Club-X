"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  /** Optional right-hand meta pairs rendered as a small spec table. */
  meta?: { k: string; v: string }[];
};

export default function PageHero({ eyebrow, title, description, image, meta }: PageHeroProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        "[data-page-photo]",
        { scale: 1.25, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "expo.out" },
      );

      gsap.to("[data-page-photo]", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative flex min-h-[62svh] items-end overflow-hidden bg-ink pb-14 pt-40 lg:min-h-[72svh] lg:pb-20"
    >
      <div data-page-photo className="absolute inset-[-6%]">
        <Image
          src={`${image}?q=80&w=2000`}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 [filter:grayscale(1)_contrast(1.2)_brightness(0.6)]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_60%,rgba(225,15,33,0.18),transparent_72%)]" />
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-x relative">
        <Reveal className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-2">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span className="text-brand">/</span>
          <span className="text-chalk">{eyebrow}</span>
        </Reveal>

        <SplitHeading
          text={title}
          mode="words"
          immediate
          className="display mt-6 max-w-5xl text-[3rem] leading-[0.88] sm:text-7xl lg:text-[6.5rem]"
        />

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {description && (
            <Reveal delay={0.12}>
              <p className="max-w-xl text-base leading-relaxed text-muted">{description}</p>
            </Reveal>
          )}

          {meta && (
            <Reveal delay={0.18} className="flex flex-wrap gap-px border border-line bg-line">
              {meta.map((m) => (
                <div key={m.k} className="bg-ink px-5 py-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-muted-2">{m.k}</p>
                  <p className="mt-1.5 text-sm text-chalk">{m.v}</p>
                </div>
              ))}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
