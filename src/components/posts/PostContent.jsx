"use client";

import { useEffect, useRef } from "react";

export default function PostContent({ content }) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const images = contentRef.current.querySelectorAll("figure img");

    images.forEach((img) => {
      // Add lazy loading and async decoding to all content images
      img.setAttribute("loading", "lazy");
      img.setAttribute("decoding", "async");

      // Wait for image to load to get natural dimensions
      if (img.complete) {
        checkImageOrientation(img);
      } else {
        img.addEventListener("load", () => checkImageOrientation(img));
      }
    });
  }, [content]);

  const checkImageOrientation = (img) => {
    const aspectRatio = img.naturalWidth / img.naturalHeight;

    // If image is portrait (height > width) or square (roughly equal)
    // Aspect ratio < 1 means portrait, <= 1.2 catches near-square images
    if (aspectRatio <= 1.2) {
      img.classList.add("portrait-image");
      // Also add class to parent figure if exists
      if (img.parentElement?.tagName === "FIGURE") {
        img.parentElement.classList.add("portrait-image");
      }
    }
  };

  return (
    <div
      ref={contentRef}
      className=""
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
