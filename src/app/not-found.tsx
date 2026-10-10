import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink px-6 text-center">
      <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="glow pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2"
        aria-hidden
      />

      <div className="relative">
        <p className="eyebrow text-brand">Wrong turn</p>
        <h1 className="display mt-6 text-[6rem] leading-none sm:text-[10rem]">
          4<span className="text-brand red-glow">0</span>4
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
          This page is not on the floor plan. Head back and pick a zone.
        </p>
        <Link
          href="/"
          className="group relative mt-9 inline-block overflow-hidden bg-brand px-8 py-4 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white clip-corner-sm"
        >
          <span className="absolute inset-0 origin-bottom scale-y-0 bg-black transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
          <span className="relative">Back to Club X</span>
        </Link>
      </div>
    </section>
  );
}
