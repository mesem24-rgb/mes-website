"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navigationItems = [
  {
    label: "Journey",
    href: "#journey",
    sectionId: "journey",
  },
  {
    label: "Philosophy",
    href: "#philosophy",
    sectionId: "philosophy",
  },
  {
    label: "Approach",
    href: "#approach",
    sectionId: "approach",
  },
  {
    label: "Products",
    href: "#products",
    sectionId: "products",
  },
  {
    label: "Work",
    href: "#featured-work",
    sectionId: "featured-work",
  },
  {
    label: "Together",
    href: "#working-together",
    sectionId: "working-together",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio,
          );

        const mostVisibleSection = visibleEntries[0];

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/[0.07] bg-[#070b12]/78 shadow-[0_14px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mes-container">
        <div
          className={[
            "flex items-center justify-between transition-[height] duration-500",
            isScrolled ? "h-16" : "h-20",
          ].join(" ")}
        >
          {/* SECTION: Brand */}
          <Link
            href="#"
            aria-label="MES home"
            onClick={closeMenu}
            className="group relative z-50 flex items-center"
          >
            <span className="relative inline-flex items-center">
              <span
                className={[
                  "font-semibold tracking-[-0.065em] text-white transition-all duration-500",
                  isScrolled ? "text-lg" : "text-xl",
                ].join(" ")}
              >
                MES
              </span>

              <span
                aria-hidden="true"
                className={[
                  "absolute -right-3 rounded-full bg-blue-400 transition-all duration-500",
                  "shadow-[0_0_14px_rgba(96,165,250,0.85)]",
                  "group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(96,165,250,1)]",
                  isScrolled ? "top-0.5 h-1.5 w-1.5" : "top-0 h-1.5 w-1.5",
                ].join(" ")}
              />
            </span>
          </Link>

          {/* SECTION: Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 lg:flex"
          >
            {navigationItems.map((item) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "group relative flex items-center gap-2 py-2 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-white/55 hover:text-white",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all duration-300",
                      isActive ? "scale-100 opacity-100" : "scale-50 opacity-0",
                    ].join(" ")}
                  />

                  <span>{item.label}</span>

                  <span
                    aria-hidden="true"
                    className={[
                      "absolute bottom-0 left-0 h-px w-full origin-left bg-blue-400/80 transition-transform duration-300",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          {/* SECTION: Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="mes-button mes-button-secondary group hidden sm:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((current) => !current)}
              className="mes-icon-surface relative z-50 flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-white/10
bg-white/[0.03]
transition-all
hover:border-blue-400/40
hover:bg-blue-500/10
lg:hidden
"
            >
              {isMenuOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SECTION: Mobile navigation */}
      <div
        id="mobile-navigation"
        className={[
          "fixed inset-0 z-40 overflow-y-auto bg-[#070b12] transition-all duration-500 lg:hidden",
          isMenuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0",
        ].join(" ")}
      >
        <div className="mes-container flex min-h-[100svh] flex-col pb-8 pt-28">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navigationItems.map((item, index) => {
              const isActive = activeSection === item.sectionId;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                  className={[
                    "group flex items-center justify-between border-b border-white/[0.08] py-7 transition-all duration-500",
                    isMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0",
                  ].join(" ")}
                  style={{
                    transitionDelay: isMenuOpen
                      ? `${index * 70 + 80}ms`
                      : "0ms",
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className={[
                        "h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)] transition-all duration-300",
                        isActive
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0",
                      ].join(" ")}
                    />

                    <span
                      className={[
                        "text-3xl font-semibold tracking-[-0.045em] transition-colors duration-300",
                        isActive ? "text-white" : "text-white/60",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    aria-hidden="true"
                    className={[
                      "h-5 w-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                      isActive
                        ? "text-blue-300"
                        : "text-white/30 group-hover:text-blue-300",
                    ].join(" ")}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-12">
            <p className="mes-body max-w-sm">
              Have an idea, workflow, or business problem worth exploring?
            </p>

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mes-button mes-button-primary group mt-5 flex w-full justify-between"
            >
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <div className="mt-8 grid grid-cols-3 border-t border-white/[0.08] pt-6 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/25">
              <span>Meaningful</span>
              <span className="text-center">Empowering</span>
              <span className="text-right">Solutions</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
