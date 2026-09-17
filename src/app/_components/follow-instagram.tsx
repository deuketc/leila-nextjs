"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { instagramImages } from "../_data/site";
import styles from "./follow-instagram.module.css";

const instagramUrl = "https://www.instagram.com/leilahphotography/";
const PARALLAX_OFFSET = 10;
// Relative depth per image (further "back" images move less, "closer" ones move more).
const PARALLAX_DEPTHS = [0.6, 1.15, 0.85, 1.3, 1];

export function FollowInstagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context((self) => {
      const parallaxEls = (self.selector?.("[data-parallax]") ??
        []) as HTMLElement[];
      parallaxEls.forEach((el, index) => {
        const depth = PARALLAX_DEPTHS[index % PARALLAX_DEPTHS.length] ?? 1;
        const offset = PARALLAX_OFFSET * depth;
        gsap.fromTo(
          el,
          { yPercent: -offset },
          {
            yPercent: offset,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,

              onRefreshInit: () => gsap.set(el, { yPercent: 0 }),
            },
          },
        );
      });

      const isDesktop = window.matchMedia("(min-width: 701px)").matches;

      if (isDesktop && headingRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          pin: headingRef.current,
          pinSpacing: false,
          markers: process.env.NODE_ENV !== "production",
        });
      }

      if (headingTitleRef.current) {
        gsap.fromTo(
          headingTitleRef.current,
          { x: "100vw" },
          {
            x: "-100vw",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: isDesktop ? "top top" : "top bottom",
              end: isDesktop ? "+=150%" : "bottom top",
              scrub: true,
              markers: process.env.NODE_ENV !== "production",
            },
          },
        );
      }
    }, sectionRef);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section
      className={`${styles.section} page-shell`}
      aria-labelledby="instagram-heading"
      ref={sectionRef}
    >
      <div>
        <p className="eyebrow">@leilahphotography</p>
      </div>
      <div className={styles.heading} ref={headingRef}>
        <h2 id="instagram-heading" ref={headingTitleRef}>
          Follow me on Insta
        </h2>
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
            data-parallax
          >
            <Image
              src={item.image}
              alt={item.imageAlt}
              className="zoom-media"
              fill
              sizes="(max-width: 700px) 50vw, 20vw"
            />
          </Link>
        ))}
      </div>
      <div>
        <Link
          className={styles.cta}
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Visit Instagram <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
