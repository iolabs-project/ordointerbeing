import React from "react";
import HeroCarousel from "./HeroCarouselClient";
import { randomizeArray, apiFetch } from "@/lib/helper";

const HeroSection = async () => {
  let posts = await apiFetch("wp/posts", {
    per_page: 20,
    categories: "155,124,165",
    orderby: "date",
    _embed: true,
  });

  posts = randomizeArray(posts, 5);
  return (
    <>
      <div className="hero-img">
        <HeroCarousel posts={posts} />
      </div>
    </>
  );
};

export default HeroSection;
