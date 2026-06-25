import { getMostViewedPosts } from "@/lib/wp";

export async function GET() {
  try {
    const data = await getMostViewedPosts();
    if (data.error) return Response.json(data, { status: 500 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
