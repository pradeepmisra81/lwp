import type { Metadata } from "next";
import SkeletonPage from "@/components/SkeletonPage/SkeletonPage";

export const metadata: Metadata = {
  title: "Ganit with LWP | Mathematics Education",
  description:
    "Learn mathematics the easy way with LWP. Vedic math, algebra, geometry, trigonometry, and more.",
};

const sections = [
  {
    title: "Vedic Mathematics",
    description:
      "Learn ancient Vedic techniques for lightning-fast mental calculations.",
  },
  {
    title: "Algebra & Equations",
    description:
      "Master algebraic concepts from basics to advanced problem solving.",
  },
  {
    title: "Geometry & Mensuration",
    description:
      "Visual learning of shapes, areas, volumes, and spatial reasoning.",
  },
  {
    title: "Trigonometry",
    description:
      "Understand trigonometric functions, identities, and real-world applications.",
  },
  {
    title: "Number Theory",
    description:
      "Explore the fascinating world of prime numbers, divisibility, and patterns.",
  },
  {
    title: "Practice Problems",
    description:
      "Challenge yourself with curated problem sets and detailed solutions.",
  },
];

export default function GanitPage() {
  return (
    <SkeletonPage
      emoji="📐"
      title="Ganit with LWP"
      subtitle="Master mathematics through engaging video lessons covering Vedic math, algebra, geometry, and beyond. Making math accessible and enjoyable for everyone."
      accentColor="linear-gradient(135deg, #f97316, #ea580c)"
      sections={sections}
    />
  );
}
