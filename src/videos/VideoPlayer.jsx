import React from "react";
import { ArrowLeft } from "lucide-react";

const VideoPlayer = ({ video, onBack }) => {
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /v=([^&]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = getYouTubeEmbedUrl(video.link);

  return (
    <div className="relative px-4 py-2 ">
      <button
        onClick={onBack}
        className="flex items-center text-[#6B599C] text-xl font-semibold mb-4"
      >
        <ArrowLeft className="mr-1 text-purple-600" size={24} />{" "}
        <span className="text-[#6B599C]"> Back</span>
      </button>

      <div
        className="relative mx-auto w-full h-[500px]"
        style={{
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title="YouTube Video"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-center text-gray-500">Invalid video link.</p>
        )}
      </div>

      <div className="mt-6 text-start">
        <p className="text-lg text-gray-700">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
