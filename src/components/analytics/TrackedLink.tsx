"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import { trackClarityEvent } from "@/lib/clarity";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  target?: "_blank";
  rel?: string;
};

export function TrackedLink({
  href,
  eventName,
  children,
  className,
  ariaLabel,
  target,
  rel,
}: TrackedLinkProps) {
  const isExternal = href.startsWith("http");

  const handleClick = () => {
    trackClarityEvent(eventName);
  };

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
}