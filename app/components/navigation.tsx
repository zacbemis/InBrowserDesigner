"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface IndicatorState {
  readonly width: number;
  readonly left: number;
}

const INDICATOR_INSET = 6;

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#timeline", label: "Timeline" },
  { href: "#projects", label: "Projects" },
];

export default function Navigation(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState<IndicatorState | null>(null);

  const [activeHash, setActiveHash] = useState<string>("#about");

  const activeIndex = useMemo(() => {
    return NAV_LINKS.findIndex((link) => link.href === activeHash);
  }, [activeHash]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#about";
      setActiveHash(hash);
    };

    const handleScroll = () => {
      const sections = ["about", "timeline", "projects"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveHash(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set initial active section to About
    setActiveHash("#about");
  }, []);

  const setIndicatorFromIndex = useCallback((index: number | null) => {
    const container = containerRef.current;

    if (!container || index === null || index < 0) {
      setIndicator(null);
      return;
    }

    const element = linkRefs.current[index];

    if (!element) {
      setIndicator(null);
      return;
    }

    const width = Math.max(0, element.offsetWidth - INDICATOR_INSET * 2);
    const left = element.offsetLeft + INDICATOR_INSET;

    setIndicator({
      width,
      left,
    });
  }, []);

  useEffect(() => {
    setIndicatorFromIndex(activeIndex >= 0 ? activeIndex : null);
  }, [activeIndex, setIndicatorFromIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIndicatorFromIndex(activeIndex >= 0 ? activeIndex : null);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex, setIndicatorFromIndex]);

  const handleMouseEnter = useCallback(
    (index: number) => () => {
      setIndicatorFromIndex(index);
    },
    [setIndicatorFromIndex]
  );

  const handleMouseLeave = useCallback(() => {
    setIndicatorFromIndex(activeIndex >= 0 ? activeIndex : null);
  }, [activeIndex, setIndicatorFromIndex]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3">
      <div
        ref={containerRef}
        className="relative flex w-full max-w-[20rem] items-center gap-1 overflow-hidden rounded-full border border-white/20 px-0 py-2 shadow-lg"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        onMouseLeave={handleMouseLeave}
      >
        {indicator && (
          <span
            className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-full bg-white/20 transition-[left,width] duration-300 ease-out"
            style={{
              width: `${indicator.width}px`,
              left: `${indicator.left}px`,
            }}
          />
        )}
        {NAV_LINKS.map((link, index) => {
          const isActive = index === activeIndex;

          return (
            <a
              key={link.href}
              href={link.href}
              ref={(element) => {
                linkRefs.current[index] = element;
              }}
              onMouseEnter={handleMouseEnter(index)}
              onFocus={handleMouseEnter(index)}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(link.href);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                  setActiveHash(link.href);
                }
              }}
              className={`relative z-10 flex-1 whitespace-nowrap px-4 py-1.5 text-center text-xs uppercase tracking-[0.12em] transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/60 hover:text-white/80"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
