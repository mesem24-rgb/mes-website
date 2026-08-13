import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your MES inquiry has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[70vh] bg-[#070b12] text-white">
      <section className="mes-section">
        <div className="mes-container">
          <div className="max-w-3xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/20 bg-blue-400/10">
              <CheckCircle2
                aria-hidden="true"
                className="h-6 w-6 text-blue-300"
              />
            </div>

            <p className="mes-eyebrow mt-8">
              <span className="mes-accent-dot" />
              Inquiry received
            </p>

            <h1 className="mt-6 text-[clamp(3.5rem,8vw,7rem)] font-semibold leading-[0.92] tracking-[-0.07em]">
              Thanks for reaching out.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">
              I&apos;ll review what you shared and follow up to learn more about
              the business, the problem you&apos;re trying to solve, and the
              best next step.
            </p>

            <div className="mt-10 border-t border-white/[0.08] pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                What happens next
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-white/55">
                The first conversation is about understanding the need. You
                don&apos;t need a finished technical plan or complete list of
                requirements.
              </p>
            </div>

            <Link
              href="/"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Return home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}