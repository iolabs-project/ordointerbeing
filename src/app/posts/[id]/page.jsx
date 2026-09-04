import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import InfoCard from "@/components/posts/InfoCard";
import MusicCard from "@/components/posts/MusicCard";
import PostContent from "@/components/posts/PostContent";
import ShareButtons from "@/components/posts/ShareButtons";
import { apiFetch } from "@/lib/helper";

// Pre-render the 20 most recent posts at build time
export async function generateStaticParams() {
  const data = await apiFetch("wp/posts", {
    per_page: 20,
    _fields: "id",
    orderby: "date",
  });
  const posts = data?.posts || data || [];
  return posts.map((post) => ({ id: String(post.id) }));
}

function getPrimaryCategory(embedded) {
  const names = embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
  return names.find((name) => name.toLowerCase() !== "uncategorized") || names[0] || "";
}

export default async function Post({ params }) {
  const { id } = await params;

  // Parallelize all API calls instead of sequential awaits
  const [post, infosData, musicsData] = await Promise.all([
    apiFetch(`wp/posts/${id}`),
    apiFetch('wp/posts', {
      per_page: 2,
      _fields: "id,title,date,categories,jetpack_featured_media_url",
      orderby: "date",
      _embed: "wp:term",
    }),
    apiFetch('wp/posts', {
      per_page: 2,
      categories: 215,
      orderby: "date",
      _fields: "id,title,excerpt,content,jetpack_featured_media_url",
    }),
  ]);

  const infos = infosData?.posts || infosData || [];
  const musics = musicsData?.posts || musicsData || [];

  // Handle missing or error post
  if (!post || post.error || !post.title) {
    notFound();
  }

  //* Post Section Processing
  const heroURL = post.jetpack_featured_media_url || "";
  let content = post.content?.rendered || "";

  const author = post._embedded?.author?.[0]?.name || "Unknown";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const insertMarkup = `
      <div class="post-meta">
        <p class="author"><i class="fa-solid fa-user"></i> Posted by <strong>${author}</strong></p>
        <p class="date"><i class="fa solid fa-clock"></i> ${date}</p>
      </div>
  `;

  content = insertMarkup + content;
  //* End Post Section Processing


  return (
    <div className="post-section">
      <div className="hero-figure">
        {heroURL && (
          <Image
            src={heroURL}
            alt={post.title.rendered}
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        )}
        <p className="hero-text">{post.title.rendered}</p>
      </div>
      <div className="container">
        <div className="left">
          <PostContent content={content} />
          <ShareButtons title={post.title.rendered} />
        </div>
        <div className="right">
          <div className="separator"></div>
          <div className="info-box">
            <div className="title">
              <p>Sekilas Info</p>
              <Link href="/blog">Lihat Semua</Link>
            </div>
            <div className="info-content">
                {infos.map((info) => (
                  <InfoCard
                    key={info.id}
                    id={info.id}
                    title={info.title.rendered}
                    img={info.jetpack_featured_media_url || ""}
                    date={new Date(info.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    category={getPrimaryCategory(info._embedded)}
                    link={info._links?.self?.[0]?.href || "#"}
                  />
                ))}
            </div>
          </div>
          <div className="separator"></div>
          <div className="music-box">
            <div className="title">
              <p>Let's hear music</p>
              {/* <a href="#">Lihat </a> */}
            </div>
            <div className="music-content">
                {musics.map((music) => (
                  <MusicCard
                    key={music.id}
                    id={music.id}
                    title={music.title.rendered}
                    desc={music.excerpt.rendered}
                    content={music.content.rendered}
                    img={music.jetpack_featured_media_url || "/assets/default-music.png"}
                  />
                ))}
            </div>  
          </div>
          <div className="separator"></div>
          <div className="facebook-box">
            <div className="facebook-title">
              <p>Facebook Post</p>
              <a href="https://www.facebook.com/plumvillageindo" target="_blank" rel="noopener noreferrer">lihat semua</a>
            </div>
            <div className="facebook-content">
              <a
                href="https://www.facebook.com/plumvillageindo"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook-fallback"
              >
                <i className="fa-brands fa-facebook"></i>
                <p>Plum Village Indonesia</p>
                <span>Kunjungi halaman Facebook kami</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
