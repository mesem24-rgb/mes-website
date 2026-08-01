import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type FeaturedProject = {
  name: string;
  category: string;
  headline: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  href: string;
  technologies: string[];
  capabilities: string[];
  cta: string;
};

const projects: FeaturedProject[] = [
  {
    name: "ConstructFlow",
    category: "Construction Management Platform",
    headline:
      "Bringing modern project management to construction teams.",
    challenge:
      "Construction teams often rely on disconnected tools, spreadsheets, and emails to manage projects, making it difficult to track progress, communicate effectively, and maintain visibility.",
    solution:
      "ConstructFlow brings project tracking, daily logs, RFIs, change orders, and document management into one structured platform designed around the way construction teams actually work.",
    image: "/images/products/constructFlow.jpg",
    imageAlt: "ConstructFlow construction management dashboard",
    href: "https://construct-flow-psi.vercel.app/login",
    cta: "Explore the platform",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    capabilities: [
      "Project tracking",
      "Daily logs",
      "RFIs",
      "Change orders",
      "Documents",
    ],
  },
  {
    name: "Compass CRM",
    category: "Recruiting Operations Platform",
    headline:
      "Simplifying recruiter workflows and client collaboration.",
    challenge:
      "Recruiting teams often rely on spreadsheets, emails, and disconnected tools to manage candidates, job orders, and client relationships, making it difficult to track progress and maintain visibility.",
    solution:
      "Compass CRM brings candidate management, job orders, recruiter assignments, client relationships, and pipeline activity into one structured platform designed around the way recruiting teams actually work.",
    image: "/images/products/compassCRM.jpg",
    imageAlt: "Compass CRM recruiting operations dashboard",
    href: "https://compass-recruiting-crm.vercel.app/",
    cta: "See the CRM",
    technologies: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    capabilities: [
      "Candidate pipeline",
      "Job orders",
      "Recruiter ownership",
      "Client management",
      "Workflow guidance",
    ],
  },
  {
    name: "MES",
    category: "Brand and Digital Experience",
    headline:
      "Built to demonstrate the philosophy behind the work.",
    challenge:
      "MES needed more than a standard marketing page. The experience had to communicate a thoughtful approach to software while giving potential clients a clear and comfortable path to begin a conversation.",
    solution:
      "The result is an editorial digital experience with restrained motion, responsive interaction, a living visual system, and a conversation-led structure designed to feel clear, intentional, and human.",
    image: "/images/products/mes-website.jpg",
    imageAlt: "MES website homepage",
    href: "#contact",
    cta: "Start a conversation",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Responsive design",
    ],
    capabilities: [
      "Editorial design",
      "Interaction design",
      "Accessibility",
      "Performance",
      "Inquiry workflow",
    ],
  },
];

function DetailList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/30">
        {label}
      </p>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="group flex items-center gap-3 text-sm text-white/48 transition-colors duration-300 hover:text-white/75"
          >
            <span
              aria-hidden="true"
              className="h-px w-5 shrink-0 bg-blue-400/40 transition-all duration-300 group-hover:w-7 group-hover:bg-blue-400/75"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoryBlock({
  label,
  children,
}: {
  label: string;
  children: string;
}) {
  return (
    <div className="border-l border-white/[0.09] pl-5">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-300/65">
        {label}
      </p>

      <p className="mt-3 max-w-[44ch] text-sm leading-7 text-white/46 sm:text-base sm:leading-8">
        {children}
      </p>
    </div>
  );
}

function ProjectVisual({
  project,
}: {
  project: FeaturedProject;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <a
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={`${project.cta}: ${project.name}`}
      className="group relative block"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 rounded-[2.5rem] bg-blue-500/[0.04] opacity-60 blur-[70px] transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#070b12] shadow-[0_28px_90px_rgba(0,0,0,0.28)] transition-transform duration-700 ease-out group-hover:-translate-y-1">
        <div className="flex h-10 items-center gap-1.5 border-b border-white/[0.08] bg-white/[0.025] px-4">
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

          <div className="ml-2 hidden h-4 max-w-[55%] flex-1 rounded border border-white/[0.05] bg-black/10 sm:block" />

          <span className="ml-auto flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-400 group-hover:text-[#070b12]">
            <ArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <div className="relative overflow-hidden bg-[#070b12]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={900}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070b12]/8 via-transparent to-white/[0.01]"
          />
        </div>
      </div>
    </a>
  );
}

function ProjectDetails({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const isExternal = project.href.startsWith("http");

  return (
    <div className="flex h-full flex-col justify-start lg:pt-1">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[0.7rem] font-medium tracking-[0.12em] text-blue-300/75">
          0{index + 1}
        </span>

        <span className="text-white/20">/</span>

        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/35">
          {project.category}
        </p>
      </div>

      <h3 className="mt-7 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-[3.5rem]">
        {project.name}
      </h3>

      <p className="mt-5 max-w-lg text-xl leading-[1.35] tracking-[-0.025em] text-white/78 sm:text-2xl">
        {project.headline}
      </p>

      <div className="mt-9 space-y-8">
        <StoryBlock label="The challenge">
          {project.challenge}
        </StoryBlock>

        <StoryBlock label="The solution">
          {project.solution}
        </StoryBlock>
      </div>

      <div className="mt-10 grid gap-10 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
        <DetailList
          label="Core modules"
          items={project.capabilities}
        />

        <DetailList
          label="Built with"
          items={project.technologies}
        />
      </div>

      <a
        href={project.href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group mt-10 inline-flex w-fit items-center gap-3 border-b border-white/15 pb-1.5 text-sm font-semibold text-white/65 transition-all duration-300 hover:border-blue-400/60 hover:text-white"
      >
        {project.cta}

        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </a>
    </div>
  );
}

export function FeaturedWork() {
  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="mes-section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-12rem] top-[20rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/[0.03] blur-[140px]"
      />

      <div className="mes-container relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(24rem,0.55fr)] lg:items-end lg:gap-20">
          <div>
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              Featured work
            </p>

            <h2
              id="featured-work-heading"
              className="mt-6 max-w-[10ch] text-[clamp(3.25rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-white"
            >
              Software built for real businesses.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-white/45 lg:pb-3">
            Every organization works differently. These projects show how MES
            approaches workflow, collaboration, and custom software around real
            operational needs.
          </p>
        </div>

        <div className="mt-20 border-t border-white/[0.08] sm:mt-28">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 0;

            return (
              <article
  key={project.name}
  className={[
    "grid gap-14 border-b border-white/[0.08] py-16 sm:py-20 lg:items-start lg:gap-20 lg:py-20",
    imageFirst
      ? "lg:grid-cols-[1.2fr_0.8fr]"
      : "lg:grid-cols-[0.8fr_1.2fr]",
  ].join(" ")}
>
  <div
    className={[
      "lg:pt-1",
      imageFirst ? "lg:order-1" : "lg:order-2",
    ].join(" ")}
  >
    <ProjectVisual project={project} />
  </div>

  <div
    className={
      imageFirst ? "lg:order-2" : "lg:order-1"
    }
  >
    <ProjectDetails
      project={project}
      index={index}
    />
  </div>
</article>
            );
          })}
        </div>
      </div>
    </section>
  );
}