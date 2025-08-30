import React from "react";

const Footer = () => {
  return (
    <nav className="footer">
      <div className="wrapper">
        <div className="top">
          <p className="text-1">Our Community</p>
          <div className="logo-group">
            <img src="/assets/logo-footer-1.png" alt="Footer logo" />
            <img src="/assets/logo-footer-2.png" alt="Footer logo" />
            <img src="/assets/logo-footer-3.png" alt="Footer logo" />
            <img src="/assets/logo-footer-4.png" alt="Footer logo" />
            <img src="/assets/logo-footer-5.png" alt="Footer logo" />
          </div>
          <div className="bottom-group">
            <div className="left-group">
              <p className="title">Upcoming Event</p>
              <a className="link-text">The Art of Mindful Living 2025</a>
              <div className="group-text">Plum Village Thailand</div>
              <div className="group-text">11 Jul s.d. 07 Oct 2025</div>
              <a className="link-text">
                Retret Umum: Nothing To Do Nowhere To Go
              </a>
              <div className="group-text">Wyndham Tamansari Jivva Resort</div>
              <div className="group-text">30 Apr s.d. 04 May 2025</div>
              <a className="btn-footer">All Events</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
