// Mapping: category ID -> URL slug
export const categoryIdToSlug = {
  7: "latihan-dasar",
  116: "wejangan-dharma",
  596: "menyentuh-bumi",
  512: "seremoni",
  215: "lagu",
  9999: "aplikasi-meditasi",
  6: "sutra-utama",
  244: "kaligrafi",
  124: "artikel",
  165: "berita",
  969: "chanting",
  4: "media",
  155: "tentang",
  907: "workshop",
  187: "proyek",
};

// Reverse mapping: URL slug -> category ID
export const slugToCategoryId = Object.fromEntries(
  Object.entries(categoryIdToSlug).map(([id, slug]) => [slug, id])
);

/**
 * Get the blog URL for a category ID
 * @param {string|number} categoryId
 * @returns {string} e.g. "/blog/wejangan-dharma"
 */
export function getCategoryUrl(categoryId) {
  const slug = categoryIdToSlug[Number(categoryId)];
  return slug ? `/blog/${slug}` : `/blog?category=${categoryId}`;
}

/**
 * Get the category ID from a URL slug
 * @param {string} slug
 * @returns {string|null} category ID or null
 */
export function getCategoryIdFromSlug(slug) {
  return slugToCategoryId[slug] || null;
}
