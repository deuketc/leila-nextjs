import Image from "next/image";
import Link from "next/link";

import { latestJournalEntry } from "../_data/site";

export function LatestArticle() {
  return (
    <section className="latest-article page-shell" aria-labelledby="article-heading">
      <div className="latest-article-image">
        <Image
          src={latestJournalEntry.image}
          alt={latestJournalEntry.imageAlt}
          fill
          sizes="(max-width: 700px) 100vw, 55vw"
        />
      </div>
      <div className="latest-article-content">
        <div className="journal-entry-meta">
          <span>{latestJournalEntry.category}</span>
          <span>{latestJournalEntry.date}</span>
        </div>
        <p className="eyebrow">Latest from the Journal</p>
        <h2 id="article-heading">{latestJournalEntry.title}</h2>
        <p>{latestJournalEntry.excerpt}</p>
        <Link className="text-link" href={`/journal/${latestJournalEntry.slug}`}>
          Read more <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}