"use client";

import { apiFetch } from "@/lib/helper";
import { useEffect, useState } from "react";
import NavbarSearchResult from "./NavbarSearchResult";

const NavbarSearchMobile = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim(); 1

    if (q.length < 2) {
      if (results.length !== 0) setResults([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);

    const timer = setTimeout(async () => {
      try {
        const response = await apiFetch("wp/posts", {
          search: q,
          search_columns: "post_title", 
          per_page: 5,
          $_fields: "id,title",
        });

        if (!cancelled) {
          setResults(response.posts || []);
        }
      } catch (err) {
        if (!cancelled) setResults([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 300);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Cari"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query.trim().length >= 2 && (
        <div className="search-dropdown">
          {loading && <div className="search-loading">Mencari...</div>}

          {!loading && results.length === 0 && (
            <div className="search-empty">Tidak ada hasil</div>
          )}

          {results.map((post) => (
            <NavbarSearchResult
              key={post.id}
              id={post.id}
              title={post.title.rendered}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarSearchMobile;
