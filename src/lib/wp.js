const WP_URL = "https://cms.ordointerbeing.id/wp-json/wp/v2/";
const CUSTOM_URL = "https://cms.ordointerbeing.id/wp-json/custom/v1/";

// Cache all WordPress API responses for 5 minutes (ISR)
const FETCH_OPTIONS = { next: { revalidate: 300 } };

export async function getPosts(filters = {}) {
  try {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${WP_URL}posts?${query}`, FETCH_OPTIONS);
    if (!res.ok) return { error: "Failed to fetch posts" };

    const data = await res.json();
    const totalPosts = res.headers.get("X-WP-Total");
    const totalPages = res.headers.get("X-WP-TotalPages");

    return {
      posts: data,
      totalPosts: totalPosts ? parseInt(totalPosts) : data.length,
      totalPages: totalPages ? parseInt(totalPages) : 1,
    };
  } catch (err) {
    return { error: err.message || "Failed to fetch posts" };
  }
}

export async function getPostById(id) {
  try {
    const res = await fetch(`${WP_URL}posts/${id}?_embed&_fields=id,title,content,date,jetpack_featured_media_url`, FETCH_OPTIONS);
    if (!res.ok) return { error: "Failed to fetch post" };
    return await res.json();
  } catch (err) {
    return { error: err.message || "Failed to fetch post" };
  }
}

export async function getMostViewedPosts() {
  try {
    const res = await fetch(`${CUSTOM_URL}most-viewed`, FETCH_OPTIONS);
    if (!res.ok) return { error: "Failed to fetch most viewed posts" };
    return await res.json();
  } catch (err) {
    return { error: err.message || "Failed to fetch most viewed posts" };
  }
}

export async function getEvents(filters = {}) {
  try {
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(`${CUSTOM_URL}events?${query}`, FETCH_OPTIONS);
    if (!res.ok) return { error: "Failed to fetch events" };
    return await res.json();
  } catch (err) {
    return { error: err.message || "Failed to fetch events" };
  }
}

export async function getEventBySlug(slug) {
  try {
    const res = await fetch(`${CUSTOM_URL}events/${slug}`, FETCH_OPTIONS);
    if (!res.ok) return { error: "Failed to fetch event" };
    return await res.json();
  } catch (err) {
    return { error: err.message || "Failed to fetch event" };
  }
}
