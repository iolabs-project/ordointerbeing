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
              <div className="group-text">
                <i className="fa-solid fa-location-dot"></i>
                Plum Village Thailand
              </div>
              <div className="group-text mb">
                <i className="fa-regular fa-calendar-days"></i>
                11 Jul s.d. 07 Oct 2025
              </div>
              <a className="link-text">
                Retret Umum: Nothing To Do Nowhere To Go
              </a>
              <div className="group-text">
                <i className="fa-solid fa-location-dot"></i>
                Wyndham Tamansari Jivva Resort
              </div>
              <div className="group-text">
                <i className="fa-regular fa-calendar-days"></i>
                30 Apr s.d. 04 May 2025
              </div>
              <a className="btn-footer">All Events</a>
            </div>

            <div className="middle-group">
              <p className="title">Follow Us</p>
              <div className="group-text">
                <i className="fa-brands fa-instagram"></i>
                plumvillageindonesia
              </div>
              <div className="group-text">
                <i className="fa-brands fa-youtube"></i>
                Plum Village Indonesia
              </div>
              <div className="group-text">
                <i className="fa-brands fa-whatsapp"></i>
                PV Indo Admin
              </div>
              <div className="group-text">
                <i className="fa-brands fa-whatsapp"></i>
                Webmaster
              </div>
              <div className="group-text">
                <i className="fa-brands fa-facebook"></i>
                plumvillageindonesia
              </div>
            </div>

            <div className="right-group">
              <p className="title">Recent Post</p>
              <a className="link-text">Let the Buddha Walk with You</a>
              <a className="link-text">Meditasi Cinta Kasih</a>
              <a className="link-text">Take Less Than Needed</a>
              <a className="link-text read-more">Read more...</a>

              <p className="title">Most Viewed Post</p>
              <a className="link-text">Mendamaikan Hati dengan Latihan Mindfulness <span>(12,916)</span></a>
              <a className="link-text">Memperbarui Sutra Hati <span>(11,918)</span></a>
              <a className="link-text">Lahir Dengan Sendok Emas di Mulut <span>(10,196)</span></a>
              <a className="link-text read-more">Read more...</a>
            </div>
          </div>

          <div className="bottom-group2">
            <div className="left">
              <p>Terms and conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Setting</p>
            </div>
            <div className="right">© 2025 Komunitas Zen Plum Village</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
