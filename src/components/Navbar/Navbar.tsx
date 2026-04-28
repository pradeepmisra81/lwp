"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/ganit", label: "Ganit with LWP", emoji: "📐" },
  { href: "/finance", label: "Finance in LWP", emoji: "💰" },
  { href: "/sanskrit", label: "Sanskrit", emoji: "📜" },
  { href: "/hindi", label: "Hindi", emoji: "✍️" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>▶</span>
          <span className={styles.logoText}>
            LWP <span className={styles.logoAmpersand}>&</span> Vihang
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  pathname === link.href ? styles.active : ""
                }`}
              >
                <span className={styles.linkEmoji}>{link.emoji}</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* YouTube CTA */}
        <a
          href="https://www.youtube.com/@learningwithpkm-vihang"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.subscribeCta}
        >
          <svg
            className={styles.ytIcon}
            viewBox="0 0 24 24"
            fill="currentColor"
            width="18"
            height="18"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
          Subscribe
        </a>

        {/* Mobile Hamburger */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className={styles.mobileMenu}>
            <ul className={styles.mobileNavLinks}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.mobileNavLink} ${
                      pathname === link.href ? styles.active : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className={styles.linkEmoji}>{link.emoji}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://www.youtube.com/@learningwithpkm-vihang"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSubscribe}
            >
              Subscribe on YouTube
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
