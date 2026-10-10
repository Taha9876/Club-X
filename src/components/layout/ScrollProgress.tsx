/** Thin red progress rail pinned to the top of the viewport, driven by CSS. */
export default function ScrollProgress() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[2px]" aria-hidden>
      <div className="scroll-progress h-full bg-gradient-to-r from-brand-deep via-brand to-brand-bright" />
    </div>
  );
}
