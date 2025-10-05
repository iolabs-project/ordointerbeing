import { getPost, getPosts, getMedias } from "@/lib/wp";
import InfoCard from "@/components/posts/InfoCard";
import MusicCard from "@/components/posts/MusicCard";
import PostContent from "@/components/posts/PostContent";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  const infos = await getPosts(
    { 
      per_page: 2,
      _fields: "id,title,content,date,categories,_embedded, _links",
      orderby: "date",
      _embed: "wp:term",
    }
  );

  const musics = await getPosts(
    { 
      per_page: 2,
      categories: 215,
      orderby: "date",
      _embed: true,
    }
  );

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
          <div className="info-box">
            <div className="title">
              <p>Sekilas Info</p>
              <a href="#">Lihat Semua</a>
            </div>
            <div className="info-content">
                {infos.map((info) => (
                  <InfoCard
                    key={info.id} 
                    id={info.id}
                    title={info.title.rendered}
                    content={info.content.rendered}
                    date={new Date(info.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                    category={info._embedded?.["wp:term"][0]?.flat().map(cat => cat.name) || []}
                    link={info._links?.self?.[0]?.href || "#"}
                  />
                ))}
            </div>
          </div>
          <div className="separator"></div>
          <div className="music-box">
            <div className="title">
              <p>Let's hear music</p>
              <a href="#">Lihat Semua</a>
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
              <a href="#">Lihat Semua</a>
            </div>
            <div className="facebook-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
