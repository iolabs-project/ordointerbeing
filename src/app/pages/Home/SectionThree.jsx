import React from "react";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="wrapper">
        <div className="top">
          <p className="title">Kegiatan Kami</p>
          <p className="subtitle">
            Jelajahi berbagai kegiatan komunitas yang mendukung praktik
            mindfulness, kebersamaan, dan pertumbuhan<br /> spiritual dalam kehidupan
            sehari-hari.
          </p>
        </div>

        <div className="bottom">
          <a className="group-box">
            <img src="assets/home-section3-1.webp" alt="" />
            <p className="text-1">Retreat Mindfulness</p>
          </a>
          <a className="group-box">
            <img src="assets/home-section3-2.webp" alt="" />
            <p className="text-1">Day of Mindfulness</p>
          </a>
          <a className="group-box">
            <img src="assets/home-section3-3.webp" alt="" />
            <p className="text-1">Kegiatan Internasional</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
