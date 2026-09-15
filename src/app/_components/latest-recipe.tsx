import Image from "next/image";
import Link from "next/link";

import { latestRecipeEntry } from "../_data/site";
import styles from "./latest-recipe.module.css";

export function LatestRecipe() {
  return (
    <section
      className={`${styles.section} page-shell`}
      aria-labelledby="recipe-heading"
    >
      <div className={styles.image}>
        <Image
          src={latestRecipeEntry.image}
          alt={latestRecipeEntry.imageAlt}
          className="zoom-media"
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
        />
      </div>
      <div className={styles.content}>
        <div className="journal-entry-meta">
          <span>{latestRecipeEntry.category}</span>
          <span>{latestRecipeEntry.date}</span>
        </div>
        <p className="eyebrow">Latest from the Kitchen</p>
        <h2 className={styles.heading} id="recipe-heading">
          {latestRecipeEntry.title}
        </h2>
        <p>{latestRecipeEntry.excerpt}</p>
        <Link
          className="text-link"
          href={`/recipes/${latestRecipeEntry.slug}`}
        >
          View recipe <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
