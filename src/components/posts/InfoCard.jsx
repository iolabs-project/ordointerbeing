import Link from "next/link";

const InfoCard = ({ id, title, category, date, img }) => {
  return (
    <div className="info-card">
      <img src={img} alt={title || ""} loading="lazy" decoding="async" />
      <Link href={`/posts/${id}`} className="info-title">{title}</Link>
      <div className="info-meta">
        <span className={`info-category ${category ? category.toLowerCase() : ''}`}>{category}</span>
        <span className="info-date">{date}</span>
      </div>
    </div>
  );
};

export default InfoCard;
