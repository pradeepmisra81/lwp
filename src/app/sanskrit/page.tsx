import type { Metadata } from "next";
import SubjectPageContent from "@/components/Subjects/SubjectPageContent";
import { YOUTUBE_CHANNELS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Sanskrit | LWP",
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
    <SubjectPageContent
      emoji="📜"
      title="Sanskrit"
      subtitle="Explore the mother of languages — from ancient shlokas and Vedic literature to grammar and conversational Sanskrit. Preserving and sharing our rich cultural heritage."
      accentColor="linear-gradient(135deg, #8b5cf6, #6d28d9)"
      glowColor="rgba(139, 92, 246, 0.12)"
      borderColor="rgba(139, 92, 246, 0.2)"
      borderHex="#8b5cf6"
      sections={sections}
      keywords={["sanskrit", "संस्कृत", "shloka"]}
      channelUrl={YOUTUBE_CHANNELS.main.url}
      subjectLabel="Sanskrit"
      subjectKey="sanskrit"
    />
  );
}
