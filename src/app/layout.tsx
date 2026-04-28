import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LWP & Vihang | Learning With PKM",
  description:
    "Explore educational content in Mathematics (Ganit), Finance, Sanskrit, and Hindi. Created by PKM (Pradeep Kumar Misra) — empowering learners through high-quality YouTube content.",
  keywords: [
    "LWP",
    "Learning With PKM",
    "Vihang",
    "Mathematics",
    "Ganit",
    "Finance",
    "Sanskrit",
    "Hindi",
    "Education",
    "YouTube",
  ],
  openGraph: {
    title: "LWP & Vihang | Learning With PKM",
    description:
      "Explore educational content in Mathematics, Finance, Sanskrit, and Hindi.",
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
        {/* Background decorations */}
        <div className="bg-grid" />
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />

        <Navbar />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
