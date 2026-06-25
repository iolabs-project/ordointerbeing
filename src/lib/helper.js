import * as wp from "@/lib/wp";

export function randomizeArray(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getEventSlug(link) {
  if (!link) return "";
  return link.replace(/\/$/, "").split("/").pop();
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export function formatEventDateRange(startStr, endStr) {
  const [, startMonth, startDay] = startStr.split("-");
  const [endYear, endMonth, endDay] = endStr.split("-");
  return `${startDay} ${MONTHS[+startMonth - 1]} s.d. ${endDay} ${MONTHS[+endMonth - 1]} ${endYear}`;
}

export async function apiFetch(path, filters = {}) {
  // Server-side: call the WP API directly instead of looping back through
  // this app's own /api routes, which requires a server already listening
  // on this instance (breaks during `next build` and is flaky in dev).
  if (typeof window === "undefined") {
    if (path === "wp/posts/most-viewed") return wp.getMostViewedPosts();
    if (path === "wp/posts") return wp.getPosts(filters);
    if (path.startsWith("wp/posts/")) return wp.getPostById(path.slice("wp/posts/".length));
    if (path === "wp/events") return wp.getEvents(filters);
    if (path.startsWith("wp/events/")) return wp.getEventBySlug(path.slice("wp/events/".length));

    throw new Error(`apiFetch: no server-side handler for "${path}"`);
  }

  const query = new URLSearchParams(filters).toString();
  const url = query ? `/api/${path}?${query}` : `/api/${path}`;
  const res = await fetch(url);
  return res.json();
}