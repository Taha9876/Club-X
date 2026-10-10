import Image from "next/image";
import venueEntrance from "@/assets/venue-entrance.jpg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PILLARS = [
  { n: "01", t: "Open every hour", d: "Club X runs 24/7. Before class, after work or at 3 AM — the floor and the tables are ready." },
  { n: "02", t: "Coaching, not supervision", d: "Personal training with Abdul Hadi, who works on your form, not just your reps." },
  { n: "03", t: "More than a gym", d: "Snooker, pool, foosball and PS4 for when the session is done — or instead of one." },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Who we are"
            title="A club built for H-13, not for a brochure"
            description="Club X sits on the B1 and B2 floors of U Tower, directly opposite NUST Gate 2. A full gym, personal training, a snooker floor, a games lounge and an in-house shop — the kind of place you keep coming back to because it is five minutes from where you already are, and it never closes."
          />

          <Reveal className="mt-10 space-y-px border border-line bg-line" stagger>
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
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-10">
            <Button href="/about">Our story</Button>
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal className="relative">
            <div className="relative aspect-4/5 overflow-hidden clip-corner sm:aspect-3/4 lg:aspect-4/5">
              <Image
                src={venueEntrance}
                alt="The Club X entrance at U Tower, H-13"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Floating fact card */}
            <div className="absolute -bottom-6 -left-2 w-56 border border-line bg-ink-2 p-5 clip-corner-sm sm:-left-6 lg:-left-10">
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
                    <textPath href="#badge-arc">Club X · Open 24/7 · Gym · Snooker ·</textPath>
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
