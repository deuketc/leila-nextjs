import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "../../_components/site-header";
import { recipeEntries } from "../../_data/site";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recipeEntries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = recipeEntries.find((item) => item.slug === slug);

  return {
    title: entry?.title ?? "Recipes",
    description: entry?.excerpt,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const entry = recipeEntries.find((item) => item.slug === slug);

  if (!entry) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="page-shell journal-detail">
        <Link className="back-link" href="/recipes">
          <span aria-hidden="true">←</span> Back to recipes
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
