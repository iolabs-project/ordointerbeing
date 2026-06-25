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
  const query = new URLSearchParams(filters).toString();
  
  // Determine base URL: use absolute URL for server-side, relative for client-side
  const baseUrl = typeof window === 'undefined' 
    ? process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    : '';
  
  const url = query ? `${baseUrl}/api/${path}?${query}` : `${baseUrl}/api/${path}`;
  const res = await fetch(url);
  console.log("Fetching:", res);
  return res.json();
}