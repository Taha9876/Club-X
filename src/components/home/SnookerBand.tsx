"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/**
 * The half of Club X people do not expect: a full snooker floor. Uses a
 * scrubbed clip-path wipe so the photo "opens" as the band scrolls through.
 */
export default function SnookerBand() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        "[data-wipe]",
        { clipPath: "inset(14% 22% 14% 22%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            end: "center center",
            scrub: 0.7,
          },
        },
      );

      gsap.to("[data-drift]", {
        yPercent: -18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="container-x relative">
        <div className="relative overflow-hidden clip-corner">
          <div data-wipe className="relative h-[24rem] w-full sm:h-[30rem] lg:h-[38rem]">
            <div data-drift className="absolute inset-[-10%]">
              <Image
                src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2000"
                alt="Snooker table under low lighting at Club X"
                fill
                sizes="100vw"
                className="object-cover opacity-60 [filter:grayscale(0.6)_contrast(1.15)]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_45%_at_50%_45%,rgba(225,15,33,0.2),transparent_75%)]" />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 sm:p-10 lg:p-14">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <Reveal className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-brand" />
                    <span className="eyebrow text-brand">Not just a gym</span>
                  </Reveal>
                  <SplitHeading
                    text="The snooker floor stays open late"
                    mode="words"
                    className="display mt-5 text-4xl leading-[0.92] sm:text-6xl lg:text-7xl"
                  />
                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                      Full-size tables, tournament cloth and low lighting. Train first, rack up
                      after — members get a discounted rate on every frame.
                    </p>
                  </Reveal>
                </div>

                <Reveal delay={0.16}>
                  <Button href="/facilities">See the floor</Button>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
