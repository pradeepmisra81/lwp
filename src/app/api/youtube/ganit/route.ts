import { NextResponse } from "next/server";

const GANIT_CHANNEL_ID = "UC4lyYDmzrVj7mN8J9tUy4zw";

export async function GET() {
  try {
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${GANIT_CHANNEL_ID}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch Ganit RSS feed");
    }

    const xmlText = await res.text();

    const videos = [];
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;

    while ((match = entryRegex.exec(xmlText)) !== null) {
      const entryText = match[1];

      const idMatch = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entryText.match(/<title>(.*?)<\/title>/);
      const linkMatch = entryText.match(/<link rel="alternate" href="(.*?)"\/>/);
      const pubDateMatch = entryText.match(/<published>(.*?)<\/published>/);
      const mediaDescMatch = entryText.match(
        /<media:description>([\s\S]*?)<\/media:description>/
      );

      if (idMatch && titleMatch && linkMatch) {
        const id = idMatch[1];
        const title = titleMatch[1]
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
        const link = linkMatch[1];
        const publishedAt = pubDateMatch
          ? pubDateMatch[1]
          : new Date().toISOString();
        const description = mediaDescMatch
          ? mediaDescMatch[1].trim().substring(0, 150) + "..."
          : "";

        const isShort = link.includes("/shorts/");

        videos.push({
          id,
          title,
          link,
          thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
          publishedAt,
          description,
          isShort,
        });
      }
    }

    const regularVideos = videos.filter((v) => !v.isShort);
    const shorts = videos.filter((v) => v.isShort);

    return NextResponse.json({
      success: true,
      videos: regularVideos,
      shorts: shorts,
      all: videos,
    });
  } catch (error) {
    console.error("Error fetching Ganit YouTube feed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch Ganit videos" },
      { status: 500 }
    );
  }
}
