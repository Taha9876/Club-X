import Image from "next/image";
import { site } from "@/lib/site";
import SplitHeading from "@/components/ui/SplitHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <Image
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25 [filter:grayscale(1)_brightness(0.6)]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/18 blur-[130px]"
        aria-hidden
      />
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />

      <div className="container-x relative flex flex-col items-center text-center">
        <Reveal className="flex items-center gap-3">
          <span className="h-[2px] w-8 bg-brand" />
          <span className="eyebrow text-brand">First session is on us</span>
          <span className="h-[2px] w-8 bg-brand" />
        </Reveal>

        <SplitHeading
          text="Walk in today"
          mode="chars"
          className="display mt-7 text-[3.4rem] leading-[0.88] sm:text-8xl lg:text-[9rem]"
        />

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted">
            No appointment, no pressure. Come see the floor, meet a trainer and take a free
            induction — {site.addressShort}.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.whatsapp} external>
            Message on WhatsApp
          </Button>
          <Button href={site.phoneHref} variant="outline" external={false} magnetic={false}>
            {site.phone}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
