const MusicCard = ({ title, desc, url }) => {
  return (
    <div className="music-card">
      <img src="/assets/default-music.png" alt="" />
      <p className="music-title">{title}</p>
      <p className="music-description">{desc}</p>
      <a href={url} className="music-link">
        Download MP3
      </a>
    </div>
  );
};

export default MusicCard;
