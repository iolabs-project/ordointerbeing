"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
      {posts.map((post, index) => (
        <Link key={post.id} href={`/posts/${post.id}`} className="hero-img">
          <Image
            src={post.jetpack_featured_media_url}
            alt={post.title.rendered}
            fill
            sizes="100vw"
            priority={index === 0}
            style={{ objectFit: "cover" }}
          />
          <p>{post.title.rendered}</p>
        </Link>
      ))}
    </Slider>
  );
};

export default HeroCarouselClient;
