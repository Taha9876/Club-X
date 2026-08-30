import Link from "next/link";
import { nav, site, hours } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import Marquee from "@/components/ui/Marquee";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-2">
      <div className="grain pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/12 blur-[140px]"
        aria-hidden
      />

      <Marquee
        items={["Train Hard", "H-13 Islamabad", "Gym & Snooker", "No Excuses"]}
        variant="outline"
        speed="slow"
        className="border-b border-line py-7"
      />

      <div className="container-x relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            {site.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Instagram", href: site.socials.instagram },
              { label: "Facebook", href: site.socials.facebook },
              { label: "WhatsApp", href: site.whatsapp },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-line px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors hover:border-brand hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="eyebrow text-brand">Explore</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
                >
                  <span className="h-[1px] w-0 bg-brand transition-all duration-300 group-hover:w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-brand">Opening Hours</h3>
          <ul className="mt-5 space-y-3">
            {hours.map((h) => (
              <li key={h.day} className="flex flex-col gap-0.5">
                <span className="text-sm text-chalk">{h.day}</span>
                <span className="text-xs tracking-wide text-muted-2">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-brand">Find Us</h3>
          <address className="mt-5 space-y-4 not-italic">
            <p className="text-sm leading-relaxed text-muted">{site.address}</p>
            <a
              href={site.phoneHref}
              className="display block text-2xl text-chalk transition-colors hover:text-brand"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="block text-sm text-muted transition-colors hover:text-white"
            >
              {site.email}
            </a>
          </address>
        </div>
      </div>

      <div className="container-x relative flex flex-col gap-3 border-t border-line py-6 text-xs text-muted-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}, {site.city}. All rights reserved.
        </p>
        <p>Gym · Snooker · Lounge — opposite NUST Gate 2.</p>
      </div>
    </footer>
  );
}
