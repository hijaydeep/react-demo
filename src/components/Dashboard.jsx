import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import VideoList from "../videos/VideoList";
import AddVideoModal from "./AddVideoModal";
import VideoPlayer from "../videos/VideoPlayer";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(storedVideos);

    const storedCategory = localStorage.getItem("activeCategory");
    if (storedCategory) {
      setActiveCategory(parseInt(storedCategory, 10));
    }
  }, []);

  const addVideo = (video) => {
    const updatedVideos = [...videos, video];
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
    setShowModal(false);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedVideo(null);
    localStorage.setItem("activeCategory", categoryId);
  };

  const filteredVideos = activeCategory
    ? videos.filter((video) => video.category === activeCategory)
    : videos;

  return (
    <div className="min-h-screen flex flex-col bg-white rounded-3xl overflow-hidden">
      <Header />

      <div className="flex flex-1">
        <Sidebar
          onAddClick={() => setShowModal(true)}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryClick}
        />

        <div className="flex-1 p-4">
          {!selectedVideo ? (
            <div className="flex justify-end items-center mb-6">
              <button
                onClick={() => setShowModal(true)}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-purple-700"
              >
                Add Video
              </button>
            </div>
          ) : null}

          {selectedVideo ? (
            <VideoPlayer
              video={selectedVideo}
              onBack={() => setSelectedVideo(null)}
            />
          ) : filteredVideos.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-lg">No videos yet. Add one!</p>
            </div>
          ) : (
            <VideoList
              videos={filteredVideos}
              onVideoClick={setSelectedVideo}
            />
          )}

          {showModal && (
            <AddVideoModal
              onClose={() => setShowModal(false)}
              onSubmit={addVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
