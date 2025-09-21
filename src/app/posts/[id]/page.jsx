import { getPost } from "@/lib/wp";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  // Regex to capture <figure class="hero"> ... </figure>
  const heroRegex = /<figure[^>]*class="[^"]*hero[^"]*"[^>]*>[\s\S]*?<\/figure>/i;
  const match = post.content.rendered.match(heroRegex);

  const heroHTML = match ? match[0] : null;
  let contentWithoutHero = post.content.rendered.replace(heroRegex, "");

  const author = post._embedded?.author?.[0]?.name || "Unknown";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const insertMarkup = `
    <div class="post-meta">
      <p class="author"><i class="fa-solid fa-user"></i> Posted by  <strong>${author}</strong></p>
      <p class="date"><i class="fa solid fa-clock"></i> ${date}</p>
    </div>
`;
contentWithoutHero = insertMarkup + contentWithoutHero;

  console.log(post);

  return <div className="post-section">
    <div className="hero-figure" dangerouslySetInnerHTML={{ __html: heroHTML }}>

    </div>
    {/* <div className="post-meta">
        <p className="author"><i className="fa-solid fa-user"></i> Posted by  <strong>{author}</strong></p>
        <p className="date"><i className="fa solid fa-clock"></i> {date}</p>
    </div> */}
    <div className="container">
        <div className="left" dangerouslySetInnerHTML={{ __html: contentWithoutHero }} />
        <div className="right">
            <div className="info-box">
                <div className="info-title">
                    <p>Sekilas Info</p>
                    <a href="#">Lihat Semua</a>
                </div>
                <div className="info-content">

                </div>
            </div>
            <div className="music-box">
                <div className="music-title">
                    <p>Let's hear music</p>
                    <a href="#">Lihat Semua</a>
                </div>
                <div className="music-content">

                </div>
            </div>

            <div className="facebook-box">
                <div className="facebook-title">
                    <p>Facebook Post</p>
                    <a href="#">Lihat Semua</a>
                </div>
                <div className="facebook-content">

                </div>
            </div>
        </div>
    </div>
  </div>;
}
