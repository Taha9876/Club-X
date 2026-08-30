"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type Variant = "solid" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  /** Magnetic hover pull, disabled on touch where it just feels sticky. */
  magnetic?: boolean;
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
  magnetic = true,
}: ButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || !magnetic || prefersReducedMotion()) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const r = el.getBoundingClientRect();
    gsap.to(el, {
      x: (e.clientX - (r.left + r.width / 2)) * 0.28,
      y: (e.clientY - (r.top + r.height / 2)) * 0.4,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    if (!ref.current) return;
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  };

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
      <a ref={ref} href={href} className={cls} onMouseMove={onMove} onMouseLeave={onLeave}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} className={cls} onMouseMove={onMove} onMouseLeave={onLeave}>
      {content}
    </Link>
  );
}
