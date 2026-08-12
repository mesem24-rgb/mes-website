import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-28 pt-28 md:pt-24 lg:pb-24 lg:pt-24">
      {/* SECTION: Hero lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="mes-glow h-[42rem] w-[42rem]"
          style={{
            left: "16%",
            top: "-8%",
            background: "rgba(59, 130, 246, 0.045)",
            filter: "blur(180px)",
          }}
        />

        <div
          className="absolute h-[28rem] w-[28rem] rounded-full blur-[140px]"
          style={{
            left: "38%",
            top: "18%",
            background: "rgba(59,130,246,.035)",
          }}
        />
      </div>

      {/* SECTION: Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      {/* SECTION: Hero content */}
      <div className="mes-container relative z-10">
        <div className="max-w-[72rem]">
          <div className="mes-eyebrow flex items-center gap-3">
            <span className="mes-accent-dot" />
            <span>Meaningful. Empowering. Solutions.</span>
          </div>

          <h1 className="mt-6 max-w-[10ch] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
            Software
            <br />
            <span className="text-white/90">that fits</span>
            <br />
            <span className="mes-accent-text">
              the way
              <br />
              you work.
            </span>
          </h1>

          <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,34rem)_auto] lg:items-end lg:gap-8">
            <p className="mes-body-large">
              MES designs custom websites and workflow software for small and
              growing businesses. Based in Gulfport and serving the Mississippi
              Gulf Coast, we shape every solution around the people, processes,
              and decisions that make your business unique.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row lg:justify-self-start">
              <TrackedLink
                href="/#journey"
                eventName="hero_cta_clicked"
                className="mes-button mes-button-primary group"
              >
                Tell us how you work
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </TrackedLink>

              <Button href="#approach" variant="secondary">
                Explore our approach
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: Scroll prompt */}
      <a
        href="#journey"
        className="group absolute bottom-7 right-[var(--mes-container-padding)] z-10 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-white xl:flex"
      >
        Begin the story
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.05]">
          <ArrowDown
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
          />
        </span>
      </a>
    </section>
  );
}
