"use client";

import React, { useState } from "react";
import "./globals.css";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import ShootingStarsOverlay from "./components/shooting-stars-overlay";
import RainOverlay from "./components/rain-overlay";
import WeatherToggle from "./components/weather-toggle";
import yosemiteBackground from "./public/assets/yosemite.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [weatherMode, setWeatherMode] = useState<"stars" | "rain">("stars");

  const toggleWeather = () => {
    setWeatherMode((prev) => (prev === "stars" ? "rain" : "stars"));
  };

  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${yosemiteBackground.src})` }}
      >
        {weatherMode === "stars" ? <ShootingStarsOverlay /> : <RainOverlay />}
        <WeatherToggle mode={weatherMode} onToggle={toggleWeather} />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
