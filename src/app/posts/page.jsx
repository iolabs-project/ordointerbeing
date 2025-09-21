import { getPost } from "@/lib/wp";

export default async function Post({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="post-section">

    </div>
  );
}
