const InfoCard = ({ id, title, category, date, img }) => {
  //get the first image from content

  return (
    <div className="info-card">
      <img src={img} alt="" />
      <a href={`/posts/${id}`} className="info-title">{title}</a>
      <div className="info-meta">
        <span className={`info-category ${category || ''}`}>{category}</span>
        <span className="info-date">{date}</span>
      </div>
    </div>
  );
};

export default InfoCard;
