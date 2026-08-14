import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ChoiceExperience } from "@/components/layout/ChoiceExperience";

import { Hero } from "@/components/sections/Hero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070b12]">
      <Navbar />

      {/* INTRODUCTION */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* INTERACTIVE STARTING POINT */}
      <ChoiceExperience />

      {/* PROOF */}
      <div className="relative z-10">

        {/* CONVERSATION */}
        <FinalCTA />

        <Footer />
      </div>
    </main>
  );
}
