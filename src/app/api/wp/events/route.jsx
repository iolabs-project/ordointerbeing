export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.toString();

    const res = await fetch(`https://ordointerbeing.id/wp-json/custom/v1/events?${query}`);
    if (!res.ok) return Response.json({ error: "Failed to fetch events" }, { status: 500 });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
