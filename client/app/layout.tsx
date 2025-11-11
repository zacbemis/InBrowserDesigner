import React from "react";
import "./globals.css";
import Footer from "./components/footer";
import Navigation from "./components/navigation";
import ShootingStarsOverlay from "./components/shooting-stars-overlay";
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
        <ShootingStarsOverlay />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
