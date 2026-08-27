import Link from "next/link";

import { navigation } from "../_data/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={`${styles.header} site-header`}>
      <Link
        className={styles.wordmark}
        href="/"
        aria-label="Leila Khan photography home"
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
