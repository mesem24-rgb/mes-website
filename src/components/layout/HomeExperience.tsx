"use client";

import { useState } from "react";

import type { ExperienceMode } from "@/types";

import { LivingBackground } from "@/components/background/LivingBackground";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ChoiceSection } from "@/components/sections/ChoiceSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WorkingTogether } from "@/components/sections/WorkingTogether";

export function HomeExperience() {
  const [mode, setMode] = useState<ExperienceMode>("idle");

  return (
    <main id="top"
    className="relative min-h-screen overflow-hidden">
      <LivingBackground mode={mode} />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        <ChoiceSection
          activeMode={mode}
          onModeChange={setMode}
        />

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