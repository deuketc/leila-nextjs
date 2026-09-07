import Image from "next/image";
import Link from "next/link";

import { latestProject } from "../_data/site";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image
          src={latestProject.image}
          alt={latestProject.imageAlt}
          fill
          priority
          sizes="(max-width: 700px) 100vw, 62vw"
        />
        <div className={styles.caption}>
          <span>{latestProject.title}</span>
          <span>{latestProject.location}</span>
        </div>
      </div>
      <div className={`${styles.copy} page-shell`}>
        <p className="eyebrow">Photographer / Auckland + beyond</p>
        <h1 className={styles.heading}>
          <span>Images with</span>
          <span>room to breathe.</span>
        </h1>
        <p className={styles["intro-copy"]}>
          Leila Khan makes photographs about presence, place, and the quiet
          details that stay with us.
        </p>
        <Link className={`${styles.link} button`} href="/gallery">
          Explore the gallery <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <span className={styles.scroll}>
        Scroll to explore <span aria-hidden="true">↓</span>
      </span>
    </section>
  );
}
