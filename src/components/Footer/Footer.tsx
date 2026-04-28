import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>▶</span>
              <span className={styles.logoText}>
                LWP <span className={styles.amp}>&</span> Vihang
              </span>
            </div>
            <p className={styles.description}>
              Informative and educational content exploring Mathematics, Finance,
              Sanskrit, Hindi, and much more. Created by PKM (Pradeep Kumar
              Misra).
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Content</h4>
              <a href="/ganit">📐 Ganit with LWP</a>
              <a href="/finance">💰 Finance in LWP</a>
              <a href="/sanskrit">📜 Sanskrit</a>
              <a href="/hindi">✍️ Hindi</a>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkGroupTitle}>Connect</h4>
              <a
                href="https://www.youtube.com/@learningwithpkm-vihang"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Channel
              </a>
              <a
                href="https://www.linkedin.com/in/pradeepmisra81/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Newsletter
              </a>
              <a href="mailto:LWP@APSTECHNOLOGIES.IN">Email Us</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} LWP & Vihang. All rights reserved.
          </p>
          <p className={styles.tagline}>Empowering learners, one video at a time.</p>
        </div>
      </div>
    </footer>
  );
}
