"use client";

import { useState } from "react";
import { praktikItems } from "./NavbarPraktikDropdownDesktop";

const NavbarPraktikDropdownMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-tab dropdown" onClick={() => setIsOpen(!isOpen)}>
      <a href="#" style={{ whiteSpace: "nowrap" }}>
        Praktik <span style={{ fontSize: "12px", display: "inline" }}>▼</span>
      </a>
      {isOpen && (
        <div className="dropdown-menu praktik-dropdown-menu">
          {praktikItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="dropdown-item praktik-dropdown-item"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="praktik-item-icon">{item.icon}</span>
              <span className="praktik-item-text">
                <span className="praktik-item-label">{item.label}</span>
                {item.subtitle && (
                  <span className="praktik-item-subtitle">{item.subtitle}</span>
                )}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarPraktikDropdownMobile;
