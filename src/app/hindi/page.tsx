import type { Metadata } from "next";
import SkeletonPage from "@/components/SkeletonPage/SkeletonPage";

export const metadata: Metadata = {
  title: "Hindi | LWP & Vihang",
  description:
    "Explore Hindi poetry, literature, and language arts with LWP & Vihang.",
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
    <SkeletonPage
      emoji="✍️"
      title="Hindi"
      subtitle="Dive into the richness of Hindi language — from timeless poetry and literature to modern language arts. Celebrating the beauty of our national language."
      accentColor="linear-gradient(135deg, #3b82f6, #1d4ed8)"
      sections={sections}
    />
  );
}
