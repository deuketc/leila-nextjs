import Link from "next/link";

export function HomeIntro() {
  return (
    <section className="home-intro page-shell">
      <p className="eyebrow">Photographer / Auckland + beyond</p>
      <h1>Images with room to breathe.</h1>
      <p className="intro-copy">
        Leila Khan makes photographs about presence, place, and the quiet
        details that stay with us.
      </p>
      <Link className="text-link" href="/gallery">
        Explore the gallery <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
