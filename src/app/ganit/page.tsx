import type { Metadata } from "next";
import GanitVideos from "./GanitVideos";

export const metadata: Metadata = {
  title: "Ganit in LWP | Mathematics Education",
  description:
    "Learn mathematics the easy way with LWP. Vedic math, algebra, geometry, trigonometry, and more — powered by Aprasak.",
};

const sections = [
  {
    title: "Vedic Mathematics",
    description:
      "Learn ancient Vedic techniques for lightning-fast mental calculations.",
  },
  {
    title: "Algebra & Equations",
    description:
      "Master algebraic concepts from basics to advanced problem solving.",
  },
  {
    title: "Geometry & Mensuration",
    description:
      "Visual learning of shapes, areas, volumes, and spatial reasoning.",
  },
  {
    title: "Trigonometry",
    description:
      "Understand trigonometric functions, identities, and real-world applications.",
  },
  {
    title: "Number Theory",
    description:
      "Explore the fascinating world of prime numbers, divisibility, and patterns.",
  },
  {
    title: "Practice Problems",
    description:
      "Challenge yourself with curated problem sets and detailed solutions.",
  },
];

const GANIT_CHANNEL_URL = "https://www.youtube.com/@%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4inLWP";

export default function GanitPage() {
  return (
    <div className="pt-[105px]">
      {/* Hero */}
      <section className="py-16 pb-10 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-xl text-2xl mb-5 shadow-[0_0_40px_rgba(249,115,22,0.2)] animate-[scaleIn_0.6s_ease]"
            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}
          >
            <span>📐</span>
          </div>
          <h1 className="text-[2.25rem] md:text-5xl font-extrabold text-text-primary tracking-[-0.03em] mb-3 animate-[fadeInUp_0.6s_ease_0.1s_both]">
            Ganit in LWP
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto mb-6 leading-[1.7] animate-[fadeInUp_0.6s_ease_0.2s_both]">
            Master mathematics through engaging video lessons covering Vedic math,
            algebra, geometry, and beyond. Making math accessible and enjoyable for
            everyone.
          </p>
          <div className="flex justify-center gap-3 animate-[fadeInUp_0.6s_ease_0.3s_both]">
            <a
              href={GANIT_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl text-sm font-bold no-underline transition-all duration-300 shadow-[0_4px_24px_rgba(249,115,22,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_32px_rgba(249,115,22,0.35)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe to गणित in LWP
            </a>
            <span className="aprasak-badge self-center">
              <span className="dot" />
              Powered by Aprasak
            </span>
          </div>
        </div>
      </section>

      {/* Videos from the Ganit channel */}
      <GanitVideos channelUrl={GANIT_CHANNEL_URL} />

      {/* Topics Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10 flex flex-col items-center gap-3">
            <span className="section-badge bg-[rgba(249,115,22,0.08)] border-[rgba(249,115,22,0.15)] text-primary-400">
              📚 Topics Covered
            </span>
            <h2 className="section-title">
              What You&apos;ll{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className="group bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl p-6 flex flex-col gap-4 animate-[fadeInUp_0.6s_ease_both] transition-all duration-500 hover:border-[rgba(249,115,22,0.2)] hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] hover:bg-[rgba(249,115,22,0.03)]"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-[10px] h-[10px] rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{
                      background:
                        "linear-gradient(135deg, #f97316, #ea580c)",
                    }}
                  />
                  <h3 className="text-lg font-bold text-text-primary">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-[1.7]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
