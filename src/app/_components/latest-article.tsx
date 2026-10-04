import Image from "next/image";
import Link from "next/link";

import { latestJournalEntry } from "../_data/site";
import styles from "./latest-article.module.css";

export function LatestArticle() {
  return (
    <section
      className={`${styles.section} page-shell`}
      aria-labelledby="article-heading"
    >
      <div className={styles.image}>
        <Image
          src={latestJournalEntry.image}
          alt={latestJournalEntry.imageAlt}
          className="zoom-media"
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
        />
      </div>
      <div className={styles.content}>
        <div className="journal-entry-meta meta-label">
          <span>{latestJournalEntry.category}</span>
          <span>{latestJournalEntry.date}</span>
        </div>
        <p className="eyebrow meta-label">Latest from the Journal</p>
        <h2 className="header-2" id="article-heading">
          {latestJournalEntry.title}
        </h2>
        <p className="body-copy">{latestJournalEntry.excerpt}</p>
        <Link
          className="text-link"
          href={`/journal/${latestJournalEntry.slug}`}
        >
          Read more <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
