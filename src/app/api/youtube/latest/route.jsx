import { NextResponse } from 'next/server';

async function fetchRss(url) {
  const res = await fetch(url, {
    cache: 'no-store',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15.0)' },
  });
  if (!res.ok) return { ok: false, status: res.status, text: await res.text() };
  const xml = await res.text();
  return { ok: true, xml };
}

function parseRssEntries(xmlText, limit = 3) {
  const videoRegex = /<entry>([\s\S]*?)<\/entry>/g;
  const titleRegex = /<media:title>(.*?)<\/media:title>/;
  const videoIdRegex = /<yt:videoId>(.*?)<\/yt:videoId>/;
  const publishedRegex = /<published>(.*?)<\/published>/;
  const authorRegex = /<author>[\s\S]*?<name>(.*?)<\/name>/;

  const entries = [...xmlText.matchAll(videoRegex)];

  const videos = entries.slice(0, limit).map((entry) => {
    const entryText = entry[1];
    const title = entryText.match(titleRegex)?.[1] || 'Untitled';
    const videoId = entryText.match(videoIdRegex)?.[1] || '';
    const published = entryText.match(publishedRegex)?.[1] || '';
    const author = entryText.match(authorRegex)?.[1] || 'Plum Village Indonesia';
    return { id: videoId, title, publishedAt: published, channelTitle: author };
  }).filter((v) => v.id);

  return videos;
}

export async function GET() {
  try {
    const defaultChannelId = 'UClPM7O3Q1KQhc-0if2LQvNg';
    const defaultUsername = 'PlumVillageIndonesia';

    // 1) Try RSS by channel ID
    let result = await fetchRss(`https://www.youtube.com/feeds/videos.xml?channel_id=${defaultChannelId}`);
    if (result.ok) {
      const videos = parseRssEntries(result.xml);
      if (videos.length > 0) {
        console.info('YouTube: RSS by channel_id succeeded');
        return NextResponse.json({ videos });
      } else {
        console.info('YouTube: RSS by channel_id returned no videos');
      }
    } else {
      console.info(`YouTube: RSS by channel_id failed (status ${result.status})`);
    }

    // 2) Try RSS by username
    result = await fetchRss(`https://www.youtube.com/feeds/videos.xml?user=${defaultUsername}`);
    if (result.ok) {
      const videos = parseRssEntries(result.xml);
      if (videos.length > 0) {
        console.info('YouTube: RSS by username succeeded');
        return NextResponse.json({ videos });
      } else {
        console.info('YouTube: RSS by username returned no videos');
      }
    } else {
      console.info(`YouTube: RSS by username failed (status ${result.status})`);
    }

    // 3) Fallback to YouTube Data API if API key is provided
    const API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || process.env.YT_API_KEY;
    if (API_KEY) {
      console.info('YouTube: Falling back to Data API');
      // prefer channelId search
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${defaultChannelId}&part=snippet,id&order=date&maxResults=3&type=video`;
      const apiRes = await fetch(apiUrl, { cache: 'no-store' });
      if (apiRes.ok) {
        const json = await apiRes.json();
        const videos = (json.items || []).map((it) => ({
          id: it.id?.videoId || '',
          title: it.snippet?.title || 'Untitled',
          publishedAt: it.snippet?.publishedAt || '',
          channelTitle: it.snippet?.channelTitle || defaultUsername,
        })).filter((v) => v.id).slice(0, 3);
        if (videos.length > 0) {
          console.info('YouTube: Data API returned videos');
          return NextResponse.json({ videos });
        } else {
          console.info('YouTube: Data API returned no videos');
        }
      }
    }

    console.info('YouTube: No API key present or all fetch methods failed');

    // Nothing worked — return a friendly error but keep 200 for client handling
    return NextResponse.json({ error: 'Failed to fetch YouTube videos', videos: [] }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message || 'Failed to fetch videos', videos: [] }, { status: 200 });
  }
}
