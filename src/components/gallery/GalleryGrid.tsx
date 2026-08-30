"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import { gsap, useGSAP, EASE_EXPO, prefersReducedMotion } from "@/lib/gsap";
import { gallery } from "@/lib/site";

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "sm:row-span-2",
  normal: "",
};

export default function GalleryGrid() {
  const tags = useMemo(() => ["All", ...Array.from(new Set(gallery.map((g) => g.tag)))], []);
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const root = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.tag === filter)),
    [filter],
  );

  /* Re-stagger the grid whenever the filter changes. */
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        "[data-tile]",
        { y: 34, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.045, ease: EASE_EXPO },
      );
    },
    { dependencies: [filter], scope: root },
  );

  const active = lightbox === null ? null : items[lightbox];

  return (
    <div ref={root}>
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setFilter(tag);
              setLightbox(null);
            }}
            className={`border px-4 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 clip-corner-sm ${
              filter === tag
                ? "border-brand bg-brand text-white"
                : "border-line text-muted hover:border-line-2 hover:text-chalk"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid auto-rows-[12rem] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[13rem] lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.src + i}
            data-tile
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${item.alt}`}
            className={`group relative overflow-hidden border border-line bg-surface clip-corner-sm ${
              spanClass[item.span]
            }`}
          >
            <Image
              src={`${item.src}?q=80&w=1200`}
              alt={item.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover opacity-70 transition-all duration-700 [filter:grayscale(1)] group-hover:scale-105 group-hover:opacity-100 group-hover:[filter:grayscale(0)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-brand">
              {item.tag}
            </span>
            <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center border border-white/20 text-xs text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              +
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative h-full max-h-[80vh] w-full max-w-5xl overflow-hidden border border-line clip-corner"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`${active.src}?q=85&w=2000`}
              alt={active.alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-6 text-center">
            <p className="text-sm text-chalk">{active.alt}</p>
            <p className="mt-1 text-xs text-muted-2">
              {(lightbox ?? 0) + 1} / {items.length}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(((lightbox ?? 0) - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white sm:left-6"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(((lightbox ?? 0) + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center border border-line-2 text-chalk transition-colors hover:border-brand hover:bg-brand hover:text-white sm:right-6"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
