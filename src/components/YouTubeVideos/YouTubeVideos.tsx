"use client";

import { useEffect, useState, useRef } from "react";
import styles from "./YouTubeVideos.module.css";

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

const CARD_ACCENTS = [
  "linear-gradient(135deg, #f97316, #ea580c)",
  "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  "linear-gradient(135deg, #22c55e, #16a34a)",
  "linear-gradient(135deg, #f43f5e, #e11d48)",
  "linear-gradient(135deg, #eab308, #ca8a04)",
];

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
    <div className={styles.carouselContainer}>
      <div className={styles.carouselHeader}>
        <span className={styles.badge}>{icon} {title}</span>
        <p className={styles.carouselSubtitle}>{subtitle}</p>
      </div>

      <div className={styles.scrollWrapper}>
        {canScrollLeft && (
          <button
            className={`${styles.scrollBtn} ${styles.scrollLeft}`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}

        <div className={styles.videosScroll} ref={scrollRef}>
          {videos.map((video, idx) => {
            const category = getCategoryTag(video.title);
            // Some videos are portrait (shorts), but we'll use a unified card style or adjust image object-fit
            const isShort = video.isShort;
            
            return (
              <a
                key={video.id}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.videoCard} ${isShort ? styles.shortCard : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className={`${styles.thumbnailWrapper} ${isShort ? styles.shortThumbnail : ''}`}>
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className={styles.thumbnailImage}
                    loading="lazy"
                  />
                  <div className={styles.thumbnailOverlay}>
                    <svg className={styles.playIcon} viewBox="0 0 24 24" fill="white" width="48" height="48">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div className={styles.duration}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    {isShort ? "Short" : "Video"}
                  </div>
                  {category && (
                    <span
                      className={styles.categoryTag}
                      style={{ background: category.color }}
                    >
                      {category.label}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <div className={styles.videoMeta}>
                    <span className={styles.channelName}>LWP & Vihang</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.date}>
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
            className={`${styles.scrollBtn} ${styles.scrollRight}`}
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
    <section className={styles.section} id="latest-videos">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.badgeMain}>🎬 Latest Content</span>
            <h2 className={styles.title}>
              Latest from{" "}
              <span className={styles.gradientText}>LWP & Vihang</span>
            </h2>
            <p className={styles.subtitle}>
              Catch up on our most recent educational videos across all subjects
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewAll}
          >
            Visit Channel
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {isLoading ? (
          <div className={styles.loadingState}>
            <div className={styles.spinner} />
            <p>Loading latest videos...</p>
          </div>
        ) : (
          <div className={styles.carouselsWrapper}>
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
        <div className={styles.channelCta}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <div>
              <h3 className={styles.ctaTitle}>
                Subscribe to LWP & Vihang
              </h3>
              <p className={styles.ctaSubtitle}>
                Join our community of learners and never miss an educational video
              </p>
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
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
