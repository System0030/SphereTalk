import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";


// List of predefined random comments
const randomComments = [
  "Kapagod to boss!",
  "Coding is life!",
  "Dikona kayang gawin yan!",
  "Paka dami naman nyan",
  "Ehehey! Basic lang yan!",    
  "Kupal ka Justine!",
  "Tara tara ML na",
  "Open na ML!",
  "Online class na naman",
  "Nubayan!!"
];

// List of random names
const randomNames = [
  "Renz Mico", "Kyla Isabel", "Julie Ann", "Enrico Miguel", "Rex", "Miles", "Jhon Kenth", "Angelo", "Karlo", "Justine"
];

// Function to generate random comments
const generateRandomComments = () => {
  const randomIndex = Math.floor(Math.random() * randomComments.length);
  const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  return { text: randomComments[randomIndex], name: randomName, likes: 0, profilePic: `https://picsum.photos/50?random=${Math.floor(Math.random() * 1000)}` };
};
const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]); // Comments state
  const [newComment, setNewComment] = useState("");
  const [isLiked, setIsLiked] = useState([]); // Likes tracking
    const [sections, setSections] = useState({
      customFeed: false,
      recent: false,
      communities: false,
    });

    const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };


  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObject = {
      id: Date.now(),
      text: newComment,
      name: "JackMan6901", // Set a default name for the user posting the comment
      likes: 0,
      profilePic: "https://picsum.photos/50?random=1"
    };
    setComments([...comments, newCommentObject]);
    setNewComment(""); // Clear input field
  };

  // Toggle like status for a specific comment
  const handleLikeToggle = (index) => {
    const updatedLikes = [...isLiked];
    updatedLikes[index] = !updatedLikes[index];
    setIsLiked(updatedLikes);
    const updatedComments = [...comments];
    updatedComments[index].likes += updatedLikes[index] ? 1 : -1;
    setComments(updatedComments);
  };

  // Auto-generate random comment every 5 seconds
  useEffect(() => {
    const randomCommentInterval = setInterval(() => {
      const newRandomComment = generateRandomComments();
      setComments((prevComments) => [...prevComments, newRandomComment]);
    }, Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000); // Random interval between 3-10 seconds

    return () => clearInterval(randomCommentInterval); // Cleanup on component unmount
  }, []);

  // Function to handle auto-increasing the likes for each comment at random intervals (3-20 seconds)
  useEffect(() => {
    const likeIntervals = comments.map((comment, index) => {
      const interval = setInterval(() => {
        const updatedComments = [...comments];
        updatedComments[index].likes += 1; // Increment the like count
        setComments(updatedComments);
      }, Math.floor(Math.random() * (20000 - 3000 + 1)) + 3000); // Random interval between 3-20 seconds

      return interval;
    });

    // Cleanup intervals on component unmount
    return () => likeIntervals.forEach((interval) => clearInterval(interval));
  }, [comments]);
  const handleHomeClick = () => {
    navigate("/dashboard");  // Navigate to Dashboard route
  };
  const handlePopularClick = () => {
    navigate('/popular'); // Navigate to Explore page
  };
  const handleExploreClick = () => {
    navigate('/explore'); // Navigate to Explore page

     const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center px-4 py-3 bg-black border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/HppJ9FPQ/test-portrait.jpg"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-red-600 font-bold text-lg tracking-widest">
            SPHERE <span onClick={toggleModal} className="text-white">TALK</span>
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-red-600 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Desktop Topbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/HppJ9FPQ/test-portrait.jpg"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-red-600 font-bold text-lg tracking-widest">
            SPHERE <span className="text-white">TALK</span>
          </span>
        </div>
        <div className="flex-1 mx-10 max-w-[600px]">
          
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/create-post")} className="bg-white text-red-500 font-semibold px-4 py-2 rounded hover:bg-gray-300">
            ＋ CREATE
          </button>
          <button className="text-white text-xl">🔔</button>
          <img
            onClick={toggleModal}
            src="https://i.ibb.co/HppJ9FPQ/test-portrait.jpg"
            alt="Profile"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Layout Container */}
      <div
        className={`flex flex-1 pt-0 ${mobileMenuOpen ? "flex-col" : "flex-col lg:flex-row pt-0 lg:pt-[88px]"}`}
      >
        {/* Sidebar */}
        <aside
          className={`${
            mobileMenuOpen ? "block" : "hidden"
          } lg:block bg-black w-full lg:w-64 p-4 border-r border-gray-700 flex-shrink-0 lg:sticky lg:top-[88px] h-max`}
        >
          <div className="space-y-6">
            <nav className="space-y-4 mt-4 text-sm font-semibold">
              <div
                onClick={() => navigate("/dashboard")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🏠 HOME
              </div>
              <div
                onClick={() => navigate("/popular")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🔥 POPULAR
              </div>
              <div
                onClick={() => navigate("/explore")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🧱 EXPLORE
              </div>
              <hr className="border-gray-600" />

              {["customFeed", "recent", "communities"].map((sectionKey) => {
                const labelMap = {
                  customFeed: "CUSTOM FEED",
                  recent: "RECENT",
                  communities: "COMMUNITIES",
                };

                const contentMap = {
                  customFeed: (
                    <p className="text-red-400 pl-4">
                      ➕ Create a Custom Feed
                    </p>
                  ),
                  recent: (
                    <div className="flex items-center gap-2 pl-4" onClick={() => navigate("/AnimeCoon")}>
                      <img
                        src="https://i.ibb.co/HppJ9FPQ/test-portrait.jpg"
                        className="w-6 h-6 rounded-full object-cover"
                        alt=""
                      />
                      <span > AnimeCoon</span>
                    </div>
                  ),
                  communities: (
                    <p className="text-red-400 pl-4">
                      ➕ Create a Communities
                    </p>
                  ),
                };

                return (
                  <div key={sectionKey}>
                    <button
                      onClick={() => toggleSection(sectionKey)}
                      className="flex items-center justify-between w-full text-left text-red-500"
                    >
                      {labelMap[sectionKey]}
                      <span>{sections[sectionKey] ? "▴" : "▾"}</span>
                    </button>
                    {sections[sectionKey] && (
                      <div className="mt-2">{contentMap[sectionKey]}</div>
                    )}
                    <hr className="border-gray-600 mt-2" />
                  </div>
                );
              })}

              <div className="text-red-600 mt-4 font-bold text-center">ABOUT</div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
       <main className=" box-border w-[screen] sm:w-[screen] flex-1 p-4 lg:p-8 bg-[#111] min-h-screen">
          <div className="w-full sm:w-[150%] lg:w-[100%] flex flex-col lg:flex-row gap-6">
            {/* <button
              onClick={() => navigate("/dashboard")}
              className="absolute top-4 right-4 text-red-600 text-xl"
            >
              ✖
            </button> */}

            <div className="post-section mb-4">
              <h2 className="text-2xl font-bold text-white mb-4">Date with you</h2>
              <p className="text-gray-400 mb-4">
                Hays,date nanaman, pero okay lang yan, basta kasama kita. <br /> May gagawin tayo bukas 09 Activty 01 <br />~ JC
              </p>
                <div className="flex-wrap justify-center gap-500 border-5  border-gray-700 rounded-lg p-4 mb-4">
              {/* Post Image */}
              <img
                src="https://i.ibb.co/gL8tKXgg/BG.webp" 
                alt="Post"
                className="  object-cover rounded-lg shadow-md"
              />
              <br />
              <img
                src="https://i.ibb.co/gL8tKXgg/BG.webp" 
                alt="Post"
                className="  object-cover rounded-lg shadow-md"
              />
              </div>
            </div>

            {/* Comments Section */}
            <div className="max-w-screen comments-section ">
              <h3 className="text-xl font-semibold text-white mb-4">Comments</h3>

              {/* Display Comments */}
              <div className="comments-list space-y-4 max-h-100 overflow-y-auto">
                {comments.map((comment, index) => (
                  <div key={comment.id} className="comment bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
                    <div className="flex items-center space-x-3 mb-2">
                      <img src={comment.profilePic} alt="profile" className="w-8 h-8 rounded-full object-cover" />
                      <div>
                        <span className="text-white font-semibold">{comment.name} </span>
                        <span className="text-sm text-green-500"> Online</span>
                      </div>
                    </div>
                    <p className="text-white text-sm">{comment.text}</p>
                    <div className="h-2 comment-footer flex justify-between items-center mt-2">
                      <button
                        onClick={() => handleLikeToggle(index)}
                        className={`h-1  like-button flex items-center space-x-2 text-sm ${isLiked[index] ? "text-red-600" : "text-gray-500"}`}
                      >
                        <span>{isLiked[index] ? "Liked" : "Like"}</span>
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* New Comment Form */}
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Add your comment..."
                  className="w-full p-4 border border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-600 transition bg-gray-700 text-white text-sm"
                  rows="4"
                ></textarea>
                <button
                  type="submit"
                  className="w-full  mt-4 bg-red-600 text-red-600 py-2 rounded-lg hover:bg-red-700 transition"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      {/* Modal Profile */}		
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};

export default Dashboard;
