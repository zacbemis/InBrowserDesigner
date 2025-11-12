import type { ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export interface Project {
  readonly id: number;
  readonly image: StaticImageData | string;
  readonly title: string;
  readonly description: string;
  readonly githubUrl?: string;
  readonly websiteUrl?: string;
}

interface ProjectCardProps {
  readonly project: Project;
}

function ProjectCard({ project }: ProjectCardProps): ReactElement {
  return (
    <div
      className="flex h-full w-full flex-col rounded-2xl border border-white/20 p-6 shadow-lg"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg uppercase tracking-[0.15em] text-white/90 sm:text-xl">
        {project.title}
      </h3>

      <div className="my-3 h-px w-full bg-white/20" />

      <p className="flex-1 text-left text-sm leading-relaxed text-white/80 sm:text-base">
        {project.description}
      </p>

      {(project.githubUrl || project.websiteUrl) && (
        <div className="mt-4 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
            >
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white sm:text-sm"
            >
              <HiExternalLink className="h-4 w-4" />
              Website
            </a>
          )}
        </div>
      )}
    </div>
  );
}

interface ProjectsProps {
  readonly projects: Project[];
}

export default function Projects({ projects }: ProjectsProps): ReactElement {
  return (
    <div className="grid w-full max-w-6xl auto-rows-fr grid-cols-1 gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
