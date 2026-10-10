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
    "Gym memberships at Club X, H-13 Islamabad — 24/7 access, ladies timing 11 AM – 3 PM, personal training, plus snooker and games on site.",
};

const INCLUDED = [
  { t: "24 / 7 access", d: "Train at any hour — the gym floor never closes." },
  { t: "Ladies timing", d: "A dedicated ladies slot every day from 11 AM to 3 PM." },
  { t: "Personal training", d: "One-to-one sessions available with Club X's trainer, Abdul Hadi." },
  { t: "More than a gym", d: "Snooker, pool, foosball, PS4 and a shop under the same roof." },
];

const STEPS = [
  { n: "01", t: "Walk in", d: "Drop by U Tower at any hour. No appointment required." },
  { n: "02", t: "Tour the floor", d: "See the equipment, meet the trainer, ask the awkward questions." },
  { n: "03", t: "Pick a plan", d: "Monthly, quarterly or annual — plus personal training if you want it." },
  { n: "04", t: "Start training", d: "Get set up on the floor and into your first session." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="One card. The whole club."
        description="Every Club X plan opens the full gym floor around the clock — with personal training, snooker and the games lounge all under the same roof."
        meta={[
          { k: "Plans", v: "Monthly · Quarterly · Annual" },
          { k: "Access", v: "24 / 7" },
          { k: "Ladies timing", v: "11 AM – 3 PM" },
        ]}
      />

      <Pricing />

      {/* ---------- What's included ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink-2 py-24 lg:py-32">
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Included"
              title="What you walk into"
              description="The things that make Club X worth the card — whichever plan you pick."
            />
          </div>

          <Reveal className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-7" stagger>
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

          <Reveal className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger>
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
              description="Still unsure about something? Message us on WhatsApp — we are open around the clock."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
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
