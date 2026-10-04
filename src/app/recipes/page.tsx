import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "../_components/site-header";
import styles from "../journal/page.module.css";
import { recipeEntries } from "../_data/site";

export const metadata: Metadata = {
  title: "Recipes",
  description: "Seasonal recipes and simple pleasures from Leila Khan.",
};

export default function RecipesPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page">
        <div className="page-heading">
          <p className="eyebrow">From the kitchen</p>
          <h1>Recipes for gathering.</h1>
          <p>
            Simple, generous food for long tables, open windows, and the people
            you are glad to feed.
          </p>
        </div>
        <div className={styles.list}>
          {recipeEntries.map((entry) => (
            <Link
              className={styles.entry}
              href={`/recipes/${entry.slug}`}
              key={entry.slug}
            >
              <div className={styles["image-wrap"]}>
                <Image
                  src={entry.image}
                  alt={entry.imageAlt}
                  className={styles.image}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <div className={styles.content}>
                <div className="journal-entry-meta">
                  <span>{entry.category}</span>
                  <span>{entry.date}</span>
                </div>
                <h2>{entry.title}</h2>
                <p>{entry.excerpt}</p>
                <span className="text-link">
                  View recipe <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
