"use client";

import { useState } from "react";

const praktikItems = [
  {
    id: "kelas-moodle",
    label: "Kelas Moodle",
    subtitle: null,
    href: "https://belajar.ordointerbeing.org",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "kelas-daring",
    label: "Kelas Daring",
    subtitle: null,
    href: "https://belajar.ordointerbeing.org",
    external: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "7",
    label: "Latihan Dasar",
    subtitle: "latihan dasar",
    href: "/blog/latihan-dasar",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
      </svg>
    ),
  },
  {
    id: "116",
    label: "Wejangan Dharma",
    subtitle: "Video ceramah beserta subtitle",
    href: "/blog/wejangan-dharma",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "596",
    label: "Menyentuh Bumi",
    subtitle: "Teks panduan menyentuh bumi",
    href: "/blog/menyentuh-bumi",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="23 4 23 10 17 10" />
        <polyline points="1 20 1 14 7 14" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    id: "512",
    label: "Seremoni",
    subtitle: "Berbagai seremoni",
    href: "/blog/seremoni",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: "215",
    label: "Lagu",
    subtitle: "audio lagu dan lirik latihan hidup sadar",
    href: "/blog/lagu",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    id: "9999",
    label: "Aplikasi Meditasi",
    subtitle: null,
    href: "/blog/aplikasi-meditasi",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  },
  {
    id: "6",
    label: "Sutra Utama",
    subtitle: "sutra utama tradisi Zen Plum Village",
    href: "/blog/sutra-utama",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: "244",
    label: "Kaligrafi",
    subtitle: "Kaligrafi untuk latihan",
    href: "/blog/kaligrafi",
    external: false,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
];

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
