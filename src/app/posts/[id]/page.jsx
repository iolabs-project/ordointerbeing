import { notFound } from "next/navigation";
import InfoCard from "@/components/posts/InfoCard";
import MusicCard from "@/components/posts/MusicCard";
import PostContent from "@/components/posts/PostContent";
import { apiFetch } from "@/lib/helper";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await apiFetch(`wp/posts/${id}`);

  if (!post || post.error || post.code === "rest_post_invalid_id" || !post.content) {
    notFound();
  }

  const infosData = await apiFetch('wp/posts',
    {
      per_page: 2,
      _fields: "id,title,content,date,categories,_embedded, _links",
      orderby: "date",
      _embed: "wp:term,wp:featuredmedia",
    }
  );
  const infos = Array.isArray(infosData?.posts) ? infosData.posts : Array.isArray(infosData) ? infosData : [];
  const musicsData = await apiFetch('wp/posts',
    {
      per_page: 2,
      categories: 215,
      orderby: "date",
      _embed: true,
    }
  );
  const musics = Array.isArray(musicsData?.posts) ? musicsData.posts : Array.isArray(musicsData) ? musicsData : [];

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
                    date={new Date(info.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    category={info._embedded?.["wp:term"]?.[0]?.flat().map(cat => cat.name) || []}
                    link={info._links?.self?.[0]?.href || "#"}
                    img={info._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/default-info.png"}
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
                    img={music._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/assets/default-music.png"}
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
              <iframe 
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fplumvillageindo&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                width="340" 
                height="500" 
                style={{ border: 'none', overflow: 'hidden' }} 
                scrolling="no" 
                frameBorder="0" 
                allowFullScreen={true} 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
