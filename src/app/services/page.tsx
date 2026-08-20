import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Reveal } from "@/components/motion/Reveal";
import { SiteFrame } from "@/components/layout/SiteFrame";
import {
  ArrowLeft,
  ArrowUpRight,
  Blocks,
  Compass,
  LayoutDashboard,
  RefreshCw,
  Workflow,
  Globe2,
  BriefcaseBusiness,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software & Website Development | Gulfport, MS",

  description:
    "MES provides custom software development, business websites, workflow automation, CRM systems, and internal business tools for small and growing businesses in Gulfport and across the Mississippi Gulf Coast.",

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "Custom Software & Website Development | MES",
    description:
      "Custom websites, business applications, workflow automation, CRM systems, and internal tools built around the way your business works.",
    url: "/services",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Custom Software & Website Development | MES",
    description:
      "Custom websites and business software built around real business workflows.",
  },
};

const servicePaths = [
  {
    number: "01",
    icon: Blocks,
    title: "Build something new",
    description:
      "Turn an idea, manual process, or business need into a focused digital product designed around how the work actually happens.",
    services: [
      "Custom software development",
      "Workflow platforms",
      "Internal tools",
      "Client and team portals",
      "Custom CRM systems",
      "New product MVPs",
    ],
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Improve what exists",
    description:
      "Modernize an existing website, workflow, or software experience without automatically starting over from scratch.",
    services: [
      "Website redesigns",
      "Workflow improvement",
      "Interface modernization",
      "Process simplification",
      "Feature additions",
      "System usability improvements",
    ],
  },
  {
    number: "03",
    icon: Compass,
    title: "Find the right direction",
    description:
      "Clarify what should be built, what should be improved, and where technology can meaningfully support the business before development begins.",
    services: [
      "Software planning",
      "Workflow discovery",
      "Technology guidance",
      "MVP definition",
      "Feature prioritization",
      "Solution mapping",
    ],
  },
];

