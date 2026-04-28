import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.badge}>👨‍🏫 About Us</span>
          <h2 className={styles.title}>
            Meet <span className={styles.gradientText}>PKM</span>
          </h2>
          <p className={styles.text}>
            <strong>Pradeep Kumar Misra (PKM)</strong> is a Co-founder of LWP &
            Vihang channel. With experience in initiating start-ups, building
            software development teams, and leading projects at organizations
            like <strong>Tata1MG</strong>, <strong>Barclays</strong>,{" "}
            <strong>Accenture</strong>, and <strong>HP/EDS/Mphasis</strong>, PKM
            brings a unique blend of industry expertise and passion for
            education.
          </p>
          <p className={styles.text}>
            We explore multiple fields including E-Commerce, Healthcare,
            Entrepreneurship, Leadership, Software Development, AI, ML,
            Blockchain, Finance, and much more.
          </p>
          <div className={styles.links}>
            <a
              href="https://www.linkedin.com/in/pradeepmisra81/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a href="mailto:LWP@APSTECHNOLOGIES.IN" className={styles.link}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
            <a
              href="https://www.linkedin.com/newsletters/learning-with-pkm-7200830885774987265/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a2 2 0 01-2 2zm0 0a2 2 0 01-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8M15 18h-5M18 10h-8" />
              </svg>
              Newsletter
            </a>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.card}>
            <div className={styles.avatar}>PKM</div>
            <h4 className={styles.name}>Pradeep Kumar Misra</h4>
            <p className={styles.role}>Co-founder, LWP & Vihang</p>
            <div className={styles.experience}>
              <span>Tata1MG</span>
              <span>Barclays</span>
              <span>Accenture</span>
              <span>HP/EDS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
