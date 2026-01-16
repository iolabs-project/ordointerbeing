"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/helper";

const NavbarAboutDropdownMobile = () => {
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
      const response = await apiFetch("wp/posts", filter);
      setData(response.posts);
    };

    fetchPostNames();
  }, []);
  return (
    <div className="mobile-tab dropdown" onClick={() => setIsOpen(!isOpen)}>
      <a href="#">Tentang</a>
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

export default NavbarAboutDropdownMobile;
