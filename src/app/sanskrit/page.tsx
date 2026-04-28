import type { Metadata } from "next";
import SkeletonPage from "@/components/SkeletonPage/SkeletonPage";

export const metadata: Metadata = {
  title: "Sanskrit | LWP & Vihang",
  description:
    "Discover the beauty of Sanskrit — shlokas, grammar, literature, and cultural heritage with LWP.",
};

const sections = [
  {
    title: "Sanskrit Shlokas",
    description:
      "Learn beautiful Sanskrit verses with meaning, pronunciation, and context.",
  },
  {
    title: "Grammar (Vyakarana)",
    description:
      "Master Sanskrit grammar — sandhi, samasa, vibhakti, and verb conjugations.",
  },
  {
    title: "Literature & Poetry",
    description:
      "Explore timeless Sanskrit literary works from Kalidasa to modern compositions.",
  },
  {
    title: "Conversational Sanskrit",
    description:
      "Learn to speak basic Sanskrit with practical everyday phrases.",
  },
  {
    title: "Scriptures & Texts",
    description:
      "Introduction to Vedas, Upanishads, Bhagavad Gita, and other sacred texts.",
  },
  {
    title: "Cultural Heritage",
    description:
      "Understand the cultural significance of Sanskrit in Indian heritage.",
  },
];

export default function SanskritPage() {
  return (
    <SkeletonPage
      emoji="📜"
      title="Sanskrit"
      subtitle="Explore the mother of languages — from ancient shlokas and Vedic literature to grammar and conversational Sanskrit. Preserving and sharing our rich cultural heritage."
      accentColor="linear-gradient(135deg, #8b5cf6, #6d28d9)"
      sections={sections}
    />
  );
}
