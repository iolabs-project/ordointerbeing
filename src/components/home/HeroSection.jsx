import React from "react";
import { getPosts, randomizeArray } from "@/lib/wp";
import HeroCarousel from "./HeroCarouselClient";

const HeroSection = async () => {
  let posts = await getPosts({
    per_page: 20,
    categories: "155,124,165",
    orderby: "date",
    _embed: true,
  });

  posts = randomizeArray(posts, 5);
  return (
    <>
      <div className="hero-img">
        <img src="/assets/hero-home.webp" alt="Hero" />
      </div>
      <HeroCarousel posts={posts} />
    </>
  );
};

export default HeroSection;
