export default function PostLoading() {
  return (
    <div className="post-section">
      <div className="hero-figure" style={{ background: "#e0d5c8", minHeight: "50vh" }} />
      <div className="container">
        <div className="left">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ height: "20px", background: "#e0d5c8", borderRadius: "4px", width: "60%" }} />
            <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "100%" }} />
            <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "100%" }} />
            <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "80%" }} />
            <div style={{ height: "300px", background: "#e0d5c8", borderRadius: "8px" }} />
            <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "100%" }} />
            <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "90%" }} />
          </div>
        </div>
        <div className="right">
          <div className="separator" />
          <div className="info-box">
            <div style={{ height: "20px", background: "#e0d5c8", borderRadius: "4px", width: "40%", marginBottom: "20px" }} />
            {[1, 2].map((i) => (
              <div key={i} style={{ marginBottom: "20px" }}>
                <div style={{ height: "175px", background: "#e0d5c8", borderRadius: "8px", marginBottom: "10px" }} />
                <div style={{ height: "16px", background: "#e0d5c8", borderRadius: "4px", width: "80%" }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
