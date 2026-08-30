import Image from "next/image";
import { trainers } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function Trainers() {
  return (
    <section className="relative overflow-hidden bg-ink-2 py-24 lg:py-32">
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The floor team"
            title="Coaches who actually watch your set"
            className="md:max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Button href="/contact" variant="outline">
              Book a session
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {trainers.map((t) => (
            <article key={t.name} className="group relative">
              <div className="relative aspect-3/4 overflow-hidden border border-line bg-surface clip-corner">
                <Image
                  src={`${t.image}?q=80&w=800`}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-70 transition-all duration-700 [filter:grayscale(1)] group-hover:scale-105 group-hover:opacity-100 group-hover:[filter:grayscale(0)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />

                {/* Red sweep that wipes up on hover */}
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="eyebrow text-brand">{t.focus}</p>
                  <h3 className="display mt-2 text-2xl">{t.name}</h3>
                  <p className="mt-1 text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </Reveal>

        <p className="mt-8 text-xs text-muted-2">
          Trainer line-up shown for layout — swap in the real team photos and bios before launch.
        </p>
      </div>
    </section>
  );
}
