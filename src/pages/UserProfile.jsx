// src/pages/UserProfile.jsx
import React, { useEffect, useState } from "react";
import PostOptionsModal from "../components/PostOptionsModal";
import ReportModal from "../components/ReportModal";

const UserProfile = () => {
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * (99999 - 100 + 1)) + 100);
  const [liked, setLiked] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showCommentAlert, setShowCommentAlert] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const increment = [1, 3, 5,23,45,123,423,1231][Math.floor(Math.random() * 3)];
      setLikeCount((prev) => prev + increment);
    }, Math.floor(Math.random() * (20000 - 5000 + 1)) + 5000);
    return () => clearInterval(interval);
  }, []);

  const toggleLike = () => {
    setLiked((prevLiked) => {
      if (prevLiked) {
        setLikeCount((prev) => prev - 1);
      } else {
        setLikeCount((prev) => prev + 1);
      }
      return !prevLiked;
    });
  };
    
  const highlights = [
  {
    title: "Luffy's Gear 5 Unleashed",
    image: "https://i.ibb.co/pBdF0723/wallpapersden-com-gear-5-monkey-d-luffy-art-one-piece-3507x2790.jpg",
    description: "Epic battles and new powers.",
  },
  {
    title: "Make Love, Not War",
    image: "https://i.ibb.co/WvjN5441/Chat-GPT-Image-May-8-2025-06-27-01-PM.png",
    description: "A romantic tale of two warriors.",
  },
  {
    title: "Broken Bonds: The Untold Story",
    image: "https://i.ibb.co/p6JfVzyj/Chat-GPT-Image-May-8-2025-06-19-31-PM.png",
    description: "A tale of friendship and betrayal.",
  },
  {
    title: "Slum dunk : Final Chapter",
    image: "https://i.ibb.co/Kx8KYQxQ/1200x675mf.jpg",
    description: "The final showdown on the court.",
  },
  
  
];


  return (
    <div className="min-h-screen bg-black text-white px-4 pt-4 pb-10">
      {/* Banner Header */}
      <div 
        className="w-full h-[140px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-xl"
        
      ><img
            src="https://i.ibb.co/VWLqrczr/123.jpg" 
            alt="Profile"
            className="w-full h-[140px] sm:h-[180px] md:h-[200px] bg-cover bg-center rounded-xl"
          /></div>

      {/* Profile Row */}
      <div className="relative -mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4">

        <div className="flex items-center gap-4">
          <img
            src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg" 
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-black object-cover"
          />
          <h3 className="text-2xl font-bold">AnimeCoon</h3>
        </div>
        <button className="border border-white rounded-full px-4 py-1 text-sm font-semibold hover:bg-white hover:text-black">
          JOIN
        </button>
      </div>

      {/* Highlight Section */}
      <div className="mt-8 px-4">
        <p className="text-sm text-gray-400 mb-2">📌 Community Highlight</p>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {highlights.map((item, index) => (
            <div key={index} className="w-44 flex-shrink-0 bg-gray-800 rounded-lg shadow-md">
              <img
                src={item.image}
                className="rounded-t-lg w-full h-24 object-cover"
                alt={item.title}
              />
              <div className="p-2">
                <div className="text-xs text-white font-semibold truncate">{item.title}</div>
                <div className="text-[10px] text-gray-400 truncate">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Main Content */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6 px-4">
        {/* Posts Section */}
        <div className="flex-1">
          <h3 className="text-sm text-gray-400 mb-4">COMMUNITY POSTS</h3>
          {!isHidden && (
            <div className="bg-[#1a1a1a] p-4 rounded-lg">
              <div className="flex flex-wrap items-center gap-2 mb-2">

                <img
                  src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg" 
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-bold">AnimeCoon</span>
                <button
                  onClick={() => setIsFollowing((prev) => !prev)}
                  className="ml-auto text-sm text-gray-400 hover:underline"
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
                <button
                  onClick={() => setShowOptions(true)}
                  className="text-white text-xl ml-2"
                >
                  ⋯
                </button>
              </div>
              <p className="text-sm text-white bg-black p-4 rounded-lg">
                The man who will be the king of the pirates! Join Luffy and his crew on their epic adventures across the Grand Line. 🌊
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-white items-center">

                <button onClick={toggleLike} className="hover:underline">
                  {liked ? "Liked" : "Like"} {likeCount.toLocaleString()}
                </button>
                <button
                  className="hover:underline"
                  onClick={() => setShowCommentAlert(true)}
                >
                  💬 Comment
                </button>
                <button className="border px-2 py-1 text-xs border-white rounded hover:bg-white hover:text-black">
                  SHARE
                </button>
              </div>
              {showCommentAlert && (
                <p className="text-xs text-red-400 mt-4 italic">
                  Comments have been blocked by the author or admin due to spam.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Sidebar Section */}
        <aside className="w-full lg:w-72 bg-[#f5f5f5] text-black p-4 rounded-xl space-y-4">
          <div>
            <h4 className="text-lg font-bold">AnimeCoon</h4>
            <p className="text-xs text-gray-600">Created: May 09, 2004</p>
          </div>
          <p className="text-xs text-gray-700">
            A vibrant space where art and storytelling collide, bringing characters and worlds to life through color, texture, and imagination.
          </p>
          <button className="text-sm w-full border border-black rounded px-2 py-1 hover:bg-black hover:text-white">
            📖 Community Guide Lines
          </button>
          <div className="flex justify-between text-xs mt-2">
            <span>700 Members</span>
            <span>20% Online</span>
            <span>75% Rate</span>
          </div>
          <hr className="border-gray-400" />
          <div className="text-xs font-semibold">MODERATORS</div>
          
          <div className="text-xs mt-2">👤 AnimeCoon</div>
          <div className="text-xs">👤 ArtCoon</div>
        </aside>
      </div>

      {/* Post Options Modal */}
      {showOptions && (
        <PostOptionsModal
          onClose={() => setShowOptions(false)}
          onHide={() => {
            setIsHidden(true);
            setShowOptions(false);
          }}
          onReport={() => {
            setShowOptions(false);
            setShowReportModal(true);
          }}
        />
      )}

      {/* Report Modal */}
      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onSubmit={() => setShowReportModal(false)}
        />
      )}
    </div>
  );
};

export default UserProfile;
