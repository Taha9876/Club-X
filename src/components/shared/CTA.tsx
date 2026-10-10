import Image from "next/image";
import venue from "@/assets/venue.jpg";
import { site } from "@/lib/site";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <Image
        src={venue}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div
        className="glow pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[920px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-brand" />
          <span className="eyebrow text-brand">Open right now — 24/7</span>
          <span className="h-[2px] w-8 bg-brand" />
        </Reveal>

        <SplitHeading
          text="Walk in today"
          className="display mt-7 text-[3.4rem] leading-[0.88] sm:text-8xl lg:text-[9rem]"
        />

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
            No appointment, no pressure. Come see the floor, meet the trainer and rack up a
            frame — {site.addressShort}.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.whatsapp} external>
            Message on WhatsApp
          </Button>
          <Button href={site.phoneHref} variant="outline">
            {site.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
