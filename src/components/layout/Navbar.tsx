"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger, EASE_EXPO } from "@/lib/gsap";
import { nav, site } from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Solid bar once the hero is behind us. */
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => setScrolled(self.scroll() > 80),
      onToggle: (self) => setScrolled(self.isActive),
    });
    return () => st.kill();
  }, []);

  /* Close the overlay whenever the route changes — adjusted during render
     rather than in an effect, so no extra pass is scheduled. */
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  /* Lock the page behind the overlay, and allow Escape to dismiss it. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* Overlay entrance: panel wipe, then links cascade. */
  useGSAP(
    () => {
      if (!open || !menuRef.current) return;
      const tl = gsap.timeline();
      tl.fromTo(
        menuRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: EASE_EXPO },
      )
        .fromTo(
          menuRef.current.querySelectorAll("[data-menu-link]"),
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.07, ease: EASE_EXPO },
          "-=0.35",
        )
        .fromTo(
          menuRef.current.querySelectorAll("[data-menu-meta]"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 },
          "-=0.5",
        );
    },
    { dependencies: [open] },
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-ink/85 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                    active ? "text-white" : "text-muted hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-[2px] origin-left bg-brand transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.phoneHref}
              className="hidden text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-white xl:block"
            >
              {site.phone}
            </a>
            <Link
              href="/membership"
              className="hidden bg-brand px-5 py-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-bright sm:block clip-corner-sm"
            >
              Join Now
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="relative z-60 grid h-11 w-11 place-items-center border border-line-2 lg:hidden clip-corner-sm"
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 block h-[2px] w-full bg-white transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-[2px] w-full bg-white transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-full bg-white transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-55 flex flex-col justify-between bg-ink px-6 pb-10 pt-28 lg:hidden"
        >
          <div
            className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand/25 blur-[110px]"
            aria-hidden
          />
          <nav className="relative flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <div key={item.href} className="overflow-hidden">
                <Link
                  data-menu-link
                  href={item.href}
                  className={`display flex items-baseline gap-4 py-2.5 text-5xl transition-colors sm:text-6xl ${
                    pathname === item.href ? "text-brand" : "text-chalk hover:text-brand"
                  }`}
                >
                  <span className="font-sans text-[0.6rem] tracking-[0.2em] text-muted-2">
                    0{i + 1}
                  </span>
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>

          <div className="relative space-y-4 border-t border-line pt-6">
            <p data-menu-meta className="text-sm leading-relaxed text-muted">
              {site.address}
            </p>
            <a
              data-menu-meta
              href={site.phoneHref}
              className="display block text-3xl text-brand"
            >
              {site.phone}
            </a>
            <div data-menu-meta className="flex gap-4">
              <a
                href={site.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-muted hover:text-white"
              >
                Instagram
              </a>
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-muted hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
