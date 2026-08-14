"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  RefreshCw,
  Workflow,
} from "lucide-react";

import type { ExperienceMode } from "@/types";

import { LivingBackground } from "@/components/background/LivingBackground";
import { ChoiceSection } from "@/components/sections/ChoiceSection";

type JourneyOption = {
  id: string;
  label: string;
  description: string;
  icon: typeof Globe2;
};

type JourneyResult = {
  title: string;
  body: string;
  projectLabel?: string;
  projectHref?: string;
};

const followUpOptions: Record<
  Exclude<ExperienceMode, "idle">,
  JourneyOption[]
> = {
  build: [
    {
      id: "website",
      label: "A website",
      description:
        "Create or replace the public-facing digital presence for the business.",
      icon: Globe2,
    },
    {
      id: "business-app",
      label: "A business application",
      description:
        "Build software around customers, projects, operations, or another core workflow.",
      icon: LayoutDashboard,
    },
    {
      id: "internal-tool",
      label: "An internal tool",
      description:
        "Give the team a focused tool for work that does not fit existing software.",
      icon: BriefcaseBusiness,
    },
    {
      id: "not-sure",
      label: "I’m not sure yet",
      description:
        "Start with the idea or business need and figure out the right form together.",
      icon: HelpCircle,
    },
  ],

  improve: [
    {
      id: "website",
      label: "A website",
      description:
        "Improve an outdated, unclear, or underperforming web presence.",
      icon: Globe2,
    },
    {
      id: "existing-software",
      label: "Existing software",
      description:
        "Modernize or extend a system the business already depends on.",
      icon: RefreshCw,
    },
    {
      id: "workflow",
      label: "A workflow or process",
      description:
        "Reduce manual work, disconnected handoffs, or repeated tasks.",
      icon: Workflow,
    },
    {
      id: "not-sure",
      label: "I’m not sure yet",
      description:
        "Start with what feels inefficient and work backward from the problem.",
      icon: HelpCircle,
    },
  ],

  clarify: [
    {
      id: "idea",
      label: "An idea",
      description:
        "Turn an early concept into something concrete enough to evaluate.",
      icon: BriefcaseBusiness,
    },
    {
      id: "technology",
      label: "Technology options",
      description:
        "Understand what tools or approaches make sense before committing.",
      icon: LayoutDashboard,
    },
    {
      id: "process",
      label: "A business process",
      description:
        "Understand where technology could meaningfully improve the way work happens.",
      icon: Workflow,
    },
    {
      id: "not-sure",
      label: "I’m not sure yet",
      description:
        "Start with the uncertainty itself. That is enough to begin.",
      icon: HelpCircle,
    },
  ],
};

const followUpHeadings: Record<
  Exclude<ExperienceMode, "idle">,
  {
    eyebrow: string;
    title: string;
    body: string;
  }
> = {
  build: {
    eyebrow: "Let’s shape the idea",
    title: "What are you thinking about building?",
    body: "You do not need a complete plan. Choose the closest starting point.",
  },

  improve: {
    eyebrow: "Let’s find the friction",
    title: "What would you most like to improve?",
    body: "Start with the part of the business that feels harder than it should.",
  },

  clarify: {
    eyebrow: "Let’s create some clarity",
    title: "Where is the uncertainty right now?",
    body: "You do not need to know the solution. Identifying what needs clarity is enough.",
  },
};

const journeyResults: Record<
  Exclude<ExperienceMode, "idle">,
  Record<string, JourneyResult>
> = {
  build: {
    website: {
      title: "A focused website can be a strong place to start.",
      body: "The next step is understanding what the site needs to communicate, who it needs to reach, and what action visitors should take.",
      projectLabel: "See Elite Ball Co.",
      projectHref: "/work/elite-ball-co",
    },

    "business-app": {
      title: "A business application starts with the workflow.",
      body: "Before defining features, MES would map the people, decisions, and processes the application needs to support.",
      projectLabel: "See Compass CRM",
      projectHref: "/work/compass-crm",
    },

    "internal-tool": {
      title:
        "Internal tools work best when they solve one real operational problem well.",
      body: "The next step is identifying where the current process creates friction and what information the team needs in one place.",
      projectLabel: "See ConstructFlow",
      projectHref: "/work/constructflow",
    },

    "not-sure": {
      title: "That is still enough to start.",
      body: "You do not need to know whether the answer is a website, application, or internal tool. Start with the business need and we can shape the right solution together.",
    },
  },

  improve: {
    website: {
      title: "Improvement does not always mean starting over.",
      body: "MES can look at what is already working, what is creating friction, and where a more focused experience could produce better results.",
      projectLabel: "See Elite Ball Co.",
      projectHref: "/work/elite-ball-co",
    },

    "existing-software": {
      title: "The best next version starts with what users already depend on.",
      body: "The goal is to identify what should stay, what should change, and which improvements will have the greatest operational impact.",
      projectLabel: "See Compass CRM",
      projectHref: "/work/compass-crm",
    },

    workflow: {
      title:
        "A better workflow can remove friction without replacing everything.",
      body: "MES would start by mapping the current handoffs, repeated work, and disconnected information before deciding what needs to be automated or rebuilt.",
      projectLabel: "See ConstructFlow",
      projectHref: "/work/constructflow",
    },

    "not-sure": {
      title: "Start with what feels harder than it should.",
      body: "You do not need to diagnose the technology. Describe the friction and we can work backward toward the right improvement.",
    },
  },

  clarify: {
    idea: {
      title: "An early idea does not need a complete specification.",
      body: "The first goal is to understand the problem, who the product is for, and what outcome would make the idea worth building.",
      projectLabel: "Explore MES services",
      projectHref: "/services",
    },

    technology: {
      title: "Technology should follow the decision, not lead it.",
      body: "MES can help compare practical options, tradeoffs, and costs before you commit to a platform or development path.",
      projectLabel: "Explore MES services",
      projectHref: "/services",
    },

    process: {
      title: "A process is often the best place to begin.",
      body: "By understanding how the work happens today, we can identify where software could create clarity, reduce repetition, or improve visibility.",
      projectLabel: "See ConstructFlow",
      projectHref: "/work/constructflow",
    },

    "not-sure": {
      title: "Uncertainty is a valid starting point.",
      body: "You do not need a technical answer before the conversation. The job is to turn the uncertainty into a clearer set of decisions.",
    },
  },
};

