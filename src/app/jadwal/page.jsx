import { apiFetch, getEventSlug, formatEventDateRange } from "@/lib/helper";

const JadwalPage = async () => {
  const eventsResponse = await apiFetch("wp/events", { per_page: 6 });
  const events = Object.values(eventsResponse?.events || {});

  const schedules = [
    {
      day: "Hari Senin",
      time: "19.30 – 21:30",
      description: "malam",
      community: "Komunitas Interfaith",
      frequency: "Setiap minggu",
      color: "#D4A574",
    },
    {
      day: "Hari Sabtu",
      time: "19.30 – 21:30",
      description: "ke-1 setiap bulan",
      community: "Komunitas Nusantara",
      frequency: "Sabtu pertama",
      color: "#D4A574",
    },
    {
      day: "Hari Sabtu",
      time: "19.30 – 21:30",
      description: "ke-4 setiap bulan",
      community: "Komunitas Wake Up",
      ageRange: "Usia 17 – 35 tahun",
      frequency: "Sabtu keempat",
      color: "#D4A574",
    },
  ];

  return (
    <main className="jadwal-page">
      {/* Hero Section */}
      <section className="jadwal-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Jadwal Latihan</h1>
          <p>Latihan Berkesadaran Penuh Daring<br />(Online Mindfulness)</p>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="jadwal-section">
        <div className="container">
          <div className="section-header">
            <span className="label">Jadwal Rutin</span>
            <h2>Latihan Online Mingguan & Bulanan</h2>
            <p>
              Bergabunglah bersama kami dalam latihan berkesadaran penuh secara
              daring. Pilih komunitas yang sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <div className="schedule-grid">
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="schedule-card"
                style={{ "--card-accent": schedule.color }}
              >
                <div className="card-header">
                  <span className="frequency-badge">{schedule.frequency}</span>
                  <div className="time-badge">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {schedule.time}
                  </div>
                </div>

                <div className="card-body">
                  <h3>
                    {schedule.day}{" "}
                    <span className="day-desc">{schedule.description}</span>
                  </h3>
                  <div className="community-info">
                    <span className="online-tag">
                      <span className="dot"></span>
                      Online
                    </span>
                    <span className="community-name">{schedule.community} {schedule.ageRange && (
                    <span className="age-range">{schedule.ageRange}</span>
                  )}</span>
                  </div>
                </div>

                {/* <div className="card-footer">
                  <button className="join-btn">Lihat Detail</button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="jadwal-event" className="event-section">
        <div className="container">
          <div className="section-header">
            <span className="label">Jadwal Event</span>
            <h2>Acara & Retret Mendatang</h2>
            <p>
              Selain latihan rutin, kami juga mengadakan acara dan retret
              khusus. Klik salah satu acara untuk melihat detailnya.
            </p>
          </div>

          {events.length > 0 ? (
            <div className="event-grid">
              {events.map((event) => (
                <a
                  key={event.id}
                  href={`/jadwal/${getEventSlug(event.link)}`}
                  className="event-card"
                >
                  <div className="event-date">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    {formatEventDateRange(event.start_date, event.end_date)}
                  </div>
                  <h3>{event.title}</h3>
                  <div className="event-location">
                    <i className="fa-solid fa-location-dot"></i>
                    {event.location}
                  </div>
                  <span className="event-link">Lihat Detail →</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="event-empty">Belum ada acara mendatang.</p>
          )}
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="whatsapp-section">
        <div className="container">
          <div className="whatsapp-card">
            <div className="whatsapp-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="#25D366"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div className="whatsapp-content">
              <h3>Bergabung ke WhatsApp Group</h3>
              <p>
                Untuk mendapatkan informasi kegiatan Plum Village di Indonesia,
                silakan bergabung ke WhatsApp Group{" "}
                <strong>Komunitas Mindfulness Nusantara</strong>.
              </p>
              <p className="note">
                Anda wajib membaca{" "}
                <a href="#" className="guideline-link">
                  pedoman grup
                </a>{" "}
                terlebih dahulu.
              </p>
            </div>
            <a
              href="https://chat.whatsapp.com/JQQeCwBBoSGLMkb19wTlLc"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <div className="btn-text">
                <span className="btn-title">Komunitas Nusantara</span>
                <span className="btn-subtitle">Bergabung ke Grup</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                </svg>
              </div>
              <h4>Cara Bergabung</h4>
              <p>
                Klik link Zoom yang dibagikan di grup WhatsApp 10 menit sebelum
                jadwal dimulai.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <h4>Persiapan</h4>
              <p>
                Siapkan tempat yang tenang, bantal duduk, dan pastikan koneksi
                internet stabil.
              </p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4>Terbuka untuk Umum</h4>
              <p>
                Semua latihan terbuka untuk umum dan gratis. Tidak perlu
                pengalaman meditasi sebelumnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JadwalPage;
