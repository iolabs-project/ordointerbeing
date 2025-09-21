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

console.log(tentang);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <a className="left-side">
          <img src="/assets/navbar-logo.png" alt="Navbar logo" />
          <p className="text-1">Komunitas Zen Plum Village</p>
        </a>
        <div className="menu-tabs">
          <div className="tabs">
            <a href="#">Tentang</a>
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
