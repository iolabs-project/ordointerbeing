import React from "react";

const SectionOne = () => {
  return (
    <div className="section-one">
      <div className="wrapper">
        <p className="text-1">Selamat Datang di Zen Plum Village Indonesia</p>
        <p className="text-2">
          Plum Village Indonesia adalah komunitas kewawasan (mindfulness
          community) dari ajaran Mahabiksu Zen Thich Nhat
          <br />
          Hanh [一行禪師] tentang praktik hidup sadar atau kewawasan [smrti,
          正念] dalam kehidupan sehari-hari.
          <br />
          Anda bisa mendapatkan informasi seputar latihan, kegiatan retret, dan
          Day of Mindfulness (DOM) dari tradisi
          <br />
          Mahayana Zen / chan (禪) Plum Village.
        </p>

        <div className="wrapper-button">
          <a href="/posts/271" className="button">
            Tentang Plum Village
          </a>
          <a href="https://zenplumvillage.net/" className="button">
            Kelas Moodle
          </a>
          <a href="https://ordointerbeing.myr.id/" className="button">
            Kelas Daring
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
