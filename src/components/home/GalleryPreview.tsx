import Image from "next/image";
import { gallery } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const PREVIEW = gallery.slice(0, 6);

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
          <Reveal delay={0.1}>
            <Button href="/gallery" variant="outline">
              Full gallery
            </Button>
          </Reveal>
        </div>

        <Reveal
          className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[13rem] lg:grid-cols-4 lg:gap-4"
          stagger={0.08}
        >
          {PREVIEW.map((item, i) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden border border-line bg-surface clip-corner-sm ${
                i === 0 ? "col-span-2 row-span-2" : ""
              } ${i === 3 ? "lg:row-span-2" : ""}`}
            >
              <Image
                src={`${item.src}?q=80&w=1200`}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover opacity-70 transition-all duration-700 [filter:grayscale(1)] group-hover:scale-105 group-hover:opacity-100 group-hover:[filter:grayscale(0)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
              <figcaption className="absolute bottom-3 left-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-brand">
                {item.tag}
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
