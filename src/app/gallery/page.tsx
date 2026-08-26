import type { Metadata } from "next";

import { ProjectCard } from "../_components/project-card";
import { SiteFooter, SiteHeader } from "../_components/site-header";
import { projects } from "../_data/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Selected portrait, editorial, and landscape photography by Leila Khan.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page">
        <div className="page-heading">
          <p className="eyebrow">Gallery</p>
          <h1>A collection of places and people.</h1>
          <p>
            A selection of commissioned and personal photographs, gathered from
            near and far.
          </p>
        </div>
        <div className="project-grid project-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
