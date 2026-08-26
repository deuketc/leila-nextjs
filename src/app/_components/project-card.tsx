import Image from "next/image";
import Link from "next/link";

import type { Project } from "../_data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link className={`project-card ${project.size}`} href="/journal">
      <div className="project-image-wrap">
        <Image
          src={project.image}
          alt={project.imageAlt}
          className="project-image"
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
      <div className="project-meta">
        <span>{project.title}</span>
        <span>{project.category}</span>
      </div>
      <span className="project-location">{project.location}</span>
    </Link>
  );
}
