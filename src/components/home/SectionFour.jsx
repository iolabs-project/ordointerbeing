import React from "react";
import { getPosts } from "@/lib/wp";

const SectionFour = async () => {
  const articlew = await getPosts({
      per_page: 7,
      categories: 124,
      orderby: "date",
      _embed: true,
    });
  return (
    <div className="section-four">
      <div className="wrapper">
        <div className="top">
          <p className="title">artikel Terkini</p>
          <p className="subtitle">
            Kumpulan kisah inspiratif dan pengalaman nyata dari anggota
            komunitas dalam menjalani praktik spiritual.
          </p>
        </div>

        <div className="bottom">
          <div className="left">
            <div className="card-box">
              <img src={articlew[1]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[1]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(articlew[1]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={articlew[2]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[2]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(articlew[2]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={articlew[3]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[3]?.title.rendered}</p> 

                <p className="text-2">
                  {new Date(articlew[3]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="middle">
            <img src={articlew[0]?.jetpack_featured_media_url} alt="" />
            <p className="text-1">{articlew[0]?.title.rendered}</p>
          </div>
          <div className="right">
            <div className="card-box">
              <img src={articlew[4]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[4]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(articlew[4]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={articlew[5]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[5]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(articlew[5]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={articlew[6]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{articlew[6]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(articlew[6]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="button">Lihat semua</a>
      </div>
    </div>
  );
};

export default SectionFour;
