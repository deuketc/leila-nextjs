"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { navigation } from "../_data/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={`${styles.header} site-header`}>
      <Link
        className={styles.wordmark}
        href="/"
        aria-label="Leila Khan photography home"
        onClick={() => setMenuOpen(false)}
      >
        Leila <span>Khan</span>
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        {navigation.map((item) => (
          <Link className={styles.navLink} key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <button
        type="button"
        className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
        aria-expanded={menuOpen}
        aria-controls="mobile-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>
      <nav
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <Link
            className={styles.mobileNavLink}
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} site-footer`}>
      <span>Leila Khan Photography</span>
      <span>Auckland / Worldwide</span>
      <span>© {new Date().getFullYear()} Leila Khan</span>
    </footer>
  );
}
