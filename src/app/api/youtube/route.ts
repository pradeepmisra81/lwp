import { NextResponse } from "next/server";
import { YOUTUBE_CHANNELS } from "@/config/constants";

export async function GET() {
  try {
    const res = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNELS.main.id}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error("Failed to fetch RSS feed");
    }

    const xmlText = await res.text();
    
    // Simple regex parsing for the RSS feed to avoid heavy XML parsers
    const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
    let match;
    
    const tempVideos = [];
    while ((match = entryRegex.exec(xmlText)) !== null) {
      const entryText = match[1];
      
      const idMatch = entryText.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entryText.match(/<title>(.*?)<\/title>/);
      const linkMatch = entryText.match(/<link rel="alternate" href="(.*?)"\/>/);
      const pubDateMatch = entryText.match(/<published>(.*?)<\/published>/);
      const mediaDescMatch = entryText.match(/<media:description>([\s\S]*?)<\/media:description>/);
      
      if (idMatch && titleMatch && linkMatch) {
        const id = idMatch[1];
        const title = titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
        const link = linkMatch[1];
        const publishedAt = pubDateMatch ? pubDateMatch[1] : new Date().toISOString();
        const description = mediaDescMatch ? mediaDescMatch[1].trim().substring(0, 150) + '...' : '';
        
        tempVideos.push({
          id,
          title,
          link,
          thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
          publishedAt,
          description,
        });
      }
    }

    const videos = await Promise.all(
      tempVideos.map(async (v) => {
        let isShort = v.title.toLowerCase().includes("#shorts");
        if (!isShort) {
          try {
            const checkRes = await fetch(`https://www.youtube.com/shorts/${v.id}`, {
              method: "HEAD",
              redirect: "manual",
              next: { revalidate: 86400 } // Cache results for 24 hours
            });
            if (checkRes.status === 200) {
              isShort = true;
            }
          } catch {
            // ignore error
          }
        }
        return {
          ...v,
          isShort,
        };
      })
    );
    
    // Separate into videos and shorts
    const regularVideos = videos.filter(v => !v.isShort);
    const shorts = videos.filter(v => v.isShort);
    
    return NextResponse.json({
      success: true,
      videos: regularVideos,
      shorts: shorts,
      all: videos
    });
    
  } catch (error) {
    console.error("Error fetching YouTube feed:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
