"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;

/**
 * Google Maps is by far the heaviest thing on the page, so it is not loaded
 * until someone actually asks to see it.
 */
export default function MapEmbed() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <iframe
        src={mapSrc}
        title={`Map showing ${site.name} in ${site.city}`}
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full min-h-[22rem] w-full"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setShow(true)}
      className="group relative grid h-full min-h-[22rem] w-full place-items-center overflow-hidden bg-surface text-left"
      aria-label="Show the map"
    >
      <span className="grid-bg absolute inset-0" aria-hidden />
      <span className="glow absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2" aria-hidden />

      <span className="relative flex flex-col items-center gap-4 px-6 pb-24 text-center">
        <span className="relative flex h-4 w-4">
          <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-brand" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-brand" />
        </span>
        <span className="display text-3xl sm:text-4xl">U Tower, H-13</span>
        <span className="border border-line-2 px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-chalk transition-colors group-hover:border-brand group-hover:bg-brand clip-corner-sm">
          Show the map
        </span>
      </span>
    </button>
  );
}
