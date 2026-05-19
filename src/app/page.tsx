import YouTubeVideos from "@/components/YouTubeVideos/YouTubeVideos";
import HeroSection from "@/components/Hero/HeroSection";
import SubjectsSection from "@/components/Subjects/SubjectsSection";
import AboutSection from "@/components/About/AboutSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import AprasakBanner from "@/components/Aprasak/AprasakBanner";

export default function Home() {
  return (
    <div className="pt-[105px]">
      <HeroSection />
      <SubjectsSection />
      <FeaturesSection />
      <YouTubeVideos />
      <AprasakBanner />
      <AboutSection />
    </div>
  );
}
