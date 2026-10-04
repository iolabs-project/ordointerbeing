import { getPostById, getPostBySlug } from "@/lib/wp";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;

    // Numeric = post ID (matches server-side apiFetch("wp/posts/<id>"))
    const data = /^\d+$/.test(slug) ? await getPostById(slug) : await getPostBySlug(slug);
    if (data.error) return Response.json(data, { status: 404 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
