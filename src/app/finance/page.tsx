import type { Metadata } from "next";
import SkeletonPage from "@/components/SkeletonPage/SkeletonPage";

export const metadata: Metadata = {
  title: "Finance in LWP | Financial Education",
  description:
    "Learn personal finance, investing, stock markets, mutual funds, and wealth building with LWP.",
};

const sections = [
  {
    title: "Stock Market Basics",
    description:
      "Understand how the stock market works, from Sensex to Nifty and beyond.",
  },
  {
    title: "Mutual Funds",
    description:
      "A complete guide to mutual fund investing — SIP, lump sum, and fund selection.",
  },
  {
    title: "Personal Finance",
    description:
      "Budgeting, saving, and financial planning for a secure future.",
  },
  {
    title: "Wealth & Investment",
    description:
      "Strategies for long-term wealth creation and smart investment choices.",
  },
  {
    title: "Tax Planning",
    description:
      "Navigate the tax landscape and learn to optimize your tax savings.",
  },
  {
    title: "Financial Literacy",
    description:
      "Building a strong foundation of financial knowledge for everyday decisions.",
  },
];

export default function FinancePage() {
  return (
    <SkeletonPage
      emoji="💰"
      title="Finance in LWP"
      subtitle="Build financial literacy and learn smart money management. From stock markets to personal budgeting — empowering you to make informed financial decisions."
      accentColor="linear-gradient(135deg, #22c55e, #16a34a)"
      sections={sections}
    />
  );
}
