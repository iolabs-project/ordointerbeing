import React from "react";

const SectionTwo = () => {
  return (
    <div className="section-two">
      <div className="wrapper">
        <div className="top">
          <div className="left">
            <p className="text-1">Berita Terkini</p>
            <a href="#" className="text-2">
              Lihat Semua {">"}
            </a>
          </div>
          <div className="right">
            <p className="text-1">
              Dapatkan <b>kabar terbaru</b> tentang kegiatan, acara, dan
              perkembangan komunitas, serta
              <br />
              inspirasi dari praktik dan perjalanan spiritual bersama.
            </p>
          </div>
        </div>

        <div className="bottom">
          <div className="left">
            <img src="assets/home-section2-1.webp" alt="" />
          </div>
          <div className="right">
            <div className="card-box">
              <img src="assets/home-section2-2.webp" alt="" />
              <div className="group-text">
                <p className="text-1">Penahbisan Novis Aprikot Putih</p>
                <p className="text-2">06.00</p>
              </div>
            </div>
            <div className="card-box">
              <img src="assets/home-section2-2.webp" alt="" />
              <div className="group-text">
                <p className="text-1">Penahbisan Novis Aprikot Putih</p>
                <p className="text-2">06.00</p>
              </div>
            </div>
            <div className="card-box">
              <img src="assets/home-section2-2.webp" alt="" />
              <div className="group-text">
                <p className="text-1">Penahbisan Novis Aprikot Putih</p>
                <p className="text-2">06.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
