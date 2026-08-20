"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealDirection = "up" | "left" | "right" | "none";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  distance = 32,
  className = "",
  threshold = 0.2,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 0);

      return () => window.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const hiddenTransform = (() => {
    switch (direction) {
      case "left":
        return `translate3d(-${distance}px, 0, 0)`;

      case "right":
        return `translate3d(${distance}px, 0, 0)`;

      case "up":
        return `translate3d(0, ${distance}px, 0)`;

      default:
        return "translate3d(0, 0, 0)";
    }
  })();

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate3d(0, 0, 0)" : hiddenTransform,
    transitionProperty: "opacity, transform",
    transitionDuration: "750ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
    willChange: isVisible ? "auto" : "opacity, transform",
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
}
