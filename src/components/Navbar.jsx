"use client";

import { useEffect, useState } from "react";
import { getPostNames } from "@/lib/wp";

const Navbar = () => {
  const [tentang, setTentang] = useState([]);
  const [isTentangOpen, setIsTentangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fetchPostNames = async () => {
      const filter = {
        categories: 155,
        exclude: 6348,
      };
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

        <div className="mobile-wrapper">
          {/* Hamburger Menu Button */}
          <button
            className="hamburger-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <input type="text" placeholder="" />
        </div>

        {/* Desktop Menu */}
        <div className="menu-tabs">
          <div
            className="tabs dropdown"
            onMouseEnter={() => setIsTentangOpen(true)}
            onMouseLeave={() => setIsTentangOpen(false)}
          >
            <a href="#">Tentang</a>
            {isTentangOpen && tentang.length > 0 && (
              <div className="dropdown-menu">
                {tentang.map((post) => (
                  <a
                    key={post.id}
                    href={`/posts/${post.id}`}
                    className="dropdown-item"
                  >
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
              <circle cx="11" cy="11" r="7"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Cari" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-tabs">
            <div
              className="mobile-tab dropdown"
              onClick={() => setIsTentangOpen(!isTentangOpen)}
            >
              <a href="#">Tentang</a>
              {isTentangOpen && tentang.length > 0 && (
                <div className="dropdown-menu">
                  {tentang.map((post) => (
                    <a
                      key={post.id}
                      href={`/posts/${post.id}`}
                      className="dropdown-item"
                    >
                      {post.title.rendered}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <div className="mobile-tab">
              <a href="#">Praktik</a>
            </div>
            <div className="mobile-tab">
              <a href="#">Jadwal</a>
            </div>
            <div className="mobile-tab">
              <a href="#">Blok</a>
            </div>
            <div className="mobile-tab">
              <a href="#">Kontak</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
