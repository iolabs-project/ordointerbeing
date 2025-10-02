"use client";

const MusicCard = ({ title, desc, content, img }) => {
  const capitalizeWords = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  let titleClean = capitalizeWords(title);
  let descClean = desc
    .replace(/\[\&hellip;\]/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  function truncateWords(text, maxWords = 50) {
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + " ...";
}

  descClean = truncateWords(descClean, 15);
  let url = content.match(/https?:\/\/[^\s]+\.mp3/g)?.[0] || "";
  const handleDownload = () => {
    const proxyUrl = `/api/download?url=${encodeURIComponent(url)}`;
    window.location.href = proxyUrl;
  };
  return (
    <div className="music-card">
      <img src={img} alt="" />
      <p className="music-title">{titleClean}</p>
      <p className="music-description">{descClean}</p>
      <button className="music-link" onClick={handleDownload}>
        Download MP3
      </button>
    </div>
  );
};

export default MusicCard;
