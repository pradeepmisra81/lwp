const subjects = [
  {
    emoji: "📐",
    title: "Ganit in LWP",
    description: "Master mathematics through Vedic techniques, algebra, geometry, and more. From basics to advanced.",
    href: "/ganit",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    glowColor: "rgba(249, 115, 22, 0.12)",
    borderColor: "rgba(249, 115, 22, 0.2)",
    iconBg: "rgba(249, 115, 22, 0.1)",
    count: "40+",
  },
  {
    emoji: "💰",
    title: "Finance in LWP",
    description: "Learn investing, mutual funds, stock markets, and personal finance for real-world growth.",
    href: "/finance",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    glowColor: "rgba(34, 197, 94, 0.12)",
    borderColor: "rgba(34, 197, 94, 0.2)",
    iconBg: "rgba(34, 197, 94, 0.1)",
    count: "25+",
  },
  {
    emoji: "📜",
    title: "Sanskrit",
    description: "Explore the beauty of Sanskrit through shlokas, grammar, literature, and ancient wisdom.",
    href: "/sanskrit",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    glowColor: "rgba(139, 92, 246, 0.12)",
    borderColor: "rgba(139, 92, 246, 0.2)",
    iconBg: "rgba(139, 92, 246, 0.1)",
    count: "20+",
  },
  {
    emoji: "✍️",
    title: "Hindi",
    description: "Dive into Hindi poetry, literature, language arts, and creative expression.",
    href: "/hindi",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    glowColor: "rgba(59, 130, 246, 0.12)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    iconBg: "rgba(59, 130, 246, 0.1)",
    count: "15+",
  },
];

export default function SubjectsSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <span className="section-badge bg-[rgba(139,92,246,0.08)] border-[rgba(139,92,246,0.15)] text-accent-400">
            📚 Our Content
          </span>
          <h2 className="section-title">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Subjects</span>
          </h2>
          <p className="section-subtitle text-center">
            Dive deep into curated, world-class educational content across multiple disciplines
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
          {subjects.map((subject, idx) => (
            <a
              key={subject.title}
              href={subject.href}
              className="group relative flex flex-col gap-4 p-7 rounded-2xl no-underline transition-all duration-500 animate-[fadeInUp_0.6s_ease_both] border overflow-hidden"
              style={{
                animationDelay: `${idx * 0.12}s`,
                background: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${subject.glowColor}, transparent 70%)`,
                }}
              />

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 1px ${subject.borderColor}, 0 0 30px ${subject.glowColor}`,
                }}
              />

              {/* Icon */}
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{
                    background: subject.gradient,
                    boxShadow: `0 8px 24px ${subject.glowColor}`,
                  }}
                >
                  <span>{subject.emoji}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 flex-grow">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-text-primary tracking-[-0.01em]">{subject.title}</h3>
                  <span
                    className="text-[11px] font-bold py-1 px-2.5 rounded-full"
                    style={{ background: subject.iconBg, color: subject.borderColor.replace("0.2", "1") }}
                  >
                    {subject.count} videos
                  </span>
                </div>
                <p className="text-sm text-text-muted leading-[1.7] flex-grow">{subject.description}</p>
              </div>

              {/* CTA */}
              <div className="relative z-10 flex items-center gap-2 text-sm font-bold text-primary-400 transition-all duration-300 group-hover:gap-3">
                Explore Subject
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
