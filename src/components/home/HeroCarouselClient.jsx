"use client";

import React from "react";
import Slider from "react-slick";

const HeroCarouselClient = ({ posts }) => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...carouselSettings}>
      {posts.map((post) => (
        <a key={post.id} href={`/posts/${post.id}`} className="hero-img">
          <img src={post.jetpack_featured_media_url} alt={post.title.rendered} />
        </a>
      ))}
    </Slider>
  );
};

export default HeroCarouselClient;
