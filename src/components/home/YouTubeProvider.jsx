import SectionFive from "./SectionFive";

// Server component that fetches YouTube data once
export default async function YouTubeProvider() {
  let videos = [];
  let error = null;

  try {
    // Direct RSS fetch - works during build and runtime
    const channelId = "UClPM7O3Q1KQhc-0if2LQvNg";
    const res = await fetch(
      `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`,
      { next: { revalidate: 300 } } // Cache for 5 minutes
    );

    if (res.ok) {
      const xml = await res.text();
      const videoRegex = /<entry>([\s\S]*?)<\/entry>/g;
      const titleRegex = /<media:title>(.*?)<\/media:title>/;
      const videoIdRegex = /<yt:videoId>(.*?)<\/yt:videoId>/;
      const publishedRegex = /<published>(.*?)<\/published>/;
      const authorRegex = /<author>[\s\S]*?<name>(.*?)<\/name>/;

      const entries = [...xml.matchAll(videoRegex)];
      videos = entries.slice(0, 3).map((entry) => {
        const entryText = entry[1];
        const title = entryText.match(titleRegex)?.[1] || "Untitled";
        const videoId = entryText.match(videoIdRegex)?.[1] || "";
        const published = entryText.match(publishedRegex)?.[1] || "";
        const author = entryText.match(authorRegex)?.[1] || "Plum Village Indonesia";
        return { id: videoId, title, publishedAt: published, channelTitle: author };
      }).filter((v) => v.id);
    } else {
      error = "Failed to fetch YouTube videos";
    }
  } catch (err) {
    error = err.message;
  }

  return <SectionFive videos={videos} loading={false} error={error} />;
}
