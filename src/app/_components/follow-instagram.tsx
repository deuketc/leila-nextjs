import Image from "next/image";
import Link from "next/link";

import { instagramImages } from "../_data/site";
import styles from "./follow-instagram.module.css";

const instagramUrl = "https://www.instagram.com/leilahphotography/";

export function FollowInstagram() {
  return (
    <section
      className={`${styles.section} page-shell`}
      aria-labelledby="instagram-heading"
    >
      <div className={styles.heading}>
        <p className="eyebrow">@leilahphotography</p>
        <h2 id="instagram-heading">Follow me on Insta</h2>
        <Link
          className={styles.cta}
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit Instagram <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={styles.grid}>
        {instagramImages.map((item, index) => (
          <Link
            className={`${styles["image-wrap"]} ${
              styles[`image-${index + 1}`] ?? ""
            }`}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            key={item.imageAlt}
            aria-label={`View Leila's Instagram image ${index + 1}`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              className={styles.image}
              fill
              sizes="(max-width: 700px) 50vw, 20vw"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
