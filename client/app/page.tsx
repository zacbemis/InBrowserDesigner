import type { ReactElement } from "react";
import Timeline, { type Experience } from "./components/timeline";

// Sample experience data - replace with your actual experiences
const experiences: Experience[] = [
  {
    id: 1,
    image: "/placeholder-1.jpg",
    title: "Software Engineer",
    description:
      "Developed and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
  },
  {
    id: 2,
    image: "/placeholder-2.jpg",
    title: "Computer Science Student",
    description:
      "Studying Computer Science at California State University, Sacramento. Focusing on algorithms, data structures, and software engineering principles.",
  },
  {
    id: 3,
    image: "/placeholder-3.jpg",
    title: "Open Source Contributor",
    description:
      "Contributing to various open-source projects, learning from the community, and giving back through code contributions and documentation improvements.",
  },
  {
    id: 4,
    image: "/placeholder-4.jpg",
    title: "Research Assistant",
    description:
      "Assisted in research projects exploring new technologies and methodologies. Conducted experiments and analyzed data to support academic publications.",
  },
];

export default function HomePage(): ReactElement {
  return (
    <main className="flex flex-col">
      {/* About Section */}
      <section
        id="about"
        className="flex min-h-screen items-center justify-center px-4 py-20"
      >
        <div
          className="w-full max-w-4xl rounded-3xl border border-white/20 px-8 py-10 shadow-lg sm:px-12 sm:py-14"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <h1 className="text-center text-2xl uppercase tracking-[0.2em] text-white/90 sm:text-3xl">
            Zac Bemis
          </h1>

          <div className="my-6 h-px w-full bg-white/20" />

          <p className="text-left text-base leading-relaxed text-white/80 sm:text-lg">
            I am a software engineer and computer science student at California
            State University, Sacramento. Software engineering gives me the
            outlet to be creative and solve problems in an ever expanding field.
            I also love studying philosophy, math, and physics. In my spare time
            I enjoy reading, rock climbing, and cycling.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        className="flex min-h-screen flex-col items-center justify-center px-4 py-20"
      >
        <h2 className="mb-12 text-center text-2xl uppercase tracking-[0.2em] text-white/90 sm:text-3xl">
          Timeline
        </h2>
        <Timeline experiences={experiences} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex min-h-screen items-center justify-center px-4 py-20"
      >
        <div
          className="w-full max-w-4xl rounded-3xl border border-white/20 px-8 py-10 shadow-lg sm:px-12 sm:py-14"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-center text-2xl uppercase tracking-[0.2em] text-white/90 sm:text-3xl">
            Projects
          </h2>

          <div className="my-6 h-px w-full bg-white/20" />

          <p className="text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Projects content coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
