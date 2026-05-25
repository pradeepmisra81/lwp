"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 bg-[rgba(6,6,18,0.97)] border-t border-[rgba(255,255,255,0.04)] py-16 pb-8 mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top section */}
        <div className="flex justify-between gap-12 flex-wrap max-[768px]:flex-col max-[768px]:gap-10">
          {/* Brand */}
          <div className="max-w-[400px]">
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden shadow-[0_0_24px_rgba(249,115,22,0.3)]">
                <img src="/logo.png" alt="LWP Logo" className="w-full h-full object-cover" />
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold text-text-primary tracking-[-0.03em]">
                  LWP
                </span>
                <span className="text-[9px] font-semibold text-text-muted tracking-[0.12em] uppercase">
                  Powered by Aprasak
                </span>
              </div>
            </div>
            <p className="text-sm text-text-muted leading-[1.8] mb-4">
              India&apos;s premier EdTech platform delivering world-class educational
              content in Technology, Software Development, AI & ML, Blockchain, Mathematics, Finance, Sanskrit, Hindi, and beyond. Built on
              Aprasak technology.
            </p>
            <span className="aprasak-badge">
              <span className="dot" />
              Powered by Aprasak
            </span>
          </div>

          {/* Links */}
          <div className="flex gap-16 max-[768px]:gap-8 max-[480px]:flex-col max-[480px]:gap-6">
            <div className="flex flex-col gap-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary mb-1">Content</h4>
              <a href="/ganit" className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-xs">📐</span> Ganit in LWP
              </a>
              <a href="/finance" className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-xs">💰</span> Finance in LWP
              </a>
              <a href="/sanskrit" className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-xs">📜</span> Sanskrit
              </a>
              <a href="/hindi" className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-xs">✍️</span> Hindi
              </a>
            </div>

            <div className="flex flex-col gap-3.5">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-secondary mb-1">Connect</h4>
              <a
                href="https://www.youtube.com/@learningwithpkm-vihang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
              >
                <span className="text-xs">🎬</span> YouTube Channel
              </a>
              <a
                href="https://www.linkedin.com/in/pradeepmisra81/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
              >
                <span className="text-xs">💼</span> LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2"
              >
                <span className="text-xs">📰</span> Newsletter
              </a>
              <a href="mailto:LWP@APSTECHNOLOGIES.IN" className="text-sm text-text-muted no-underline transition-all duration-300 hover:text-primary-400 hover:translate-x-1 inline-flex items-center gap-2">
                <span className="text-xs">✉️</span> Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-[1px] my-10 mb-6 bg-gradient-to-r from-transparent via-[rgba(249,115,22,0.2)] to-transparent" />

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4 max-[768px]:flex-col max-[768px]:text-center">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-text-muted">
              © {new Date().getFullYear()} LWP. All rights reserved.
            </p>
            <p className="text-[11px] text-text-muted/60">
              An EdTech initiative powered by <strong className="text-text-muted">Aprasak Technologies</strong>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-text-muted/60 italic">Empowering learners, one video at a time.</p>
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] flex items-center justify-center transition-all duration-300 hover:bg-[rgba(249,115,22,0.1)] hover:border-[rgba(249,115,22,0.2)] hover:-translate-y-1"
              aria-label="Back to top"
              id="back-to-top"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-text-muted transition-all duration-300 group-hover:text-primary-400 group-hover:-translate-y-0.5">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
