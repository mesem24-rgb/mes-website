import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = ["Understand", "Simplify", "Empower", "Evolve"];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="relative overflow-hidden bg-[#252A30]/80 py-24 text-[#F4F6F8] sm:py-28 lg:py-36"
    >
      {/* Subtle MES atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.055] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"
      />

      <div className="mes-container relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(30rem,1.2fr)] lg:items-start lg:gap-24">
          {/* SECTION: Introduction */}
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#929AA3]">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#298DFF] shadow-[0_0_12px_rgba(41,141,255,0.3)]"
              />
              What we believe
            </p>

            <p className="mt-8 max-w-sm text-sm leading-7 text-[#B8BEC5]">
              The best technology doesn&apos;t ask a business to change what
              makes it work. It removes friction, creates clarity, and gives
              people better tools to move forward.
            </p>
          </div>

          {/* SECTION: Philosophy statement */}
          <div>
            <h2
              id="philosophy-heading"
              className="max-w-[11ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#F4F6F8]"
            >
              Technology should adapt to people.
            </h2>

            <p className="mt-3 max-w-[11ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-[#AEB5BC]"
            >
              Not the other way around.
            </p>
          </div>
        </div>

        {/* SECTION: Principles */}
        <div className="mt-20 border-y border-white/10 lg:mt-28">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle, index) => (
              <div
                key={principle}
                className={[
                  "group py-7 sm:py-8",
                  index % 2 !== 0 ? "sm:border-l sm:border-white/10" : "",
                  index > 1 ? "sm:border-t sm:border-white/10" : "",
                  index > 0 ? "lg:border-l lg:border-white/10" : "",
                  "lg:border-t-0",
                ].join(" ")}
              >
                <div className="px-0 sm:px-7 lg:px-8">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#298DFF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-6 bg-white/15 transition-all duration-300 group-hover:w-10 group-hover:bg-[#298DFF]/60" />
                  </div>

                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.035em] text-[#F1F3F5] sm:text-2xl">
                    {principle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Closing thought */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mt-12">
          <p className="max-w-2xl text-base leading-8 text-[#B8BEC5]">
            Every MES project starts by understanding the people, processes,
            and decisions behind the technology.
          </p>

          <Link
            href="/about"
            className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#F1F3F5] transition-colors duration-300 hover:text-[#298DFF]"
          >
            Our approach
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}