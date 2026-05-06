const CHANNEL_URL = "https://www.youtube.com/@learningwithpkm-vihang";

const stats = [
  { value: "100+", label: "Videos" },
  { value: "4+", label: "Subjects" },
  { value: "Growing", label: "Community" },
  { value: "Free", label: "Content" },
];

export default function HeroSection() {
  return (
    <section className="py-16 pb-20 min-h-[calc(100vh-72px)] flex items-center max-[480px]:py-8 max-[480px]:pb-12 max-[480px]:min-h-0">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 gap-12 items-center max-[900px]:grid-cols-1 max-[900px]:gap-8">
        <div className="flex flex-col gap-6 animate-[fadeInUp_0.8s_ease]">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.2)] rounded-full text-sm font-medium text-primary-400 w-fit">
            <span className="w-2 h-2 bg-primary-400 rounded-full animate-[pulse_2s_ease_infinite]" />
            Educational YouTube Channel
          </div>
          <h1 className="text-6xl font-extrabold leading-[1.1] tracking-[-0.03em] text-text-primary max-[900px]:text-4xl max-[480px]:text-3xl">
            Learn. Grow.
            <br />
            <span className="bg-gradient-to-br from-primary-300 via-primary-500 to-accent-400 bg-[length:200%_200%] animate-[gradientShift_4s_ease_infinite] bg-clip-text text-transparent">Explore with LWP.</span>
          </h1>
          <p className="text-lg text-text-secondary leading-[1.7] max-w-[520px] [&>strong]:text-text-primary">
            We create informative and educational videos exploring{" "}
            <strong>Mathematics</strong>, <strong>Finance</strong>,{" "}
            <strong>Sanskrit</strong>, <strong>Hindi</strong>, and much more.
            Join thousands of learners on this journey of knowledge.
          </p>
          <div className="flex gap-4 flex-wrap max-[480px]:flex-col">
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-full text-base font-semibold no-underline transition-all duration-[250ms] shadow-[0_4px_24px_rgba(255,0,0,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(255,0,0,0.35)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visit YouTube Channel
            </a>
            <a href="#latest-videos" className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-bg-glass text-text-primary border border-border-light rounded-full text-base font-medium no-underline transition-all duration-150 hover:bg-bg-glass-hover hover:border-primary-400 hover:text-primary-400">
              Explore Content
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
          <div className="flex gap-8 mt-4 pt-6 border-t border-border-subtle max-[900px]:gap-4 max-[900px]:flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-xl font-bold text-primary-400">{s.value}</span>
                <span className="text-xs text-text-muted uppercase tracking-[0.05em]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-[fadeIn_1s_ease_0.3s_both] max-[900px]:order-first">
          <div className="relative w-[340px] h-[400px] group max-[900px]:w-[280px] max-[900px]:h-[320px]">
            <div className="w-full h-full bg-gradient-to-br from-[rgba(249,115,22,0.12)] to-[rgba(139,92,246,0.08)] border border-[rgba(249,115,22,0.2)] rounded-xl flex flex-col items-center justify-center gap-4 p-8 backdrop-blur-[20px] animate-[float_6s_ease-in-out_infinite]">
              <div className="w-[80px] h-[80px] bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,0,0,0.3)] transition-transform duration-[250ms] group-hover:scale-110">
                <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">LWP & Vihang</h3>
              <p className="text-sm text-text-muted">Educational Content Creator</p>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-secondary">📐 Math</span>
                <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-secondary">💰 Finance</span>
                <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-secondary">📜 Sanskrit</span>
                <span className="py-1 px-3 bg-bg-glass border border-border-subtle rounded-full text-xs text-text-secondary">✍️ Hindi</span>
              </div>
            </div>
            <div className="absolute text-2xl animate-[float_4s_ease-in-out_infinite] pointer-events-none opacity-60" style={{ top: "-10%", right: "-5%", animationDelay: "0s" }}>📐</div>
            <div className="absolute text-2xl animate-[float_4s_ease-in-out_infinite] pointer-events-none opacity-60" style={{ bottom: "10%", left: "-8%", animationDelay: "1s" }}>💰</div>
            <div className="absolute text-2xl animate-[float_4s_ease-in-out_infinite] pointer-events-none opacity-60" style={{ top: "20%", left: "-10%", animationDelay: "2s" }}>📜</div>
            <div className="absolute text-2xl animate-[float_4s_ease-in-out_infinite] pointer-events-none opacity-60" style={{ bottom: "-5%", right: "10%", animationDelay: "0.5s" }}>✍️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
