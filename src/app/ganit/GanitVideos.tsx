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

function VideoCarousel({
  videos,
  title,
  subtitle,
  icon,
}: {
  videos: Video[];
  title: string;
  subtitle: string;
  icon: string;
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
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl hover:bg-[rgba(249,115,22,0.15)] hover:border-primary-400 max-[768px]:hidden left-[-24px]"
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
                className={`group flex flex-col flex-none snap-start rounded-2xl overflow-hidden no-underline transition-all duration-500 border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] hover:border-[rgba(249,115,22,0.2)] hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ${isShort ? "w-[240px] max-[768px]:w-[200px]" : "w-[340px] max-[768px]:w-[300px]"}`}
              >
                {/* Thumbnail */}
                <div
                  className={`relative overflow-hidden bg-[#0a0a0a] ${isShort ? "aspect-[9/16]" : "aspect-video"}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.15)] backdrop-blur-[4px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
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
                  <span className="absolute top-2.5 left-2.5 px-3 py-1 rounded-lg text-[11px] text-white font-bold tracking-[0.02em] backdrop-blur-[4px] bg-[#f97316dd]">
                    📐 Ganit
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col gap-2.5 flex-grow">
                  <h3 className="text-sm font-bold text-text-primary leading-[1.5] line-clamp-2 tracking-[-0.01em]">
                    {video.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-text-muted mt-auto pt-1">
                    <span className="text-text-secondary font-semibold">
                      गणित in LWP
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
            className="absolute top-[40%] -translate-y-1/2 z-10 w-[48px] h-[48px] rounded-2xl bg-[rgba(6,6,18,0.92)] border border-[rgba(255,255,255,0.08)] text-text-primary flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-[16px] shadow-xl hover:bg-[rgba(249,115,22,0.15)] hover:border-primary-400 max-[768px]:hidden right-[-24px]"
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

export default function GanitVideos({
  channelUrl,
}: {
  channelUrl: string;
}) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [shorts, setShorts] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch("/api/youtube/ganit");
        const data = await res.json();
        if (data.success) {
          setVideos(data.videos || []);
          setShorts(data.shorts || []);
        }
      } catch (error) {
        console.error("Failed to fetch Ganit videos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchVideos();
  }, []);

  return (
    <section className="py-8 pb-12">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-10 gap-6 flex-wrap max-[768px]:flex-col max-[768px]:items-start">
          <div className="flex flex-col gap-3">
            <span className="section-badge bg-[rgba(249,115,22,0.08)] border-[rgba(249,115,22,0.15)] text-primary-400 w-fit">
              🎬 गणित in LWP Videos
            </span>
            <h2 className="section-title">
              Latest{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Math Videos
              </span>
            </h2>
            <p className="section-subtitle">
              Fresh mathematics content from the गणित in LWP channel
            </p>
          </div>
          <a
            href={channelUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 py-2.5 px-5 text-primary-400 text-sm font-bold no-underline border border-[rgba(249,115,22,0.2)] rounded-xl transition-all duration-300 hover:bg-[rgba(249,115,22,0.08)] hover:border-primary-400"
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
              title="Math Videos"
              subtitle="Full lessons and deep dives into mathematical concepts"
              icon="📺"
            />
            <VideoCarousel
              videos={shorts}
              title="Math Shorts"
              subtitle="Quick math tips and tricks in under a minute"
              icon="⚡"
            />
          </div>
        )}
      </div>
    </section>
  );
}
