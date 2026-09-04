import React from "react";
import HeroCarousel from "./HeroCarouselClient";
import { randomizeArray, apiFetch } from "@/lib/helper";

const HeroSection = async () => {
  let response = await apiFetch("wp/posts", {
    per_page: 20,
    categories: "155,124,165",
    orderby: "date",
    _fields: "id,title,date,jetpack_featured_media_url",
  });

  
  let posts = randomizeArray(response?.posts || [], 5);
  return (
    <>
      <div className="hero-img">
        <HeroCarousel posts={posts} />
      </div>
    </>
  );
};

export default HeroSection;
