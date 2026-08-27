import Image from "next/image";
import Link from "next/link";

import { latestProject } from "../_data/site";

export function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="home-intro-image">
        <Image
          src={latestProject.image}
          alt={latestProject.imageAlt}
          fill
          priority
          sizes="(max-width: 700px) 100vw, 62vw"
        />
      </div>
      <div className="home-intro-copy page-shell">
        <p className="eyebrow">Photographer / Auckland + beyond</p>
        <h1>
          <span>Images</span>
          <span>with room</span>
          <span>to breathe.</span>
        </h1>
        <p className="intro-copy">
          Leila Khan makes photographs about presence, place, and the quiet
          details that stay with us.
        </p>
        <Link className="text-link" href="/gallery">
          Explore the gallery <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="home-intro-caption">
        <span>{latestProject.title}</span>
        <span>{latestProject.location}</span>
      </div>
      <span className="home-intro-scroll">
        Scroll to explore <span aria-hidden="true">↓</span>
      </span>
    </section>
  );
}
