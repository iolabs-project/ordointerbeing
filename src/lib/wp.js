const url = "https://dev.ordointerbeing.id/wp-json/wp/v2/";

export async function getPostNames(filter = {}) {
  const query = new URLSearchParams(filter).toString();
  const res = await fetch(`${url}posts?${query}&_fields=id,title,categories&per_page=100`);

  if (!res.ok) throw new Error("Failed to fetch post names");
  return res.json();
}

export async function getPosts(filter = {}) {
  const query = new URLSearchParams(filter).toString();
  const res = await fetch(`${url}posts?${query}`);

  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${url}posts/${id}?author=true&_embed`);

  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
