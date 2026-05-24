"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(249,115,22,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
