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

import { YOUTUBE_CHANNELS } from "@/config/constants";

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

function ThumbnailImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img 
      src={src} 
      alt={alt} 
      onLoad={() => setIsLoaded(true)}
      className={`w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 ${
        isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[1.03] blur-[4px]"
      }`}
      loading="lazy"
    />
  );
}

/* Shimmer loading skeleton */
function VideoSkeleton({ isShort = false }: { isShort?: boolean }) {
  return (
    <div className={`flex flex-col flex-none snap-start rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] ${isShort ? "w-[240px]" : "w-[340px]"}`}>
      <div className={`relative overflow-hidden bg-[rgba(255,255,255,0.03)] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent animate-[shimmer_2s_ease_infinite] bg-[length:200%_100%]" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 w-full rounded bg-[rgba(255,255,255,0.04)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent animate-[shimmer_2s_ease_infinite] bg-[length:200%_100%]" />
        </div>
        <div className="h-3 w-2/3 rounded bg-[rgba(255,255,255,0.03)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent animate-[shimmer_2s_ease_infinite_0.3s] bg-[length:200%_100%]" />
        </div>
      </div>
    </div>
  );
}

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
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold text-text-primary flex items-center gap-2.5 tracking-[-0.01em]">{icon} {title}</span>
        <p className="text-sm text-text-muted">{subtitle}</p>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl hover:bg-[rgba(249,115,22,0.15)] hover:border-primary-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] max-[768px]:hidden left-[-24px]"
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                className={`group flex flex-col flex-none snap-start rounded-2xl overflow-hidden no-underline transition-all duration-500 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,255,255,0.1)] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ${isShort ? "w-[240px] max-[768px]:w-[200px]" : "w-[340px] max-[768px]:w-[300px]"}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className={`relative overflow-hidden bg-[#0a0a0a] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}>
                  <ThumbnailImage src={video.thumbnail} alt={video.title} />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="play-btn-glow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2.5 py-1 bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] rounded-lg text-[11px] text-white font-semibold">
                    {isShort ? "⚡ Short" : "▶ Video"}
                  </div>
                  {/* Category tag */}
                  {category && (
                    <span
                      className="absolute top-2.5 left-2.5 px-3 py-1 rounded-lg text-[11px] text-white font-bold tracking-[0.02em] backdrop-blur-[4px]"
                      style={{ background: `${category.color}dd` }}
                    >
                      {category.label}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2.5 flex-grow">
                  <h3 className="text-sm font-bold text-text-primary leading-[1.5] line-clamp-2 tracking-[-0.01em]">{video.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-auto pt-1">
                    <span className="text-text-secondary font-semibold">LWP & Vihang</span>
                    <span className="opacity-30">•</span>
                    <span>
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
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl hover:bg-[rgba(249,115,22,0.15)] hover:border-primary-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] max-[768px]:hidden right-[-24px]"
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
        <div className="flex justify-between items-end mb-12 gap-6 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col gap-3">
            <span className="section-badge bg-[rgba(249,115,22,0.08)] border-[rgba(249,115,22,0.15)] text-primary-400 w-fit">
              🎬 Latest Content
            </span>
            <h2 className="section-title">
              Latest from{" "}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">LWP</span>
            </h2>
            <p className="section-subtitle">
              Catch up on our most recent educational videos across all subjects
            </p>
          </div>
          <a
            href={YOUTUBE_CHANNELS.main.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 py-2.5 px-5 text-primary-400 text-sm font-bold no-underline border border-[rgba(249,115,22,0.2)] rounded-xl transition-all duration-300 hover:bg-[rgba(249,115,22,0.08)] hover:border-primary-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)]"
          >
            Visit Channel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {isLoading ? (
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="h-5 w-40 rounded bg-[rgba(255,255,255,0.04)]" />
                <div className="h-3 w-60 rounded bg-[rgba(255,255,255,0.03)] mt-1" />
              </div>
              <div className="flex gap-5 overflow-hidden">
                {[...Array(4)].map((_, i) => <VideoSkeleton key={i} />)}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="h-5 w-40 rounded bg-[rgba(255,255,255,0.04)]" />
                <div className="h-3 w-60 rounded bg-[rgba(255,255,255,0.03)] mt-1" />
              </div>
              <div className="flex gap-5 overflow-hidden">
                {[...Array(5)].map((_, i) => <VideoSkeleton key={i} isShort />)}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-14">
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
        <div className="relative mt-14 rounded-2xl overflow-hidden border border-[rgba(255,0,0,0.1)]">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,0,0,0.06)] via-transparent to-[rgba(249,115,22,0.06)]" />
          <div className="absolute -top-[50%] -right-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,0,0,0.06),transparent_70%)] pointer-events-none" />

          <div className="relative flex items-center gap-6 py-8 px-8 flex-wrap max-[768px]:flex-col max-[768px]:text-center max-[768px]:p-6">
            <div className="flex items-center justify-center w-[64px] h-[64px] bg-gradient-to-br from-[#ff0000] to-[#cc0000] rounded-2xl shrink-0 shadow-[0_0_40px_rgba(255,0,0,0.2)] transition-transform duration-500 hover:scale-110">
              <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-extrabold text-text-primary mb-1 tracking-[-0.02em]">
                Subscribe to LWP &amp; Vihang
              </h3>
              <p className="text-sm text-text-muted">
                Join our community of 10,000+ learners and never miss an educational video
              </p>
            </div>
            <a
              href={YOUTUBE_CHANNELS.main.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 ml-auto max-[768px]:ml-0 py-3.5 px-7 bg-gradient-to-br from-[#ff0000] to-[#cc0000] text-white rounded-2xl text-sm font-bold no-underline transition-all duration-300 shadow-[0_4px_24px_rgba(255,0,0,0.2)] whitespace-nowrap hover:-translate-y-[2px] hover:shadow-[0_8px_40px_rgba(255,0,0,0.35)]"
            >
              Visit Channel
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
