"use client";

import { useState } from "react";
import NavbarAboutDropdownDesktop from "./NavbarAboutDropdownDesktop";
import NavbarAboutDropdownMobile from "./NavbarAboutDropdownMobile";
import NavbarSearchDesktop from "./NavbarSearchDesktop";
import NavbarSearchMobile from "./NavbarSearchMobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          {/* <input type="text" placeholder="" /> */}
          <NavbarSearchMobile />
        </div>

        {/* Desktop Menu */}
        <div className="menu-tabs">
          <NavbarAboutDropdownDesktop />
          <div className="tabs">
            <a href="/blog">Blog</a>
          </div>
          <div className="tabs">
            <a href="/jadwal">Jadwal</a>
          </div>
          {/* <div className="tabs">
            <a href="#">Kontak</a>
          </div> */}
          <NavbarSearchDesktop />
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-tabs">
            <NavbarAboutDropdownMobile />
            <div className="mobile-tab">
              <a href="/blog">Blog</a>
            </div>
            <div className="mobile-tab">
              <a href="/jadwal">Jadwal</a>
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
