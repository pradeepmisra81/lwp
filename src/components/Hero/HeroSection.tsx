import styles from "./HeroSection.module.css";

const CHANNEL_URL = "https://www.youtube.com/@learningwithpkm-vihang";

const stats = [
  { value: "100+", label: "Videos" },
  { value: "4+", label: "Subjects" },
  { value: "Growing", label: "Community" },
  { value: "Free", label: "Content" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Educational YouTube Channel
          </div>
          <h1 className={styles.title}>
            Learn. Grow.
            <br />
            <span className={styles.titleGradient}>Explore with LWP.</span>
          </h1>
          <p className={styles.subtitle}>
            We create informative and educational videos exploring{" "}
            <strong>Mathematics</strong>, <strong>Finance</strong>,{" "}
            <strong>Sanskrit</strong>, <strong>Hindi</strong>, and much more.
            Join thousands of learners on this journey of knowledge.
          </p>
          <div className={styles.ctas}>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryCta}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Visit YouTube Channel
            </a>
            <a href="#latest-videos" className={styles.secondaryCta}>
              Explore Content
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.playBtn}>
                <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>LWP & Vihang</h3>
              <p className={styles.cardSub}>Educational Content Creator</p>
              <div className={styles.cardTags}>
                <span>📐 Math</span>
                <span>💰 Finance</span>
                <span>📜 Sanskrit</span>
                <span>✍️ Hindi</span>
              </div>
            </div>
            <div className={styles.floatingEmoji} style={{ top: "-10%", right: "-5%", animationDelay: "0s" }}>📐</div>
            <div className={styles.floatingEmoji} style={{ bottom: "10%", left: "-8%", animationDelay: "1s" }}>💰</div>
            <div className={styles.floatingEmoji} style={{ top: "20%", left: "-10%", animationDelay: "2s" }}>📜</div>
            <div className={styles.floatingEmoji} style={{ bottom: "-5%", right: "10%", animationDelay: "0.5s" }}>✍️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