export function ChoiceExperience() {
  const [previewMode, setPreviewMode] = useState<ExperienceMode>("idle");

  const [selectedMode, setSelectedMode] = useState<Exclude<
    ExperienceMode,
    "idle"
  > | null>(null);

  const [selectedFocus, setSelectedFocus] = useState<string | null>(null);

  const backgroundMode =
    previewMode !== "idle" ? previewMode : (selectedMode ?? "idle");

  const selectedResult =
    selectedMode && selectedFocus
      ? journeyResults[selectedMode][selectedFocus]
      : null;

  const handleSelectMode = (mode: Exclude<ExperienceMode, "idle">) => {
    setSelectedMode(mode);
    setSelectedFocus(null);

    window.setTimeout(() => {
      document.getElementById("journey-follow-up")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const handleSelectFocus = (optionId: string) => {
    setSelectedFocus(optionId);

    window.setTimeout(() => {
      document.getElementById("journey-result")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  const handleReset = () => {
    setSelectedMode(null);
    setSelectedFocus(null);
    setPreviewMode("idle");
  };

  return (
    <>
      <LivingBackground mode={backgroundMode} />

      <div className="relative z-10">
        <ChoiceSection
          activeMode={backgroundMode}
          selectedMode={selectedMode}
          onModeChange={setPreviewMode}
          onSelectMode={handleSelectMode}
        />

        {selectedMode && (
          <section
            id="journey-follow-up"
            className="mes-section border-t border-white/[0.08]"
          >
            <div className="mes-container">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <p className="mes-eyebrow">
                    <span className="mes-accent-dot" />
                    {followUpHeadings[selectedMode].eyebrow}
                  </p>

                  <h2 className="mt-6 max-w-[11ch] text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
                    {followUpHeadings[selectedMode].title}
                  </h2>

                  <p className="mt-6 max-w-md text-base leading-8 text-white/50">
                    {followUpHeadings[selectedMode].body}
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 text-sm font-semibold text-white/45 transition-colors hover:text-white"
                  >
                    Choose a different starting point
                  </button>
                </div>

                <div className="grid border-t border-white/[0.08] sm:grid-cols-2">
                  {followUpOptions[selectedMode].map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedFocus === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => handleSelectFocus(option.id)}
                        className={[
                          "group min-h-[15rem] border-b border-white/[0.08] p-6 text-left transition-all duration-300 sm:p-8",
                          "sm:odd:border-r",
                          isSelected
                            ? "bg-blue-400/[0.08]"
                            : "hover:bg-white/[0.025]",
                        ].join(" ")}
                      >
                        <div className="flex items-start justify-between">
                          <div
                            className={[
                              "flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300",
                              isSelected
                                ? "border-blue-300/30 bg-blue-400/10 text-blue-200"
                                : "border-white/10 bg-white/[0.025] text-white/40",
                            ].join(" ")}
                          >
                            <Icon aria-hidden="true" className="h-4 w-4" />
                          </div>

                          <ArrowRight
                            aria-hidden="true"
                            className={[
                              "h-4 w-4 transition-all duration-300",
                              isSelected
                                ? "translate-x-1 text-blue-300"
                                : "text-white/20 group-hover:translate-x-1 group-hover:text-white/50",
                            ].join(" ")}
                          />
                        </div>

                        <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white">
                          {option.label}
                        </h3>

                        <p className="mt-4 max-w-sm text-sm leading-7 text-white/50">
                          {option.description}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {selectedResult && (
          <section
            id="journey-result"
            className="mes-section border-t border-white/[0.08]"
          >
            <div className="mes-container">
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <p className="mes-eyebrow">
                    <span className="mes-accent-dot" />
                    We have somewhere to start
                  </p>

                  <h2 className="mt-6 max-w-[11ch] text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
                    {selectedResult.title}
                  </h2>
                </div>

                <div className="max-w-xl lg:justify-self-end">
                  <p className="text-base leading-8 text-white/55">
                    {selectedResult.body}
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    {selectedResult.projectHref &&
                      selectedResult.projectLabel && (
                        <Link
                          href={selectedResult.projectHref}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
                        >
                          {selectedResult.projectLabel}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}

                    <Link
                      href={`/?path=${selectedMode}&focus=${selectedFocus}#contact`}
                      className="mes-button mes-button-primary inline-flex"
                    >
                      Continue the conversation
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
