import { site, hours } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
const directions = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`;

export default function LocationBlock() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 lg:py-32" id="location">
      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Find us"
            title="Opposite NUST Gate 2"
            description="Club X occupies the B1 and B2 floors of U Tower in H-13, Islamabad. Parking is available at the tower and the entrance is on the main road side."
          />

          <Reveal className="mt-10 space-y-px border border-line bg-line" stagger={0.08}>
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between gap-4 bg-ink px-5 py-4"
              >
                <span className="text-sm text-chalk">{h.day}</span>
                <span className="font-mono text-xs tracking-wide text-muted">{h.time}</span>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Button href={directions} external>
              Get directions
            </Button>
            <Button href={site.phoneHref} variant="outline" magnetic={false}>
              Call the desk
            </Button>
          </Reveal>

          <p className="mt-6 text-xs text-muted-2">
            Hours listed are indicative — confirm current timings with the front desk.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Reveal className="relative h-full min-h-[22rem]">
            <div className="relative h-full min-h-[22rem] overflow-hidden border border-line clip-corner">
              <iframe
                src={mapSrc}
                title={`Map showing ${site.name} in ${site.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full min-h-[22rem] grayscale-[0.9] contrast-[1.1] invert-[0.92] hue-rotate-180"
              />
            </div>

            <div className="pointer-events-none absolute bottom-4 left-4 right-4 border border-line bg-ink/90 p-5 backdrop-blur-md clip-corner-sm sm:right-auto sm:max-w-sm">
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
