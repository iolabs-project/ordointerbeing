"use client";

import { apiFetch } from "@/lib/helper";
import { useEffect, useState } from "react";
import NavbarSearchResult from "./NavbarSearchResult";

const NavbarSearchDesktop = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const q = query.trim();

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
    <div className="tabs search">
      <svg
        className="prefix-input"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <div className="search-container">
        <input
          type="text"
          placeholder="Cari"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query.trim().length >= 2 && (
          <div className="search-dropdown">
            {loading && (
              <div className="search-loading">Mencari...</div>
            )}

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
    </div>
  );
};

export default NavbarSearchDesktop;
