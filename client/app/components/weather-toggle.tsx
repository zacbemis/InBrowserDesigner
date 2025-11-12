"use client";

import { useState } from "react";
import type { ReactElement } from "react";

const StarIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const RainIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2c.41 0 .75.34.75.75v1.5a.75.75 0 0 1-1.5 0v-1.5c0-.41.34-.75.75-.75Zm-7.07 3.52c.3-.3.77-.3 1.06 0l1.06 1.06a.75.75 0 1 1-1.06 1.06L4.93 6.58a.75.75 0 0 1 0-1.06Zm14.14 0c.3.3.3.77 0 1.06l-1.06 1.06a.75.75 0 1 1-1.06-1.06l1.06-1.06c.3-.3.77-.3 1.06 0ZM12 8a4 4 0 0 1 4 4 .75.75 0 0 0 1.5 0 5.5 5.5 0 0 0-11 0 .75.75 0 0 0 1.5 0 4 4 0 0 1 4-4Zm-8.25 4c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm15 0c0-.41.34-.75.75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM7.5 15.5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm4.5 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Zm4.5 0a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4c0-.41.34-.75.75-.75Z" />
  </svg>
);

interface WeatherToggleProps {
  readonly mode: "stars" | "rain";
  readonly onToggle: () => void;
}

export default function WeatherToggle({
  mode,
  onToggle,
}: WeatherToggleProps): ReactElement {
  return (
    <button
      onClick={onToggle}
      className="fixed left-3 top-3 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/80 shadow-lg transition-all hover:text-white hover:scale-110"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      aria-label={`Switch to ${mode === "stars" ? "rain" : "stars"} effect`}
    >
      {mode === "stars" ? <StarIcon /> : <RainIcon />}
    </button>
  );
}
