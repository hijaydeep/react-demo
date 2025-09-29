const getYouTubeThumbnail = (url) => {
  const regExp = /v=([^&]+)/;
  const match = url.match(regExp);
  return match
    ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`
    : "/assets/default-thumb.png";
};

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {videos.map((vid, i) => (
        <div
          key={i}
          className="relative cursor-pointer"
          style={{
            width: "112.36px",
            height: "144.28px",
          }}
          onClick={() => onVideoClick(vid)}
        >
          <img
            src={getYouTubeThumbnail(vid.link)}
            alt="video thumbnail"
            className="rounded-lg shadow-md w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default VideoList;