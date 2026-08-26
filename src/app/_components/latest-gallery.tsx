import Image from "next/image";
import Link from "next/link";

import { latestProject } from "../_data/site";

export function LatestGallery() {
  return (
    <section
      className="latest-gallery page-shell"
      aria-labelledby="gallery-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">Latest gallery</p>
        <h2 id="gallery-heading">{latestProject.title}</h2>
      </div>
      <Link className="gallery-link" href="/gallery">
        <div className="gallery-grid">
          {latestProject.gallery.map((image) => (
            <div className="gallery-image-wrap" key={image.imageAlt}>
              <Image
                src={image.image}
                alt={image.imageAlt}
                className="gallery-image"
                fill
                sizes="(max-width: 700px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
        <span className="text-link">
          View full project <span aria-hidden="true">↗</span>
        </span>
      </Link>
    </section>
  );
}
