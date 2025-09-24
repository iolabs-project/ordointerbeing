"use client";

const MusicCard = ({ title, desc, url }) => {
  const capitalizeWords = (str) => {
    return str.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };
  let titleClean = capitalizeWords(title);
  let descClean = desc.replace(/https?:\/\/[^\s<]+/g, "").replace(/<[^>]+>/g, "").replace(/\s{2,}/g, " ").trim();
  
  const handleDownload = () => {
    const proxyUrl = `/api/download?url=${encodeURIComponent(url)}`;
    window.location.href = proxyUrl;
  };
  return (
    <div className="music-card">
      <img src="/assets/default-music.png" alt="" />
      <p className="music-title">{titleClean}</p>
      <p className="music-description">{descClean}</p>
      <button className="music-link" onClick={handleDownload}>
        Download MP3
      </button>
    </div>
  );
};

export default MusicCard;
