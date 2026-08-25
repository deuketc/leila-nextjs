import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Leila H. about photography commissions and projects.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page contact-page">
        <div className="page-heading">
          <p className="eyebrow">Start a conversation</p>
          <h1>Have a story in mind?</h1>
          <p>
            Tell me a little about what you are making, where you are going, or
            what you want to remember.
          </p>
        </div>
        <div className="contact-details">
          <Link
            className="contact-email"
            href="mailto:hello@leilahphotography.com"
          >
            hello@leilahphotography.com <span aria-hidden="true">↗</span>
          </Link>
          <div className="contact-meta">
            <p>Based in London</p>
            <p>Available worldwide</p>
            <p>Instagram / @leilahphotography</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
