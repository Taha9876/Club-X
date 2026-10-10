"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { gallery } from "@/lib/site";

const TAGS = ["All", ...Array.from(new Set(gallery.map((g) => g.tag)))];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.tag === filter)),
    [filter],
  );

  const active = lightbox === null ? null : items[lightbox];

  /* Keyboard control while the lightbox is open. */
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => ((i ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setLightbox((i) => ((i ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, items.length]);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {TAGS.map((tag) => (
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

      {/* Grid — keyed on the filter so the tiles cascade in again when it changes */}
      <div
        key={filter}
        className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4"
      >
        {items.map((item, i) => (
          <button
            key={item.alt}
            type="button"
            onClick={() => setLightbox(i)}
            aria-label={`Open ${item.alt}`}
            style={{ "--d": `${Math.min(i, 8) * 0.04}s` } as React.CSSProperties}
            className="rise group relative aspect-4/5 overflow-hidden border border-line bg-surface clip-corner-sm"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-[scale] duration-700 group-hover:scale-105"
            />
            <span className="absolute left-3 top-3 bg-ink/85 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-muted transition-colors group-hover:text-brand">
              {item.tag}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fade fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative h-full max-h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={active.src} alt={active.alt} fill sizes="90vw" className="object-contain" />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-6 px-16 text-center">
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
