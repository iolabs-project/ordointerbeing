import { notFound } from "next/navigation";
import { apiFetch, formatEventDateRange } from "@/lib/helper";

const EventDetailPage = async ({ params }) => {
  const { slug } = await params;
  const event = await apiFetch(`wp/events/${slug}`);

  if (!event || event.code === "not_found" || event.error) {
    notFound();
  }

  return (
    <main className="event-detail-page">
      <section className="event-hero" style={event.image ? { backgroundImage: `url(${event.image})` } : undefined}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{event.title}</h1>
          <div className="event-meta">
            <span>
              <i className="fa-regular fa-calendar-days"></i>
              {formatEventDateRange(event.start_date, event.end_date)}
            </span>
            {event.location?.name && (
              <span>
                <i className="fa-solid fa-location-dot"></i>
                {event.location.name}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="event-body">
        <div className="container">
          {event.location && (
            <div className="event-location-box">
              <h3>Lokasi</h3>
              <p>{event.location.name}</p>
              {event.location.address && <p>{event.location.address}</p>}
            </div>
          )}

          <div className="event-content" dangerouslySetInnerHTML={{ __html: event.content || "" }} />

          <a href="/jadwal#jadwal-event" className="back-link">← Kembali ke Jadwal Event</a>
        </div>
      </section>
    </main>
  );
};

export default EventDetailPage;
