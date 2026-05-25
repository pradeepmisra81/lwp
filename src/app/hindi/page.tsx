import type { Metadata } from "next";
import SubjectPageContent from "@/components/Subjects/SubjectPageContent";
import { YOUTUBE_CHANNELS } from "@/config/constants";

export const metadata: Metadata = {
  title: "Hindi | LWP",
  description:
    "Explore Hindi poetry, literature, and language arts with LWP.",
};

const sections = [
  {
    title: "Hindi Kavita (Poetry)",
    description:
      "Explore beautiful Hindi poems — from classic to contemporary poets.",
  },
  {
    title: "Literature & Prose",
    description:
      "Deep dive into Hindi literary masterpieces and short stories.",
  },
  {
    title: "Grammar & Composition",
    description:
      "Strengthen your Hindi grammar, essay writing, and comprehension skills.",
  },
  {
    title: "Modern Hindi",
    description:
      "Understanding contemporary Hindi usage in media, technology, and daily life.",
  },
  {
    title: "Famous Authors",
    description:
      "Study the works of Premchand, Harivansh Rai Bachchan, Mahadevi Verma, and more.",
  },
  {
    title: "Language Arts",
    description:
      "Creative expression through Hindi — debates, speeches, and storytelling.",
  },
];

export default function HindiPage() {
  return (
    <SubjectPageContent
      emoji="✍️"
      title="Hindi"
      subtitle="Dive into the richness of Hindi language — from timeless poetry and literature to modern language arts. Celebrating the beauty of our national language."
      accentColor="linear-gradient(135deg, #3b82f6, #1d4ed8)"
      glowColor="rgba(59, 130, 246, 0.12)"
      borderColor="rgba(59, 130, 246, 0.2)"
      borderHex="#3b82f6"
      sections={sections}
      keywords={["hindi", "हिंदी", "kavita"]}
      channelUrl={YOUTUBE_CHANNELS.main.url}
      subjectLabel="Hindi"
      subjectKey="hindi"
    />
  );
}
