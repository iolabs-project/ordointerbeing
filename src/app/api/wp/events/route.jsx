import { getEvents } from "@/lib/wp";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const filters = Object.fromEntries(searchParams.entries());

    const data = await getEvents(filters);
    if (data.error) return Response.json(data, { status: 500 });

    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