const serviceTypes = [
  {
    icon: Globe2,
    title: "Business websites",
    description:
      "Custom business websites designed to establish credibility, improve local visibility, explain your services clearly, and turn visitors into customer inquiries.",
    caseStudy: {
      label: "See Elite Ball Co.",
      href: "/work/elite-ball-co",
    },
  },
  {
    icon: LayoutDashboard,
    title: "Operational platforms",
    description:
      "Custom systems that bring projects, people, documents, tasks, and day-to-day workflows into one structured workspace.",
    caseStudy: {
      label: "See ConstructFlow",
      href: "/work/constructflow",
    },
  },
  {
    icon: BriefcaseBusiness,
    title: "Client & team portals",
    description:
      "Secure digital spaces for sharing information, managing activity, and keeping customers or internal teams connected.",
    caseStudy: {
      label: "See Compass CRM",
      href: "/work/compass-crm",
    },
  },
  {
    icon: Workflow,
    title: "Workflow automation",
    description:
      "Reduce repetitive work and disconnected handoffs by designing clearer digital processes around the way the organization operates.",
  },
  {
    icon: Wrench,
    title: "Internal business tools",
    description:
      "Focused software for the specific operational needs that spreadsheets, generic SaaS products, or manual processes do not handle well.",
  },
  {
    icon: Compass,
    title: "Software guidance",
    description:
      "Practical help defining requirements, evaluating options, and choosing a sensible path before committing time and money to development.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We begin with the business problem, current workflow, constraints, and the people who will actually use the solution.",
  },
  {
    number: "02",
    title: "Define",
    text: "The problem becomes a focused set of priorities, requirements, and decisions so the work has a clear direction.",
  },
  {
    number: "03",
    title: "Build",
    text: "The product is designed and developed in visible stages with opportunities for feedback throughout the process.",
  },
  {
    number: "04",
    title: "Improve",
    text: "After launch, the solution can evolve as the business learns, grows, and identifies what should come next.",
  },
];

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MES Software Development Services",
  serviceType: [
    "Custom Software Development",
    "Website Development",
    "Web Application Development",
    "Workflow Automation",
    "CRM Development",
    "Internal Business Tools",
    "Software Consulting",
  ],
  provider: {
    "@type": "Organization",
    name: "MES",
    url: "https://www.mes-solutions.dev",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Gulfport",
    },
    {
      "@type": "AdministrativeArea",
      name: "Mississippi Gulf Coast",
    },
  ],
  description:
    "MES provides custom software development, business websites, workflow automation, CRM systems, internal tools, and software consulting for small and growing businesses.",
  url: "https://www.mes-solutions.dev/services",
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <main className="min-h-screen bg-[#070b12] pt-20 text-white">
        {/* HERO */}
        <section className="mes-section">
          <div className="mes-container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  Services
                </p>

                <h1 className="mt-6 max-w-[10ch] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                  Software built around the way you work.
                </h1>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-white/52">
                  MES provides custom website and software development for small
                  and growing businesses in Gulfport and across the Mississippi
                  Gulf Coast, turning disconnected tools, manual processes, and
                  new ideas into focused digital solutions that are easier to
                  use and grow.
                </p>

                <Link
                  href="/#contact"
                  className="mes-button mes-button-primary group mt-8 inline-flex"
                >
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* THREE PATHS */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  Where do we begin?
                </p>

                <h2 className="mt-6 max-w-[10ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  Start with the situation, not the software.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/46 lg:pt-2">
                Not every business needs a brand-new application. Sometimes the
                right answer is improving what already exists. Sometimes the
                first step is simply figuring out what should happen next.
              </p>
            </div>

            <div className="mt-16 grid border-t border-white/[0.08] lg:mt-24">
              {servicePaths.map((path, index) => {
                const Icon = path.icon;

                return (
                  <Reveal key={path.number} delay={index * 90} direction="up">
                    <article className="grid gap-8 border-b border-white/[0.08] py-12 lg:grid-cols-[5rem_0.8fr_1.2fr] lg:gap-12 lg:py-16">
                      <div className="flex items-start gap-4 lg:block">
                        <span className="font-mono text-xs text-blue-300/75">
                          {path.number}
                        </span>

                        <div className="mt-0 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50 lg:mt-6">
                          <Icon className="h-4 w-4" />
                        </div>
                      </div>

                      <div>
                        <h3 className="max-w-[12ch] text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                          {path.title}
                        </h3>

                        <p className="mt-5 max-w-lg text-base leading-8 text-white/46">
                          {path.description}
                        </p>
                      </div>

                      <div className="grid gap-0 border-t border-white/[0.08] sm:grid-cols-2 lg:border-t-0">
                        {path.services.map((service) => (
                          <div
                            key={service}
                            className="border-b border-white/[0.08] py-4 text-sm text-white/55 sm:px-4 lg:first:pt-0"
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="mes-section relative overflow-hidden border-t border-white/[0.08] bg-[#252A30]/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.04] blur-[150px]"
          />

          <div className="mes-container relative">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  What we can create
                </p>

                <h2 className="mt-6 max-w-[10ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  Practical digital tools for real business needs.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/46 lg:pt-2">
                The technology changes from project to project. The goal stays
                the same: create something that makes the business clearer,
                easier to operate, or easier for customers to engage with.
              </p>
            </div>

            <div className="mt-16 grid border-t border-white/[0.08] sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
              {serviceTypes.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Reveal
                    key={service.title}
                    delay={(index % 3) * 80}
                    direction="up"
                    className="h-full"
                  >
                    <article
                      className={[
                        "group h-full border-b border-white/[0.08] px-0 py-10 sm:px-8 lg:min-h-[20rem] lg:border-r lg:px-10 lg:py-12",
                        index % 3 === 0 ? "lg:pl-0" : "",
                        (index + 1) % 3 === 0 ? "lg:border-r-0 lg:pr-0" : "",
                      ].join(" ")}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/45 transition-all duration-300 group-hover:border-blue-400/35 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white/80 transition-colors group-hover:text-white">
                        {service.title}
                      </h3>

                      <p className="mt-5 max-w-sm text-sm leading-7 text-white/43 sm:text-base sm:leading-8">
                        {service.description}
                      </p>

                      {service.caseStudy && (
                        <Link
                          href={service.caseStudy.href}
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/55 transition-colors hover:text-white"
                        >
                          {service.caseStudy.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  How the work moves
                </p>

                <h2 className="mt-6 max-w-[10ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  Clear direction at every stage.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/46 lg:pt-2">
                The process stays visible and collaborative. Each stage should
                create enough clarity to make the next decision confidently.
              </p>
            </div>

            <div className="mt-16 grid border-t border-white/[0.08] lg:mt-24 lg:grid-cols-4">
              {process.map((step, index) => (
                <Reveal
                  key={step.number}
                  delay={index * 85}
                  direction="up"
                  className="h-full"
                >
                  <article
                    key={step.number}
                    className={[
                      "border-b border-white/[0.08] py-10 lg:min-h-[20rem] lg:border-b-0 lg:px-8 lg:py-12",
                      index === 0
                        ? "lg:pl-0"
                        : "lg:border-l lg:border-white/[0.08]",
                      index === process.length - 1 ? "lg:pr-0" : "",
                    ].join(" ")}
                  >
                    <span className="font-mono text-xs text-blue-300/70">
                      {step.number}
                    </span>

                    <h3 className="mt-8 text-3xl font-semibold tracking-[-0.045em] text-white/80">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-white/44 sm:text-base sm:leading-8">
                      {step.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FIT */}
        <section className="mes-section relative overflow-hidden border-t border-white/[0.08] bg-[#252A30]/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-20 h-[32rem] w-[32rem] rounded-full bg-blue-500/[0.04] blur-[150px]"
          />

          <div className="mes-container relative">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  A good fit
                </p>

                <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  MES works best when the problem matters more than the
                  buzzwords.
                </h2>
              </div>

              <div className="grid gap-0 border-t border-white/[0.08]">
                {[
                  "You have a process that has outgrown spreadsheets or manual work.",
                  "Your current tools do not fit the way your team actually operates.",
                  "You need a professional web presence that better reflects the business.",
                  "You have an idea but need help defining what should be built first.",
                  "You want a collaborative development process with visible decisions and progress.",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/[0.08] py-6"
                  >
                    <span className="font-mono text-xs text-blue-300/65">
                      0{index + 1}
                    </span>

                    <p className="max-w-2xl text-base leading-8 text-white/55">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="max-w-4xl">
              <p className="mes-eyebrow">
                <span className="mes-accent-dot" />
                Start with the problem
              </p>

              <h2 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                Tell me what is getting in the way.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/48">
                You do not need to know what technology you need before reaching
                out. Start with the idea, obstacle, or workflow. We can
                determine the right direction from there.
              </p>

              <Link
                href="/#contact"
                className="mes-button mes-button-primary group mt-9 inline-flex"
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
