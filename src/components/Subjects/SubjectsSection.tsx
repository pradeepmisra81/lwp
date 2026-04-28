import styles from "./SubjectsSection.module.css";

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
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>📚 Our Content</span>
          <h2 className={styles.title}>
            Explore Our <span className={styles.gradientText}>Subjects</span>
          </h2>
          <p className={styles.subtitle}>
            Dive deep into curated educational content across multiple disciplines
          </p>
        </div>
        <div className={styles.grid}>
          {subjects.map((subject, idx) => (
            <a
              key={subject.title}
              href={subject.href}
              className={styles.card}
              style={{
                animationDelay: `${idx * 0.1}s`,
                ["--card-shadow" as string]: subject.shadowColor,
              }}
            >
              <div className={styles.icon} style={{ background: subject.gradient }}>
                <span>{subject.emoji}</span>
              </div>
              <h3 className={styles.cardTitle}>{subject.title}</h3>
              <p className={styles.cardDesc}>{subject.description}</p>
              <span className={styles.cardLink}>Explore →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
