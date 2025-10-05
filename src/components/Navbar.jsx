"use client";

import { useEffect, useState } from "react";
import { getPostNames } from "@/lib/wp";

const Navbar = () => {
  const [tentang, setTentang] = useState([]);
  const [isTentangOpen, setIsTentangOpen] = useState(false);

  useEffect(() => {
    const fetchPostNames = async () => {
      const filter = {
        categories: 155
      }
      const names = await getPostNames(filter);
      setTentang(names);
    };

    fetchPostNames();
  }, []);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <a className="left-side" href="/">
          <img src="/assets/navbar-logo.png" alt="Navbar logo" />
          <p className="text-1">Komunitas Zen Plum Village</p>
        </a>
        <div className="menu-tabs">
          <div className="tabs dropdown"
               onMouseEnter={() => setIsTentangOpen(true)}
               onMouseLeave={() => setIsTentangOpen(false)}>
            <a href="#">Tentang</a>
            {isTentangOpen && tentang.length > 0 && (
              <div className="dropdown-menu">
                {tentang.map((post) => (
                  <a key={post.id} href={`/posts/${post.id}`} className="dropdown-item">
                    {post.title.rendered}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div className="tabs">
            <a href="#">Praktik</a>
          </div>
          <div className="tabs">
            <a href="#">Jadwal</a>
          </div>
          <div className="tabs">
            <a href="#">Blok</a>
          </div>
          <div className="tabs">
            <a href="#">Kontak</a>
          </div>
          <div className="tabs">
            <a href="#">Cari</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
