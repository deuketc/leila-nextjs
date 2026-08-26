import type { Metadata } from "next";
import Image from "next/image";

import { SiteFooter, SiteHeader } from "../_components/site-header";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Leila Khan and her approach to photography.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell inner-page about-page">
        <div className="page-heading">
          <p className="eyebrow">About Leila</p>
          <h1>Looking closely is a way of being present.</h1>
        </div>
        <div className="about-content">
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1100&q=85"
              alt="Portrait of a woman outdoors"
              fill
              sizes="(max-width: 700px) 100vw, 40vw"
            />
          </div>
          <div className="about-copy">
            <p className="large-copy">
              Leila is a photographer drawn to honest gestures, natural light,
              and the spaces between the obvious moments.
            </p>
            <p>
              Based in Auckland and available worldwide, she works across
              portrait, editorial, and commissioned stories. Her process is
              thoughtful and collaborative, leaving room for a little chance
              along the way.
            </p>
            <p>
              Away from the camera, you will usually find her walking somewhere
              green, collecting old cookbooks, or planning the next train
              journey.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
