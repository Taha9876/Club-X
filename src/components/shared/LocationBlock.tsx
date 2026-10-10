import { site, hours } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/shared/MapEmbed";

const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export default function LocationBlock() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 lg:py-32" id="location">
      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Find us"
            title="Opposite NUST Gate 2"
            description="Club X occupies the B1 and B2 floors of U Tower, Plot No. 02, in H-13, Islamabad — on the main double road, right across from NUST Gate 2."
          />

          <Reveal className="mt-10 space-y-px border border-line bg-line" stagger>
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-4 bg-ink px-5 py-4"
              >
                <span className="text-sm text-chalk">{h.day}</span>
                <span className="font-mono text-xs tracking-wide text-brand">{h.time}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Button href={directions} external>
              Get directions
            </Button>
            <Button href={site.phoneHref} variant="outline">
              Call the desk
            </Button>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal className="relative h-full min-h-[22rem]">
            <div className="relative h-full min-h-[22rem] overflow-hidden border border-line clip-corner">
              <MapEmbed />
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-line bg-ink p-5 clip-corner-sm sm:right-auto sm:max-w-sm">
              <p className="eyebrow text-brand">{site.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-chalk">{site.address}</p>
              <p className="mt-2 font-mono text-xs text-muted">{site.phone}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
