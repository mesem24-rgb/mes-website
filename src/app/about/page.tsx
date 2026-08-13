import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  Handshake,
  Layers3,
} from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";

export const metadata: Metadata = {
  title: "About MES | Software Development in Gulfport, MS",

  description:
    "MES is a Gulfport, Mississippi software development business combining modern web development with more than 20 years of leadership and operations experience to build practical software around real business needs.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About MES | Software Development in Gulfport, MS",
    description:
      "Learn how MES combines business experience, thoughtful software development, and a collaborative approach to build solutions around the way businesses actually work.",
    url: "/about",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About MES | Software Development in Gulfport, MS",
    description:
      "Business experience and thoughtful software development brought together to solve real operational problems.",
  },
};

const principles = [
  {
    icon: BriefcaseBusiness,
    title: "Business first",
    description:
      "Technology is only useful when it supports the people, decisions, and workflows behind the business.",
  },
  {
    icon: Compass,
    title: "Clear direction",
    description:
      "Good software starts with understanding the problem well enough to know what should be built—and what should not.",
  },
  {
    icon: Handshake,
    title: "Built together",
    description:
      "Clients stay involved throughout the process so decisions remain visible, grounded, and connected to real needs.",
  },
  {
    icon: Layers3,
    title: "Designed to evolve",
    description:
      "The goal is not simply to launch something. It is to create a foundation that can continue growing with the business.",
  },
];

const values = [
  {
    word: "Meaningful",
    text: "Solve problems that matter to the business and the people doing the work.",
  },
  {
    word: "Empowering",
    text: "Give people more clarity, confidence, and control through better tools and better decisions.",
  },
  {
    word: "Solutions",
    text: "Focus on practical outcomes rather than technology for technology’s sake.",
  },
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <main className="min-h-screen bg-[#070b12] text-white">
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
                  About MES
                </p>

                <h1 className="mt-6 max-w-[10ch] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                  Software shaped by how businesses actually work.
                </h1>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-white/52">
                  Based in Gulfport, Mississippi, MES combines modern software
                  development with decades of business leadership and
                  operational experience to build thoughtful digital tools
                  around real workflows, real people, and real decisions.
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

        {/* ORIGIN */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  Where MES comes from
                </p>

                <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Built from the business side and the software side.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-base leading-8 text-white/52">
                  MES was founded by Michael Sullivan after more than two
                  decades leading teams, managing operations, solving process
                  problems, and working with people responsible for getting real
                  work done every day.
                </p>

                <p className="mt-6 text-base leading-8 text-white/52">
                  That experience shapes the way I approach software. I do not
                  begin with a framework, feature list, or technology stack. I
                  begin by understanding the business, the people using the
                  system, what is getting in the way, and what a better outcome
                  should actually look like.
                </p>

                <p className="mt-6 text-base leading-8 text-white/52">
                  MES grew from that perspective: practical software development
                  grounded in how organizations operate rather than forcing
                  organizations to work around the software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  How MES approaches the work
                </p>

                <h2 className="mt-6 max-w-[10ch] text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
                  Thoughtful software starts before the code.
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-white/46 lg:pt-2">
                The best solution is not always the biggest system or the newest
                technology. The work starts by identifying what will actually
                create clarity, reduce friction, and support the business.
              </p>
            </div>

            <div className="mt-16 grid border-t border-white/[0.08] sm:grid-cols-2 lg:mt-24">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className={[
                      "group border-b border-white/[0.08] py-10 sm:min-h-[18rem] sm:px-8 sm:py-12",
                      index % 2 === 0 ? "sm:border-r sm:pl-0" : "sm:pr-0",
                    ].join(" ")}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/45 transition-all duration-300 group-hover:border-blue-400/35 group-hover:bg-blue-500/10 group-hover:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-8 text-2xl font-semibold tracking-[-0.04em] text-white/80 transition-colors group-hover:text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-7 text-white/44 sm:text-base sm:leading-8">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* MEANINGFUL EMPOWERING SOLUTIONS */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  The name
                </p>

                <h2 className="mt-5 max-w-[10ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  Meaningful. Empowering. Solutions.
                </h2>
              </div>

              <div className="grid border-t border-white/[0.08]">
                {values.map((value, index) => (
                  <article
                    key={value.word}
                    className="grid gap-5 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_0.45fr_1fr] sm:gap-8"
                  >
                    <span className="font-mono text-xs text-blue-300/70">
                      0{index + 1}
                    </span>

                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {value.word}
                    </h3>

                    <p className="max-w-xl text-base leading-8 text-white/48">
                      {value.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WORKING RELATIONSHIP */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                  Working together
                </p>

                <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                  A collaborative process without the unnecessary mystery.
                </h2>
              </div>

              <div className="max-w-2xl">
                <p className="text-base leading-8 text-white/52">
                  Clients should understand what is being built, why decisions
                  are being made, and what comes next. MES keeps the process
                  visible so the work feels collaborative rather than something
                  disappearing behind a technical curtain.
                </p>

                <p className="mt-6 text-base leading-8 text-white/52">
                  That means clear communication, realistic expectations,
                  thoughtful recommendations, and the willingness to say when a
                  simpler solution may be better than a larger one.
                </p>
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
                Start with a conversation
              </p>

              <h2 className="mt-6 text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                Bring the problem. We&apos;ll figure out the right direction
                together.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/48">
                You do not need a finished specification or technical plan. If
                something is getting in the way of the business, that is enough
                to start the conversation.
              </p>

              <Link
                href="/#contact"
                className="mes-button mes-button-primary group mt-9 inline-flex"
              >
                Let&apos;s talk
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
