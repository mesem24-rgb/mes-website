import { Mail, Phone } from "lucide-react";

import { InquiryForm } from "@/components/contact/InquiryForm";

export function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mes-section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-[30rem] w-[30rem] rounded-full bg-blue-500/[0.05] blur-[130px]"
      />

      <div className="mes-container relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(32rem,1.25fr)] lg:gap-20">
          <div>
            <p className="mes-eyebrow">
              <span className="mes-accent-dot" />
              Start the conversation
            </p>

            <h2
              id="contact-heading"
              className="mt-6 max-w-[9ch] text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-white"
            >
              Tell me what is getting in the way.
            </h2>

            <p className="mt-8 max-w-lg text-base leading-8 text-white/50">
              Share the idea, obstacle, or workflow that needs attention. The
              first step is understanding the situation and identifying the
              right direction.
            </p>

            <div className="mt-10 space-y-4 border-t border-white/[0.08] pt-8">
              <h3 className="mb-6 text-lg font-medium text-white">
                Prefer to reach out directly?
              </h3>
              <a
                href="mailto:contact@mes-solutions.dev?subject=MES%20Project%20Inquiry"
                className="group flex items-center gap-4 text-sm text-white/50 transition-all duration-300 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
                  <Mail className="h-4 w-4" />
                </span>

                <span>contact@mes-solutions.dev</span>
              </a>

              <a
                href="tel:+12282092005"
                className="group flex items-center gap-4 text-sm text-white/50 transition-all duration-300 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
                  <Phone className="h-4 w-4" />
                </span>

                <span>(228) 209-2005</span>
              </a>
            </div>
          </div>

          <div className="mb-10 grid gap-6 border-y border-white/[0.08] py-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300/70">
                01
              </p>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Share the need
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                Tell me what you&apos;re trying to build, improve, or figure
                out.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300/70">
                02
              </p>

              <h3 className="mt-3 text-lg font-semibold text-white">
                We talk it through
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                The first conversation is about understanding the problem and
                the business.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-300/70">
                03
              </p>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Define the next step
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/55">
                If there&apos;s a good fit, we outline the right scope,
                priorities, and path forward.
              </p>
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
