import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export const metadata: Metadata = {
  title: "Our Work | Websites & Custom Business Software",

  description:
    "Explore MES Solutions projects, including custom CRM systems, construction management software, business websites, and workflow applications built around real business needs.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Our Work | MES Solutions",
    description:
      "Explore custom business software, CRM systems, workflow applications, and website projects developed by MES Solutions.",
    url: "/work",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Work | MES Solutions",
    description:
      "See the websites, business applications, and custom software projects developed by MES Solutions.",
  },
};

export default function WorkPage() {
  return (
    <SiteFrame>
      <main className="min-h-screen bg-[#070b12] text-white">
        {/* INTRODUCTION */}
        <section className="mes-section">
          <div className="mes-container">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>

            <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  Selected work
                </p>

                <h1 className="mt-6 max-w-[10ch] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                  Different problems. Different solutions.
                </h1>
              </div>

              <div className="max-w-xl lg:justify-self-end">
                <p className="text-lg leading-8 text-white/52">
                  MES starts with the business need rather than a predefined
                  product. These projects show how different workflows,
                  industries, and goals can lead to very different solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FeaturedWork showIntro={false} />

        {/* CTA */}
        <section className="relative overflow-hidden border-t border-white/[0.08] bg-[#252A30]/60 py-20 sm:py-28 lg:py-32">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.045] blur-[140px]"
          />

          <div className="mes-container relative">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
              <div>
                <p className="mes-eyebrow">
                  <span className="mes-accent-dot" />
                  Your business is different
                </p>

                <h2 className="mt-7 max-w-[13ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-white">
                  Let's build something that works for yours.
                </h2>
              </div>

              <div className="lg:pb-2">
                <p className="max-w-md text-base leading-8 text-white/55">
                  You don't need to have every detail figured out. Tell us what
                  you're trying to accomplish, what's getting in the way, or
                  what you wish worked better. We'll help you find the right
                  starting point.
                </p>

                <Link
                  href="/#journey"
                  className="mes-button mes-button-primary group mt-9 inline-flex"
                >
                  Let's talk about your project
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
