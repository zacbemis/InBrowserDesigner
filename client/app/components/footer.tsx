import Link from "next/link";
import type { ReactElement } from "react";

const MailIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm1.5 0v.28l7.5 4.69 7.5-4.69V6.5a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm15 2.55-6.91 4.32a1 1 0 0 1-1.18 0L4.5 9.05V17.5a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V9.05Z"
      fill="currentColor"
    />
  </svg>
);

const GithubIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 1.5c-5.52 0-10 4.61-10 10.3 0 4.55 2.86 8.41 6.82 9.78.5.1.68-.23.68-.5v-1.83c-2.78.63-3.37-1.22-3.37-1.22-.46-1.23-1.14-1.55-1.14-1.55-.93-.66.07-.65.07-.65 1.03.07 1.57 1.09 1.57 1.09.9 1.59 2.36 1.13 2.94.86.09-.67.35-1.13.63-1.39-2.22-.27-4.56-1.15-4.56-5.16 0-1.14.39-2.07 1.04-2.8-.11-.28-.45-1.4.1-2.92 0 0 .84-.28 2.75 1.08a9.2 9.2 0 0 1 5 0c1.9-1.36 2.74-1.08 2.74-1.08.56 1.52.22 2.64.11 2.92.65.73 1.04 1.66 1.04 2.8 0 4.02-2.35 4.88-4.59 5.15.36.33.68.97.68 1.96v2.91c0 .27.18.6.69.5 3.96-1.37 6.82-5.23 6.82-9.78 0-5.69-4.48-10.3-10-10.3Z" />
  </svg>
);

const LinkedinIcon = (): ReactElement => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.25 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM4 8.25h2.5V20H4V8.25Zm5 0H11.5V10h.05c.35-.67 1.24-1.37 2.55-1.37 2.73 0 3.9 1.82 3.9 4.18V20H15.5v-6.18c0-1.48-.52-2.5-1.82-2.5-1 .02-1.68.66-1.86 1.59-.05.24-.07.53-.07.83V20H9V8.25Z" />
  </svg>
);

interface ContactLink {
  readonly label: string;
  readonly href: string;
  readonly icon: () => ReactElement;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: "mailto:zac.bemis916@gmail.com",
    icon: MailIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/zacbemis",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zacbemis/",
    icon: LinkedinIcon,
  },
];

export default function Footer(): ReactElement {
  return (
    <footer className="mt-auto w-full px-4 pb-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 text-sm text-white/80">
        <div
          className="flex flex-col gap-3 rounded-3xl border border-white/20 px-6 py-4 shadow-lg sm:flex-row sm:items-center sm:justify-between"
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
              const Icon = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 transition-opacity hover:opacity-80"
                >
                  <Icon />
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
