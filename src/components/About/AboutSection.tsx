export default function AboutSection() {
  return (
    <section className="py-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-12 items-center max-[768px]:grid-cols-1 max-[768px]:gap-8">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 py-1 px-3 bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] rounded-full text-xs font-semibold text-info uppercase tracking-[0.05em] w-fit">👨‍🏫 About Us</span>
          <h2 className="text-3xl max-[768px]:text-2xl font-bold text-text-primary tracking-[-0.02em]">
            Meet <span className="bg-gradient-to-br from-primary-400 to-accent-400 bg-clip-text text-transparent">PKM</span>
          </h2>
          <p className="text-base text-text-secondary leading-[1.7] [&>strong]:text-text-primary">
            <strong>Pradeep Kumar Misra (PKM)</strong> is a Co-founder of LWP &
            Vihang channel. With experience in initiating start-ups, building
            software development teams, and leading projects at organizations
            like <strong>Tata1MG</strong>, <strong>Barclays</strong>,{" "}
            <strong>Accenture</strong>, and <strong>HP/EDS/Mphasis</strong>, PKM
            brings a unique blend of industry expertise and passion for
            education.
          </p>
          <p className="text-base text-text-secondary leading-[1.7] [&>strong]:text-text-primary">
            We explore multiple fields including E-Commerce, Healthcare,
            Entrepreneurship, Leadership, Software Development, AI, ML,
            Blockchain, Finance, and much more.
          </p>
          <div className="flex gap-3 flex-wrap mt-2">
            <a
              href="https://www.linkedin.com/in/pradeepmisra81/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 bg-bg-glass border border-border-subtle rounded-full text-sm font-medium text-text-secondary no-underline transition-all duration-150 hover:text-primary-400 hover:border-border-accent hover:bg-[rgba(249,115,22,0.05)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:LWP@APSTECHNOLOGIES.IN" className="inline-flex items-center gap-2 py-2 px-4 bg-bg-glass border border-border-subtle rounded-full text-sm font-medium text-text-secondary no-underline transition-all duration-150 hover:text-primary-400 hover:border-border-accent hover:bg-[rgba(249,115,22,0.05)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-2 px-4 bg-bg-glass border border-border-subtle rounded-full text-sm font-medium text-text-secondary no-underline transition-all duration-150 hover:text-primary-400 hover:border-border-accent hover:bg-[rgba(249,115,22,0.05)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8M15 18h-5M18 10h-8" />
              </svg>
              Newsletter
            </a>
          </div>
        </div>
        <div className="flex justify-center max-[768px]:order-first">
          <div className="bg-gradient-to-br from-[rgba(59,130,246,0.08)] to-[rgba(139,92,246,0.06)] border border-[rgba(59,130,246,0.15)] rounded-xl p-10 flex flex-col items-center gap-4 text-center max-w-[320px] w-full">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-xl font-extrabold text-white shadow-[0_0_30px_rgba(249,115,22,0.2)]">PKM</div>
            <h4 className="text-lg font-semibold text-text-primary">Pradeep Kumar Misra</h4>
            <p className="text-sm text-text-muted">Co-founder, LWP & Vihang</p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-muted">Tata1MG</span>
              <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-muted">Barclays</span>
              <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-muted">Accenture</span>
              <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-muted">HP/EDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
