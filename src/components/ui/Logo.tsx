import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Club X — home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span className="relative grid h-9 w-9 place-items-center bg-brand clip-corner-sm transition-transform duration-500 group-hover:rotate-[-8deg]">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" aria-hidden>
          <path
            d="M5 4l14 16M19 4L5 20"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="square"
            fill="none"
          />
        </svg>
        <span className="absolute inset-0 -z-10 bg-brand blur-md opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <span className="display text-2xl leading-none tracking-tight">
        Club<span className="text-brand">X</span>
      </span>
    </Link>
  );
}
