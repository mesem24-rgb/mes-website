"use client";
"use client";

import { useState } from "react";

import type { ExperienceMode } from "@/types";

import { LivingBackground } from "@/components/background/LivingBackground";
import { ChoiceSection } from "@/components/sections/ChoiceSection";

export function ChoiceExperience() {
  const [mode, setMode] = useState<ExperienceMode>("idle");

  return (
    <>
      <LivingBackground mode={mode} />

      <div className="relative z-10">
        <ChoiceSection
          activeMode={mode}
          onModeChange={setMode}
        />
      </div>
    </>
  );
}