import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ChoiceExperience } from "@/components/layout/ChoiceExperience";

import { Hero } from "@/components/sections/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WorkingTogether } from "@/components/sections/WorkingTogether";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12]">
      <Navbar />
      <div className="relative z-10">
        <Hero />
      </div>

      <ChoiceExperience />

      <div className="relative z-10">
        <PhilosophySection />
        <ProcessSection />
        <ProductsSection />
        <FeaturedWork />
        <WorkingTogether />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
