import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { SiteFooter, SiteHeader } from "../../_components/site-header";
import { projects } from "../../_data/site";

type GalleryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return {
    title: project?.title ?? "Gallery",
    description: project
      ? `${project.category} photography from ${project.location} by Leila Khan.`
      : undefined,
  };
}

export default async function GalleryDetailPage({ params }: GalleryPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="page-shell gallery-detail">
        <Link className="back-link" href="/gallery">
          <span aria-hidden="true">←</span> Back to gallery
        </Link>
        <div className="gallery-detail-heading">
          <p className="eyebrow">
            {project.category} / {project.location}
          </p>
          <h1>{project.title}</h1>
        </div>
        <div className="gallery-detail-grid">
          {project.gallery.map((image, index) => (
            <div
              className={`gallery-detail-image gallery-detail-image-${index}`}
              key={image.imageAlt}
            >
              <Image
                src={image.image}
                alt={image.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
