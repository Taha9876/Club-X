"use client";

import { useState } from "react";

type Item = { q: string; a: string };

/** FAQ list where one panel is open at a time; the height animates in CSS. */
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span
                className={`text-base font-medium transition-colors sm:text-lg ${
                  isOpen ? "text-brand" : "text-chalk group-hover:text-brand"
                }`}
              >
                {item.q}
              </span>
              <span className="relative grid h-8 w-8 shrink-0 place-items-center border border-line-2 transition-colors group-hover:border-brand">
                <span className="absolute h-[1.5px] w-3 bg-current" />
                <span
                  className={`absolute h-3 w-[1.5px] bg-current transition-transform duration-300 ${
                    isOpen ? "scale-y-0" : "scale-y-100"
                  }`}
                />
              </span>
            </button>

            <div className="accordion-panel" data-open={isOpen}>
              <div>
                <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
