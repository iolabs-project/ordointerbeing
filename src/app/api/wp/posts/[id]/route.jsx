const url = "https://dev.ordointerbeing.id/wp-json/wp/v2/";

export async function GET(req, { params }) {
  try {
    const { id } = params;

    const res = await fetch(`${url}posts/${id}?author=true&_embed`);
    if (!res.ok) return Response.json({ error: "Failed to fetch post" }, { status: 500 });

    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}