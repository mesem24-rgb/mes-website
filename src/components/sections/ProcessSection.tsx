import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  deliverable: string;
};

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We begin by understanding the people, workflows, constraints, and decisions shaping the organization today.",
    deliverable: "A clear view of the real problem.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We organize what we learn into priorities, practical requirements, and a focused path forward.",
    deliverable: "A shared plan before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We design and develop the product in visible stages, keeping the work grounded in real use and regular feedback.",
    deliverable: "A working product shaped through collaboration.",
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "After launch, we evaluate what is working, improve what is not, and prepare the product for what comes next.",
    deliverable: "Software that can keep moving with the business.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="approach"
      aria-labelledby="process-heading"
      className="mes-section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mes-container">
        {/* SECTION: Introduction */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(26rem,1.15fr)] lg:items-end lg:gap-20">
          <div>
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              How the work moves
            </p>

            <h2
              id="process-heading"
              className="mt-6 max-w-[10ch] text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white"
            >
              Clear direction at every stage.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-2">
            <p className="mes-body-large">
              The process is collaborative, visible, and intentionally paced.
              Each stage creates enough clarity to make the next decision with
              confidence.
            </p>
          </div>
        </div>

        {/* SECTION: Process timeline */}
        <div className="relative mt-16 lg:mt-24">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[1.125rem] top-0 w-px bg-white/[0.08] lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.125rem] lg:h-px lg:w-auto"
          />

          <div className="grid gap-0 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article
                key={step.title}
                className={[
                  "group relative grid grid-cols-[2.25rem_minmax(0,1fr)] gap-5 border-b border-white/[0.08] py-10 lg:block lg:border-b-0 lg:px-8 lg:pb-4 lg:pt-0",
                  index === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/[0.08]",
                  index === processSteps.length - 1 ? "lg:pr-0" : "",
                ].join(" ")}
              >
                <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#070b12] transition-all duration-500 group-hover:border-blue-300 group-hover:bg-blue-400 group-hover:shadow-[0_0_20px_rgba(96,165,250,0.55)]">
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] text-white/45 transition-colors duration-500 group-hover:text-[#070b12]">
                    {step.number}
                  </span>
                </div>

                <div className="lg:mt-14">
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-white/72 transition-colors duration-500 group-hover:text-white sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 max-w-sm text-base leading-7 text-white/46">
                    {step.description}
                  </p>

                  <div className="mt-10 border-l border-white/10 pl-4 transition-colors duration-500 group-hover:border-blue-400/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/24">
                      Outcome
                    </p>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-white/52">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* SECTION: Collaboration note */}
        <div className="mt-20 grid gap-8 border-t border-white/[0.08] pt-10 lg:mt-28 lg:grid-cols-[minmax(0,0.7fr)_minmax(26rem,1.3fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/28">
              Built with you, not handed to you
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-white/72 sm:text-3xl">
              You remain part of the process from the first conversation
              through the decisions that shape the final product.
            </p>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-white"
            >
              Start a conversation

              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}