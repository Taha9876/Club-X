import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import LocationBlock from "@/components/shared/LocationBlock";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Accordion from "@/components/ui/Accordion";
import CTA from "@/components/shared/CTA";
import { site, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Club X at U Tower, opposite NUST Gate 2, H-13 Islamabad. Call +92 339 894 0004 or message us on WhatsApp.",
};

const CHANNELS = [
  { k: "Call the desk", v: site.phone, href: site.phoneHref },
  { k: "WhatsApp", v: "Message us", href: site.whatsapp },
  { k: "Instagram", v: "@clubx_isb", href: site.socials.instagram },
  { k: "Facebook", v: "Club X H-13", href: site.socials.facebook },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come see the floor"
        description="Questions about plans, personal training or snooker rates? Call, message, or just walk in — we are opposite NUST Gate 2."
        image="https://images.unsplash.com/photo-1517963879433-6ad2b056d712"
        meta={[
          { k: "Phone", v: site.phone },
          { k: "Address", v: "U Tower, H-13" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Say hello"
              title="Talk to the front desk"
              description="Tell us what you are after and we will get back to you the same day. For the fastest answer, WhatsApp is the one we watch."
            />

            <Reveal className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2" stagger={0.09}>
              {CHANNELS.map((c) => (
                <a
                  key={c.k}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-ink px-5 py-6 transition-colors duration-500 hover:bg-surface"
                >
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-muted-2">{c.k}</p>
                  <p className="mt-2 text-sm font-medium text-chalk transition-colors group-hover:text-brand">
                    {c.v}
                  </p>
                  <span className="mt-4 block h-[2px] w-6 bg-line transition-all duration-500 group-hover:w-14 group-hover:bg-brand" />
                </a>
              ))}
            </Reveal>

            <Reveal delay={0.12} className="mt-8 border border-line bg-ink-2 p-6 clip-corner-sm">
              <p className="eyebrow text-brand">Walk-in address</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{site.address}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={30} className="border border-line bg-ink-2 p-6 sm:p-10 clip-corner">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <LocationBlock />

      <section className="relative overflow-hidden border-t border-line bg-ink py-24 lg:py-32">
        <div className="container-x relative grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="FAQ" title="Quick answers" />
          </div>
          <div className="lg:col-span-8">
            <Reveal y={30}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
