import Image from "next/image";
import type { CSSProperties } from "react";
import venue from "@/assets/venue.jpg";
import { ladiesHours, site } from "@/lib/site";
import { LogoMark } from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";

const META = [
  { k: "Location", v: "U Tower, H-13" },
  { k: "Open", v: "24 / 7 — every day" },
  { k: "Ladies timing", v: ladiesHours },
  { k: "Call", v: site.phone },
];

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

/**
 * Above-the-fold scene. The headline and intro are painted immediately — never
 * hidden behind an entrance — and the supporting pieces ease in with CSS, so
 * the hero is fully visible before any JavaScript has loaded.
 */
export default function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pt-28"
      aria-label="Club X — 24/7 gym, snooker and games in H-13 Islamabad"
    >
      {/* The real room: lounge, entrance and shop at U Tower */}
      <Image
        src={venue}
        alt="Inside Club X — the lounge, entrance and shop at U Tower"
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/50 to-ink"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(225,15,33,0.22),transparent_70%)]"
      />

      <div className="container-x relative z-10 flex flex-1 flex-col justify-center pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="fade flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="eyebrow text-brand">{site.city} — Open now, 24/7</span>
            </div>

            <h1 className="display mt-6 text-[17vw] leading-[0.86] sm:text-[13vw] lg:text-[8.75rem]">
              <span className="word-mask">
                <span style={{ "--i": 0 } as CSSProperties}>Fun&nbsp;</span>
              </span>
              <span className="word-mask">
                <span style={{ "--i": 1 } as CSSProperties}>N&nbsp;</span>
              </span>
              <span className="word-mask">
                <span style={{ "--i": 2 } as CSSProperties}>Fitness.</span>
              </span>
              <br />
              <span className="word-mask">
                <span style={{ "--i": 3 } as CSSProperties}>Open&nbsp;</span>
              </span>
              <span className="word-mask">
                <span style={{ "--i": 4 } as CSSProperties} className="text-brand red-glow">
                  24/7.
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Gym, snooker, pool, foosball and PS4 under one roof — right opposite{" "}
              <span className="text-chalk">NUST Gate 2</span>. Train at 6 in the morning or 3
              at night; the door is open either way.
            </p>

            <div className="rise mt-8 flex flex-wrap items-center gap-3" style={delay(0.1)}>
              <Button href="/membership">Start Training</Button>
              <Button href="/facilities" variant="outline">
                See what&apos;s inside
              </Button>
            </div>
          </div>

          <div className="fade hidden justify-center lg:col-span-4 lg:flex" style={delay(0.1)}>
            <div className="relative">
              <div className="glow absolute -inset-24" aria-hidden />
              <LogoMark className="relative h-72 w-auto xl:h-80" />
              <p className="relative mt-5 text-center text-sm font-medium tracking-[0.06em] text-brand">
                {site.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Meta rail */}
        <div
          className="rise mt-12 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4"
          style={delay(0.18)}
        >
          {META.map((item) => (
            <div key={item.k} className="bg-ink/90 px-4 py-4">
              <p className="text-[0.6rem] uppercase tracking-[0.22em] text-muted-2">{item.k}</p>
              <p className="mt-1.5 text-sm font-medium text-chalk">{item.v}</p>
            </div>
          ))}
        </div>
      </div>

      <Marquee
        items={["Gym", "Snooker", "Pool", "Foosball", "PS4", "Personal Training"]}
        variant="outline"
        className="relative z-10 border-t border-line py-5"
      />
    </section>
  );
}
