export async function GET() {
  try {
    const res = await fetch(`https://ordointerbeing.id/wp-json/custom/v1/most-viewed`);
    if (!res.ok) return Response.json({ error: "Failed to fetch most viewed posts" }, { status: 500 });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}