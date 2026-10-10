import type { CSSProperties, ElementType } from "react";

type SplitHeadingProps = {
  text: string;
  className?: string;
  as?: ElementType;
};

/**
 * Masked word-by-word reveal built from plain spans — each word slides up out
 * of an overflow-hidden mask, which is what gives the type its "stamped" feel.
 */
export default function SplitHeading({
  text,
  className = "",
  as: Tag = "h2",
}: SplitHeadingProps) {
  const words = text.split(" ");

  return (
    <Tag data-reveal-words="" className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="word-mask">
          <span style={{ "--i": i } as CSSProperties}>
            {word}
            {i < words.length - 1 && " "}
          </span>
        </span>
      ))}
    </Tag>
  );
}
