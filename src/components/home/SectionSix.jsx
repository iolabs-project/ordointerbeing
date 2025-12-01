"use client";

import React, { useState, useEffect } from "react";

const SectionSix = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube/latest");
        const data = await response.json();

        console.log("YouTube API Response:", data);

        if (data.error) {
          setError(data.error);
          console.error("YouTube API Error:", data.error);
        }

        if (data.videos && data.videos.length > 0) {
          setVideos(data.videos);
        } else {
          console.log("No videos returned from API");
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const formatViews = (count) => {
    const num = parseInt(count, 10);
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M views";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K views";
    }
    return num + " views";
  };

  const renderVideos = () => {
    if (loading) {
      return (
        <>
          {[1, 2, 3].map((i) => (
            <div key={i} className="group-box">
              <div
                className="video"
                style={{
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Loading...
              </div>
              <p className="text-1">Loading...</p>
              <div className="group-text">
                <p className="text-3">Loading views...</p>
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
              : "No videos available. Please check your YouTube API key in .env.local"}
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
      </a>
    ));
  };

  return (
    <div className="section-six">
      <div className="wrapper">
        <div className="top">
          <p className="title">GET IN TOUCH WITH US!</p>
        </div>

        <div className="bottom">
          <div className="social-section">
            <div className="instagram-embed">
              <iframe
                src="https://www.instagram.com/plumvillageindonesia/embed"
                width="100%"
                height="550"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
              ></iframe>
            </div>
            <div className="youtube-embed">
              <div className="youtube-header">
                <img
                  src="/assets/yt-logo.png"
                  alt="YouTube"
                  className="youtube-logo"
                />
                <div className="youtube-info">
                  <h3 className="youtube-title">Plum Village Indonesia</h3>
                  <p className="youtube-subtitle">
                    Kanal Komunitas Zen Plum Village di Indonesia.
                  </p>
                </div>
              </div>
              <div className="vid-blocks">{renderVideos()}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper-mobile">
        <div className="top">
          <p className="title">GET IN TOUCH WITH US!</p>
        </div>

        <div className="bottom">
          <div className="social-section">
            <div className="instagram-embed">
              <iframe
                src="https://www.instagram.com/plumvillageindonesia/embed"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
              ></iframe>
            </div>
            <div className="youtube-embed">
              <div className="youtube-header">
                <img
                  src="/assets/yt-logo.png"
                  alt="YouTube"
                  className="youtube-logo"
                />
                <div className="youtube-info">
                  <h3 className="youtube-title">Plum Village Indonesia</h3>
                  <p className="youtube-subtitle">
                    Kanal Komunitas Zen Plum Village di Indonesia.
                  </p>
                </div>
              </div>
              <div className="vid-blocks">{renderVideos()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
