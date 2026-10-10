import Link from "next/link";
import { site } from "@/lib/site";

/**
 * The Club X lockup, redrawn as a vector from the club's own logo: the heavy
 * "CLUB" wordmark stacked on the triple-stripe X. Drawn inline so it costs no
 * request and stays sharp at any size.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 594 520"
      className={className}
      fill="var(--color-brand)"
      role="img"
      aria-label="Club X"
    >
      {/* CLUB */}
      <g fill="none" stroke="var(--color-brand)" strokeWidth="48">
        <path d="M119.6 40.4A56 56 0 1 0 119.6 119.6" />
        <path d="M174 0V136H258" />
        <path d="M300 0V88A48 48 0 0 0 396 88V0" />
      </g>
      <path
        fillRule="evenodd"
        d="M444 0h92c33 0 54 18 54 46 0 16-8 27-20 33 16 6 24 19 24 35 0 28-22 46-56 46h-94zM492 40h38a13 13 0 0 1 0 26h-38zM492 96h42a13 13 0 0 1 0 26h-42z"
      />

      {/* X — a full cross with a chevron nested in each quadrant */}
      <g transform="translate(0 200)">
        <path d="M100 0h74l320 320h-74z" />
        <path d="M494 0h-74L100 320h74z" />
        <path d="M0 0h74l160 160L74 320H0l160-160z" />
        <path d="M594 0h-74L360 160l160 160h74L434 160z" />
        <path d="M200 0h74l23 23 23-23h74L297 97z" />
        <path d="M200 320h74l23-23 23 23h74L297 223z" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  /** Adds the "Gym | Snooker | Vape" line that sits under the club's logo. */
  tagline?: boolean;
  size?: "sm" | "lg";
};

export default function Logo({ className = "", tagline = false, size = "sm" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Club X — home"
      className={`group inline-flex flex-col items-center ${className}`}
    >
      <LogoMark
        className={`${
          size === "lg" ? "h-24" : "h-11"
        } w-auto transition-transform duration-500 group-hover:scale-105`}
      />
      {tagline && (
        <span className="mt-2.5 whitespace-nowrap text-[0.7rem] font-medium tracking-[0.06em] text-brand">
          {site.tagline}
        </span>
      )}
    </Link>
  );
}
