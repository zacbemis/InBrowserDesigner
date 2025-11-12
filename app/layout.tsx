import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import yosemiteBackground from "./public/assets/yosemite.png";

export const metadata: Metadata = {
  title: "Zac Bemis | Software Engineer",
  description:
    "Portfolio of Zac Bemis, a software engineer and computer science student specializing in full-stack development, React, Next.js, and modern web technologies.",
  keywords: [
    "Zac Bemis",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Zac Bemis" }],
  openGraph: {
    title: "Zac Bemis | Software Engineer",
    description:
      "Portfolio of Zac Bemis, a software engineer and computer science student.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${yosemiteBackground.src})` }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
