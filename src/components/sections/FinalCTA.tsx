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
                href="mailto:mesem24@gmail.com?subject=MES%20Project%20Inquiry"
                className="group flex items-center gap-4 text-sm text-white/50 transition-all duration-300 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-500/10">
                  <Mail className="h-4 w-4" />
                </span>

                <span>mesem24@gmail.com</span>
              </a>

              <a
                href="tel:+12282092005"
                className="group flex items-center gap-4 text-sm text-white/50 transition-all duration-300 hover:text-white"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover:border-blue-400/60 group-hover:bg-blue-500/10">
                  <Phone className="h-4 w-4" />
                </span>

                <span>(228) 209-2005</span>
              </a>
            </div>
          </div>

          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
