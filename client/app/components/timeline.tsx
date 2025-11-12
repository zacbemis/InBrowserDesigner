import type { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";

export interface Experience {
  readonly id: number;
  readonly image: StaticImageData | string;
  readonly title: string;
  readonly company: string;
  readonly date: string;
  readonly description: string;
}

interface ExperienceCardProps {
  readonly experience: Experience;
}

function ExperienceCard({ experience }: ExperienceCardProps): ReactElement {
  return (
    <div
      className="w-full max-w-sm rounded-2xl border border-white/20 p-6 shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg uppercase tracking-[0.15em] text-white/90 sm:text-xl">
        {experience.title}
      </h3>

      <p className="mt-1 text-left text-xs text-white/60 sm:text-sm">
        {experience.company}
      </p>

      <div className="my-3 h-px w-full bg-white/20" />

      <p className="text-left text-sm leading-relaxed text-white/80 sm:text-base">
        {experience.description}
      </p>
    </div>
  );
}

interface TimelineProps {
  readonly experiences: Experience[];
}

export default function Timeline({ experiences }: TimelineProps): ReactElement {
  return (
    <div className="relative w-full max-w-6xl">
      {/* Vertical center line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/20" />

      {/* Timeline items */}
      <div className="space-y-16 py-8">
        {experiences.map((experience, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          const isLeft = side === "left";

          return (
            <div
              key={experience.id}
              className={`relative flex items-center gap-8 ${
                isLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="w-1/2 flex justify-center">
                <ExperienceCard experience={experience} />
              </div>

              {/* Branch line and dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Center dot */}
                <div className="h-3 w-3 rounded-full border-2 border-white/40 bg-white/20" />
                
                {/* Horizontal branch line */}
                <div
                  className={`absolute top-1/2 h-px w-16 -translate-y-1/2 bg-white/20 ${
                    isLeft ? "right-full" : "left-full"
                  }`}
                />
              </div>

              {/* Date on opposite side */}
              <div className="w-1/2 flex justify-center">
                <p className="text-sm uppercase tracking-[0.15em] text-white/70 sm:text-base">
                  {experience.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
