import { apiFetch } from "@/lib/helper";
import React from "react";

const SectionFour = async () => {
  const response = await apiFetch("wp/posts", {
    per_page: 7,
    categories: 124,
    orderby: "date",
    _embed: true,
  });

  let article = response?.posts || [];
  return (
    <div className="section-four">
      <div className="wrapper">
        <div className="top">
          <p className="title">artikel Terkini</p>
          <p className="subtitle">Kumpulan kisah inspiratif dan pengalaman nyata dari anggota komunitas dalam menjalani praktik spiritual.</p>
        </div>

        <div className="bottom">
          <div className="left">
            <a href={`/posts/${article[1]?.id}`} className="card-box">
              <img src={article[1]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[1]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[1]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${article[2]?.id}`} className="card-box">
              <img src={article[2]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[2]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[2]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${article[3]?.id}`} className="card-box">
              <img src={article[3]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[3]?.title.rendered}</p>

                <p className="text-2">
                  {new Date(article[3]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          </div>
          <div className="middle">
            <a href={`/posts/${article[0]?.id}`}>
              <img src={article[0]?.jetpack_featured_media_url} alt="" />
              <p className="text-1">{article[0]?.title.rendered}</p>
            </a>
          </div>
          <div className="right">
            <a href={`/posts/${article[4]?.id}`} className="card-box">
              <img src={article[4]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[4]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[4]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${article[5]?.id}`} className="card-box">
              <img src={article[5]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[5]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[5]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${article[6]?.id}`} className="card-box">
              <img src={article[6]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[6]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[6]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          </div>
        </div>

        <a href="/blog" className="button">
          Lihat semua
        </a>
      </div>

      <div className="wrapper-mobile">
        <div className="top">
          <p className="title">artikel Kami</p>
          <p className="subtitle">Kumpulan kisah inspiratif dan pengalaman nyata dari anggota komunitas dalam menjalani praktik spiritual.</p>
        </div>

        <div className="bottom">
          <div className="middle">
            <img src={article[0]?.jetpack_featured_media_url} alt="" />
            <p className="text-1">{article[0]?.title.rendered}</p>
          </div>
          <div className="right">
            <div className="card-box">
              <img src={article[4]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[4]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[4]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={article[5]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[5]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[5]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="card-box">
              <img src={article[6]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{article[6]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(article[6]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="/blog" className="button">
          Lihat semua
        </a>
      </div>
    </div>
  );
};

export default SectionFour;
