import type { ReactElement } from "react";

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

          <p className="text-center text-base leading-relaxed text-white/80 sm:text-lg">
            I am a software engineer and computer science student at California
            State University, Sacramento. Software engineering gives me the outlet
            to be creative and solve problems in an ever expanding field. I also
            love studying philosophy, math, and physics. In my spare time I enjoy
            reading, rock climbing, and cycling.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
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
            Timeline
          </h2>

          <div className="my-6 h-px w-full bg-white/20" />

          <p className="text-center text-base leading-relaxed text-white/80 sm:text-lg">
            Timeline content coming soon...
          </p>
        </div>
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
