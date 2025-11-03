import React from "react";
import { getPosts, getMostViewedPosts } from "@/lib/wp";

const Footer = async () => {
  const latestPosts = await getPosts({
    per_page: 3,
    orderby: "date",
  });

  const mostViewedPosts = await getMostViewedPosts();

  const formatNumber = (str) => {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <nav className="footer">
      <div className="wrapper">
        <div className="top">
          <p className="text-1">Our Community</p>
          <div className="logo-group">
            <a href="https://plumvillage.org/" target="_blank">
              <img src="/assets/logo-footer-1.png" alt="Footer logo" />
            </a>
            <a href="https://villagedespruniers.net/" target="_blank">
              <img src="/assets/logo-footer-2.png" alt="Footer logo" />
            </a>
            <a href="https://www.thaiplumvillage.org/" target="_blank">
              <img src="/assets/logo-footer-3.png" alt="Footer logo" />
            </a>
            <a href="https://langmai.org/" target="_blank">
              <img src="/assets/logo-footer-4.png" alt="Footer logo" />
            </a>
            <a href="https://www.mindfulnessbell.org/" target="_blank">
              <img src="/assets/logo-footer-5.png" alt="Footer logo" />
            </a>
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
              <a className="link-text">Retret Umum: Nothing To Do Nowhere To Go</a>
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
              <a href="https://www.instagram.com/plumvillageindonesia/"  target="_blank" className="group-text">
                <i className="fa-brands fa-instagram"></i>
                plumvillageindonesia
              </a>
              <a href="https://www.youtube.com/channel/UClPM7O3Q1KQhc-0if2LQvNg/" target="_blank" className="group-text">
                <i className="fa-brands fa-youtube"></i>
                Plum Village Indonesia
              </a>
              <a href="https://api.whatsapp.com/send?phone=628118129088" target="_blank" className="group-text">
                <i className="fa-brands fa-whatsapp"></i>
                PV Indo Admin
              </a>
              <a href="https://api.whatsapp.com/send?phone=628116592010" target="_blank" className="group-text">
                <i className="fa-brands fa-whatsapp"></i>
                Webmaster
              </a>
              <a href="https://web.facebook.com/100171481499566" target="_blank" className="group-text">
                <i className="fa-brands fa-facebook"></i>
                plumvillageindonesia
              </a>
            </div>

            <div className="right-group">
              <p className="title">Recent Post</p>
              {latestPosts.map((post) => (
                <a key={post.id} href={`/posts/${post.id}`} className="link-text">
                  {post.title.rendered}
                </a>
              ))}
              <a className="link-text read-more">Read more...</a>

              <p className="title">Most Viewed Post</p>
              {mostViewedPosts.slice(0, 3).map((post) => (
                <a key={post.ID} href={`/posts/${post.ID}`} className="link-text">
                  {post.post_title} <span>({formatNumber(post.post_views)})</span>
                </a>
              ))}
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
