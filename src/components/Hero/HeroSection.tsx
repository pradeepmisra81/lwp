"use client";

import { useEffect, useRef, useState } from "react";

import { YOUTUBE_CHANNELS } from "@/config/constants";

const stats = [
  { value: 100, suffix: "+", label: "Videos", icon: "🎬" },
  { value: 4, suffix: "+", label: "Subjects", icon: "📚" },
  { value: 10, suffix: "K+", label: "Learners", icon: "👥" },
  { value: 100, suffix: "%", label: "Free", icon: "💎" },
];

const floatingIcons = [
  { emoji: "📐", top: "8%", left: "5%", delay: "0s", size: "text-3xl" },
  { emoji: "💰", top: "20%", right: "8%", delay: "1.5s", size: "text-2xl" },
  { emoji: "📜", bottom: "25%", left: "3%", delay: "3s", size: "text-2xl" },
  { emoji: "✍️", bottom: "10%", right: "5%", delay: "0.8s", size: "text-3xl" },
  { emoji: "🧮", top: "45%", left: "8%", delay: "2.2s", size: "text-xl" },
  { emoji: "📊", top: "60%", right: "3%", delay: "4s", size: "text-xl" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-primary-300 to-primary-500 bg-clip-text text-transparent tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function HeroSection() {
  return (
    <section className="relative py-20 pb-24 min-h-[calc(100vh-105px)] flex items-center overflow-hidden max-[480px]:py-10 max-[480px]:pb-14 max-[480px]:min-h-0">
      {/* Floating subject icons — decorative */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute ${icon.size} animate-[float_6s_ease-in-out_infinite] pointer-events-none opacity-[0.12] select-none hidden min-[900px]:block`}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
            animationDelay: icon.delay,
          }}
        >
          {icon.emoji}
        </div>
      ))}

      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-[1.1fr_0.9fr] gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
        {/* Left content */}
        <div className="flex flex-col gap-7 animate-[fadeInUp_0.8s_ease]">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-[rgba(249,115,22,0.08)] border border-[rgba(249,115,22,0.15)] rounded-full text-[13px] font-semibold text-primary-400">
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-[pulse_2s_ease_infinite]" />
              EdTech Platform
            </div>
            <span className="aprasak-badge">
              <span className="dot" />
              Powered by Aprasak
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-black leading-[1.05] tracking-[-0.04em] text-text-primary max-[900px]:text-[2.75rem] max-[480px]:text-[2.25rem]">
            Learn. Grow.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-primary-500 to-accent-400 bg-[length:200%_200%] animate-[gradientShift_4s_ease_infinite] bg-clip-text text-transparent">
              Explore with LWP.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-text-secondary leading-[1.8] max-w-[540px] [&>strong]:text-text-primary [&>strong]:font-semibold">
            India&apos;s premier EdTech platform delivering world-class content in{" "}
            <strong>Mathematics</strong>, <strong>Finance</strong>,{" "}
            <strong>Sanskrit</strong>, <strong>Hindi</strong>, and beyond.
            Join our growing community of passionate learners.
          </p>

          {/* CTAs */}
          <div className="flex gap-4 flex-wrap max-[480px]:flex-col">
            <a
              href={YOUTUBE_CHANNELS.main.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 py-3.5 px-7 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-2xl text-base font-bold no-underline transition-all duration-300 shadow-[0_4px_24px_rgba(255,0,0,0.25)] hover:-translate-y-[2px] hover:shadow-[0_8px_40px_rgba(255,0,0,0.35)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" className="transition-transform duration-300 group-hover:scale-110">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Start Learning Free
            </a>
            <a
              href="#latest-videos"
              className="group inline-flex items-center justify-center gap-2.5 py-3.5 px-7 bg-[rgba(255,255,255,0.04)] text-text-primary border border-[rgba(255,255,255,0.1)] rounded-2xl text-base font-semibold no-underline transition-all duration-300 hover:bg-[rgba(255,255,255,0.07)] hover:border-primary-400 hover:text-primary-400"
            >
              Explore Content
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-y-1">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-4 pt-8 border-t border-[rgba(255,255,255,0.06)] max-[900px]:grid-cols-2 max-[480px]:grid-cols-2 max-[480px]:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1.5">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <span className="text-xs text-text-muted uppercase tracking-[0.08em] font-medium flex items-center gap-1.5">
                  <span>{s.icon}</span>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — Premium visual card */}
        <div className="flex justify-center animate-[fadeIn_1s_ease_0.3s_both] max-[900px]:order-first">
          <div className="relative w-[380px] h-[440px] group max-[900px]:w-[300px] max-[900px]:h-[360px]">
            {/* Outer glow ring */}
            <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-primary-500/20 via-transparent to-accent-500/20 animate-[spinSlow_12s_linear_infinite] opacity-60 blur-sm" />

            {/* Card */}
            <div className="relative w-full h-full bg-gradient-to-br from-[rgba(249,115,22,0.08)] via-[rgba(12,12,32,0.9)] to-[rgba(139,92,246,0.06)] border border-[rgba(249,115,22,0.15)] rounded-3xl flex flex-col items-center justify-center gap-5 p-8 backdrop-blur-[24px] overflow-hidden">
              {/* Animated mesh inside card */}
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(249,115,22,0.1),transparent_70%)] animate-[auroraFlow_15s_ease-in-out_infinite] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(139,92,246,0.08),transparent_70%)] animate-[auroraFlow_20s_ease-in-out_infinite_reverse] pointer-events-none" />

              {/* Play button */}
              <div className="relative w-[88px] h-[88px] bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,0,0,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(255,0,0,0.4)]">
                <svg viewBox="0 0 24 24" fill="white" width="40" height="40">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-full border-2 border-[rgba(255,0,0,0.3)] animate-[breathe_3s_ease-in-out_infinite]" />
              </div>

              <h3 className="text-2xl font-extrabold text-text-primary tracking-[-0.02em]">LWP</h3>
              <p className="text-sm text-text-muted font-medium">EdTech Platform</p>

              {/* Subject tags */}
              <div className="flex flex-wrap gap-2 justify-center mt-1">
                {[
                  { emoji: "📐", label: "Math", color: "rgba(249,115,22,0.12)", border: "rgba(249,115,22,0.2)" },
                  { emoji: "💰", label: "Finance", color: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.2)" },
                  { emoji: "📜", label: "Sanskrit", color: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.2)" },
                  { emoji: "✍️", label: "Hindi", color: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.2)" },
                ].map((tag) => (
                  <span
                    key={tag.label}
                    className="py-1.5 px-3.5 rounded-full text-xs font-medium text-text-secondary border transition-all duration-300 hover:scale-105"
                    style={{ background: tag.color, borderColor: tag.border }}
                  >
                    {tag.emoji} {tag.label}
                  </span>
                ))}
              </div>

              {/* Powered by badge */}
              <div className="mt-2">
                <span className="aprasak-badge text-[10px]">
                  <span className="dot" />
                  Powered by Aprasak
                </span>
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute text-2xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-40" style={{ top: "-8%", right: "-6%", animationDelay: "0s" }}>📐</div>
            <div className="absolute text-2xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-40" style={{ bottom: "8%", left: "-8%", animationDelay: "1.2s" }}>💰</div>
            <div className="absolute text-xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-30" style={{ top: "15%", left: "-10%", animationDelay: "2.5s" }}>📜</div>
            <div className="absolute text-xl animate-[float_5s_ease-in-out_infinite] pointer-events-none opacity-30" style={{ bottom: "-4%", right: "8%", animationDelay: "0.7s" }}>✍️</div>
          </div>
        </div>
      </div>
    </section>
  );
}
