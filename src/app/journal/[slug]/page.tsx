import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "../../_components/site-header";
import { journalEntries } from "../../_data/site";

type JournalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return journalEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);

  return {
    title: entry?.title ?? "Journal",
    description: entry?.excerpt,
  };
}

export default async function JournalEntryPage({ params }: JournalPageProps) {
  const { slug } = await params;
  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="page-shell journal-detail">
        <Link className="back-link" href="/journal">
          <span aria-hidden="true">←</span> Back to journal
        </Link>
        <div className="journal-detail-heading">
          <div className="journal-entry-meta">
            <span>{entry.category}</span>
            <span>{entry.date}</span>
          </div>
          <h1>{entry.title}</h1>
          <p>{entry.excerpt}</p>
        </div>
        <div className="journal-detail-image">
          <Image
            src={entry.image}
            alt={entry.imageAlt}
            fill
            sizes="(max-width: 700px) 100vw, 80vw"
            priority
          />
        </div>
        <div className="journal-body">
          {entry.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
