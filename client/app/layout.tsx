import React from "react";
import "./globals.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
