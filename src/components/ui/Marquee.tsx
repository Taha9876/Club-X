type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: "normal" | "slow";
  /** Outlined type reads as a texture band; solid reads as a statement band. */
  variant?: "solid" | "outline";
};

/**
 * Infinite ticker. The list is rendered twice and translated -50%, so the loop
 * is seamless without measuring anything at runtime.
 */
export default function Marquee({
  items,
  className = "",
  speed = "normal",
  variant = "solid",
}: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className={`marquee-paused relative flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 items-center ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className={`display px-6 text-4xl sm:text-5xl lg:text-6xl ${
                variant === "outline" ? "text-outline" : "text-chalk"
              }`}
            >
              {item}
            </span>
            <span className="block h-2.5 w-2.5 rotate-45 bg-brand" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
