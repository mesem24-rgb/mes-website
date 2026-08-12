import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const navigation = [
  { label: "Journey", href: "#journey" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Approach", href: "#approach" },
  { label: "Products", href: "#products" },
  { label: "Featured Work", href: "#featured-work" },
  { label: "Contact", href: "#contact" },
];

const resources = [
  {
    label: "Portfolio",
    href: "https://michaelsullivan-portfolio-next-2.vercel.app/",
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
        <div className="grid gap-16 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:gap-12 lg:py-28">
          <div>
            <Link
              href="#"
              aria-label="MES home"
              className="group inline-flex items-center"
            >
              <span className="relative inline-flex items-center">
                <span className="text-2xl font-semibold tracking-[-0.065em] text-white">
                  MES
                </span>

                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-0 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.85)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(96,165,250,1)]"
                />
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-4xl">
              Meaningful.
              <br />
              Empowering.
              <br />
              Solutions.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Helping organizations build thoughtful software that fits the way
              they work.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Navigation
            </p>

            <nav
              aria-label="Footer navigation"
              className="mt-6 flex flex-col gap-4"
            >
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/48 transition-colors duration-300 hover:text-white"
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Resources
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {resources.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex w-fit items-center gap-2 text-sm text-white/48 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-white/22 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-300"
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Contact
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="mailto:contact@mes-solutions.dev"
                className="block text-sm text-white/48 transition-colors duration-300 hover:text-white"
              >
                contact@mes-solutions.dev
              </a>

              <a
                href="tel:+12282092005"
                className="block text-sm text-white/48 transition-colors duration-300 hover:text-white"
              >
                228-209-2005
              </a>
            </div>

            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-white/15 pb-1.5 text-sm font-semibold text-white/65 transition-all duration-300 hover:border-blue-400/20 hover:text-white"
            >
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MES. All rights reserved.</p>
          <Image
            src="/icons/ichthus-footer-mark.png"
            alt=""
            width={28}
            height={13}
            aria-hidden="true"
            className="h-auto w-7 opacity-20"
          />
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Built by Michael Sullivan</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <span>Gulfport, Mississippi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
