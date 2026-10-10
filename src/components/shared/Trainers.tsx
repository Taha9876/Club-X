import { trainer } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

/** Club X's personal trainer and what a block of sessions with him covers. */
export default function Trainers() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 lg:py-32" id="trainer">
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Personal training"
            title="Meet your trainer"
            className="md:max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Button href="/contact" variant="outline">
              Book a session
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative flex h-full min-h-[20rem] flex-col justify-end overflow-hidden border border-line bg-surface p-7 clip-corner">
              <div className="glow pointer-events-none absolute -right-24 -top-24 h-96 w-96" aria-hidden />
              <LogoMark className="pointer-events-none absolute right-7 top-7 h-28 w-auto opacity-25" />
              <p className="eyebrow relative text-brand">{trainer.role}</p>
              <h3 className="display relative mt-3 text-5xl sm:text-6xl">{trainer.name}</h3>
              <span className="relative mt-6 block h-[2px] w-12 bg-brand" />
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="max-w-xl text-sm leading-relaxed text-muted lg:text-base">
                {trainer.name} leads personal training at Club X. Sessions are one-to-one on the
                gym floor, built around what you are training for — whether that is your first
                month in a gym or a number you are chasing.
              </p>
            </Reveal>

            <Reveal className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2" stagger>
              {trainer.sessions.map((line) => (
                <div
                  key={line}
                  className="flex items-center gap-3 bg-ink px-5 py-5 text-sm text-chalk"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" />
                  {line}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-xs leading-relaxed text-muted-2">
                Message us on WhatsApp to check availability and session rates.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
