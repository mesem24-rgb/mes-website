"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Blocks,
  Compass,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

import type { ExperienceMode } from "@/types";

type ChoiceSectionProps = {
  activeMode: ExperienceMode;
  onModeChange: (mode: ExperienceMode) => void;
};

type Choice = {
  mode: Exclude<ExperienceMode, "idle">;
  number: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
  icon: LucideIcon;
};

const choices: Choice[] = [
  {
    mode: "build",
    number: "01",
    title: "Build something new",
    description:
      "Turn an idea, opportunity, or operational need into software designed around the way your organization actually works.",
    outcome: "From early direction to a working product.",
    href: "#contact",
    icon: Blocks,
  },
  {
    mode: "improve",
    number: "02",
    title: "Improve what exists",
    description:
      "Modernize an aging system, simplify a complicated workflow, or improve an experience that is creating unnecessary friction.",
    outcome: "Better tools without starting over blindly.",
    href: "#contact",
    icon: RefreshCw,
  },
  {
    mode: "clarify",
    number: "03",
    title: "Find the right direction",
    description:
      "Clarify the problem, evaluate the options, and create a practical technology path before committing resources to a build.",
    outcome: "Confident decisions before development begins.",
    href: "#contact",
    icon: Compass,
  },
];

export function ChoiceSection({
  activeMode,
  onModeChange,
}: ChoiceSectionProps) {
  const hasSelection = activeMode !== "idle";

  return (
    <section
      id="journey"
      aria-labelledby="choice-heading"
      className="mes-section relative overflow-hidden"
    >
      {/* SECTION: Ambient transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mes-container">
        {/* SECTION: Introduction */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:items-end lg:gap-16">
          <div>
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              Where do we begin?
            </p>

            <h2
              id="choice-heading"
              className="mt-6 max-w-[11ch] text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white"
            >
              The right path starts with your reality.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-2">
            <p className="mes-body-large">
              Some businesses need a new website or custom application. Others
              need to improve a system they already depend on. Sometimes the
              most valuable first step is determining which solution will create
              the most meaningful progress.
            </p>
          </div>
        </div>

        {/* SECTION: Path signal */}
        <div
          aria-hidden="true"
          className="relative mt-16 hidden lg:block lg:mt-24"
        >
          <div className="absolute left-[16.666%] right-[16.666%] top-1/2 h-px -translate-y-1/2 bg-white/[0.08]" />

          <div className="grid grid-cols-3">
            {choices.map((choice) => {
              const isActive = activeMode === choice.mode;

              return (
                <div
                  key={`${choice.title}-signal`}
                  className="relative flex justify-center"
                >
                  <span
                    className={[
                      "relative z-10 h-2.5 w-2.5 rounded-full border transition-all duration-500",
                      isActive
                        ? "scale-125 border-blue-300 bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.85)]"
                        : hasSelection
                          ? "border-white/15 bg-[#070b12]"
                          : "border-white/30 bg-white/10",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION: Choice paths */}
        <div
          className="mt-8 grid border-y border-white/[0.08] lg:mt-10 lg:grid-cols-3"
          onMouseLeave={() => onModeChange("idle")}
        >
          {choices.map((choice, index) => {
            const Icon = choice.icon;
            const isActive = activeMode === choice.mode;
            const isReduced =
              activeMode !== "idle" && activeMode !== choice.mode;

            return (
              <article
                key={choice.title}
                tabIndex={0}
                onMouseEnter={() => onModeChange(choice.mode)}
                onFocus={() => onModeChange(choice.mode)}
                onClick={() => onModeChange(choice.mode)}
                className={[
                  "group relative flex min-h-[31rem] cursor-pointer flex-col overflow-hidden px-1 py-10 transition-all duration-500",
                  "border-white/[0.08]",
                  index !== 0 ? "border-t lg:border-l lg:border-t-0" : "",
                  isReduced ? "opacity-45" : "opacity-100",
                ].join(" ")}
              >
                {/* SECTION: Active surface */}
                <div
                  aria-hidden="true"
                  className={[
                    "absolute inset-0 transition-all duration-700",
                    isActive
                      ? "bg-white/[0.035] opacity-100"
                      : "bg-transparent opacity-0",
                  ].join(" ")}
                />

                <div className="relative z-10 flex h-full flex-col px-5 sm:px-7 lg:px-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className={[
                          "h-2 w-2 rounded-full border transition-all duration-500 lg:hidden",
                          isActive
                            ? "border-blue-300 bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]"
                            : hasSelection
                              ? "border-white/15 bg-transparent"
                              : "border-white/25 bg-white/[0.08]",
                        ].join(" ")}
                      />

                      <span className="text-xs font-semibold tracking-[0.18em] text-white/30">
                        {choice.number}
                      </span>
                    </div>

                    <div
                      className={[
                        "flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500",
                        isActive
                          ? "border-blue-300/25 bg-blue-400/[0.08] text-blue-200"
                          : "border-white/10 bg-white/[0.025] text-white/40",
                      ].join(" ")}
                    >
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-24 lg:mt-28">
                    <h3 className="max-w-[9ch] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-4xl">
                      {choice.title}
                    </h3>

                    <p className="mt-6 max-w-sm text-base leading-7 text-white/50">
                      {choice.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-12">
                    <p
                      className={[
                        "border-l pl-4 text-sm leading-6 transition-colors duration-500",
                        isActive
                          ? "border-blue-400/70 text-white/65"
                          : "border-white/10 text-white/35",
                      ].join(" ")}
                    >
                      {choice.outcome}
                    </p>

                    <Link
                      href={choice.href}
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors duration-300 hover:text-white focus-visible:text-white"
                    >
                      Explore this path
                      <ArrowUpRight
                        aria-hidden="true"
                        className={[
                          "h-4 w-4 transition-transform duration-300",
                          isActive ? "-translate-y-0.5 translate-x-0.5" : "",
                        ].join(" ")}
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* SECTION: Closing statement */}
        <div className="mt-10 flex flex-col gap-4 border-b border-white/[0.08] pb-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-white/38">
            These are starting points, not fixed packages. The work is shaped
            around the problem—not forced into a predefined service.
          </p>

          <Link
            href="#philosophy"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-white"
          >
            How MES approaches the work
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
