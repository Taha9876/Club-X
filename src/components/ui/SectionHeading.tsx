import SplitHeading from "./SplitHeading";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start"} ${className}`}
    >
      <Reveal className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-[2px] w-8 bg-brand" />
        <span className="eyebrow text-brand">{eyebrow}</span>
      </Reveal>

      <SplitHeading
        text={title}
        className={`display mt-5 text-[2.5rem] leading-[0.9] sm:text-6xl lg:text-[4.25rem] ${titleClassName}`}
      />

      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
