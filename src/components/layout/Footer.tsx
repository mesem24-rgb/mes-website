import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navigation = [
  { label: "Journey", href: "/#journey" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

const resources = [
  {
    label: "Portfolio",
    href: "https://portfolio.mes-solutions.dev",
  },
  {
    label: "GitHub",
    href: "https://github.com/mesem24-rgb",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/michael-sullivan-92990ba2",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#05080d]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-18rem] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-blue-500/[0.04] blur-[140px]"
      />

      <div className="mes-container relative">
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="MES home"
              className="group inline-flex items-center"
            >
              <span className="relative inline-flex items-center">
                <span className="text-2xl font-semibold tracking-[-0.065em] text-white">
                  MES
                </span>

                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-0 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.85)] transition-all duration-300 group-hover:scale-125"
                />
              </span>
            </Link>

            <p className="mt-6 max-w-md text-2xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-3xl">
              Software that fits
              <br />
              the way you work.
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Meaningful. Empowering. Solutions.
            </p>

            <Link
              href="/#journey"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
            >
              Find your starting point
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Explore
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col gap-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className="h-px w-0 bg-blue-400/70 transition-all duration-300 group-hover:w-4"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {resources.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-white/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                  />
                </a>
              ))}

              <a
                href="mailto:contact@mes-solutions.dev?subject=MES%20Project%20Inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                contact@mes-solutions.dev
              </a>

              <a
                href="tel:+16019095858"
                className="text-sm text-white/50 transition-colors duration-300 hover:text-white"
              >
                601-909-5858
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 text-xs text-white/35 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <p>© {currentYear} MES. All rights reserved.</p>

            <Image
              src="/icons/ichthus-footer-mark.png"
              alt=""
              width={28}
              height={13}
              aria-hidden="true"
              className="h-auto w-7 opacity-20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Built by Michael Sullivan</span>

            <span className="hidden h-1 w-1 rounded-full bg-white/20 lg:block" />

            <span>Gulfport, Mississippi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
