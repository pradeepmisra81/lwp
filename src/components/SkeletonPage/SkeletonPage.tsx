import styles from "./SkeletonPage.module.css";

interface SkeletonPageProps {
  emoji: string;
  title: string;
  subtitle: string;
  accentColor: string;
  sections: { title: string; description: string }[];
}

export default function SkeletonPage({
  emoji,
  title,
  subtitle,
  accentColor,
  sections,
}: SkeletonPageProps) {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div
            className={styles.iconBadge}
            style={{ background: accentColor }}
          >
            <span>{emoji}</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.comingSoon}>
            <span className={styles.pulse} style={{ background: accentColor }} />
            Content coming soon — this page is under development
          </div>
        </div>
      </section>

      {/* Skeleton Sections */}
      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className={styles.card}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.cardDot}
                    style={{ background: accentColor }}
                  />
                  <h3 className={styles.cardTitle}>{section.title}</h3>
                </div>
                <p className={styles.cardDesc}>{section.description}</p>
                <div className={styles.skeletonLines}>
                  <div className={styles.skeletonLine} style={{ width: "100%" }} />
                  <div className={styles.skeletonLine} style={{ width: "85%" }} />
                  <div className={styles.skeletonLine} style={{ width: "70%" }} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <p>Meanwhile, check out our videos on YouTube!</p>
            <a
              href="https://www.youtube.com/@learningwithpkm-vihang"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
              style={{ background: accentColor }}
            >
              Visit YouTube Channel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
