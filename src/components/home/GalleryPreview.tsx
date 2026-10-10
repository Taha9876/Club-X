import Image from "next/image";
import { gallery, site } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const [lead, ...rest] = gallery;
const PREVIEW = rest.slice(0, 4);

export default function GalleryPreview() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="container-x relative">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Inside Club X"
            title="The room, not the render"
            className="md:max-w-xl"
          />
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            <Button href="/gallery" variant="outline">
              Full gallery
            </Button>
            <Button href={site.socials.instagram} external variant="ghost">
              @clubx_isb
            </Button>
          </Reveal>
        </div>

        <Reveal className="mt-14 grid gap-3 lg:grid-cols-2 lg:gap-4" stagger>
          <figure className="group relative aspect-3/2 overflow-hidden border border-line bg-surface clip-corner-sm lg:aspect-auto">
            <Image
              src={lead.src}
              alt={lead.alt}
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-[scale] duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <figcaption className="absolute bottom-3 left-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-chalk">
              {lead.tag}
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {PREVIEW.map((item) => (
              <figure
                key={item.alt}
                className="group relative aspect-4/5 overflow-hidden border border-line bg-surface clip-corner-sm"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-[scale] duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute left-3 top-3 bg-ink/85 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-muted">
                  {item.tag}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
