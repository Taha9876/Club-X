import { stats } from "@/lib/site";
import Counter from "@/components/ui/Counter";
import Reveal from "@/components/ui/Reveal";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-brand/10 blur-[90px]"
        aria-hidden
      />
      <Reveal
        className="container-x relative grid grid-cols-2 gap-px lg:grid-cols-4"
        stagger={0.1}
      >
        {stats.map((s) => (
          <div key={s.label} className="group px-2 py-10 lg:px-6 lg:py-14">
            <p className="display text-4xl text-chalk transition-colors duration-500 group-hover:text-brand sm:text-5xl lg:text-6xl">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 max-w-[16ch] text-xs leading-relaxed text-muted lg:text-sm">
              {s.label}
            </p>
            <span className="mt-5 block h-[2px] w-8 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
