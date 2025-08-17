import React from "react";

const Navbar = () => {
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