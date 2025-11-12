"use client";

import React, { useState } from "react";
import ShootingStarsOverlay from "./components/shooting-stars-overlay";
import RainOverlay from "./components/rain-overlay";
import WeatherToggle from "./components/weather-toggle";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [weatherMode, setWeatherMode] = useState<"stars" | "rain">("stars");

  const toggleWeather = () => {
    setWeatherMode((prev) => (prev === "stars" ? "rain" : "stars"));
  };

  return (
    <>
      {weatherMode === "stars" ? <ShootingStarsOverlay /> : <RainOverlay />}
      <WeatherToggle mode={weatherMode} onToggle={toggleWeather} />
      <Navigation />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  );
}
