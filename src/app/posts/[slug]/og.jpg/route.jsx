import sharp from "sharp";
import { apiFetch, normalizeMediaUrl } from "@/lib/helper";

// ISR (revalidates with the 60s post data): served from cache like a static file (Content-Length, no cold sharp run),
// which link-preview crawlers like WhatsApp need; dynamic responses were streamed without it.
export const dynamic = "force-static";

// Link-preview image: featured image cropped to 1200x630 JPEG.
// Raw uploads can be multi-MB PNGs, which WhatsApp silently drops (~300 KB limit).
export async function GET(req, { params }) {
  const { slug } = await params;
  const post = await apiFetch(`wp/posts/slug/${slug}`);
  const src = normalizeMediaUrl(post?.jetpack_featured_media_url);
  if (!src) return new Response("Not found", { status: 404 });

  // no-store: originals can exceed Next's 2 MB data-cache limit; ISR caches the output instead
  const res = await fetch(src, { cache: "no-store" });
  // Throw instead of returning an error response so ISR doesn't cache the failure
  if (!res.ok) throw new Error(`OG source image ${res.status}: ${src}`);

  const jpeg = await sharp(Buffer.from(await res.arrayBuffer()))
    .flatten({ background: "#ffffff" })
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  return new Response(jpeg, {
    headers: { "Content-Type": "image/jpeg", "Content-Length": String(jpeg.length) },
  });
}
