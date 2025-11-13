"use client";

import type { ReactElement } from "react";
import { IoSparkles } from "react-icons/io5";
import { IoRainy } from "react-icons/io5";

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
      className="fixed left-3 top-3 z-[60] hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 shadow-lg transition-all hover:scale-110 hover:text-white md:flex"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
      aria-label={`Switch to ${mode === "stars" ? "rain" : "stars"} effect`}
    >
      {mode === "stars" ? (
        <IoSparkles className="h-5 w-5" />
      ) : (
        <IoRainy className="h-5 w-5" />
      )}
    </button>
  );
}
