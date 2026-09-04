export default function JadwalLoading() {
  return (
    <main className="jadwal-page">
      <section className="jadwal-hero" style={{ background: "#e0d5c8", height: "40vh", minHeight: "300px" }} />
      <section className="jadwal-section">
        <div className="container">
          <div style={{ height: "32px", background: "#e0d5c8", borderRadius: "4px", width: "200px", marginBottom: "30px" }} />
          <div className="schedule-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="schedule-card" style={{ background: "white" }}>
                <div style={{ height: "200px", background: "#e0d5c8", borderRadius: "8px" }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
