export default function BlogLoading() {
  return (
    <div className="blog-section">
      <div className="blog-hero" style={{ background: "#e0d5c8", height: "60vh", minHeight: "400px" }} />
      <div className="blog-container">
        <div style={{ height: "32px", background: "#e0d5c8", borderRadius: "4px", width: "200px", marginBottom: "30px" }} />
        <div style={{ display: "flex", gap: "15px", marginBottom: "50px" }}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} style={{ height: "40px", background: "#e0d5c8", borderRadius: "25px", width: "100px" }} />
          ))}
        </div>
        <div className="posts-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="post-card" style={{ background: "white" }}>
              <div style={{ height: "200px", background: "#e0d5c8" }} />
              <div style={{ padding: "20px" }}>
                <div style={{ height: "18px", background: "#e0d5c8", borderRadius: "4px", marginBottom: "12px", width: "80%" }} />
                <div style={{ height: "14px", background: "#e0d5c8", borderRadius: "4px", marginBottom: "8px", width: "100%" }} />
                <div style={{ height: "14px", background: "#e0d5c8", borderRadius: "4px", width: "60%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
