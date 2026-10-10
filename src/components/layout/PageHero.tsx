import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import venue from "@/assets/venue.jpg";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Defaults to the Club X venue photo. */
  image?: StaticImageData;
  /** Optional right-hand meta pairs rendered as a small spec table. */
  meta?: { k: string; v: string }[];
};

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export default function PageHero({
  eyebrow,
  title,
  description,
  image = venue,
  meta,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[56svh] items-end overflow-hidden bg-ink pb-14 pt-40 lg:min-h-[64svh] lg:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/60 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_60%,rgba(225,15,33,0.18),transparent_72%)]" />

      <div className="container-x relative">
        <div className="fade flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-muted-2">
          <Link href="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <span className="text-brand">/</span>
          <span className="text-chalk">{eyebrow}</span>
        </div>

        {/* Painted immediately: this is the largest thing on screen at load. */}
        <h1 className="display mt-6 max-w-5xl text-[3rem] leading-[0.88] sm:text-7xl lg:text-[6.5rem]">
          {title}
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {description && (
            <p className="max-w-xl text-base leading-relaxed text-muted">{description}</p>
          )}

          {meta && (
            <div className="rise flex flex-wrap gap-px border border-line bg-line" style={delay(0.1)}>
              {meta.map((m) => (
                <div key={m.k} className="flex-1 whitespace-nowrap bg-ink px-5 py-4">
                  <p className="text-[0.58rem] uppercase tracking-[0.22em] text-muted-2">{m.k}</p>
                  <p className="mt-1.5 text-sm text-chalk">{m.v}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
