"use client";

import { useEffect, useState, useRef } from "react";

export default function ViewCounter({ slug, postId, initialViews }) {
  const [views, setViews] = useState(initialViews);
  const [animate, setAnimate] = useState(false);
  const counted = useRef(false);

  useEffect(() => {
    if (counted.current) return;
    counted.current = true;

    fetch(`https://cms.ordointerbeing.id/wp-json/post-views-counter/view-post/${postId}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.post_id === "number") {
          fetch(`https://cms.ordointerbeing.id/wp-json/post-views-counter/get-post-views/${postId}`)
            .then((res) => res.json())
            .then((count) => {
              if (typeof count === "number" && count !== views) {
                setViews(count);
                setAnimate(true);
                setTimeout(() => setAnimate(false), 600);
              }
            });
        }
      })
      .catch(() => {});
  }, [postId]);

  return (
    <div className="view-counter">
      <div className="view-counter__icon">
        <i className="fa-solid fa-eye"></i>
      </div>
      <div className="view-counter__info">
        <span className={`view-counter__count ${animate ? "view-counter__count--pop" : ""}`}>
          {views != null ? Number(views).toLocaleString("id-ID") : "—"}
        </span>
        <span className="view-counter__label">kali dilihat</span>
      </div>
    </div>
  );
}
