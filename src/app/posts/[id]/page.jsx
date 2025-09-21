import { getPost } from "@/lib/wp";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  const author = post._embedded?.author?.[0]?.name || "Unknown";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let modifiedContent = post.content.rendered;
const insertMarkup = `
    <div class="post-meta">
      <p class="author"><i class="fa-solid fa-user"></i> Posted by  <strong>${author}</strong></p>
      <p class="date"><i class="fa solid fa-clock"></i> ${date}</p>
    </div>
`;

  if (modifiedContent.includes("</figure>")) {
    modifiedContent = modifiedContent.replace("</figure>", `</figure>${insertMarkup}`);
  } else {
    // fallback: just append at the beginning
    modifiedContent = insertMarkup + modifiedContent;
  }

  console.log(post);

  return <div className="post-content" dangerouslySetInnerHTML={{ __html: modifiedContent }} />;
}
