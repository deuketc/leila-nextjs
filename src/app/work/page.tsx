import type { Metadata } from "next";

import { ProjectCard } from "../_components/project-card";
import { SiteFooter, SiteHeader } from "../_components/site-header";
import { projects } from "../_data/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected portrait, editorial, and landscape photography by Leila H.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page">
        <div className="page-heading">
          <p className="eyebrow">Portfolio</p>
          <h1>A collection of places and people.</h1>
          <p>
            A selection of commissioned and personal work, gathered from near
            and far.
          </p>
        </div>
        <div className="project-grid work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
