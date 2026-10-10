import Image from "next/image";
import snookerPost from "@/assets/post-01.jpg";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const POINTS = [
  { k: "Tables", v: "Well-lit and kept in great shape" },
  { k: "Hours", v: "Open 24 / 7 — play any time" },
  { k: "Entry", v: "No gym membership needed" },
];

/** The half of Club X people do not expect: a full snooker floor. */
export default function SnookerBand() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32" id="snooker">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_25%_50%,rgba(20,140,70,0.14),transparent_75%)]"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto aspect-4/5 max-w-md overflow-hidden border border-line clip-corner">
            <Image
              src={snookerPost}
              alt="Club X Snooker is back — after a short break, the tables are ready again"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 90vw, 28rem"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-brand" />
            <span className="eyebrow text-brand">Not just a gym</span>
          </Reveal>
          <SplitHeading
            text="The snooker floor never closes"
            className="display mt-5 text-4xl leading-[0.92] sm:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Club X Snooker is back — the tables are ready again, the doors are open and the
              game is on. Regulars call it one of the best snooker spots around: clean,
              well-lit, with a setup that feels professional. Train first and rack up after,
              or just come for the frames.
            </p>
          </Reveal>

          <Reveal className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3" stagger>
            {POINTS.map((p) => (
              <div key={p.k} className="bg-ink px-5 py-5">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-muted-2">{p.k}</p>
                <p className="mt-2 text-sm text-chalk">{p.v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Button href="/facilities#snooker">See the snooker floor</Button>
            <Button href="/contact" variant="outline">
              Ask about table rates
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
