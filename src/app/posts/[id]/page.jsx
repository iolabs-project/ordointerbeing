import InfoCard from "@/components/posts/InfoCard";
import MusicCard from "@/components/posts/MusicCard";
import PostContent from "@/components/posts/PostContent";
import { apiFetch } from "@/lib/helper";

function getPrimaryCategory(embedded) {
  const names = embedded?.["wp:term"]?.[0]?.map((cat) => cat.name) || [];
  return names.find((name) => name.toLowerCase() !== "uncategorized") || names[0] || "";
}

export default async function Post({ params }) {
  const { id } = await params;
  const post = await apiFetch(`wp/posts/${id}`);
  const infosData = await apiFetch('wp/posts', 
    { 
      per_page: 2,
      _fields: "id,title,date,categories,jetpack_featured_media_url,_embedded, _links",
      orderby: "date",
      _embed: "wp:term",
    }
  );
  const infos = infosData?.posts || infosData || [];
  
  const musicsData = await apiFetch('wp/posts', 
    { 
      per_page: 2,
      categories: 215,
      orderby: "date",
      _embed: true,
    }
  );
  const musics = musicsData?.posts || musicsData || [];

  //* Post Section Processing 
  const heroURL = post.jetpack_featured_media_url || "";
  let content = post.content.rendered;

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
        <img src={heroURL} alt="" />
      </div>
      <div className="container">
        <PostContent content={content} />
        <div className="right">
          <div className="separator"></div>
          <div className="info-box">
            <div className="title">
              <p>Sekilas Info</p>
              <a href="/blog">Lihat Semua</a>
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
