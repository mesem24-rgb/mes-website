import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { SiteFrame } from "@/components/layout/SiteFrame";

export const metadata: Metadata = {
  title: "Custom Construction Management Software | ConstructFlow",

  description:
    "ConstructFlow is a custom construction management software platform designed by MES for project tracking, daily logs, RFIs, change orders, documents, tasks, and construction operations.",

  alternates: {
    canonical: "/work/constructflow",
  },

  openGraph: {
    title: "ConstructFlow | Construction Management Software Case Study",
    description:
      "See how MES designed custom construction management software around project tracking, field operations, daily logs, RFIs, change orders, documents, and tasks.",
    url: "/work/constructflow",
    type: "article",
    images: [
      {
        url: "/images/products/constructFlow.jpg",
        width: 1440,
        height: 900,
        alt: "ConstructFlow custom construction management software dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ConstructFlow | Construction Management Software Case Study",
    description:
      "Custom construction software designed around projects, field operations, daily logs, RFIs, change orders, documents, and tasks.",
    images: ["/images/products/constructFlow.jpg"],
  },
};

const capabilities = [
  "Construction project tracking",
  "Construction daily logs",
  "RFI management",
  "Change order management",
  "Project document management",
  "Construction task management",
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "Vercel",
];

export default function ConstructFlowCaseStudy() {
  return (
    <SiteFrame>
      <main className="min-h-screen bg-[#070b12] text-white">
        <section className="mes-section">
          <div className="mes-container">
            <Link
              href="/#featured-work"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to featured work
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  Case study
                </p>

                <h1 className="mt-6 max-w-[10ch] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                  ConstructFlow
                </h1>

                <p className="mt-6 max-w-xl text-2xl leading-tight tracking-[-0.03em] text-white/75">
                  Bringing modern project management to construction teams.
                </p>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-base leading-8 text-white/48">
                  ConstructFlow is a custom construction management software
                  platform designed to replace disconnected spreadsheets,
                  paperwork, and manual communication with one clear workspace
                  for managing construction projects, field activity, and
                  day-to-day operations.
                </p>

                <a
                  href="https://construct-flow-psi.vercel.app/login"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 border-b border-white/15 pb-1.5 text-sm font-semibold text-white/65 transition-all hover:border-blue-400/60 hover:text-white"
                >
                  Explore the platform
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              <Image
                src="/images/products/constructFlow.jpg"
                alt="ConstructFlow construction management dashboard"
                width={1440}
                height={900}
                className="h-auto w-full"
                priority
              />
              <div className="grid border-x border-b border-white/[0.08] sm:grid-cols-3">
                <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                    Project type
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Business operations platform
                  </p>
                </div>

                <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                    Industry
                  </p>
                  <p className="mt-2 text-sm text-white/60">Construction</p>
                </div>

                <div className="px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                    Focus
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Workflow & project visibility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                The challenge
              </p>

              <h2 className="mt-5 max-w-[10ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Too many tools. Not enough visibility.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/48">
              Construction teams often rely on spreadsheets, email, paper forms,
              and disconnected systems to manage critical project information.
              That makes it harder to track progress, communicate clearly, and
              keep everyone aligned.
            </p>
          </div>
        </section>

        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                The solution
              </p>

              <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                One workspace built around the way projects move.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/48">
              ConstructFlow brings projects, daily logs, RFIs, change orders,
              documents, tasks, and project communication into one structured
              platform designed to make information easier to find and decisions
              easier to make.
            </p>
          </div>
        </section>

        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  Key product decisions
                </p>

                <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Organize the work around the decisions teams make every day.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-white/[0.08]">
                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">01</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      Put project visibility first
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      The dashboard was designed to surface the information
                      teams need most often—project status, priorities, budget
                      signals, tasks, and recent activity—without forcing users
                      to dig through multiple screens.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">02</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      Keep field activity connected to the project
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      Daily logs, tasks, documents, RFIs, and change orders live
                      within the same project structure so operational activity
                      stays tied to the work it affects.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">03</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      Make important workflows easy to follow
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      RFIs and change orders were treated as structured
                      workflows instead of loose notes, making their status and
                      impact easier to understand at a glance.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">04</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      Design for growth without creating clutter
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      The interface uses reusable modules and predictable
                      navigation so additional project workflows can be added
                      later without changing the way users understand the
                      platform.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                  Core capabilities
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/[0.08] py-4 text-sm text-white/60"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">
                  Built with
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {technologies.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-sm text-white/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <p className="mt-6 text-sm leading-7 text-white/45">
          Need a custom operational platform for your business?{" "}
          <Link
            href="/services"
            className="font-semibold text-white/65 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            Explore MES software development services.
          </Link>
        </p>

        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="max-w-3xl">
              <p className="mes-eyebrow">
                <span className="mes-accent-dot" />
                Need something similar?
              </p>

              <h2 className="mt-6 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                Let&apos;s build around the way your business works.
              </h2>

              <Link
                href="/#contact"
                className="mes-button mes-button-primary group mt-8 inline-flex"
              >
                Start a conversation
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
