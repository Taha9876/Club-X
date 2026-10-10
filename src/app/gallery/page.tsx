import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Marquee from "@/components/ui/Marquee";
import Button from "@/components/ui/Button";
import CTA from "@/components/shared/CTA";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside Club X, H-13 Islamabad — the lounge, the shop and the latest from the club's own feed.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See it before you sign up"
        description="The room at U Tower and the latest from Club X's own feed — the venue and what is happening on the floor."
        meta={[
          { k: "Where", v: "U Tower, H-13" },
          { k: "Instagram", v: "@clubx_isb" },
        ]}
      />

      <section data-no-cv className="relative overflow-hidden bg-ink py-20 lg:py-28">
        <div className="grid-bg grid-bg-fade pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="container-x relative">
          <GalleryGrid />
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Button href={site.socials.instagram} external>
              More on Instagram
            </Button>
            <p className="text-xs text-muted-2">New posts go up on @clubx_isb first.</p>
          </div>
        </div>
      </section>

      <Marquee
        items={["Club X", "H-13 Islamabad", "Gym & Snooker", "Open 24/7"]}
        variant="outline"
        speed="slow"
        className="border-y border-line bg-ink-2 py-8"
      />

      <CTA />
    </>
  );
}
