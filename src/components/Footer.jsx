import React from "react";
import { apiFetch, getEventSlug, formatEventDateRange } from "@/lib/helper";

const Footer = async () => {
  const latestPostsResponse = await apiFetch("wp/posts", {
    per_page: 3,
    orderby: "date",
    _embed: true,
  });
  const recentPosts = latestPostsResponse?.posts || [];

  // Hardcoded most viewed posts
  const mostViewedIds = [1501, 195, 989, 1826, 2314];
  const mostViewedViews = {
    1501: "14513",
    195: "13648",
    989: "11986",
    1826: "11920",
    2314: "11812",
  };

  const mostViewedResponse = await apiFetch("wp/posts", {
    include: mostViewedIds.join(","),
    _embed: true,
    per_page: 5,
  });
  const mostViewedPosts = (mostViewedResponse?.posts || [])
    .map((post) => ({
      ...post,
      post_views: mostViewedViews[post.id] || "0",
    }))
    .sort((a, b) => parseInt(b.post_views) - parseInt(a.post_views));

  const upcomingEventsResponse = await apiFetch("wp/events", { per_page: 2 });
  const upcomingEvents = Object.values(upcomingEventsResponse?.events || {});

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
            <a href="https://eiab.eu/" target="_blank">
              <img src="/assets/logo-footer-6.png" alt="Footer logo" />
            </a>
            <a href="https://www.thaiplumvillage.org/" target="_blank">
              <img src="/assets/logo-footer-7.png" alt="Footer logo" />
            </a>
            <a href="https://www.pvfhk.org/news/2017/encounter-with-plum-village" target="_blank">
              <img src="/assets/logo-footer-8.png" alt="Footer logo" />
            </a>
            <a href="https://deerparkmonastery.org/" target="_blank">
              <img src="/assets/logo-footer-9.webp" alt="Footer logo" />
            </a>
            <a href="https://www.bluecliffmonastery.org/" target="_blank">
              <img src="/assets/logo-footer-10.png" alt="Footer logo" />
            </a>
            <a href="https://magnoliagrovemonastery.org/" target="_blank">
              <img src="/assets/logo-footer-11.png" alt="Footer logo" />
            </a>
            <a href="https://www.parallax.org/" target="_blank">
              <img src="/assets/logo-footer-12.png" alt="Footer logo" />
            </a>
          </div>

          <div className="bottom-group">
            <div className="left-group">
              <p className="title">Upcoming Event</p>
              {upcomingEvents.map((event, index) => (
                <React.Fragment key={event.id}>
                  <a href={`/jadwal/${getEventSlug(event.link)}`} className="link-text">
                    {event.title}
                  </a>
                  <div className="group-text">
                    <i className="fa-solid fa-location-dot"></i>
                    {event.location}
                  </div>
                  <div className={`group-text${index < upcomingEvents.length - 1 ? " mb" : ""}`}>
                    <i className="fa-regular fa-calendar-days"></i>
                    {formatEventDateRange(event.start_date, event.end_date)}
                  </div>
                </React.Fragment>
              ))}
              <a href="/jadwal#jadwal-event" className="btn-footer">All Events</a>
            </div>

            <div className="middle-group">
              <p className="title">Follow Us</p>
              <a href="https://www.instagram.com/plumvillageindonesia/" target="_blank" className="group-text">
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
              <div className="post-cards">
                {recentPosts.map((post) => (
                  <a key={post.id} href={`/posts/${post.id}`} className="post-card">
                    <img
                      src={post.jetpack_featured_media_url || "/assets/placeholder.jpg"}
                      alt={post.title.rendered}
                      className="post-card-img"
                    />
                    <div className="post-card-content">
                      <p className="post-card-title">{post.title.rendered}</p>
                    </div>
                  </a>
                ))}
              </div>
              <a href="/blog" className="link-text read-more">Read more...</a>

              <p className="title">Most Viewed Post</p>
              <div className="post-cards">
                {mostViewedPosts.length > 0 ? (
                  mostViewedPosts.slice(0, 5).map((post) => (
                    <a key={post.id} href={`/posts/${post.id}`} className="post-card">
                      {post.jetpack_featured_media_url ? (
                        <img
                          src={post.jetpack_featured_media_url}
                          alt={post.title.rendered}
                          className="post-card-img"
                        />
                      ) : (
                        <div className="post-card-img placeholder"></div>
                      )}
                      <div className="post-card-content">
                        <p className="post-card-title">{post.title.rendered}</p>
                        <p className="post-card-views">
                          <i className="fa-solid fa-eye"></i> {formatNumber(post.post_views)}
                        </p>
                      </div>
                    </a>
                  ))
                ) : (
                  <p className="no-posts">No posts available</p>
                )}
              </div>
              <a href="/blog" className="link-text read-more">Read more...</a>
            </div>
          </div>

          <div className="bottom-group2">
            <div className="left">
              <p>Terms and conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Setting</p>
            </div>
            <div className="right">© 2026 Komunitas Zen Plum Village</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
