import Image from "next/image";
import venueGames from "@/assets/venue-games.jpg";
import venueShop from "@/assets/venue-shop.jpg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const GAMES = [
  { n: "01", t: "Pool", d: "A pool table in the lounge for quick racks between sets or after class." },
  { n: "02", t: "Foosball", d: "A full foosball table — the fastest way to settle who is buying the drinks." },
  { n: "03", t: "PS4", d: "Pick up a controller and wind down on the PS4 after a workout." },
];

/** The lounge side of the club: pool, foosball, PS4 and the in-house shop. */
export default function GamesLounge() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32" id="games">
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="The games lounge"
              title="Pool, foosball & PS4"
              description="Not every visit has to be a workout. The Club X lounge is where members and friends hang out — bring a group, no gym membership needed."
            />

            <Reveal className="mt-10 space-y-px border border-line bg-line" stagger>
              {GAMES.map((g) => (
                <div
                  key={g.n}
                  className="flex gap-5 bg-ink px-6 py-6 transition-colors duration-500 hover:bg-surface"
                >
                  <span className="display text-2xl text-brand">{g.n}</span>
                  <div>
                    <h3 className="text-base font-semibold text-chalk">{g.t}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{g.d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="relative aspect-4/3 overflow-hidden border border-line clip-corner">
              <Image
                src={venueGames}
                alt="The pool table and foosball table in the Club X lounge"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-chalk">
                The lounge at Club X
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------- Shop ---------- */}
        <div
          className="mt-24 grid items-center gap-12 lg:mt-32 lg:grid-cols-12 lg:gap-16"
          id="shop"
        >
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-4/5 overflow-hidden border border-line clip-corner sm:aspect-4/3 lg:aspect-4/5">
              <Image
                src={venueShop}
                alt="The shop counter inside Club X"
                fill
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="In-house shop"
              title="Shop & vape counter"
              description="Club X has its own mini shop, so the things you need before or after a session are a few steps from the floor. Next to it is the Club X vape counter."
            />
            <Reveal className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2" stagger>
              {[
                "In-house mini shop",
                "Gym essentials on hand",
                "Vape counter",
                "Right inside the club",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 bg-ink px-5 py-4 text-sm text-muted">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                  {p}
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-xs leading-relaxed text-muted-2">
                Vape products are sold to adults aged 18 and over only.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="mt-8">
              <Button href="/contact" variant="outline">
                Ask what&apos;s in stock
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
