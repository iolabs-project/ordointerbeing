"use client";

import React from "react";

const SectionFive = ({ videos = [], loading = false, error = null }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const renderVideos = () => {
    if (loading) {
      return (
        <>
          {[1, 2, 3].map((i) => (
            <div key={i} className="group-box">
              <div className="video" style={{ background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Loading...
              </div>
              <p className="text-1">Loading...</p>
              <div className="group-text">
                <p className="text-2">Plum Village</p>
                <p className="text-3">Loading...</p>
              </div>
            </div>
          ))}
        </>
      );
    }

    if (videos.length === 0) {
      return (
        <div className="group-box">
          <p className="text-1">
            {error
              ? `Error: ${error}`
              : 'No videos available. Please check your YouTube API key in .env.local'}
          </p>
        </div>
      );
    }

    return videos.map((video) => (
      <a
        key={video.id}
        className="group-box"
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <iframe
          className="video"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="text-1">{video.title}</p>
        <div className="group-text">
          <p className="text-2">{video.channelTitle}</p>
          <p className="text-3">{formatDate(video.publishedAt)}</p>
        </div>
      </a>
    ));
  };

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
          {renderVideos()}
        </div>
      </div>

      <div className="wrapper-mobile">
        <div className="top">
          <p className="title">dharma talks</p>
          <p className="subtitle">
            Temukan <b>inspirasi dan kedamaian</b> dalam Dhamma Talks—koleksi
            video diskusi mendalam tentang kebijaksanaan,
            mindfulness, dan perjalanan spiritual
          </p>
        </div>

        <div className="bottom">
          {renderVideos()}
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
