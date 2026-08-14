import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { SiteFrame } from "@/components/layout/SiteFrame";

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

const projects = [
  {
    name: "Compass CRM",
    category: "Recruiting operations platform",
    description:
      "Custom recruiting software designed around candidate management, job orders, recruiter ownership, client relationships, and pipeline visibility.",
    image: "/images/products/compassCRM.jpg",
    imageAlt: "Compass CRM recruiting operations dashboard",
    href: "/work/compass-crm",
  },
  {
    name: "ConstructFlow",
    category: "Construction management software",
    description:
      "A custom construction operations platform for projects, daily logs, RFIs, change orders, documents, tasks, and field activity.",
    image: "/images/products/constructFlow.jpg",
    imageAlt: "ConstructFlow construction management dashboard",
    href: "/work/constructflow",
  },
  {
    name: "Elite Ball Co.",
    category: "Small-business website",
    description:
      "A focused responsive website designed to establish credibility, present products clearly, communicate pricing, and create an easy customer journey.",
    image: "/images/products/elite-ball-co.jpg",
    imageAlt: "Elite Ball Co. small-business website",
    href: "/work/elite-ball-co",
  },
];

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

        {/* PROJECTS */}
        <section className="border-t border-white/[0.08]">
          <div className="mes-container">
            <div className="divide-y divide-white/[0.08]">
              {projects.map((project, index) => (
                <article
                  key={project.name}
                  className="grid gap-10 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20 lg:py-24"
                >
                  <Link
                    href={project.href}
                    className={[
                      "group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]",
                      index % 2 === 1 ? "lg:order-2" : "",
                    ].join(" ")}
                  >
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      width={1440}
                      height={900}
                      className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </Link>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                      0{index + 1} · {project.category}
                    </p>

                    <h2 className="mt-5 text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.06em]">
                      {project.name}
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-white/52">
                      {project.description}
                    </p>

                    <Link
                      href={project.href}
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
                    >
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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