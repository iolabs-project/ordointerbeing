import React from "react";
import { apiFetch } from "@/lib/helper";

const SectionTwo = async () => {
  const response = await apiFetch("wp/posts", {
    per_page: 4,
    categories: 165,
    orderby: "date",
    _embed: true,
  });

  let news = response?.posts || [];
  return (
    <div className="section-two">
      <div className="wrapper">
        <div className="top">
          <div className="left">
            <p className="text-1">Berita Terkini</p>
            <a href="/blog" className="text-2">
              Lihat Semua {">"}
            </a>
          </div>
          <div className="right">
            <p className="text-1">
              Dapatkan <b>kabar terbaru</b> tentang kegiatan, acara, dan perkembangan komunitas, serta
              <br />
              inspirasi dari praktik dan perjalanan spiritual bersama.
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <a href={`/posts/${news[0]?.id}`}>
              <img src={news[0]?.jetpack_featured_media_url} alt="" />
            </a>
          </div>
          <div className="right">
            <a href={`/posts/${news[1]?.id}`} className="card-box">
              <img src={news[1]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[1]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[1]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${news[2]?.id}`} className="card-box">
              <img src={news[2]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[2]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[2]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${news[3]?.id}`} className="card-box">
              <img src={news[3]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[3]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[3]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper-mobile">
        <div className="top">
          <div className="left">
            <p className="text-1">Berita Terkini</p>
          </div>
          <div className="right">
            <p className="text-1">
              Dapatkan <b>kabar terbaru</b> tentang kegiatan, acara, dan perkembangan komunitas, serta
              <br />
              inspirasi dari praktik dan perjalanan spiritual bersama.
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <a href={`/posts/${news[0]?.id}`}>
              <img src={news[0]?.jetpack_featured_media_url} alt="" />
            </a>
          </div>
          <div className="right">
            <a href={`/posts/${news[1]?.id}`} className="card-box">
              <img src={news[1]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[1]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[1]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${news[2]?.id}`} className="card-box">
              <img src={news[2]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[2]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[2]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
            <a href={`/posts/${news[3]?.id}`} className="card-box">
              <img src={news[3]?.jetpack_featured_media_url} alt="" />
              <div className="group-text">
                <p className="text-1">{news[3]?.title.rendered}</p>
                <p className="text-2">
                  {new Date(news[3]?.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </a>
          </div>
        </div>

        <a href="/blog" className="lihat-btn">
          Lihat Semua
        </a>
      </div>
    </div>
  );
};

export default SectionTwo;
