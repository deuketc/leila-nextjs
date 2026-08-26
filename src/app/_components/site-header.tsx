import Link from "next/link";

import { navigation } from "../_data/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="/"
        aria-label="Leila Khan photography home"
      >
        Leila <span>Khan</span>
      </Link>
      <nav aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>Leila Khan Photography</span>
      <span>Auckland / Worldwide</span>
      <span>© {new Date().getFullYear()} Leila Khan</span>
    </footer>
  );
}
