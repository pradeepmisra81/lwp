export default function Footer() {
  return (
    <footer className="relative z-10 bg-[rgba(10,10,26,0.95)] border-t border-border-subtle py-16 pb-8 mt-20">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Top section */}
        <div className="flex justify-between gap-12 flex-wrap max-[768px]:flex-col max-[768px]:gap-8">
          <div className="max-w-[380px]">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-sm text-[12px]">▶</span>
              <span className="text-xl font-bold text-text-primary">
                LWP <span className="text-primary-400 font-light">&</span> Vihang
              </span>
            </div>
            <p className="text-sm text-text-muted leading-[1.7]">
              Informative and educational content exploring Mathematics, Finance,
              Sanskrit, Hindi, and much more. Created by PKM (Pradeep Kumar
              Misra).
            </p>
          </div>

          <div className="flex gap-16 max-[768px]:gap-8 max-[480px]:flex-col max-[480px]:gap-6">
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary mb-1">Content</h4>
              <a href="/ganit" className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400">📐 Ganit with LWP</a>
              <a href="/finance" className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400">💰 Finance in LWP</a>
              <a href="/sanskrit" className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400">📜 Sanskrit</a>
              <a href="/hindi" className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400">✍️ Hindi</a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-secondary mb-1">Connect</h4>
              <a
                href="https://www.youtube.com/@learningwithpkm-vihang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400"
              >
                YouTube Channel
              </a>
              <a
                href="https://www.linkedin.com/in/pradeepmisra81/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400"
              >
                Newsletter
              </a>
              <a href="mailto:LWP@APSTECHNOLOGIES.IN" className="text-sm text-text-muted no-underline transition-colors duration-150 hover:text-primary-400">Email Us</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-border-subtle my-10 mb-6" />

        {/* Bottom */}
        <div className="flex justify-between items-center flex-wrap gap-4 max-[768px]:flex-col max-[768px]:text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} LWP & Vihang. All rights reserved.
          </p>
          <p className="text-xs text-text-muted italic">Empowering learners, one video at a time.</p>
        </div>
      </div>
    </footer>
  );
}
