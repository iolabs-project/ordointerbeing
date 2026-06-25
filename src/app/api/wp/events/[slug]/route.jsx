import { getEventBySlug } from "@/lib/wp";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;

    const data = await getEventBySlug(slug);
    if (data.error) return Response.json(data, { status: 500 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
