"use client";

import { useState } from "react";
import Link from "next/link";
import NavbarAboutDropdownDesktop from "./NavbarAboutDropdownDesktop";
import NavbarAboutDropdownMobile from "./NavbarAboutDropdownMobile";
import NavbarPraktikDropdownDesktop from "./NavbarPraktikDropdownDesktop";
import NavbarPraktikDropdownMobile from "./NavbarPraktikDropdownMobile";
import NavbarSearchDesktop from "./NavbarSearchDesktop";
import NavbarSearchMobile from "./NavbarSearchMobile";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrapper">
        <Link className="left-side" href="/">
          <img src="/assets/navbar-logo.png" alt="Navbar logo" />
          <p className="text-1">Komunitas Zen Plum Village</p>
        </Link>

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
          <NavbarPraktikDropdownDesktop />
          <div className="tabs">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="tabs">
            <Link href="/jadwal">Jadwal</Link>
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
            <NavbarPraktikDropdownMobile />
            <div className="mobile-tab">
              <Link href="/blog">Blog</Link>
            </div>
            <div className="mobile-tab">
              <Link href="/jadwal">Jadwal</Link>
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
