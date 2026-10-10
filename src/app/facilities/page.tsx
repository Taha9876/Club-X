import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import Trainers from "@/components/shared/Trainers";
import LocationBlock from "@/components/shared/LocationBlock";
import CTA from "@/components/shared/CTA";
import { facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Gym floor, personal training, snooker, pool, foosball, PS4 and an in-house shop — everything inside Club X, H-13 Islamabad. Open 24/7, ladies timing 11 AM – 3 PM.",
};

const DAY = [
  { time: "24 / 7", session: "Gym floor", note: "Open training, every hour of every day" },
  { time: "24 / 7", session: "Snooker floor", note: "Walk in and rack up — no membership needed" },
  { time: "24 / 7", session: "Pool, foosball & PS4", note: "The games lounge, open with the club" },
  { time: "11 AM – 3 PM", session: "Ladies timing", note: "Dedicated ladies slot on the gym floor, daily" },
  { time: "By booking", session: "Personal training", note: "One-to-one sessions with Abdul Hadi" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Everything under one roof"
        description="Two floors at U Tower: a full gym, personal training, a snooker floor, a games lounge and an in-house shop — open around the clock."
        meta={[
          { k: "Open", v: "24 / 7" },
          { k: "Ladies timing", v: "11 AM – 3 PM" },
          { k: "Also here", v: "Snooker · Pool · PS4" },
        ]}
      />

      {/* ---------- Alternating detail rows ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />

        <div className="container-x relative space-y-24 lg:space-y-32">
          {facilities.map((f, i) => {
            const flipped = i % 2 === 1;
            return (
              <article
                key={f.slug}
                id={f.slug}
                className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <Reveal className={`relative lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}>
                  <div className="group relative aspect-4/3 overflow-hidden border border-line clip-corner">
                    <Image
                      src={f.image}
                      alt={f.imageAlt}
                      fill
                      placeholder="blur"
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className={`object-cover transition-[scale] duration-700 group-hover:scale-105 ${f.imageClass ?? ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                    <span className="display absolute bottom-3 left-5 text-7xl text-outline-red opacity-80">
                      {f.kicker}
                    </span>
                  </div>
                </Reveal>

                <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
                  <Reveal className="flex items-center gap-3">
                    <span className="h-[2px] w-8 bg-brand" />
                    <span className="eyebrow text-brand">Zone {f.kicker}</span>
                  </Reveal>

                  <SplitHeading
                    text={f.title}
                    className="display mt-5 text-4xl leading-[0.92] sm:text-5xl lg:text-6xl"
                  />

                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
                      {f.blurb}
                    </p>
                  </Reveal>

                  <Reveal
                    delay={0.15}
                    className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2"
                    stagger
                  >
                    {f.points.map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-3 bg-ink px-5 py-4 text-sm text-muted transition-colors duration-500 hover:bg-surface hover:text-chalk"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                        {p}
                      </div>
                    ))}
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Trainers />

      {/* ---------- Timings ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink py-24 lg:py-32">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Timings"
            title="When it is all open"
            description="Short answer: always. Club X runs 24 hours a day, 7 days a week — with a dedicated ladies slot every day."
          />

          <Reveal className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line-2">
                  {["When", "What", "Good to know"].map((h) => (
                    <th
                      key={h}
                      className="py-4 pr-6 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-2"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DAY.map((row) => (
                  <tr
                    key={row.session}
                    className="border-b border-line transition-colors hover:bg-surface"
                  >
                    <td className="whitespace-nowrap py-5 pr-6 font-mono text-sm text-brand">
                      {row.time}
                    </td>
                    <td className="py-5 pr-6 text-sm font-medium text-chalk lg:text-base">
                      {row.session}
                    </td>
                    <td className="py-5 pr-6 text-sm text-muted">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <LocationBlock />
      <CTA />
    </>
  );
}
