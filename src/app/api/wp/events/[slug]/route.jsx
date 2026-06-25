export async function GET(req, { params }) {
  try {
    const { slug } = await params;

    const res = await fetch(`https://ordointerbeing.id/wp-json/custom/v1/events/${slug}`);
    if (!res.ok) return Response.json({ error: "Failed to fetch event" }, { status: 500 });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
