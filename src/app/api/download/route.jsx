export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const fileUrl = searchParams.get("url");

  if (!fileUrl) {
    return new Response(JSON.stringify({ error: "Missing URL" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch(fileUrl);
  console.log(res);

  if (!res.ok) {
    return new Response(JSON.stringify({ error: "Failed to fetch file" }), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  }

  const contentType = res.headers.get("content-type") || "application/octet-stream";
  const fileName = fileUrl.split("/").pop() || "file.mp3";
  const arrayBuffer = await res.arrayBuffer();

  return new Response(arrayBuffer, {
    headers: {
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${fileName}"`,
    },
  });
}
