import Link from "next/link";
import type { ReactElement } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { HiMail } from "react-icons/hi";

interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly Icon: React.ComponentType<{ className?: string }>;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:zac.bemis916@gmail.com",
    Icon: HiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/zacbemis",
    Icon: SiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zacbemis/",
    Icon: SiLinkedin,
  },
];

export default function Footer(): ReactElement {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex justify-center py-3">
      <div className="flex w-full max-w-4xl flex-col gap-4 px-4 text-sm text-white/80">
        <div
          className="flex flex-col gap-3 rounded-3xl border border-white/20 px-6 py-3 shadow-lg sm:flex-row sm:items-center sm:justify-between"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <span className="text-center text-xs uppercase tracking-[0.2em] text-white/60 sm:text-left">
            Get in touch
          </span>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            {contactLinks.map((link) => {
              const Icon = link.Icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}
