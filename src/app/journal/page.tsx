import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../_components/site-header";
import { journalEntries } from "../_data/site";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes, process, and stories from photographer Leila Khan.",
};

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page journal-page">
        <div className="page-heading">
          <p className="eyebrow">Notes from the road</p>
          <h1>The Journal</h1>
          <p>
            Small stories about making photographs, paying attention, and the
            places that keep calling us back.
          </p>
        </div>
        <div className="journal-list">
          {journalEntries.map((entry) => (
            <Link
              className="journal-entry"
              href={`/journal/${entry.slug}`}
              key={entry.slug}
            >
              <div className="journal-image-wrap">
                <Image
                  src={entry.image}
                  alt={entry.imageAlt}
                  className="journal-image zoom-media"
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
              </div>
              <div className="journal-entry-content">
                <div className="journal-entry-meta">
                  <span>{entry.category}</span>
                  <span>{entry.date}</span>
                </div>
                <h2>{entry.title}</h2>
                <p>{entry.excerpt}</p>
                <span className="text-link">
                  Read entry <span aria-hidden="true">↗</span>
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
