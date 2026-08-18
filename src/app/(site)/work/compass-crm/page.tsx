import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

const capabilities = [
  "Candidate management & search",
  "Job order management",
  "Recruiter ownership",
  "Client management",
  "Assignment locking",
  "Recruiting workflow guidance",
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Vercel",
];

export const metadata: Metadata = {
  title: "Custom Recruiting CRM Development | Compass CRM",

  description:
    "Compass CRM is a custom recruiting software platform designed by MES for candidate management, job orders, recruiter ownership, client management, candidate search, and recruiting pipeline workflows.",

  alternates: {
    canonical: "/work/compass-crm",
  },

  openGraph: {
    title: "Compass CRM | Custom Recruiting CRM Case Study",
    description:
      "See how MES designed a custom recruiting CRM around candidate management, job orders, recruiter ownership, client relationships, and recruiting workflows.",
    url: "/work/compass-crm",
    type: "article",
    images: [
      {
        url: "/images/products/compassCRM.jpg",
        width: 1440,
        height: 900,
        alt: "Compass CRM custom recruiting software dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Compass CRM | Custom Recruiting CRM Case Study",
    description:
      "Custom recruiting software designed around candidate management, recruiter ownership, job orders, clients, and pipeline workflows.",
    images: ["/images/products/compassCRM.jpg"],
  },
};

export default function CompassCRMCaseStudy() {
  return (
    <SiteFrame>
      <main className="min-h-screen bg-[#070b12] text-white">
        {/* HERO */}
        <section className="mes-section">
          <div className="mes-container">
            <Link
              href="/work#featured-work"
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
                  Compass CRM
                </h1>

                <p className="mt-6 max-w-xl text-2xl leading-tight tracking-[-0.03em] text-white/75">
                  Simplifying recruiter workflows and client collaboration.
                </p>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-base leading-8 text-white/48">
                  Compass CRM is a custom recruiting software platform designed
                  to bring candidate management, job orders, recruiter
                  assignments, client relationships, and pipeline activity into
                  one structured recruiting workspace.
                </p>

                <a
                  href="https://compass-recruiting-crm.vercel.app/"
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
                src="/images/products/compassCRM.jpg"
                alt="Compass CRM recruiting operations dashboard"
                width={1440}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>

            <div className="grid border-x border-b border-white/[0.08] sm:grid-cols-3">
              <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                  Project type
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Recruiting operations platform
                </p>
              </div>

              <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                  Industry
                </p>
                <p className="mt-2 text-sm text-white/60">Recruiting</p>
              </div>

              <div className="px-6 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
                  Focus
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Workflow & ownership visibility
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="mes-section relative overflow-hidden border-t border-white/[0.08] bg-[#252A30]/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.04] blur-[140px]"
          />

          <div className="mes-container relative grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                The challenge
              </p>

              <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Too much recruiting activity spread across too many places.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/48">
              Recruiting teams need to manage candidates, job orders, recruiter
              responsibilities, client relationships, replacements, and pipeline
              activity at the same time. When those workflows live in separate
              spreadsheets, inboxes, and tools, ownership becomes unclear and
              important work is easier to miss.
            </p>
          </div>
        </section>

        {/* SOLUTION */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                The solution
              </p>

              <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                One system that keeps recruiters moving through the work.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-white/48">
              Compass CRM organizes candidate management, job orders, recruiter
              assignments, ownership rules, clients, and pipeline activity
              around a clear recruiting workflow so users can understand what
              needs attention and who is responsible for it.
            </p>
          </div>
        </section>

        {/* PRODUCT DECISIONS */}
        <section className="mes-section relative overflow-hidden border-t border-white/[0.08] bg-[#252A30]/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-20 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.04] blur-[140px]"
          />

          <div className="mes-container relative">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  Key product decisions
                </p>

                <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Make ownership, priority, and next actions obvious.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-white/[0.08]">
                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">01</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      Treat recruiter ownership as part of the workflow
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      Assignment ownership is visible inside the platform so
                      recruiters can understand who is responsible for a job and
                      when that responsibility changes.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">02</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      Make candidate search operational, not just searchable
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      Candidate information is structured around skills,
                      keywords, location, and recruiting needs so the database
                      supports real placement decisions rather than acting as a
                      passive contact list.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">03</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      Surface priority work
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      Job orders, replacements, candidate activity, and
                      recruiter assignments are presented in ways that help
                      users identify what requires attention next.
                    </p>
                  </div>
                </article>

                <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-xs text-blue-300/70">04</span>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      Give administrators visibility without slowing recruiters
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                      Administrative controls and reporting can sit above the
                      recruiter workflow while the daily experience remains
                      focused on candidates, jobs, clients, and placements.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
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
          Looking for a custom CRM or workflow platform?{" "}
          <Link
            href="/services"
            className="font-semibold text-white/65 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            Explore MES software development services.
          </Link>
        </p>

        {/* CTA */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="max-w-3xl">
              <p className="mes-eyebrow">
                <span className="mes-accent-dot" />
                Need something similar?
              </p>

              <h2 className="mt-6 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                Let&apos;s build around the way your team actually works.
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