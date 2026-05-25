"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🎓",
    title: "Expert-Led Content",
    description: "Learn from PKM — industry veteran with experience at Tata1MG, Barclays, Accenture, and HP.",
    gradient: "from-primary-500 to-primary-600",
  },
  {
    icon: "🌐",
    title: "Multi-Disciplinary",
    description: "From Technology to Sanskrit — explore content across 8+ subjects and growing.",
    gradient: "from-accent-500 to-accent-600",
  },
  {
    icon: "📱",
    title: "Accessible Anywhere",
    description: "All content is free, accessible on any device, and designed for self-paced learning.",
    gradient: "from-info to-accent-500",
  },
  {
    icon: "🚀",
    title: "Powered by Aprasak",
    description: "Built on the Aprasak technology platform — ensuring seamless, cutting-edge learning experiences.",
    gradient: "from-primary-400 to-accent-400",
  },
  {
    icon: "🎯",
    title: "Practical Focus",
    description: "Real-world skills, not just theory. Finance, entrepreneurship, AI, and leadership insights.",
    gradient: "from-success to-info",
  },
  {
    icon: "🤝",
    title: "Growing Community",
    description: "Join thousands of learners on a shared journey of knowledge, curiosity, and growth.",
    gradient: "from-warning to-primary-500",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-4 p-7 rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] transition-all duration-500 hover:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
      }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        {feature.icon}
      </div>

      <h3 className="text-lg font-bold text-text-primary tracking-[-0.01em]">
        {feature.title}
      </h3>
      <p className="text-sm text-text-muted leading-[1.7]">
        {feature.description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 flex flex-col items-center gap-4">
          <span className="section-badge bg-[rgba(249,115,22,0.08)] border-[rgba(249,115,22,0.15)] text-primary-400">
            ✨ Why Choose Us
          </span>
          <h2 className="section-title">
            Why{" "}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">LWP</span>
            ?
          </h2>
          <p className="section-subtitle text-center">
            A premier EdTech experience backed by industry expertise and powered by Aprasak technology
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
