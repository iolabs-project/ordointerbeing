import { getPost, getPosts, getMedias } from "@/lib/wp";
import InfoCard from "@/components/posts/InfoCard";
import MusicCard from "@/components/posts/MusicCard";

export default async function Category({ params }) {
  const { id } = await params;

  const categroyIDs = {
    7: "Latihan Dasar",
    116: "Weajangan Dharma",
    596: "Menyentuh Bumi",
    512: "Seremoni",
    215: "Lagu",
    6: "Sutra",
    244: "Kaligrafi"
  }
  
  return (
    <div className="category-section">
      
    </div>
  );
}
