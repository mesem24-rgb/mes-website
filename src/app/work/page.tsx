import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/layout/SiteFrame";
import { FeaturedWork } from "@/components/sections/FeaturedWork";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Explore MES case studies including custom recruiting software, construction management software, and small-business website development.",

  alternates: {
    canonical: "/work",
  },

  openGraph: {
    title: "Selected Work | MES",
    description:
      "See how MES approaches different business problems through custom software, workflow platforms, and focused business websites.",
    url: "/work",
    type: "website",
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
        <FeaturedWork />

        {/* CTA */}
        <section className="mes-section border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="max-w-3xl">
              <p className="mes-eyebrow">
                <span className="mes-accent-dot" />
                Your project will look different
              </p>

              <h2 className="mt-6 text-[clamp(3rem,7vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
                The right solution starts with understanding the problem.
              </h2>

              <Link
                href="/#journey"
                className="mes-button mes-button-primary group mt-9 inline-flex"
              >
                Find your starting point
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
