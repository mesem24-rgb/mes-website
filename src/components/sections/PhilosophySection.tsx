"use client";

import { useState } from "react";

type Principle = {
  number: string;
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "Before recommending technology, we learn how the organization works, where friction exists, and what success should actually look like.",
  },
  {
    number: "02",
    title: "Simplify",
    description:
      "Good software should remove unnecessary steps, clarify decisions, and make important work easier to understand and complete.",
  },
  {
    number: "03",
    title: "Empower",
    description:
      "The people using the system should feel more capable and more confident—not more dependent on the technology surrounding them.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "A useful product should support the organization today while remaining flexible enough to grow with what comes next.",
  },
];

export function PhilosophySection() {
  const [activePrinciple, setActivePrinciple] = useState(0);

  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="mes-section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mes-container">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(26rem,1.1fr)] lg:gap-24">
          {/* SECTION: Philosophy statement */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              What we believe
            </p>

            <h2
              id="philosophy-heading"
              className="mt-6 max-w-[10ch] text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
leading-[0.92]
tracking-[-0.06em] font-semibold leading-[0.92] tracking-[-0.07em] text-white"
            >
              Technology should adapt to people.
            </h2>

            <p className="mt-3 max-w-[10ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white/45">
              Not the other way around.
            </p>

            <p className="mt-10 max-w-lg text-base leading-8 text-white/48">
              MES begins with the people, decisions, and workflows already
              shaping the organization. Technology is introduced only where it
              creates clarity, capability, and meaningful progress.
            </p>
          </div>

          {/* SECTION: Principles */}
          <div className="border-t border-white/[0.08]">
            {principles.map((principle, index) => {
              const isActive = activePrinciple === index;

              return (
                <article
                  key={principle.title}
                  tabIndex={0}
                  onMouseEnter={() => setActivePrinciple(index)}
                  onFocus={() => setActivePrinciple(index)}
                  onClick={() => setActivePrinciple(index)}
                  className="group relative cursor-pointer border-b border-white/[0.08] py-9 outline-none sm:py-11"
                >
                  <div className="grid gap-6 sm:grid-cols-[4rem_minmax(0,1fr)] sm:gap-8">
                    <div className="flex items-start gap-3 pt-1">
                      <span
                        aria-hidden="true"
                        className={[
                          "mt-1.5 h-2 w-2 shrink-0 rounded-full border transition-all duration-500",
                          isActive
                            ? "scale-110 border-blue-300 bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.75)]"
                            : "border-white/20 bg-transparent",
                        ].join(" ")}
                      />

                      <span
                        className={[
                          "text-xs font-semibold tracking-[0.18em] transition-colors duration-500",
                          isActive ? "text-white/55" : "text-white/25",
                        ].join(" ")}
                      >
                        {principle.number}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={[
                          "text-3xl font-semibold tracking-[-0.045em] transition-colors duration-500 sm:text-4xl",
                          isActive ? "text-white" : "text-white/45",
                        ].join(" ")}
                      >
                        {principle.title}
                      </h3>

                      <div
                        className={[
                          "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out",
                          isActive
                            ? "mt-5 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0",
                        ].join(" ")}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-xl text-base leading-7 text-white/48">
                            {principle.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    aria-hidden="true"
                    className={[
                      "pointer-events-none absolute inset-y-0 right-0 w-px origin-center bg-blue-400 transition-transform duration-500",
                      isActive ? "scale-y-100" : "scale-y-0",
                    ].join(" ")}
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* SECTION: Closing thought */}
        <div className="mt-20 border-t border-white/[0.08] pt-10 lg:mt-28">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.75fr)_minmax(24rem,1.25fr)] lg:items-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              The MES standard
            </p>

            <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-white/72 sm:text-3xl">
              Every design decision should help someone make a better
              technology decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}