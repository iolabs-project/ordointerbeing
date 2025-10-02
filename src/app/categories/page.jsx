"use client";
import { useState } from "react";
import { getPost, getPosts, getMedias } from "@/lib/wp";

export default  function Category({ params }) {
  const { id } =  params;

  const categoryIDs = {
    7: "Latihan Dasar",
    116: "Wejangan Dharma",
    596: "Menyentuh Bumi",
    512: "Seremoni",
    215: "Lagu",
    6: "Sutra",
    244: "Kaligrafi",
  };

  const entries = Object.entries(categoryIDs);
  const firstKey = entries[0]?.[0] ?? null;
  const [active, setActive] = useState(firstKey);
  return (
    <div className="category-section">
      <h1 className="category-title">Kategori</h1>
      <div className="category-tab">
        {entries.map(([key, value]) => (
          <button
            key={key}
            className={`tab ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="category-post"></div>
    </div>
  );
}
