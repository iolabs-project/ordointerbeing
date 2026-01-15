"use client";
import { useState, useEffect } from "react";
import { apiFetch } from "@/lib/helper";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  // Define category order explicitly
  // Order: Latihan Dasar, Wejangan Dharma, Menyentuh Bumi, Seremoni, Lagu, Sutra, Kaligrafi, Aplikasi Meditasi, then others
  const categoryOrder = [7, 116, 596, 512, 215, 6, 244, 9999, 124, 165, 969, 4, 155, 907, 187];

  const categories = {
    7: {
      name: "Latihan Dasar",
      color: "#717171",
      image: "/assets/latdas.webp",
      subtitle:
        "Mulai perjalanan mindfulness Anda dengan latihan dasar yang membimbing setiap langkah menuju ketenangan. Temukan panduan meditasi, praktik kesadaran, dan gerakan mindful untuk menjalani hidup dengan lebih damai dan penuh makna",
      style: "normal",
    },
    116: {
      name: "Wejangan Dharma",
      color: "#717171",
      image: "/assets/wejangan.webp",
      subtitle:
        "Mulai perjalanan mindfulness Anda dengan latihan dasar yang membimbing setiap langkah menuju ketenangan. Temukan panduan meditasi, praktik kesadaran, dan gerakan mindful untuk menjalani hidup dengan lebih damai dan penuh makna",
      style: "normal",
    },
    596: {
      name: "Menyentuh Bumi",
      color: "#717171",
      image: "/assets/bumi.webp",
      subtitle:
        "Tulisan reflektif dan ajaran Dharma yang membantu praktisi merenungkan kehidupan, cinta kasih, dan ucapan benar. Isinya mengajak pembaca menyadari ketidakkekalan, menumbuhkan pengertian, serta mempraktikkan kebijaksanaan dalam keseharian.",
      style: "normal",
    },
    512: {
      name: "Seremoni",
      color: "#717171",
      image: "/assets/seremoni.webp",
      subtitle:
        "Kumpulan tata cara dan panduan seremoni dalam tradisi Plum Village. Temukan ritual mindfulness yang membantu memperdalam praktik dan menghormati momen-momen penting dalam perjalanan spiritual.",
      style: "normal",
    },
    215: {
      name: "Lagu",
      color: "#717171",
      image: "/assets/lagu.webp",
      subtitle:
        "Koleksi lagu-lagu mindfulness dan nyanyian dharma dari tradisi Plum Village. Nikmati melodi yang menenangkan dan lirik yang menginspirasi untuk praktik meditasi dan kehidupan sehari-hari.",
      style: "normal",
    },
    6: {
      name: "Sutra",
      color: "#717171",
      image: "/assets/sutra.webp",
      subtitle:
        "Kumpulan sutra dan teks-teks suci dari berbagai tradisi Buddha. Pelajari ajaran klasik yang telah membimbing praktisi selama ribuan tahun dalam mencapai pencerahan.",
      style: "normal",
    },
    244: {
      name: "Kaligrafi",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Galeri kaligrafi mindfulness karya Thich Nhat Hanh dan praktisi lainnya. Setiap goresan mengandung kebijaksanaan dan ketenangan yang dapat menginspirasi praktik harian Anda.",
      style: "normal",
    },
    9999: {
      name: "Aplikasi Meditasi",
      color: "#717171",
      image: "/assets/hero-home.webp",
      subtitle:
        "Kumpulan aplikasi dan alat bantu meditasi digital untuk mendukung praktik mindfulness Anda. Temukan berbagai sumber daya teknologi yang membantu perjalanan spiritual.",
      style: "normal",
    },
    124: {
      name: "Artikel",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Kumpulan artikel umum seputar mindfulness, kehidupan sadar, dan ajaran Buddha. Berbagai tulisan inspiratif untuk memperkaya pemahaman dan praktik Anda.",
      style: "normal",
    },
    165: {
      name: "Berita",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Berita terkini dari komunitas Plum Village Indonesia dan internasional. Ikuti perkembangan kegiatan, acara, dan informasi penting lainnya.",
      style: "normal",
    },
    969: {
      name: "Chanting",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Koleksi chanting dan nyanyian suci dari tradisi Plum Village. Praktikkan chanting untuk menenangkan pikiran dan memperdalam konsentrasi.",
      style: "normal",
    },
    4: {
      name: "Media",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Koleksi media audio dan video dari kegiatan Plum Village. Nikmati rekaman wejangan, meditasi terpandu, dan dokumentasi acara.",
      style: "normal",
    },
    155: {
      name: "Tentang",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Informasi tentang Plum Village, sejarah, dan tradisi praktik mindfulness yang dikembangkan oleh Thich Nhat Hanh.",
      style: "normal",
    },
    907: {
      name: "Workshop",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Materi dan panduan workshop praktik Plum Village. Pelajari berbagai teknik mindfulness melalui sesi workshop terstruktur.",
      style: "normal",
    },
    187: {
      name: "Proyek",
      color: "#717171",
      image: "/assets/kaligrafi.webp",
      subtitle:
        "Proyek-proyek dari komunitas Plum Village. Ikuti perkembangan berbagai inisiatif dan kegiatan yang sedang berjalan.",
      style: "normal",
    },
  };

  const getHeroContent = () => {
    if (activeCategory && categories[activeCategory]) {
      const cat = categories[activeCategory];
      return {
        title: cat.name.toUpperCase(),
        subtitle: cat.subtitle,
        image: cat.image,
        style: cat.style,
      };
    }
    return {
      title: "BLOG",
      subtitle:
        "Temukan berbagai artikel, panduan meditasi, wejangan dharma, dan praktik mindfulness untuk menjalani hidup dengan lebih damai dan penuh makna",
      image: "/assets/kaligrafi.webp",
      style: "normal",
    };
  };

  const heroContent = getHeroContent();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const filter = {
          $_fields: "id,title,excerpt,date,_embedded,categories",
          per_page: postsPerPage,
          page: currentPage,
          _embed: true,
          ...(activeCategory && { categories: activeCategory }),
        };
        const data = await apiFetch("wp/posts", filter);
        setPosts(data.posts || data);
        setTotalPages(data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
      setLoading(false);
    };

    fetchPosts();
  }, [activeCategory, currentPage]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 400, behavior: "smooth" });
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return (
      <div className="pagination">
        <button
          className="pagination-btn prev"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {startPage > 1 && (
          <>
            <button className="pagination-btn" onClick={() => handlePageChange(1)}>1</button>
            {startPage > 2 && <span className="pagination-ellipsis">...</span>}
          </>
        )}

        {pages.map((page) => (
          <button
            key={page}
            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="pagination-ellipsis">...</span>}
            <button className="pagination-btn" onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}

        <button
          className="pagination-btn next"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").substring(0, 150) + "...";
  };

  const getPostImage = (post) => {
    if (post._embedded?.["wp:featuredmedia"]?.[0]?.source_url) {
      return post._embedded["wp:featuredmedia"][0].source_url;
    }
    return "/assets/default-post.jpg";
  };

  const getPostAuthor = (post) => {
    if (post._embedded?.author?.[0]?.name) {
      return post._embedded.author[0].name;
    }
    return "Admin";
  };

  return (
    <div className="blog-section">
      {/* Hero Section */}
      <div className={`blog-hero ${heroContent.style === "grayscale" ? "grayscale" : ""}`}>
        <div className="hero-overlay"></div>
        <img
          src={heroContent.image}
          alt={heroContent.title}
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">{heroContent.title}</h1>
          <p className="hero-subtitle">{heroContent.subtitle}</p>
        </div>
      </div>

      {/* Category Section */}
      <div className="blog-container">
        <h2 className="section-title">Kategori</h2>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button
            className={`tab ${activeCategory === null ? "active" : ""}`}
            onClick={() => setActiveCategory(null)}
          >
            Semua
          </button>
          {categoryOrder.map((id) => (
            <button
              key={id}
              className={`tab ${activeCategory === String(id) ? "active" : ""}`}
              onClick={() => setActiveCategory(String(id))}
            >
              {categories[id].name}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {loading ? (
          <div className="loading">Memuat artikel...</div>
        ) : (
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <a href={`/posts/${post.id}`} className="card-image-link">
                  <img
                    src={getPostImage(post)}
                    alt={post.title?.rendered || "Post"}
                    className="card-image"
                  />
                </a>
                <div className="card-content">
                  <a href={`/posts/${post.id}`} className="card-title">
                    {post.title?.rendered}
                  </a>
                  <p className="card-excerpt">
                    {stripHtml(post.excerpt?.rendered)}
                  </p>
                  <div className="card-meta">
                    <span className="meta-author">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Posted by <span>{getPostAuthor(post)}</span>
                    </span>
                    <span className="meta-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {formatDate(post.date)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {renderPagination()}
      </div>
    </div>
  );
}
