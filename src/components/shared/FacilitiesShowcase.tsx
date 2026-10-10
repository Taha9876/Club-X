import Image from "next/image";
import Link from "next/link";
import { facilities } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

/** Everything under the Club X roof, each card linking to its full section. */
export default function FacilitiesShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32" id="facilities">
      <div
        className="glow pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] opacity-60"
        aria-hidden
      />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="What's inside"
          title="Six reasons to walk in"
          description="Club X is a gym first — but it is also where H-13 plays snooker, shoots pool and hangs out. Here is everything under the roof."
        />

        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger>
          {facilities.map((f) => (
            <Link
              key={f.slug}
              href={`/facilities#${f.slug}`}
              className="group relative block h-[24rem] overflow-hidden border border-line bg-surface clip-corner"
            >
              <Image
                src={f.image}
                alt={f.imageAlt}
                fill
                placeholder="blur"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 27rem"
                className={`object-cover opacity-45 transition-[opacity,scale] duration-700 ease-out group-hover:scale-105 group-hover:opacity-70 ${f.imageClass ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />

              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="display absolute right-6 top-5 text-5xl text-outline">
                  {f.kicker}
                </span>
                <h3 className="display text-3xl lg:text-4xl">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.blurb}</p>
                <span className="mt-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand">
                  <span className="block h-[2px] w-10 bg-brand transition-all duration-500 group-hover:w-20" />
                  Details
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
