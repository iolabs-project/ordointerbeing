import { getPostById } from "@/lib/wp";

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    const data = await getPostById(id);
    if (data.error) return Response.json(data, { status: 500 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
