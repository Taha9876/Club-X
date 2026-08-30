import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import LocationBlock from "@/components/shared/LocationBlock";
import CTA from "@/components/shared/CTA";
import { facilities } from "@/lib/site";

export const metadata: Metadata = {
  title: "Facilities",
  description:
    "Strength floor, cardio zone, functional lane, personal training, a full snooker hall and a members' lounge — everything inside Club X, H-13 Islamabad.",
};

/** PLACEHOLDER schedule — align with the club's real class timetable. */
const SCHEDULE = [
  { time: "06:30", session: "Early Strength", coach: "Rizwan", days: "Mon · Wed · Fri" },
  { time: "08:00", session: "Conditioning Circuit", coach: "Bilal", days: "Tue · Thu" },
  { time: "13:00", session: "Ladies Floor", coach: "Ayesha", days: "Daily" },
  { time: "18:00", session: "Hypertrophy Block", coach: "Hamza", days: "Mon – Sat" },
  { time: "20:00", session: "HIIT Finisher", coach: "Bilal", days: "Mon · Wed · Fri" },
  { time: "22:00", session: "Open Floor + Snooker", coach: "—", days: "Daily" },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Facilities"
        title="Everything under one roof"
        description="Two floors, six zones. Whether you are chasing a first pull-up or a new deadlift PR, the equipment and the coaching are already here."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        meta={[
          { k: "Zones", v: "6" },
          { k: "Stations", v: "60+" },
          { k: "Snooker", v: "Full-size tables" },
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
                <Reveal
                  className={`relative lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}
                  y={50}
                >
                  <div className="group relative aspect-4/3 overflow-hidden border border-line clip-corner">
                    <Image
                      src={`${f.image}?q=80&w=1600`}
                      alt={f.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 48vw"
                      className="object-cover opacity-65 transition-all duration-700 [filter:grayscale(1)] group-hover:scale-105 group-hover:opacity-90 group-hover:[filter:grayscale(0.1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                    <span className="display absolute left-5 top-3 text-7xl text-outline-red opacity-70">
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
                    mode="words"
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
                    stagger={0.07}
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

      {/* ---------- Schedule ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32">
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Timetable"
            title="A day on the floor"
            description="Coached sessions run alongside open-floor training all day. Walk in for any slot — no booking needed unless you want one-to-one time."
          />

          <Reveal className="mt-12 overflow-x-auto" y={30}>
            <table className="w-full min-w-[36rem] border-collapse text-left">
              <thead>
                <tr className="border-b border-line-2">
                  {["Time", "Session", "Coach", "Days"].map((h) => (
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
                {SCHEDULE.map((row) => (
                  <tr
                    key={row.time + row.session}
                    className="group border-b border-line transition-colors hover:bg-surface"
                  >
                    <td className="py-5 pr-6 font-mono text-sm text-brand">{row.time}</td>
                    <td className="py-5 pr-6 text-sm font-medium text-chalk lg:text-base">
                      {row.session}
                    </td>
                    <td className="py-5 pr-6 text-sm text-muted">{row.coach}</td>
                    <td className="py-5 pr-6 text-sm text-muted-2">{row.days}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <p className="mt-6 text-xs text-muted-2">
            Sample timetable for layout — replace with the live Club X schedule before launch.
          </p>
        </div>
      </section>

      <LocationBlock />
      <CTA />
    </>
  );
}
