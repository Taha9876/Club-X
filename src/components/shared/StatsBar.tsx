import { stats } from "@/lib/site";
import Reveal from "@/components/ui/Reveal";

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2">
      <Reveal className="container-x relative grid grid-cols-2 gap-px lg:grid-cols-4" stagger>
        {stats.map((s) => (
          <div key={s.label} className="group px-2 py-10 lg:px-6 lg:py-14">
            <p className="display text-4xl text-chalk transition-colors duration-500 group-hover:text-brand sm:text-5xl lg:text-6xl">
              {s.value}
            </p>
            <p className="mt-3 max-w-[18ch] text-xs leading-relaxed text-muted lg:text-sm">
              {s.label}
            </p>
            <span className="mt-5 block h-[2px] w-8 bg-line transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
          </div>
        ))}
      </Reveal>
    </section>
  );
}
