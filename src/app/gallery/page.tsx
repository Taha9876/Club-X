import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Marquee from "@/components/ui/Marquee";
import CTA from "@/components/shared/CTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside Club X, H-13 Islamabad — the strength floor, cardio zone, functional lane and snooker hall.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See it before you sign up"
        description="The floor, the kit and the snooker hall — photographed as they are, not as a brochure would like them."
        image="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c"
        meta={[
          { k: "Zones shown", v: "All six" },
          { k: "Floors", v: "B1 & B2" },
        ]}
      />

      <section className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="container-x relative">
          <GalleryGrid />
          <p className="mt-10 text-xs text-muted-2">
            Placeholder photography for this build — swap in real Club X shots before launch.
          </p>
        </div>
      </section>

      <Marquee
        items={["Club X", "H-13 Islamabad", "Gym & Snooker", "Open Late"]}
        variant="outline"
        speed="slow"
        className="border-y border-line bg-ink-2 py-8"
      />

      <CTA />
    </>
  );
}
