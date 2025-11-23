import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Try multiple methods to get the channel feed
    const channelHandle = '@plumvillageonline';
    
    // Method 1: Try using the channel handle directly
    let rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=UCcv869polar0QAX2pGRfL-w`;
    console.log('Attempting Method 1 - Channel ID:', rssUrl);
    
    let response = await fetch(rssUrl, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15.0)',
      }
    });

    // Method 2: If that fails, try with user parameter (older channels)
    if (!response.ok) {
      console.log('Method 1 failed, trying Method 2 - Username...');
      rssUrl = `https://www.youtube.com/feeds/videos.xml?user=plumvillageonline`;
      response = await fetch(rssUrl, { 
        cache: 'no-store',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15.0)',
        }
      });
    }

    // Method 3: Try the correct channel ID for Plum Village
    if (!response.ok) {
      console.log('Method 2 failed, trying Method 3 - Alternative Channel ID...');
      rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=UClPM7O3Q1KQhc-0if2LQvNg`;
      response = await fetch(rssUrl, { 
        cache: 'no-store',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; NextJS/15.0)',
        }
      });
    }

    console.log('Final RSS Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('All methods failed. Status:', response.status, 'Response:', errorText);
      return NextResponse.json(
        { error: `Failed to fetch YouTube RSS feed (Status: ${response.status})`, videos: [] },
        { status: 200 }
      );
    }

    const xmlText = await response.text();
    console.log('RSS feed fetched successfully, length:', xmlText.length);
    
    // Parse XML to extract video information
    const videoRegex = /<entry>([\s\S]*?)<\/entry>/g;
    const titleRegex = /<media:title>(.*?)<\/media:title>/;
    const videoIdRegex = /<yt:videoId>(.*?)<\/yt:videoId>/;
    const publishedRegex = /<published>(.*?)<\/published>/;
    const authorRegex = /<author>[\s\S]*?<name>(.*?)<\/name>/;
    
    const entries = [...xmlText.matchAll(videoRegex)];
    console.log('Found entries:', entries.length);
    
    const videos = entries.slice(0, 3).map(entry => {
      const entryText = entry[1];
      const title = entryText.match(titleRegex)?.[1] || 'Untitled';
      const videoId = entryText.match(videoIdRegex)?.[1] || '';
      const published = entryText.match(publishedRegex)?.[1] || '';
      const author = entryText.match(authorRegex)?.[1] || 'Plum Village';
      
      return {
        id: videoId,
        title: title,
        publishedAt: published,
        channelTitle: author,
      };
    }).filter(video => video.id);

    console.log(`Successfully fetched ${videos.length} videos from RSS`);
    
    if (videos.length === 0) {
      console.error('No videos parsed from RSS feed');
    }
    
    return NextResponse.json({ videos });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch videos', videos: [] },
      { status: 200 }
    );
  }
}
