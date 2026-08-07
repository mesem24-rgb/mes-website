import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const capabilities = [
  "Brand introduction",
  "Product education",
  "Pricing presentation",
  "Mobile experience",
  "Customer contact",
  "Ecommerce-ready foundation",
];

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Responsive design",
  "Vercel",
];

export const metadata: Metadata = {
  title: "Elite Ball Co. Case Study",
  description:
    "See how MES built a focused small-business website for Elite Ball Co., a reclaimed golf ball retailer serving golfers with clear product information and straightforward pricing.",

  alternates: {
    canonical: "/work/elite-ball-co",
  },

  openGraph: {
    title: "Elite Ball Co. Case Study | MES",
    description:
      "A focused small-business website designed to establish trust, explain reclaimed golf balls, and make the buying process easy to understand.",
    url: "/work/elite-ball-co",
    type: "article",
    images: [
      {
        url: "/images/products/elite-ball-co.jpg",
        width: 1440,
        height: 900,
        alt: "Elite Ball Co. reclaimed golf ball website",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Elite Ball Co. Case Study | MES",
    description:
      "A focused small-business website designed around reclaimed golf ball sales, product clarity, and a simple customer experience.",
    images: ["/images/products/elite-ball-co.jpg"],
  },
};

export default function EliteBallCoCaseStudy() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white">
      {/* HERO */}
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

              <h1 className="mt-6 max-w-[11ch] text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
                Elite Ball Co.
              </h1>

              <p className="mt-6 max-w-xl text-2xl leading-tight tracking-[-0.03em] text-white/75">
                Creating a trustworthy digital presence for quality reclaimed
                golf balls.
              </p>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-base leading-8 text-white/48">
                Elite Ball Co. needed a simple, credible website that could
                introduce the business, explain the value of reclaimed golf
                balls, communicate pricing clearly, and give customers an easy
                way to understand what they were buying.
              </p>

              <a
                href="PASTE_THE_LIVE_ELITE_BALL_CO_URL_HERE"
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 border-b border-white/15 pb-1.5 text-sm font-semibold text-white/65 transition-all hover:border-blue-400/60 hover:text-white"
              >
                Visit the website

                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="mt-16 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
            <Image
              src="/images/products/elite-ball-co.jpg"
              alt="Elite Ball Co. reclaimed golf ball website"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="grid border-x border-b border-white/[0.08] sm:grid-cols-3">
            <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/25">
                Project type
              </p>

              <p className="mt-2 text-sm text-white/60">
                Small-business website
              </p>
            </div>

            <div className="border-b border-white/[0.08] px-6 py-5 sm:border-b-0 sm:border-r">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/25">
                Industry
              </p>

              <p className="mt-2 text-sm text-white/60">
                Golf retail
              </p>
            </div>

            <div className="px-6 py-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-white/25">
                Focus
              </p>

              <p className="mt-2 text-sm text-white/60">
                Product clarity & customer trust
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="mes-section border-t border-white/[0.08]">
        <div className="mes-container grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
              The challenge
            </p>

            <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
              A good product still needs a clear story.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/48">
            Reclaimed golf balls can offer golfers strong value, but customers
            still need confidence in what they are buying. Elite Ball Co. needed
            a website that could establish credibility, explain the offering,
            communicate pricing, and make the business feel approachable from
            the first visit.
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
              Keep the experience simple and let the offer do the work.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-8 text-white/48">
            The site focuses on a direct customer journey: understand the
            business, see the reclaimed golf ball offering, understand the
            pricing, and know how to take the next step. The design stays clean
            and responsive so the product remains the center of attention.
          </p>
        </div>
      </section>

      {/* PRODUCT DECISIONS */}
      <section className="mes-section border-t border-white/[0.08]">
        <div className="mes-container">
          <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300/65">
                Key product decisions
              </p>

              <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
                Build confidence before adding complexity.
              </h2>
            </div>

            <div className="grid gap-0 border-t border-white/[0.08]">
              <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-blue-300/70">
                  01
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Lead with the product
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    The experience keeps reclaimed golf balls and their value
                    proposition visible early so visitors immediately understand
                    what Elite Ball Co. sells.
                  </p>
                </div>
              </article>

              <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-blue-300/70">
                  02
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Make pricing easy to understand
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    Pricing is presented directly rather than buried behind
                    unnecessary steps, giving customers a clearer path from
                    interest to purchase.
                  </p>
                </div>
              </article>

              <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-blue-300/70">
                  03
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Design for the phone first
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    A straightforward responsive layout ensures golfers can
                    understand the offer and contact the business without
                    needing a desktop experience.
                  </p>
                </div>
              </article>

              <article className="grid gap-4 border-b border-white/[0.08] py-8 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="font-mono text-xs text-blue-300/70">
                  04
                </span>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em]">
                    Leave room for the business to grow
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8">
                    The initial site establishes the brand and customer journey
                    without forcing unnecessary ecommerce complexity before the
                    business needs it.
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

      {/* CTA */}
      <section className="mes-section border-t border-white/[0.08]">
        <div className="mes-container">
          <div className="max-w-3xl">
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              Need something similar?
            </p>

            <h2 className="mt-6 text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.065em]">
              Give your business a digital presence that feels as credible as
              the work behind it.
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
  );
}