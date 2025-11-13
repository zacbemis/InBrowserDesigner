import type { ReactElement } from "react";
import type { IconType } from "react-icons";
import Image, { StaticImageData } from "next/image";
import { SiGithub } from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";

export interface Project {
  readonly id: number;
  readonly image: StaticImageData | string;
  readonly title: string;
  readonly description: string;
  readonly technologies?: { name: string; Icon: IconType }[];
  readonly githubUrl?: string;
  readonly websiteUrl?: string;
}

interface ProjectCardProps {
  readonly project: Project;
}

function ProjectCard({ project }: ProjectCardProps): ReactElement {
  return (
    <div
      className="w-full rounded-2xl border border-white/20 p-6 shadow-lg"
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
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <h3 className="mt-4 text-lg uppercase tracking-[0.15em] text-white/90 sm:text-xl">
        {project.title}
      </h3>

      <div className="my-3 h-px w-full bg-white/20" />

      <div className="flex flex-col">
        <p className="text-left text-sm leading-relaxed text-white/80 sm:text-base">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-white/10"
              >
                <Icon className="h-3.5 w-3.5" />
                {name}
              </div>
            ))}
          </div>
        )}
      </div>

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
    <div className="columns-1 gap-8 w-full max-w-4xl md:columns-2">
      {projects.map((project) => (
        <div key={project.id} className="mb-8 break-inside-avoid">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
