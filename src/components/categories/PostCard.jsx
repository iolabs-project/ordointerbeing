const PostCard = ({ slug, title, content, date, author, img }) => {
  return (
    <div className="info-card">
      <img src={img} alt="" />
      <a href={`/posts/${slug}`} className="info-title">{title}</a>
      <div className="info-meta">
        <span className={`info-category ${category || ''}`}>{category}</span>
        <span className="info-date">{date}</span>
      </div>
    </div>
  );
};

export default PostCard;
