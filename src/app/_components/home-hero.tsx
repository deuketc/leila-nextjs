import Image from "next/image";
import Link from "next/link";

import { latestProject } from "../_data/site";
import styles from "./home-intro.module.css";

export function HomeIntro() {
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
        <Link className={`${styles.link} text-link`} href="/gallery">
          Explore the gallery <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles.caption}>
        <span>{latestProject.title}</span>
        <span>{latestProject.location}</span>
      </div>
      <span className={styles.scroll}>
        Scroll to explore <span aria-hidden="true">↓</span>
      </span>
    </section>
  );
}
