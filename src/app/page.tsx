import Link from "next/link";
import Image from "next/image";

import { ProjectCard } from "./_components/project-card";
import { SiteFooter, SiteHeader } from "./_components/site-header";
import { latestProject, projects } from "./_data/site";

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
        <section
          className="latest-gallery page-shell"
          aria-labelledby="gallery-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">Latest gallery</p>
            <h2 id="gallery-heading">{latestProject.title}</h2>
          </div>
          <Link className="gallery-link" href="/work">
            <div className="gallery-grid">
              {latestProject.gallery.map((image) => (
                <div className="gallery-image-wrap" key={image.imageAlt}>
                  <Image
                    src={image.image}
                    alt={image.imageAlt}
                    className="gallery-image"
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                  />
                </div>
              ))}
            </div>
            <span className="text-link">
              View full project <span aria-hidden="true">↗</span>
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
