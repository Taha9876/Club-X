import type { Metadata } from "next";
import Image from "next/image";
import venueGames from "@/assets/venue-games.jpg";
import PageHero from "@/components/layout/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import StatsBar from "@/components/shared/StatsBar";
import Trainers from "@/components/shared/Trainers";
import CTA from "@/components/shared/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Club X is a 24/7 gym, snooker floor and games lounge in U Tower, H-13 Islamabad — opposite NUST Gate 2. Here is what we stand for.",
};

const VALUES = [
  {
    n: "01",
    t: "Show up, not show off",
    d: "The floor is for working, and everyone from first-timers to competitive lifters gets the same room.",
  },
  {
    n: "02",
    t: "Clean and maintained",
    d: "A tidy, well-ventilated floor and equipment that is looked after — it is what members mention first.",
  },
  {
    n: "03",
    t: "Coaching over selling",
    d: "Personal training here is led by a trainer who is on the floor to fix technique, not to upsell.",
  },
  {
    n: "04",
    t: "Open when you are free",
    d: "Early mornings before class, late nights after work — Club X is open 24 hours a day, 7 days a week.",
  },
];

const STORY = [
  {
    year: "The idea",
    t: "Fun N Fitness",
    d: "Club X was built on a simple line: fun and fitness under one roof. A proper training floor for H-13, and somewhere to actually hang out once the session is done.",
  },
  {
    year: "The place",
    t: "Two floors under U Tower",
    d: "We are on the B1 and B2 levels of U Tower, opposite NUST Gate 2 — a gym floor, a snooker floor, a lounge with pool, foosball and PS4, and our own shop.",
  },
  {
    year: "Today",
    t: "A club that never closes",
    d: "The doors are open 24/7, there is a ladies timing every day from 11 AM to 3 PM, and the snooker tables are back and busy. That is the part we would not trade.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built in H-13. Built to be used."
        description={site.description}
        meta={[
          { k: "Location", v: "U Tower, H-13" },
          { k: "Floors", v: "B1 & B2" },
          { k: "Open", v: "24 / 7" },
        ]}
      />

      <StatsBar />

      {/* ---------- Story ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our story"
              title="What Club X is about"
              description={`No franchise, no imported blueprint — a local club led by CEO Rizwan Shah, for a sector that needed somewhere to train and somewhere to play.`}
            />

            <Reveal delay={0.15} className="relative mt-10 aspect-4/3 overflow-hidden clip-corner">
              <Image
                src={venueGames}
                alt="The lounge at Club X — pool and foosball tables"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="relative space-y-px border-l border-line pl-8" stagger>
              {STORY.map((s) => (
                <div key={s.year} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[2.15rem] top-1.5 h-2.5 w-2.5 rotate-45 bg-brand" />
                  <p className="eyebrow text-brand">{s.year}</p>
                  <h3 className="display mt-3 text-3xl lg:text-4xl">{s.t}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted lg:text-base">
                    {s.d}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        items={["Fun N Fitness", "Train Hard", "Open 24/7", "Club X"]}
        variant="outline"
        speed="slow"
        className="border-y border-line bg-ink-2 py-8"
      />

      {/* ---------- Values ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div
          className="glow pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] opacity-60"
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four rules we do not bend"
            align="center"
          />

          <Reveal className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2" stagger>
            {VALUES.map((v) => (
              <article
                key={v.n}
                className="group relative bg-ink px-7 py-10 transition-colors duration-500 hover:bg-surface lg:px-10 lg:py-14"
              >
                <span className="display text-5xl text-outline transition-colors duration-500 group-hover:text-brand">
                  {v.n}
                </span>
                <h3 className="display mt-5 text-2xl lg:text-3xl">{v.t}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{v.d}</p>
                <span className="mt-6 block h-[2px] w-10 bg-line transition-all duration-500 group-hover:w-20 group-hover:bg-brand" />
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <Trainers />
      <CTA />
    </>
  );
}
