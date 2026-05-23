export default function AprasakBanner() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(249,115,22,0.12)] via-[rgba(12,12,32,0.95)] to-[rgba(139,92,246,0.1)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.06),transparent_60%)]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-[rgba(249,115,22,0.12)]" />

          {/* Content */}
          <div className="relative flex flex-col items-center text-center gap-6 py-16 px-8 max-[768px]:py-10 max-[768px]:px-6">
            {/* Aprasak logo/icon */}
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent-600 flex items-center justify-center text-white text-3xl font-black shadow-[0_0_50px_rgba(249,115,22,0.3)] transition-transform duration-500 hover:scale-110">
                A
              </div>
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-3xl border border-[rgba(249,115,22,0.15)] animate-[breathe_3s_ease-in-out_infinite]" />
            </div>

            <div className="flex flex-col gap-3 max-w-[600px]">
              <span className="text-sm font-semibold text-primary-400 tracking-[0.1em] uppercase">Technology Partner</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-[-0.03em]">
                Powered by{" "}
                <span className="bg-gradient-to-r from-primary-300 via-primary-500 to-accent-400 bg-clip-text text-transparent">
                  Aprasak
                </span>
              </h2>
              <p className="text-base text-text-secondary leading-[1.7]">
                LWP is built on the Aprasak technology platform — enabling cutting-edge
                content delivery, seamless learning experiences, and scalable educational infrastructure
                for learners across India and beyond.
              </p>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap justify-center gap-3 mt-2">
              {[
                "🔒 Secure Platform",
                "⚡ Lightning Fast",
                "🌍 Globally Accessible",
                "📊 Analytics-Driven",
              ].map((pill) => (
                <span
                  key={pill}
                  className="py-2 px-4 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-full text-sm font-medium text-text-secondary transition-all duration-300 hover:bg-[rgba(249,115,22,0.08)] hover:border-[rgba(249,115,22,0.2)] hover:text-primary-400"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="mailto:LWP@APSTECHNOLOGIES.IN"
              className="group inline-flex items-center gap-2.5 py-3 px-7 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-2xl text-sm font-bold no-underline transition-all duration-300 shadow-[0_4px_24px_rgba(249,115,22,0.25)] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(249,115,22,0.35)] mt-2"
            >
              Partner with Aprasak
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
