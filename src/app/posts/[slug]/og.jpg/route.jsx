import sharp from "sharp";
import { apiFetch, normalizeMediaUrl } from "@/lib/helper";

// Link-preview image: featured image cropped to 1200x630 JPEG.
// Raw uploads can be multi-MB PNGs, which WhatsApp silently drops (~300 KB limit).
export async function GET(req, { params }) {
  const { slug } = await params;
  const post = await apiFetch(`wp/posts/slug/${slug}`);
  const src = normalizeMediaUrl(post?.jetpack_featured_media_url);
  if (!src) return new Response("Not found", { status: 404 });

  // no-store: originals can exceed Next's 2 MB data-cache limit; the CDN caches the output instead
  const res = await fetch(src, { cache: "no-store" });
  if (!res.ok) return new Response("Image unavailable", { status: 502 });

  const jpeg = await sharp(Buffer.from(await res.arrayBuffer()))
    .flatten({ background: "#ffffff" })
    .resize(1200, 630, { fit: "cover" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toBuffer();

  return new Response(jpeg, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
