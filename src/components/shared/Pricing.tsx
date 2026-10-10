import Link from "next/link";
import { plans, addOns } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Pricing({ showAddOns = true }: { showAddOns?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32" id="pricing">
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div
        className="glow pointer-events-none absolute -top-40 left-1/2 h-96 w-[800px] -translate-x-1/2 opacity-70"
        aria-hidden
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Membership"
          title="Pick a plan. Show up."
          description="Every plan opens the full gym floor, 24 hours a day. Message us on WhatsApp for the current packages and any running offers."
          align="center"
        />

        <Reveal className="mt-16 grid gap-5 lg:grid-cols-3" stagger>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`group relative flex flex-col border p-8 transition-colors duration-500 clip-corner ${
                plan.featured
                  ? "border-brand/60 bg-surface lg:-translate-y-4"
                  : "border-line bg-ink-2 hover:border-line-2"
              }`}
            >
              {plan.featured && (
                <span className="absolute right-0 top-0 bg-brand px-4 py-1.5 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white">
                  Most picked
                </span>
              )}

              <h3 className="display text-3xl">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-sm text-muted-2">PKR</span>
                <span className="display text-6xl leading-none text-chalk">{plan.price}</span>
                <span className="pb-1.5 text-sm text-muted-2">{plan.period}</span>
              </div>

              <span className="mt-8 block h-px w-full bg-line" />

              <ul className="mt-8 flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted">
                    <span
                      className={`mt-1.5 block h-1.5 w-1.5 shrink-0 rotate-45 ${
                        plan.featured ? "bg-brand" : "bg-line-2"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`group/btn relative mt-10 block overflow-hidden px-6 py-4 text-center text-[0.7rem] font-bold uppercase tracking-[0.22em] transition-colors clip-corner-sm ${
                  plan.featured
                    ? "bg-brand text-white"
                    : "border border-line-2 text-chalk hover:border-brand"
                }`}
              >
                <span
                  className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:scale-y-100 ${
                    plan.featured ? "bg-black" : "bg-brand"
                  }`}
                />
                <span className="relative">Join {plan.name}</span>
              </Link>
            </article>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-2">
            Rates shown are placeholders for this build — confirm the current Club X rate card at
            the front desk or over the phone before publishing.
          </p>
        </Reveal>

        {showAddOns && (
          <Reveal className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4" stagger>
            {addOns.map((a) => (
              <div key={a.name} className="bg-ink px-6 py-7 transition-colors duration-500 hover:bg-surface">
                <h4 className="text-sm font-semibold text-chalk">{a.name}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">{a.detail}</p>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
