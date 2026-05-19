export default function AboutSection() {
  const companies = [
    { name: "Tata1MG", gradient: "from-[#ff6b35] to-[#e85d26]" },
    { name: "Barclays", gradient: "from-[#00aeef] to-[#0086c7]" },
    { name: "Accenture", gradient: "from-[#a100ff] to-[#7b00cc]" },
    { name: "HP/EDS", gradient: "from-[#0096d6] to-[#0071a5]" },
  ];

  return (
    <section className="py-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-[1fr_0.85fr] gap-16 items-center max-[768px]:grid-cols-1 max-[768px]:gap-10">
          {/* Left content */}
          <div className="flex flex-col gap-5">
            <span className="section-badge bg-[rgba(59,130,246,0.08)] border-[rgba(59,130,246,0.15)] text-info w-fit">
              👨‍🏫 About Us
            </span>

            <h2 className="section-title">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">PKM</span>
            </h2>

            <p className="text-base text-text-secondary leading-[1.8] [&>strong]:text-text-primary [&>strong]:font-semibold">
              <strong>Pradeep Kumar Misra (PKM)</strong> is the Co-founder of the LWP &amp; Vihang
              channel. With decades of experience initiating start-ups, building
              software development teams, and leading projects at world-class
              organizations, PKM brings a unique blend of industry expertise and
              deep passion for education.
            </p>

            <p className="text-base text-text-secondary leading-[1.8] [&>strong]:text-text-primary [&>strong]:font-semibold">
              Through our <strong>Aprasak-powered</strong> platform, we explore multiple fields including
              E-Commerce, Healthcare, Entrepreneurship, Leadership, Software
              Development, AI, ML, Blockchain, Finance, and much more.
            </p>

            {/* Company logos */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-xs text-text-muted uppercase tracking-[0.1em] font-semibold">Industry Experience</span>
              <div className="flex flex-wrap gap-2.5">
                {companies.map((company) => (
                  <span
                    key={company.name}
                    className={`py-2 px-4 bg-gradient-to-r ${company.gradient} rounded-xl text-white text-xs font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    {company.name}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mt-3">
              <a
                href="https://www.linkedin.com/in/pradeepmisra81/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 py-2.5 px-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl text-sm font-semibold text-text-secondary no-underline transition-all duration-300 hover:text-primary-400 hover:border-[rgba(249,115,22,0.2)] hover:bg-[rgba(249,115,22,0.05)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:LWP@APSTECHNOLOGIES.IN"
                className="group inline-flex items-center gap-2 py-2.5 px-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl text-sm font-semibold text-text-secondary no-underline transition-all duration-300 hover:text-primary-400 hover:border-[rgba(249,115,22,0.2)] hover:bg-[rgba(249,115,22,0.05)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Email
              </a>
              <a
                href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 py-2.5 px-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl text-sm font-semibold text-text-secondary no-underline transition-all duration-300 hover:text-primary-400 hover:border-[rgba(249,115,22,0.2)] hover:bg-[rgba(249,115,22,0.05)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8M15 18h-5M18 10h-8" />
                </svg>
                Newsletter
              </a>
            </div>
          </div>

          {/* Right side — Premium profile card */}
          <div className="flex justify-center max-[768px]:order-first">
            <div className="relative w-full max-w-[360px]">
              {/* Animated border ring */}
              <div className="absolute -inset-[1px] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_40%,rgba(249,115,22,0.3),rgba(139,92,246,0.2),transparent_60%)] animate-[spinSlow_10s_linear_infinite]" />
              </div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-[rgba(59,130,246,0.06)] via-[rgba(6,6,18,0.95)] to-[rgba(139,92,246,0.04)] border border-[rgba(255,255,255,0.06)] rounded-3xl p-10 flex flex-col items-center gap-5 text-center">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 via-primary-600 to-accent-500 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-[0_0_40px_rgba(249,115,22,0.25)] transition-transform duration-500 hover:scale-105">
                    PKM
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute -inset-2 rounded-2xl border border-[rgba(249,115,22,0.15)] animate-[breathe_4s_ease-in-out_infinite]" />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-extrabold text-text-primary tracking-[-0.02em]">Pradeep Kumar Misra</h4>
                  <p className="text-sm text-text-muted font-medium">Co-founder, LWP &amp; Vihang</p>
                </div>

                {/* Companies */}
                <div className="flex flex-wrap gap-2 justify-center mt-1">
                  {companies.map((c) => (
                    <span key={c.name} className="py-1.5 px-3.5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl text-xs text-text-muted font-medium transition-all duration-300 hover:bg-[rgba(255,255,255,0.06)] hover:text-text-secondary">
                      {c.name}
                    </span>
                  ))}
                </div>

                {/* Powered by */}
                <div className="mt-2 pt-4 border-t border-[rgba(255,255,255,0.05)] w-full flex justify-center">
                  <span className="aprasak-badge">
                    <span className="dot" />
                    Powered by Aprasak
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
