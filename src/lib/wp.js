const WP_URL = "https://cms.ordointerbeing.id/wp-json/wp/v2/";
const CUSTOM_URL = "https://cms.ordointerbeing.id/wp-json/custom/v1/";

export async function getPosts(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${WP_URL}posts?${query}`);
  if (!res.ok) return { error: "Failed to fetch posts" };

  const data = await res.json();
  const totalPosts = res.headers.get("X-WP-Total");
  const totalPages = res.headers.get("X-WP-TotalPages");

  return {
    posts: data,
    totalPosts: totalPosts ? parseInt(totalPosts) : data.length,
    totalPages: totalPages ? parseInt(totalPages) : 1,
  };
}

export async function getPostById(id) {
  const res = await fetch(`${WP_URL}posts/${id}?author=true&_embed`);
  if (!res.ok) return { error: "Failed to fetch post" };
  return res.json();
}

export async function getMostViewedPosts() {
  const res = await fetch(`${CUSTOM_URL}most-viewed`);
  if (!res.ok) return { error: "Failed to fetch most viewed posts" };
  return res.json();
}

export async function getEvents(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${CUSTOM_URL}events?${query}`);
  if (!res.ok) return { error: "Failed to fetch events" };
  return res.json();
}

export async function getEventBySlug(slug) {
  const res = await fetch(`${CUSTOM_URL}events/${slug}`);
  if (!res.ok) return { error: "Failed to fetch event" };
  return res.json();
}
