import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

const featuredProjects = [
  {
    number: "01",
    name: "ConstructFlow",
    category: "Construction Management Platform",
    description:
      "A centralized platform helping construction teams manage projects, tasks, RFIs, change orders, and daily operations.",
    image: "/images/products/constructFlow.jpg",
    imageAlt: "ConstructFlow management dashboard",
    href: "/work/constructflow",
  },
  {
    number: "02",
    name: "Compass CRM",
    category: "Recruiting Operations Platform",
    description:
      "A custom recruiting system connecting candidates, job orders, recruiter assignments, and client relationships.",
    image: "/images/products/compassCRM.jpg",
    imageAlt: "Compass CRM dashboard",
    href: "/work/compass-crm",
  },
];

export function FeaturedWorkPreview() {
  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="mes-section relative scroll-mt-24 overflow-hidden"
    >
      <div className="mes-container">
        {/* SECTION INTRO */}
        <Reveal direction="up" distance={24}>
          <div className="mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mes-eyebrow">
                <span className="mes-accent-dot" />
                Selected work
              </p>

              <h2
                id="featured-work-heading"
                className="mt-6 max-w-[13ch] text-[clamp(2.75rem,5vw,5rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-white"
              >
                Different needs.
                <br />
                Thoughtful solutions.
              </h2>
            </div>

            <p className="max-w-md text-base leading-8 text-white/50">
              From operational software to custom business tools, each project
              starts with understanding how people work.
            </p>
          </div>
        </Reveal>

        {/* PROJECT GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.name}
              direction="up"
              distance={24}
              delay={index * 100}
              threshold={0.15}
              className="h-full"
            >
              <article className="group flex h-full flex-col">
                <Link
                  href={project.href}
                  aria-label={`View ${project.name} case study`}
                  className="block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10151c]">
                    <div className="flex h-9 items-center gap-1.5 border-b border-white/[0.08] px-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

                      <ArrowUpRight
                        aria-hidden="true"
                        className="ml-auto h-4 w-4 text-white/40 transition-colors group-hover:text-blue-300"
                      />
                    </div>

                    <div className="overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        width={1440}
                        height={900}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.025] motion-reduce:transform-none"
                      />
                    </div>
                  </div>
                </Link>

                <div className="mt-7 flex items-center gap-3">
                  <span className="font-mono text-xs text-blue-300/75">
                    {project.number}
                  </span>

                  <span className="text-white/20">/</span>

                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                  {project.name}
                </h3>

                <p className="mt-4 max-w-lg text-base leading-7 text-white/50">
                  {project.description}
                </p>

                <Link
                  href={project.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-white/15 pb-1.5 text-sm font-semibold text-white/70 transition-colors hover:border-blue-400/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                >
                  View case study
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        {/* VIEW ALL WORK */}
        <Reveal direction="up" distance={20}>
          <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/45">
              More examples of what MES can build.
            </p>

            <Link
              href="/work"
              className="group inline-flex w-fit items-center gap-3 text-sm font-semibold text-white transition-colors hover:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
            >
              Explore all projects
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
