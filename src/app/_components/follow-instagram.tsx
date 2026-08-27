import Image from "next/image";
import Link from "next/link";

import { instagramImages } from "../_data/site";

const instagramUrl = "https://www.instagram.com/leilahphotography/";

export function FollowInstagram() {
  return (
    <section
      className="follow-instagram page-shell"
      aria-labelledby="instagram-heading"
    >
      <div className="follow-instagram-heading">
        <p className="eyebrow">@leilahphotography</p>
        <h2 id="instagram-heading">Follow me on Insta</h2>
        <Link
          className="instagram-cta"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit Instagram <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className="instagram-grid">
        {instagramImages.map((item, index) => (
          <Link
            className={`instagram-image-wrap instagram-image-${index + 1}`}
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            key={item.imageAlt}
            aria-label={`View Leila's Instagram image ${index + 1}`}
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              className="instagram-image"
              fill
              sizes="(max-width: 700px) 50vw, 20vw"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
