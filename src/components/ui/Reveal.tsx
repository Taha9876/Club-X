import type { CSSProperties, ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Render as a different tag when the wrapper is semantically meaningful. */
  as?: ElementType;
  /** Seconds to wait once the element is on screen. */
  delay?: number;
  /** Cascade the direct children instead of moving the wrapper as one block. */
  stagger?: boolean;
};

/**
 * Scroll-triggered entrance. This only marks the element — the shared
 * RevealObserver flips it on and the motion lives in globals.css, so a page
 * full of reveals costs one observer rather than one script per element.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  stagger = false,
}: RevealProps) {
  const attr = stagger ? { "data-reveal-stagger": "" } : { "data-reveal": "" };
  const style = delay ? ({ "--d": `${delay}s` } as CSSProperties) : undefined;

  return (
    <Tag {...attr} className={className} style={style}>
      {children}
    </Tag>
  );
}
