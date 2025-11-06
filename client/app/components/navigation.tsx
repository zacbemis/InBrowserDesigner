"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
