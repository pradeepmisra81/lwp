"use client";

import { useEffect, useState, useRef } from "react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  description: string;
  link: string;
  isShort: boolean;
}

const CHANNEL_URL = "https://www.youtube.com/@learningwithpkm-vihang";

const CATEGORY_MAP: Record<string, { label: string; color: string }> = {
  "ganit": { label: "📐 Ganit", color: "#f97316" },
  "गणित": { label: "📐 Ganit", color: "#f97316" },
  "math": { label: "📐 Ganit", color: "#f97316" },
  "algebra": { label: "📐 Ganit", color: "#f97316" },
  "finance": { label: "💰 Finance", color: "#22c55e" },
  "mutual": { label: "💰 Finance", color: "#22c55e" },
  "stock": { label: "💰 Finance", color: "#22c55e" },
  "sanskrit": { label: "📜 Sanskrit", color: "#8b5cf6" },
  "संस्कृत": { label: "📜 Sanskrit", color: "#8b5cf6" },
  "shloka": { label: "📜 Sanskrit", color: "#8b5cf6" },
  "hindi": { label: "✍️ Hindi", color: "#3b82f6" },
  "हिंदी": { label: "✍️ Hindi", color: "#3b82f6" },
  "kavita": { label: "✍️ Hindi", color: "#3b82f6" },
  "web3": { label: "🌐 Web3", color: "#0ea5e9" },
  "ai": { label: "🤖 AI", color: "#ec4899" },
};

function getCategoryTag(title: string): { label: string; color: string } | null {
  const lower = title.toLowerCase();
  for (const [key, value] of Object.entries(CATEGORY_MAP)) {
    if (lower.includes(key)) return value;
  }
  return null;
}

// Carousel Component to handle horizontal scrolling
function VideoCarousel({ videos, title, subtitle, icon }: { videos: Video[], title: string, subtitle: string, icon: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    }
  }, [videos]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  if (!videos || videos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold text-text-primary flex items-center gap-2">{icon} {title}</span>
        <p className="text-sm text-text-muted">{subtitle}</p>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[44px] h-[44px] rounded-full bg-[rgba(17,17,40,0.9)] border border-border-light text-text-primary flex items-center justify-center cursor-pointer transition-all duration-150 backdrop-blur-[12px] shadow-lg hover:bg-[rgba(249,115,22,0.2)] hover:border-primary-400 max-[768px]:hidden left-[-22px]"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-2 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={scrollRef}>
          {videos.map((video, idx) => {
            const category = getCategoryTag(video.title);
            const isShort = video.isShort;
            
            return (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col flex-none snap-start bg-bg-glass border border-border-subtle rounded-lg overflow-hidden no-underline transition-all duration-[250ms] animate-[fadeInUp_0.6s_ease_both] group hover:border-border-light hover:-translate-y-1.5 hover:shadow-xl ${isShort ? 'w-[240px] max-[768px]:w-[200px]' : 'w-[340px] max-[768px]:w-[300px]'}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className={`relative overflow-hidden bg-[#111] ${isShort ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-[400ms] group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.2)] transition-colors duration-[250ms] group-hover:bg-[rgba(0,0,0,0.1)]">
                    <svg className="opacity-80 transition-all duration-[250ms] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] group-hover:scale-[1.2] group-hover:opacity-100" viewBox="0 0 24 24" fill="white" width="48" height="48">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-[2px] bg-[rgba(0,0,0,0.75)] rounded-sm text-[11px] text-white font-medium">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {isShort ? "Short" : "Video"}
                  </div>
                  {category && (
                    <span
                      className="absolute top-2 left-2 px-[10px] py-[2px] rounded-full text-[11px] text-white font-semibold tracking-[0.02em]"
                      style={{ background: category.color }}
                    >
                      {category.label}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2 flex-grow">
                  <h3 className="text-sm font-semibold text-text-primary leading-[1.4] line-clamp-2">{video.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-auto pt-2">
                    <span className="text-text-secondary font-medium">LWP & Vihang</span>
                    <span className="opacity-50">•</span>
                    <span className="">
                      {new Date(video.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {canScrollRight && (
          <button
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[44px] h-[44px] rounded-full bg-[rgba(17,17,40,0.9)] border border-border-light text-text-primary flex items-center justify-center cursor-pointer transition-all duration-150 backdrop-blur-[12px] shadow-lg hover:bg-[rgba(249,115,22,0.2)] hover:border-primary-400 max-[768px]:hidden right-[-22px]"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function YouTubeVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [shorts, setShorts] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        if (data.success) {
          setVideos(data.videos || []);
          setShorts(data.shorts || []);
        }
      } catch (error) {
        console.error("Failed to fetch videos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="py-20 pb-12" id="latest-videos">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 gap-6 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col gap-2">
            <span className="inline-flex items-center gap-2 py-1 px-3 bg-[rgba(249,115,22,0.1)] border border-[rgba(249,115,22,0.2)] rounded-full text-xs font-semibold text-primary-400 w-fit uppercase tracking-[0.05em]">🎬 Latest Content</span>
            <h2 className="text-3xl max-[768px]:text-2xl font-bold text-text-primary tracking-[-0.02em]">
              Latest from{" "}
              <span className="bg-gradient-to-br from-primary-400 to-accent-400 bg-clip-text text-transparent">LWP & Vihang</span>
            </h2>
            <p className="text-base text-text-muted max-w-[500px]">
              Catch up on our most recent educational videos across all subjects
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-2 px-4 text-primary-400 text-sm font-semibold no-underline border border-[rgba(249,115,22,0.3)] rounded-full transition-all duration-150 hover:bg-[rgba(249,115,22,0.1)] hover:border-primary-400 hover:translate-x-1"
          >
            Visit Channel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 gap-4 text-text-muted">
            <div className="w-10 h-10 border-[3px] border-[rgba(249,115,22,0.2)] border-t-primary-500 rounded-full animate-[spin_1s_linear_infinite]" />
            <p>Loading latest videos...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            <VideoCarousel 
              videos={videos} 
              title="Recent Videos" 
              subtitle="Deep dives and comprehensive lessons" 
              icon="📺" 
            />
            <VideoCarousel 
              videos={shorts} 
              title="YouTube Shorts" 
              subtitle="Quick concepts and short educational bites" 
              icon="⚡" 
            />
          </div>
        )}

        {/* Channel CTA */}
        <div className="relative mt-12 rounded-xl overflow-hidden bg-gradient-to-br from-[rgba(255,0,0,0.08)] to-[rgba(249,115,22,0.08)] border border-[rgba(255,0,0,0.15)]">
          <div className="absolute -top-[50%] -right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,0,0,0.08),transparent_70%)] pointer-events-none" />
          <div className="relative flex items-center gap-6 py-8 px-8 flex-wrap max-[768px]:flex-col max-[768px]:text-center max-[768px]:p-6">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-lg shrink-0 shadow-[0_0_30px_rgba(255,0,0,0.2)]">
              <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                Subscribe to LWP & Vihang
              </h3>
              <p className="text-sm text-text-muted">
                Join our community of learners and never miss an educational video
              </p>
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 ml-auto max-[768px]:ml-0 py-3 px-6 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-full text-sm font-semibold no-underline transition-all duration-150 shadow-[0_4px_20px_rgba(255,0,0,0.2)] whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_6px_30px_rgba(255,0,0,0.35)]"
            >
              Visit Channel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
