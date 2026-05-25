import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LWP | EdTech Platform Powered by Aprasak",
  description:
    "India's fastest-growing EdTech platform. Explore world-class educational content in Technology, Software Development, AI & ML, Blockchain, Mathematics, Finance, Sanskrit, and Hindi. Powered by Aprasak — empowering learners through high-quality content.",
  keywords: [
    "LWP",
    "Learning With PKM",
    "Aprasak",
    "EdTech",
    "Technology",
    "Software Development",
    "AI & ML",
    "AI",
    "ML",
    "Blockchain",
    "Mathematics",
    "Ganit",
    "Finance",
    "Sanskrit",
    "Hindi",
    "Education",
    "Online Learning",
  ],
  openGraph: {
    title: "LWP | EdTech Platform Powered by Aprasak",
    description:
      "India's fastest-growing EdTech platform. World-class content in Technology, Software Development, AI & ML, Blockchain, Mathematics, Finance, Sanskrit, and Hindi.",
    type: "website",
    url: "https://www.youtube.com/@learningwithpkm-vihang",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ScrollProgressBar />

        {/* Background decorations */}
        <div className="bg-grid" />
        <div className="bg-noise" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />

        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
