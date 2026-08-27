import Image from "next/image";
import Link from "next/link";

import type { Project } from "../_data/site";
import styles from "./project-card.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      className={`${styles.card} ${styles[project.size]}`}
      href={`/gallery/${project.slug}`}
    >
      <div className={styles["image-wrap"]}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          className="zoom-media"
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
      <div className={`${styles.meta} project-meta`}>
        <span>{project.title}</span>
        <span>{project.category}</span>
      </div>
      <span className={`${styles.location} project-location`}>
        {project.location}
      </span>
    </Link>
  );
}
