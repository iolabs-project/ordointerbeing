import React from "react";

const SectionFive = () => {
  return (
    <div className="section-five">
      <div className="wrapper">
        <div className="top">
          <p className="title">dharma talks</p>
          <p className="subtitle">
            Temukan <b>inspirasi dan kedamaian</b> dalam Dhamma Talks—koleksi
            video diskusi mendalam tentang kebijaksanaan,
            <br /> mindfulness, dan perjalanan spiritual
          </p>
        </div>

        <div className="bottom">
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/3kY39fuq2qY" 
              title="You Are enough"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">You Are enough</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/85GTJ7vv4Ps" 
              title="Day of Mindfulness"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">Day of Mindfulness</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/ZAdHjJGEPx0" 
              title="Night of Mindfulness"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">Night of Mindfulness</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
        </div>
      </div>

      <div className="wrapper-mobile">
        <div className="top">
          <p className="title">dharma talks</p>
          <p className="subtitle">
            Temukan <b>inspirasi dan kedamaian</b> dalam Dhamma Talks—koleksi
            video diskusi mendalam<br />tentang kebijaksanaan,
            mindfulness, dan perjalanan spiritual
          </p>
        </div>

        <div className="bottom">
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/3kY39fuq2qY" 
              title="You Are enough"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">You Are enough</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/85GTJ7vv4Ps" 
              title="Day of Mindfulness"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">Day of Mindfulness</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
          <a className="group-box">
            <iframe 
              className="video" 
              src="https://www.youtube.com/embed/ZAdHjJGEPx0" 
              title="Night of Mindfulness"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <p className="text-1">Night of Mindfulness</p>
            <div className="group-text">
              <p className="text-2">B. Nyanabhandra Phap Tu</p>
              <p className="text-3">00 June 2025</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
