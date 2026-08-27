import Image from "next/image";
import Link from "next/link";

import { latestProject } from "../_data/site";
import styles from "./latest-gallery.module.css";

export function LatestGallery() {
  return (
    <section
      className={`${styles.section} page-shell`}
      aria-labelledby="gallery-heading"
    >
      <div className="section-heading">
        <p className="eyebrow">Latest gallery</p>
        <h2 id="gallery-heading">{latestProject.title}</h2>
      </div>
      <Link className={styles.link} href={`/gallery/${latestProject.slug}`}>
        <div className={styles.grid}>
          {latestProject.gallery.map((image) => (
            <div className={styles["image-wrap"]} key={image.imageAlt}>
              <Image
                src={image.image}
                alt={image.imageAlt}
                className={styles.image}
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
