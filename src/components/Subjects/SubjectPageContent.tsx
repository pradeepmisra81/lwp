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

interface Section {
  title: string;
  description: string;
}

interface SubjectPageContentProps {
  emoji: string;
  title: string;
  subtitle: string;
  accentColor: string;
  glowColor: string;
  borderColor: string;
  borderHex: string;
  sections: Section[];
  keywords: string[];
  channelUrl: string;
  subjectLabel: string;
  subjectKey: string;
}

function VideoSkeleton({ isShort = false }: { isShort?: boolean }) {
  return (
    <div
      className={`flex flex-col flex-none snap-start rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] ${isShort ? "w-[240px]" : "w-[340px]"}`}
    >
      <div
        className={`relative overflow-hidden bg-[rgba(255,255,255,0.03)] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent animate-[shimmer_2s_ease_infinite] bg-[length:200%_100%]" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 w-full rounded bg-[rgba(255,255,255,0.04)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.04)] to-transparent animate-[shimmer_2s_ease_infinite] bg-[length:200%_100%]" />
        </div>
        <div className="h-3 w-2/3 rounded bg-[rgba(255,255,255,0.03)]" />
      </div>
    </div>
  );
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

function VideoCarousel({
  videos,
  title,
  subtitle,
  icon,
  subjectKey,
  subjectLabel,
  borderHex,
}: {
  videos: Video[];
  title: string;
  subtitle: string;
  icon: string;
  subjectKey: string;
  subjectLabel: string;
  borderHex: string;
}) {
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
      };
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
        <span className="text-xl font-bold text-text-primary flex items-center gap-2.5 tracking-[-0.01em]">
          {icon} {title}
        </span>
        <p className="text-sm text-text-muted">{subtitle}</p>
      </div>

      <div className="relative">
        {canScrollLeft && (
          <button
            className={`absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl carousel-btn-${subjectKey} max-[768px]:hidden left-[-24px]`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory py-2 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          ref={scrollRef}
        >
          {videos.map((video) => {
            const isShort = video.isShort;
            return (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col flex-none snap-start rounded-2xl overflow-hidden no-underline subject-card-${subjectKey} ${isShort ? "w-[240px] max-[768px]:w-[200px]" : "w-[340px] max-[768px]:w-[300px]"}`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden bg-[#0a0a0a] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
                >
                  <ThumbnailImage src={video.thumbnail} alt={video.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="play-btn-glow opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        width="28"
                        height="28"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1 px-2.5 py-1 bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] rounded-lg text-[11px] text-white font-semibold">
                    {isShort ? "⚡ Short" : "▶ Video"}
                  </div>
                  <span 
                    className="absolute top-2.5 left-2.5 px-3 py-1 rounded-lg text-[11px] text-white font-bold tracking-[0.02em] backdrop-blur-[4px]"
                    style={{ background: `${borderHex}dd` }}
                  >
                    {subjectLabel}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2.5 flex-grow">
                  <h3 className="text-sm font-bold text-text-primary leading-[1.5] line-clamp-2 tracking-[-0.01em]">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-auto pt-1">
                    <span className="text-text-secondary font-semibold">
                      LWP & Vihang
                    </span>
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
            className={`absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl carousel-btn-${subjectKey} max-[768px]:hidden right-[-24px]`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

export default function SubjectPageContent({
  emoji,
  title,
  subtitle,
  accentColor,
  glowColor,
  borderColor,
  borderHex,
  sections,
  keywords,
  channelUrl,
  subjectLabel,
  subjectKey,
}: SubjectPageContentProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [shorts, setShorts] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube");
        const data = await res.json();
        if (data.success) {
          const allVideos: Video[] = data.all || [];
          
          // Filter videos by keywords in title or description
          const filtered = allVideos.filter((v) => {
            const titleLower = v.title.toLowerCase();
            const descLower = (v.description || "").toLowerCase();
            return keywords.some(
              (kw) =>
                titleLower.includes(kw.toLowerCase()) ||
                descLower.includes(kw.toLowerCase())
            );
          });

          // Separate into regular videos and shorts
          const regularVideos = filtered.filter((v) => !v.isShort);
          const shortsVideos = filtered.filter((v) => v.isShort);

          setVideos(regularVideos);
          setShorts(shortsVideos);
        }
      } catch (error) {
        console.error(`Failed to fetch ${subjectLabel} videos:`, error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVideos();
  }, [keywords, subjectLabel]);

  return (
    <div className="pt-[105px]">
      {/* Dynamic Hover Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .subject-card-${subjectKey} {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.5s ease;
        }
        .subject-card-${subjectKey}:hover {
          border-color: ${borderHex}33 !important;
          background: ${borderHex}0d !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.5);
        }
        .topic-card-${subjectKey} {
          border: 1px solid rgba(255, 255, 255, 0.05);
          background: rgba(255, 255, 255, 0.02);
          transition: all 0.5s ease;
        }
        .topic-card-${subjectKey}:hover {
          border-color: ${borderHex}33 !important;
          background: ${borderHex}0d !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.4);
        }
        .carousel-btn-${subjectKey}:hover {
          background: ${borderHex}26 !important;
          border-color: ${borderHex} !important;
          box-shadow: 0 0 20px ${borderHex}26;
        }
      `}} />

      {/* Hero */}
      <section className="py-16 pb-10 text-center">
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            className="inline-flex items-center justify-center w-[72px] h-[72px] rounded-xl text-2xl mb-5 shadow-[0_0_40px_rgba(0,0,0,0.2)] animate-[scaleIn_0.6s_ease]"
            style={{ background: accentColor, boxShadow: `0 0 40px ${glowColor}` }}
          >
            <span>{emoji}</span>
          </div>
          <h1 className="text-[2.25rem] md:text-5xl font-extrabold text-text-primary tracking-[-0.03em] mb-3 animate-[fadeInUp_0.6s_ease_0.1s_both]">
            {title}
          </h1>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto mb-6 leading-[1.7] animate-[fadeInUp_0.6s_ease_0.2s_both]">
            {subtitle}
          </p>
          <div className="flex justify-center gap-3 animate-[fadeInUp_0.6s_ease_0.3s_both]">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3 px-6 text-white rounded-2xl text-sm font-bold no-underline transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:-translate-y-[2px]"
              style={{ background: accentColor, boxShadow: `0 4px 24px ${glowColor}` }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe to LWP &amp; Vihang
            </a>
            <span className="aprasak-badge self-center">
              <span className="dot" />
              Powered by Aprasak
            </span>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-8 pb-12">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Section Header */}
          <div className="flex justify-between items-end mb-10 gap-6 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
            <div className="flex flex-col gap-3">
              <span 
                className="section-badge border text-sm w-fit"
                style={{ background: glowColor, borderColor }}
              >
                🎬 {title} Videos
              </span>
              <h2 className="section-title">
                Latest{" "}
                <span 
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: accentColor }}
                >
                  {subjectLabel} Content
                </span>
              </h2>
              <p className="section-subtitle">
                Fresh lessons and concept explanation videos
              </p>
            </div>
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 py-2.5 px-5 text-sm font-bold no-underline border rounded-xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)]"
              style={{ color: borderHex, borderColor }}
            >
              Visit Channel
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {isLoading ? (
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-5">
                <div className="h-5 w-40 rounded bg-[rgba(255,255,255,0.04)]" />
                <div className="flex gap-5 overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <VideoSkeleton key={i} />
                  ))}
                </div>
              </div>
            </div>
          ) : videos.length === 0 && shorts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-text-muted">
              <p>No videos found. Check back soon!</p>
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              <VideoCarousel
                videos={videos}
                title={`${subjectLabel} Videos`}
                subtitle={`Full lessons and deep dives into ${subjectLabel.toLowerCase()} concepts`}
                icon="📺"
                subjectKey={subjectKey}
                subjectLabel={subjectLabel}
                borderHex={borderHex}
              />
              <VideoCarousel
                videos={shorts}
                title={`${subjectLabel} Shorts`}
                subtitle={`Quick ${subjectLabel.toLowerCase()} concepts in under a minute`}
                icon="⚡"
                subjectKey={subjectKey}
                subjectLabel={subjectLabel}
                borderHex={borderHex}
              />
            </div>
          )}
        </div>
      </section>

      {/* Topics Grid */}
      <section className="py-12 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10 flex flex-col items-center gap-3">
            <span 
              className="section-badge border"
              style={{ background: glowColor, borderColor }}
            >
              📚 Topics Covered
            </span>
            <h2 className="section-title">
              What You&apos;ll{" "}
              <span 
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: accentColor }}
              >
                Learn
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className={`group rounded-2xl p-6 flex flex-col gap-4 animate-[fadeInUp_0.6s_ease_both] topic-card-${subjectKey}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-[10px] h-[10px] rounded-full shrink-0 transition-transform duration-300 group-hover:scale-150"
                    style={{ background: accentColor }}
                  />
                  <h3 className="text-lg font-bold text-text-primary">
                    {section.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-[1.7]">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
