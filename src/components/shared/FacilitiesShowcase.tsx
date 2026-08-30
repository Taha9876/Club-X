"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { facilities } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/**
 * Facilities rail. On desktop the section pins and the card track scrubs
 * sideways; below that it degrades to an ordinary horizontal swipe list, which
 * is the gesture people already expect on a phone.
 */
export default function FacilitiesShowcase() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        },
        (ctx) => {
          if (!ctx.conditions?.isDesktop || !track.current || !root.current) return;

          const distance = () => track.current!.scrollWidth - window.innerWidth + 96;

          gsap.to(track.current, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${distance()}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
              anticipatePin: 1,
            },
          });
        },
      );

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-ink py-24 lg:h-screen lg:py-0"
      id="facilities"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-brand/10 blur-[130px]"
        aria-hidden
      />

      <div className="flex h-full flex-col justify-center">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What's inside"
            title="Six floors of reasons to show up"
            description="Everything at Club X is built around one idea: remove the excuses. The equipment, the coaching and the space are all here — you just have to walk in."
          />
        </div>

        {/* Outer element scrolls on touch; the inner track is what GSAP moves. */}
        <div className="relative mt-12 overflow-x-auto pb-4 lg:mt-16 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            ref={track}
            className="flex w-max gap-5 px-5 md:px-10"
          >
            {facilities.map((f) => (
              <article
                key={f.slug}
                className="group relative h-[26rem] w-[78vw] shrink-0 overflow-hidden border border-line bg-surface sm:w-[24rem] lg:h-[30rem] lg:w-[26rem] clip-corner"
              >
                <Image
                  src={`${f.image}?q=80&w=1200`}
                  alt={f.title}
                  fill
                  sizes="(max-width: 640px) 78vw, 26rem"
                  className="object-cover opacity-40 transition-all duration-700 ease-out [filter:grayscale(1)] group-hover:scale-105 group-hover:opacity-65 group-hover:[filter:grayscale(0.15)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

                <div className="relative flex h-full flex-col justify-end p-7">
                  <span className="display absolute right-6 top-5 text-5xl text-outline">
                    {f.kicker}
                  </span>
                  <h3 className="display text-3xl lg:text-4xl">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{f.blurb}</p>

                  <ul className="mt-5 grid max-h-0 grid-cols-2 gap-x-4 gap-y-1.5 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-muted-2">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 bg-brand" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-5 block h-[2px] w-10 bg-brand transition-all duration-500 group-hover:w-24" />
                </div>
              </article>
            ))}
          </div>
        </div>

        <Reveal className="container-x mt-8 hidden items-center gap-3 lg:flex">
          <span className="eyebrow text-muted-2">Keep scrolling</span>
          <span className="h-[1px] w-16 bg-line" />
          <span className="text-brand">→</span>
        </Reveal>
      </div>
    </section>
  );
}
