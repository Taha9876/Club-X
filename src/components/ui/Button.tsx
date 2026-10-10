import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 clip-corner-sm";

const variants: Record<Variant, string> = {
  solid: "bg-brand text-white hover:text-white",
  outline: "border border-line-2 text-chalk hover:text-white",
  ghost: "text-muted hover:text-white",
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
  external = false,
}: ButtonProps) {
  const content = (
    <>
      {/* Sweep fill that wipes in from the bottom on hover */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 ${
          variant === "solid" ? "bg-black" : "bg-brand"
        }`}
      />
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden
        className="relative z-10 block h-[1px] w-5 bg-current transition-all duration-300 group-hover:w-8"
      />
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  /* tel:/mailto: links are plain anchors — routing them through Link or a new
     tab both misbehave on mobile. */
  if (/^(tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
