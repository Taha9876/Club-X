"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Logo from "@/components/ui/Logo";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Solid bar once the hero is behind us. State only flips when the threshold
     is crossed, so scrolling does not re-render the bar. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-300 ${
          scrolled || open ? "border-line bg-ink/95 py-2.5" : "border-transparent py-4"
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
              className="grid h-11 w-11 place-items-center border border-line-2 lg:hidden clip-corner-sm"
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

      {/* Sits under the header (z-50) so the logo and close button stay reachable */}
      {open && (
        <div className="wipe-down fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-ink px-6 pb-10 pt-28 lg:hidden">
          <div
            className="glow pointer-events-none absolute -right-24 top-10 h-96 w-96"
            aria-hidden
          />
          <nav className="relative flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                style={{ "--d": `${0.12 + i * 0.05}s` } as React.CSSProperties}
                className={`rise display flex items-baseline gap-4 py-2.5 text-5xl transition-colors sm:text-6xl ${
                  pathname === item.href ? "text-brand" : "text-chalk hover:text-brand"
                }`}
              >
                <span className="font-sans text-[0.6rem] tracking-[0.2em] text-muted-2">
                  0{i + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            className="rise relative mt-10 space-y-4 border-t border-line pt-6"
            style={{ "--d": "0.45s" } as React.CSSProperties}
          >
            <p className="text-sm leading-relaxed text-muted">{site.address}</p>
            <p className="eyebrow text-brand">Open 24 / 7</p>
            <a href={site.phoneHref} className="display block text-3xl text-brand">
              {site.phone}
            </a>
            <div className="flex gap-4">
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
