import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type FounderSectionProps = {
  compact?: boolean;
};

export function FounderSection({
  compact = false,
}: FounderSectionProps) {
  if (compact) {
    return (
      <section
        aria-labelledby="founder-preview-heading"
        className="relative overflow-hidden border-y border-white/10 bg-[#252A30]/80 py-16 text-white sm:py-20"
      >
        <div className="mes-container">
          <div className="grid items-center gap-10 md:grid-cols-[220px_1fr] lg:gap-16">
            <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-lg bg-black">
              <Image
                src="/images/MESheadshotBlueEyes.png"
                alt="Michael Sullivan, founder of MES Solutions"
                fill
                sizes="(max-width: 768px) 60vw, 220px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                The person behind MES
              </p>

              <h2
                id="founder-preview-heading"
                className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl"
              >
                Built on experience.
                <span className="block text-white/60">
                  Driven by understanding.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
                MES combines real-world business experience
                with modern software development to build
                technology around the people who use it.
              </p>

              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-blue-300"
              >
                Meet the founder
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="founder-heading"
      className="relative overflow-hidden bg-[#252A30]/80 py-24 text-white sm:py-28 lg:py-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[35rem] w-[35rem] rounded-full bg-blue-500/[0.06] blur-[130px]"
      />

      <div className="mes-container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Meet the founder
            </p>

            <h2
              id="founder-heading"
              className="mt-8 max-w-[12ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.065em]"
            >
              Technology is personal.
            </h2>

            <p className="mt-4 max-w-[16ch] text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.045em] text-white/55">
              The way we build it should be, too.
            </p>

            <div className="mt-10 max-w-xl space-y-6 text-base leading-8 text-white/70">
              <p>
                I'm Michael Sullivan, founder of MES Solutions.
                Before moving into software development, I
                spent more than two decades leading teams,
                improving operations, and solving everyday
                business challenges.
              </p>

              <p>
                That experience shaped how I approach
                technology. I believe the best solutions
                begin with understanding how a business
                actually works—not simply choosing the
                newest tools.
              </p>

              <p>
                Today, I bring that operational perspective
                into every MES project, building websites,
                workflow systems, and practical software
                designed to make businesses more effective.
              </p>
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-lg font-semibold">
                Michael Sullivan
              </p>
              <p className="mt-1 text-sm text-white/50">
                Founder · MES Solutions
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px] lg:ml-auto">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-black">
              <Image
                src="/images/MESheadshotBlueEyes.png"
                alt="Portrait of Michael Sullivan, founder of MES Solutions"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                Meaningful. Empowering. Solutions.
              </p>
              <span className="h-px w-10 bg-blue-400/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}