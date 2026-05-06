const subjects = [
  {
    emoji: "📐",
    title: "Ganit with LWP",
    description: "Master mathematics through Vedic techniques, algebra, geometry, and more.",
    href: "/ganit",
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    shadowColor: "rgba(249, 115, 22, 0.15)",
  },
  {
    emoji: "💰",
    title: "Finance in LWP",
    description: "Learn investing, mutual funds, stock markets, and personal finance.",
    href: "/finance",
    gradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    shadowColor: "rgba(34, 197, 94, 0.15)",
  },
  {
    emoji: "📜",
    title: "Sanskrit",
    description: "Explore the beauty of Sanskrit through shlokas, grammar, and literature.",
    href: "/sanskrit",
    gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    shadowColor: "rgba(139, 92, 246, 0.15)",
  },
  {
    emoji: "✍️",
    title: "Hindi",
    description: "Dive into Hindi poetry, literature, and language arts.",
    href: "/hindi",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    shadowColor: "rgba(59, 130, 246, 0.15)",
  },
];

export default function SubjectsSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12 flex flex-col items-center gap-3">
          <span className="inline-flex items-center gap-2 py-1 px-3 bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] rounded-full text-xs font-semibold text-accent-400 uppercase tracking-[0.05em]">📚 Our Content</span>
          <h2 className="text-3xl max-[480px]:text-2xl font-bold text-text-primary tracking-[-0.02em]">
            Explore Our <span className="bg-gradient-to-br from-primary-400 to-accent-400 bg-clip-text text-transparent">Subjects</span>
          </h2>
          <p className="text-base text-text-muted max-w-[500px]">
            Dive deep into curated educational content across multiple disciplines
          </p>
        </div>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1 gap-5">
          {subjects.map((subject, idx) => (
            <a
              key={subject.title}
              href={subject.href}
              className="bg-bg-glass border border-border-subtle rounded-lg p-6 no-underline flex flex-col gap-3 transition-all duration-[250ms] animate-[fadeInUp_0.6s_ease_both] group hover:-translate-y-1.5 hover:border-border-light hover:shadow-[0_20px_40px_var(--card-shadow,rgba(0,0,0,0.2))]"
              style={{
                animationDelay: `${idx * 0.1}s`,
                ["--card-shadow" as string]: subject.shadowColor,
              }}
            >
              <div className="w-[52px] h-[52px] rounded-md flex items-center justify-center text-2xl shadow-[0_4px_16px_rgba(0,0,0,0.2)] transition-transform duration-150 group-hover:scale-110 group-hover:-rotate-3" style={{ background: subject.gradient }}>
                <span>{subject.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">{subject.title}</h3>
              <p className="text-sm text-text-muted leading-[1.6] flex-grow">{subject.description}</p>
              <span className="text-sm font-semibold text-primary-400 transition-transform duration-150 inline-block group-hover:translate-x-1">Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
