"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/helper";

const NavbarAboutDropdownDesktop = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPostNames = async () => {
      const filter = {
        categories: 155,
        exclude: 6348,
        $_fields: "id,title,categories",
        per_page: 100,
      };
      try {
        const response = await apiFetch("wp/posts", filter);
        setData(Array.isArray(response?.posts) ? response.posts : []);
      } catch {
        setData([]);
      }
    };

    fetchPostNames();
  }, []);
  return (
    <div className="tabs dropdown" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <a href="#" style={{ whiteSpace: 'nowrap' }}>Tentang <span style={{ fontSize: '12px', display: 'inline' }}>▼</span></a>
      {isOpen && data.length > 0 && (
        <div className="dropdown-menu">
          {data.map((post) => (
            <a key={post.id} href={`/posts/${post.id}`} className="dropdown-item">
              {post.title.rendered}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarAboutDropdownDesktop;
