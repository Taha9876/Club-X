import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import SnookerBand from "@/components/home/SnookerBand";
import GamesLounge from "@/components/home/GamesLounge";
import LadiesTiming from "@/components/home/LadiesTiming";
import GalleryPreview from "@/components/home/GalleryPreview";
import StatsBar from "@/components/shared/StatsBar";
import FacilitiesShowcase from "@/components/shared/FacilitiesShowcase";
import Trainers from "@/components/shared/Trainers";
import Pricing from "@/components/shared/Pricing";
import Testimonials from "@/components/shared/Testimonials";
import LocationBlock from "@/components/shared/LocationBlock";
import CTA from "@/components/shared/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Intro />
      <FacilitiesShowcase />
      <SnookerBand />
      <GamesLounge />
      <LadiesTiming />
      <Trainers />
      <GalleryPreview />
      <Pricing showAddOns={false} />
      <Testimonials />
      <LocationBlock />
      <CTA />
    </>
  );
}
