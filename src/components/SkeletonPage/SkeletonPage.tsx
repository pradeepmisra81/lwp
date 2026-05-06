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
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-16 pb-10 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-xl text-2xl mb-5 shadow-[0_0_40px_rgba(0,0,0,0.2)] animate-[scaleIn_0.6s_ease]"
            style={{ background: accentColor }}
          >
            <span>{emoji}</span>
          </div>
          <h1 className="text-[2.25rem] md:text-5xl font-extrabold text-text-primary tracking-[-0.03em] mb-3 animate-[fadeInUp_0.6s_ease_0.1s_both]">
            {title}
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto mb-6 leading-[1.7] animate-[fadeInUp_0.6s_ease_0.2s_both]">
            {subtitle}
          </p>
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-bg-glass border border-border-subtle rounded-full text-sm text-text-muted animate-[fadeInUp_0.6s_ease_0.3s_both]">
            <span className="w-2 h-2 rounded-full animate-[pulse_2s_ease_infinite]" style={{ background: accentColor }} />
            Content coming soon — this page is under development
          </div>
        </div>
      </section>

      {/* Skeleton Sections */}
      <section className="py-8 pb-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-12">
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className="bg-bg-glass border border-border-subtle rounded-lg p-6 flex flex-col gap-4 animate-[fadeInUp_0.6s_ease_both] transition-all duration-[250ms] hover:border-border-light hover:-translate-y-1 hover:shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-[10px] h-[10px] rounded-full shrink-0"
                    style={{ background: accentColor }}
                  />
                  <h3 className="text-lg font-semibold text-text-primary">{section.title}</h3>
                </div>
                <p className="text-sm text-text-muted leading-[1.6]">{section.description}</p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="h-[10px] bg-gradient-to-r from-bg-glass-hover via-bg-glass to-bg-glass-hover bg-[length:200%_100%] rounded-sm animate-[shimmer_2s_infinite]" style={{ width: "100%" }} />
                  <div className="h-[10px] bg-gradient-to-r from-bg-glass-hover via-bg-glass to-bg-glass-hover bg-[length:200%_100%] rounded-sm animate-[shimmer_2s_infinite]" style={{ width: "85%" }} />
                  <div className="h-[10px] bg-gradient-to-r from-bg-glass-hover via-bg-glass to-bg-glass-hover bg-[length:200%_100%] rounded-sm animate-[shimmer_2s_infinite]" style={{ width: "70%" }} />
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col items-center gap-4">
            <p className="text-base text-text-muted">Meanwhile, check out our videos on YouTube!</p>
            <a
              href="https://www.youtube.com/@learningwithpkm-vihang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 text-white rounded-full text-base font-semibold transition-all duration-150 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
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
