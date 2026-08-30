import type { Metadata } from "next";
import Image from "next/image";
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
    "Club X is a two-floor gym, snooker hall and lounge in U Tower, H-13 Islamabad — opposite NUST Gate 2. Here is how it started and what we stand for.",
};

const VALUES = [
  {
    n: "01",
    t: "Show up, not show off",
    d: "No mirrors-only culture. The floor is for working, and everyone from first-timers to competitive lifters gets the same room.",
  },
  {
    n: "02",
    t: "Maintained, always",
    d: "Machines get serviced, cables get replaced, plates go back on the rack. Broken equipment is the fastest way to lose a member.",
  },
  {
    n: "03",
    t: "Coaching over selling",
    d: "Our trainers are on the floor to correct technique, not to upsell you a plan you do not need.",
  },
  {
    n: "04",
    t: "Open when you are free",
    d: "Early mornings before class, late nights after work — the door stays open across the hours H-13 actually trains.",
  },
];

const STORY = [
  {
    year: "The idea",
    t: "A gym H-13 was missing",
    d: "H-13 was filling up with students and young professionals, and the nearest serious gym meant a drive. Club X started as an answer to that: put a proper training floor inside the sector itself.",
  },
  {
    year: "The build",
    t: "Two floors under U Tower",
    d: "We took the B1 and B2 levels of U Tower, opposite NUST Gate 2, and laid out a full strength floor, a cardio line, a functional lane and a snooker hall — with ventilation designed for how hard the room gets used.",
  },
  {
    year: "Today",
    t: "A club, not a gym chain",
    d: "The desk knows members by name, the trainers know their programmes, and the snooker floor is where half the community actually meets. That is the part we would not trade.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built in H-13. Built to be used."
        description={site.description}
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        meta={[
          { k: "Location", v: "U Tower, H-13" },
          { k: "Floors", v: "B1 & B2" },
          { k: "Under one roof", v: "Gym · Snooker · Lounge" },
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
              title="How Club X got here"
              description="No franchise, no imported blueprint. Club X was put together by people who train, for a sector that needed somewhere to train."
            />

            <Reveal delay={0.15} className="relative mt-10 aspect-4/3 overflow-hidden clip-corner">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1400"
                alt="Training session on the Club X floor"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-70 [filter:grayscale(0.7)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="relative space-y-px border-l border-line pl-8" stagger={0.14}>
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
        items={["No Excuses", "Train Hard", "Stay Consistent", "Club X"]}
        variant="outline"
        speed="slow"
        className="border-y border-line bg-ink-2 py-8"
      />

      {/* ---------- Values ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div
          className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[130px]"
          aria-hidden
        />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four rules we do not bend"
            align="center"
          />

          <Reveal className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2" stagger={0.1}>
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
