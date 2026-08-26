import { ProjectCard } from "./project-card";
import { projects } from "../_data/site";

export function FeaturedWork() {
  return (
    <section
      className="featured-work page-shell"
      aria-labelledby="featured-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured-heading">Recent stories</h2>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
