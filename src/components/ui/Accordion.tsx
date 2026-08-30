"use client";

import { useRef, useState } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Item = { q: string; a: string };

/** FAQ list where one panel is open at a time, animated on real height. */
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const panels = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (i: number) => {
    const next = open === i ? null : i;
    setOpen(next);

    if (prefersReducedMotion()) return;

    panels.current.forEach((panel, index) => {
      if (!panel) return;
      const shouldOpen = index === next;
      gsap.to(panel, {
        height: shouldOpen ? "auto" : 0,
        opacity: shouldOpen ? 1 : 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    });
  };

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-line">
            <button
              type="button"
              onClick={() => toggle(i)}
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

            <div
              ref={(el) => {
                panels.current[i] = el;
              }}
              className="overflow-hidden"
              style={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            >
              <p className="max-w-2xl pb-7 text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
