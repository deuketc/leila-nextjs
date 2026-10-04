import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../_components/site-header";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Leila Khan about photography commissions and projects.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className={`page-shell inner-page ${styles.page}`}>
        <div className="page-heading">
          <p className="eyebrow">Start a conversation</p>
          <h1>Have a story in mind?</h1>
          <p>
            Tell me a little about what you are making, where you are going, or
            what you want to remember.
          </p>
        </div>
        <div className={styles.details}>
          <Link
            className={styles.email}
            href="mailto:hello@leilahphotography.com"
          >
            hello@leilahphotography.com <span aria-hidden="true">↗</span>
          </Link>
          <div className={styles.meta}>
            <p>Based in Auckland</p>
            <p>Available worldwide</p>
            <p>Instagram / @leilahphotography</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
