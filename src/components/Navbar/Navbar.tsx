"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", emoji: "🏠" },
  { href: "/ganit", label: "Ganit in LWP", emoji: "📐" },
  { href: "/finance", label: "Finance in LWP", emoji: "💰" },
  { href: "/sanskrit", label: "Sanskrit", emoji: "📜" },
  { href: "/hindi", label: "Hindi", emoji: "✍️" },
  { href: "/payment", label: "Payment", emoji: "💳" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-[33px] left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(6,6,18,0.92)] backdrop-blur-[24px] border-b border-[rgba(255,255,255,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-[rgba(6,6,18,0.6)] backdrop-blur-[12px] border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px] gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline shrink-0 group">
          <span className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 rounded-xl text-[14px] shadow-[0_0_24px_rgba(249,115,22,0.35)] transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(249,115,22,0.5)] group-hover:scale-110">
            <span className="relative z-10">▶</span>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold text-text-primary tracking-[-0.03em] leading-tight">
              LWP
            </span>
            <span className="text-[9px] font-semibold text-text-muted tracking-[0.12em] uppercase leading-none mt-[2px]">
              Powered by Aprasak
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden min-[900px]:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-2 py-2 px-3.5 rounded-xl text-[13px] font-medium no-underline transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "text-primary-400 bg-[rgba(249,115,22,0.1)]"
                      : "text-text-secondary hover:text-text-primary hover:bg-[rgba(255,255,255,0.04)]"
                  }`}
                >
                  <span className="text-base">{link.emoji}</span>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side: Aprasak badge + YouTube CTA */}
        <div className="hidden min-[900px]:flex items-center gap-3">
          <span className="aprasak-badge">
            <span className="dot" />
            EdTech Platform
          </span>
          <a
            href="https://www.youtube.com/@learningwithpkm-vihang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2.5 px-5 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-xl text-[13px] font-semibold no-underline transition-all duration-300 whitespace-nowrap shadow-[0_2px_16px_rgba(255,0,0,0.2)] hover:-translate-y-[1px] hover:shadow-[0_6px_24px_rgba(255,0,0,0.35)]"
          >
            <svg
              className="shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="16"
              height="16"
            >
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex min-[900px]:hidden flex-col gap-[5px] p-2 cursor-pointer z-[110]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
          <span className={`block w-[22px] h-[2px] bg-text-primary rounded-[2px] transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-[105px] left-0 right-0 bottom-0 bg-[rgba(6,6,18,0.98)] backdrop-blur-[24px] py-8 px-6 z-[99] flex flex-col gap-6 transition-all duration-500 ${
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="list-none p-0 m-0 flex flex-col gap-2">
            {navLinks.map((link, idx) => (
              <li
                key={link.href}
                style={{
                  transitionDelay: mobileOpen ? `${idx * 60}ms` : "0ms",
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? "translateX(0)" : "translateX(-20px)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 py-4 px-5 rounded-2xl text-lg font-medium no-underline transition-all duration-300 border ${
                    pathname === link.href
                      ? "text-primary-400 bg-[rgba(249,115,22,0.08)] border-[rgba(249,115,22,0.2)]"
                      : "text-text-secondary border-transparent hover:text-text-primary hover:bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,255,255,0.05)]"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="text-xl">{link.emoji}</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex justify-center">
              <span className="aprasak-badge text-sm py-2 px-4">
                <span className="dot" />
                Powered by Aprasak
              </span>
            </div>
            <a
              href="https://www.youtube.com/@learningwithpkm-vihang"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-2xl text-lg font-semibold no-underline shadow-[0_4px_24px_rgba(255,0,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(255,0,0,0.4)]"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
