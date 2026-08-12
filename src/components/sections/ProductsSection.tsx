import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  LayoutDashboard,
  PanelsTopLeft,
  Workflow,
} from "lucide-react";

type ProductArea = {
  number: string;
  title: string;
  description: string;
  examples: string[];
  icon: typeof LayoutDashboard;
};

const productAreas: ProductArea[] = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Thoughtful, responsive websites that clearly communicate what your business offers and give customers an easier way to take the next step.",
    examples: [
      "Small-business websites",
      "Service and marketing websites",
      "Website redesigns and improvements",
    ],
    icon: PanelsTopLeft,
  },
  {
    number: "02",
    title: "Operational platforms",
    description:
      "Custom systems that organize the daily work of the business and give teams a clearer way to manage what matters.",
    examples: [
      "Project management systems",
      "Internal operations dashboards",
      "Scheduling and workflow tools",
    ],
    icon: LayoutDashboard,
  },
  {
    number: "03",
    title: "Client and team portals",
    description:
      "Focused digital environments that make communication, collaboration, and access to information easier for everyone involved.",
    examples: [
      "Customer portals",
      "Team workspaces",
      "Reporting and document access",
    ],
    icon: BriefcaseBusiness,
  },
  {
    number: "04",
    title: "Workflow automation",
    description:
      "Connected tools that remove repetitive work, reduce handoffs, and create a more dependable flow of information.",
    examples: [
      "Approval workflows",
      "Data intake and routing",
      "System integrations",
    ],
    icon: Workflow,
  },
];

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="mes-section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mes-container">
        {/* SECTION: Introduction */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(26rem,1.12fr)] lg:items-end lg:gap-20">
          <div>
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              What we can create
            </p>

            <h2
              id="products-heading"
              className="mt-6 max-w-[14ch] text-[clamp(2.75rem,6vw,5.75rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white"
            >
              Websites and tools shaped around the work.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end lg:pb-2">
            <p className="mes-body-large">
              MES creates custom websites, internal business systems, and
              workflow applications for the places where generic tools no longer
              fit—or where a better digital experience can create meaningful
              business value.
            </p>
          </div>
        </div>

        {/* SECTION: Product areas */}
        <div className="mt-16 border-y border-white/[0.08] lg:mt-24">
          {productAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <article
                key={area.title}
                className={[
                  "group relative grid gap-8 py-10 sm:py-12 lg:grid-cols-[5rem_minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:items-start lg:gap-12 lg:py-14",
                  index !== 0 ? "border-t border-white/[0.08]" : "",
                ].join(" ")}
              >
                <div className="flex items-center gap-4 lg:block">
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/45">
                    {area.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/40 transition-all duration-500 group-hover:border-blue-300/25 group-hover:bg-blue-400/[0.08] group-hover:text-blue-200 lg:mt-8">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <h3 className="max-w-[10ch] text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-white/72 transition-colors duration-500 group-hover:text-white sm:text-4xl">
                    {area.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base leading-7 text-white/48">
                    {area.description}
                  </p>
                </div>

                <div className="lg:pl-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/24">
                    Examples
                  </p>

                  <ul className="mt-6 space-y-4">
                    {area.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-start gap-4 text-base leading-7 text-white/55"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-white/20 transition-all duration-500 group-hover:bg-blue-400 group-hover:shadow-[0_0_12px_rgba(96,165,250,0.7)]"
                        />

                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 top-0 w-px origin-center scale-y-0 bg-blue-400 transition-transform duration-500 group-hover:scale-y-100"
                />
              </article>
            );
          })}
        </div>

        {/* SECTION: Product philosophy */}
        <div className="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[minmax(0,0.72fr)_minmax(26rem,1.28fr)] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Not another generic platform
            </p>
          </div>

          <div>
            <p className="max-w-3xl text-2xl font-medium leading-[1.35] tracking-[-0.025em] text-white/72 sm:text-3xl">
              The goal is not to add more software. It is to create the right
              software for the decisions, workflows, and people that depend on
              it.
            </p>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors duration-300 hover:text-white"
            >
              Discuss a product idea
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
