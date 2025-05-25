import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal"; // Import ProfileModal
import { useUserProfile } from "../context/UserProfileContext";


const Dashboard = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Renamed state to control modal visibility
  const [activeTab, setActiveTab] = useState("home");
  const { profile } = useUserProfile();
  const [sections, setSections] = useState({
    customFeed: false,
    recent: false,
    communities: false,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
    
      const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  };

  const handleExploreClick = () => {
    navigate("/explore"); // Navigate to Explore page
  };

  const handlePopularClick = () => {
    navigate("/popular"); // Navigate to Explore page
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center px-4 py-3 bg-black border-b border-gray-700">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/sJKjrR8F/Screenshot-2025-05-13-234244.png"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-red-600 font-bold text-lg tracking-widest">
            SPHERE <span className="text-white">TALK</span>
          </span>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden px-4 py-3 bg-black border-b border-gray-700">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Desktop Topbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/sJKjrR8F/Screenshot-2025-05-13-234244.png"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-red-600 font-bold text-lg tracking-widest">
            SPHERE <span className="text-white">TALK</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-white text-red-500 font-semibold px-4 py-2 rounded hover:bg-gray-300">
            ＋ CREATE
          </button>
          <button onClick={toggleModal} className="text-white text-xl">🔔</button>
          <img
            onClick={toggleModal} // Show modal when clicked
            src={profile.profileImage}
            alt="Profile"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Layout Container */}
      <div
        className={`flex flex-1 pt-0 ${
          mobileMenuOpen ? "flex-col" : "flex-col lg:flex-row pt-0 lg:pt-[88px]"
        }`}
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
                    <div className="flex items-center text-red-600 gap-2 pl-4" onClick={() => navigate("/AnimeCoon")}>
                      <img
                        src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg"
                        className="w-6 h-6 rounded-full object-cover"
                        alt=""
                      />
                      <span>   AnimeCoon</span>
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
        <main className="box-border size-273 flex-1 p-4 lg:p-8 bg-[#111] min-h-screen overflow-auto">
          <div className="w-full sm:w-[85%] lg:w-[100%] flex flex-col lg:flex-row gap-6">
            {/* Left Profile Info */}
            <section className="flex-1 space-y-6">
              <div className="bg-gray-900 p-6 rounded-xl shadow-md">
                <div className="flex items-center gap-6">
                  <img
                    src={profile.profileImage}
                    alt="Profile"
                    className="w-16 h-16 object-cover rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-white">AnimeCoon</h2>
                    <p className="text-sm text-gray-400">@jackman0691</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">Post</h3>
                  <p className="text-gray-400 mt-4">AnimeCoon hasn’t posted yet.</p>
                </div>
                <button
                  onClick={() => navigate("/create-post")}
                  className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
                >
                  CREATE POST
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal Profile */}
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};

export default Dashboard;
