import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Pricing from "@/components/shared/Pricing";
import Testimonials from "@/components/shared/Testimonials";
import CTA from "@/components/shared/CTA";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Monthly, quarterly and annual memberships at Club X, H-13 Islamabad — plus personal training packs, student rates and snooker access.",
};

const INCLUDED = [
  { t: "Free induction", d: "A trainer walks you through the floor and sets your first programme." },
  { t: "No joining fee", d: "The price on the card is the price you pay. Nothing bolted on at the desk." },
  { t: "Lockers & changing", d: "Secure lockers and changing rooms on both floors." },
  { t: "Pause, don't lose", d: "Travelling or injured? Talk to the desk about holding your plan." },
];

const STEPS = [
  { n: "01", t: "Walk in", d: "Drop by U Tower any time we are open. No appointment required." },
  { n: "02", t: "Tour the floor", d: "See the equipment, meet a trainer, ask the awkward questions." },
  { n: "03", t: "Pick a plan", d: "Monthly, quarterly or annual — plus any add-ons you want." },
  { n: "04", t: "First session", d: "Free induction, then straight into your programme." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="One card. The whole club."
        description="Every Club X plan opens the full training floor — strength, cardio and functional — with discounted snooker and personal-training rates on top."
        image="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        meta={[
          { k: "Plans", v: "Monthly · Quarterly · Annual" },
          { k: "Joining fee", v: "None" },
          { k: "Induction", v: "Free with every plan" },
        ]}
      />

      <Pricing />

      {/* ---------- What's included ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32">
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Included"
              title="What every plan gets you"
              description="The basics should never be an upsell. These come with the cheapest card we sell."
            />
          </div>

          <Reveal className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-7" stagger={0.1}>
            {INCLUDED.map((item) => (
              <div
                key={item.t}
                className="group bg-ink px-6 py-8 transition-colors duration-500 hover:bg-surface"
              >
                <span className="block h-2 w-2 rotate-45 bg-brand transition-transform duration-500 group-hover:rotate-[135deg]" />
                <h3 className="mt-5 text-base font-semibold text-chalk">{item.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- How to join ---------- */}
      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative">
          <SectionHeading eyebrow="Joining" title="Four steps, ten minutes" align="center" />

          <Reveal className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="group relative border border-line bg-ink-2 p-7 transition-colors duration-500 hover:border-brand/50 clip-corner"
              >
                <span className="display text-5xl text-outline transition-colors duration-500 group-hover:text-brand">
                  {s.n}
                </span>
                <h3 className="display mt-5 text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="relative overflow-hidden border-t border-line bg-ink-2 py-24 lg:py-32">
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Before you ask"
              description="Still unsure about something? The front desk answers the phone all day."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal y={30}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
