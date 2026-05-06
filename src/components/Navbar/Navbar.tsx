"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    <header className="fixed top-0 left-0 right-0 z-[100] bg-[rgba(10,10,26,0.85)] backdrop-blur-[20px] border-b border-border-subtle transition-all duration-300">
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px] gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0 group">
          <span className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-md text-[14px] shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-transform duration-150 group-hover:scale-110">▶</span>
          <span className="text-lg sm:text-xl font-bold text-text-primary tracking-[-0.02em]">
            LWP <span className="text-primary-400 font-light mx-[2px]">&</span> Vihang
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden min-[900px]:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative flex items-center gap-2 py-2 px-3 rounded-md text-sm font-medium text-text-secondary no-underline transition-all duration-150 whitespace-nowrap hover:text-text-primary hover:bg-bg-glass-hover ${
                  pathname === link.href ? "text-primary-400 bg-[rgba(249,115,22,0.1)] after:content-[''] after:absolute after:-bottom-[2px] after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-[2px] after:bg-primary-400 after:rounded-full" : ""
                }`}
              >
                <span className="text-base">{link.emoji}</span>
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
          className="hidden min-[900px]:flex items-center gap-2 py-2 px-4 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-full text-sm font-semibold no-underline transition-all duration-150 whitespace-nowrap shadow-[0_2px_12px_rgba(255,0,0,0.2)] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(255,0,0,0.35)]"
        >
          <svg
            className="shrink-0"
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
          className="flex min-[900px]:hidden flex-col gap-[5px] p-2 cursor-pointer z-[110]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-150 ${mobileOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-150 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-150 ${mobileOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''}`} />
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-[rgba(10,10,26,0.97)] backdrop-blur-[20px] py-8 px-6 animate-[fadeIn_0.2s_ease] z-[99] flex flex-col gap-6">
            <ul className="list-none p-0 m-0 flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-3 py-4 px-4 rounded-lg text-lg font-medium text-text-secondary no-underline transition-all duration-150 border hover:text-text-primary hover:bg-bg-glass hover:border-border-subtle ${
                      pathname === link.href ? "text-primary-400 bg-[rgba(249,115,22,0.08)] border-border-accent" : "border-transparent"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span className="text-base">{link.emoji}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="https://www.youtube.com/@learningwithpkm-vihang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-lg text-lg font-semibold no-underline shadow-[0_4px_20px_rgba(255,0,0,0.25)]"
            >
              Subscribe on YouTube
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
