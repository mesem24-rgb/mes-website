import dynamic from "next/dynamic";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChoiceExperience } from "@/components/layout/ChoiceExperience";
import { Hero } from "@/components/sections/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { FeaturedWorkPreview } from "@/components/sections/FeaturedWorkPreview";
import { FounderSection } from "@/components/sections/FounderSection";
const FinalCTA = dynamic(
  () =>
    import("@/components/sections/FinalCTA").then((module) => module.FinalCTA),
  {
    loading: () => null,
  },
);

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12] text-white">
      <Navbar />

      {/* INTRODUCTION */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* INTERACTIVE STARTING POINT */}
      <ChoiceExperience />

      {/* PHILOSOPHY */}
      <div className="relative z-10">
        <PhilosophySection />
      </div>

      {/* FEATURED WORK PREVIEW */}
      <div className="relative z-10">
        <FeaturedWorkPreview />
      </div>

      {/* MEET THE FOUNDER */}
      <div className="relative z-10">
        <FounderSection compact />
      </div>

      {/* CONVERSATION */}
      <div className="relative z-10">
        <FinalCTA />
      </div>

      <Footer />
    </main>
  );
}
