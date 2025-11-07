import React from "react";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import RainOverlay from "./components/rain-overlay";
import yosemiteBackground from "./public/assets/yosemite.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${yosemiteBackground.src})` }}
      >
        <RainOverlay />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
