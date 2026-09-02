"use client";

import { usePathname } from "next/navigation";

export default function ShareButtons({ title }) {
  const pathname = usePathname();
  const currentUrl = `https://ordointerbeing.id${pathname}`;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "#25D366",
    },
    {
      name: "Line",
      icon: "fa-brands fa-line",
      url: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      color: "#00B900",
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "#1877F2",
    },
    {
      name: "X",
      icon: null,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: "#000000",
      isX: true,
    },
  ];

  return (
    <div className="share-buttons">
      <p className="share-title">Bagikan Artikel:</p>
      <div className="share-icons">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="share-link"
            style={{ backgroundColor: link.color }}
            title={`Share to ${link.name}`}
          >
            {link.isX ? (
              <span className="x-icon">𝕏</span>
            ) : (
              <i className={link.icon}></i>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
