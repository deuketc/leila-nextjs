import Link from "next/link";

import { ProjectCard } from "./_components/project-card";
import { SiteFooter, SiteHeader } from "./_components/site-header";
import { projects } from "./_data/site";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="home-intro page-shell">
          <p className="eyebrow">Photographer / London + beyond</p>
          <h1>Images with room to breathe.</h1>
          <p className="intro-copy">
            Leila H. makes photographs about presence, place, and the quiet
            details that stay with us.
          </p>
          <Link className="text-link" href="/work">
            Explore the work <span aria-hidden="true">↗</span>
          </Link>
        </section>
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
      </main>
      <SiteFooter />
    </>
  );
}
