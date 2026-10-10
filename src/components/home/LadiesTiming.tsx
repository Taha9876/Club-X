import { site } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

/** The two timings people ask about first: round-the-clock, and the ladies slot. */
export default function LadiesTiming() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2" id="timings">
      <div className="container-x relative grid lg:grid-cols-2">
        <Reveal className="py-16 lg:py-20 lg:pr-12">
          <p className="eyebrow text-brand">Club timings</p>
          <p className="display mt-5 text-7xl leading-none sm:text-8xl">
            24<span className="text-brand">/</span>7
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            Club X does not close. The gym floor, the snooker tables and the lounge are open
            24 hours a day, 7 days a week.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="border-t border-line py-16 lg:border-l lg:border-t-0 lg:py-20 lg:pl-12"
        >
          <p className="eyebrow text-brand">Ladies timing — every day</p>
          <p className="display mt-5 text-5xl leading-none sm:text-7xl">
            11 AM <span className="text-brand">–</span> 3 PM
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
            A dedicated ladies slot on the gym floor, daily from 11 in the morning to 3 in the
            afternoon.
          </p>
          <div className="mt-7">
            <Button href={site.whatsapp} external variant="outline">
              Ask on WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
