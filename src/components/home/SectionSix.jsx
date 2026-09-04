"use client";

import React from "react";

const SectionSix = () => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
