import styles from "./page.module.css";
import YouTubeVideos from "@/components/YouTubeVideos/YouTubeVideos";
import HeroSection from "@/components/Hero/HeroSection";
import SubjectsSection from "@/components/Subjects/SubjectsSection";
import AboutSection from "@/components/About/AboutSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <SubjectsSection />
      <YouTubeVideos />
      <AboutSection />
    </div>
  );
}
