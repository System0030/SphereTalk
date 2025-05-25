import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";
import { useUserProfile } from "../context/UserProfileContext";


const dummyCommunities = {
  explore: [
    { id: 1, title: "Tech Talk", desc: "Discussion on latest technology trends.", image: "https://i.ibb.co/4yyf3Y0/TechTalk.png" },
    { id: 2, title: "Game Dev World", desc: "Join to talk about game development.", image: "https://i.ibb.co/SwLQMBpF/Game-Dev-World.png" },
    { id: 3, title: "Virtual Reality Hub", desc: "Virtual reality enthusiasts unite.", image: "https://i.ibb.co/b5rkRZwC/Virtual-Reality-Hub.jpg" },
    { id: 4, title: "Mobile Gaming", desc: "Stay updated on mobile gaming.", image: "https://i.ibb.co/vxD1dmn2/Mobile-Gaming.jpg" },
    { id: 5, title: "AI & Machine Learning", desc: "Dive into discussions around AI.", image: "https://i.ibb.co/xq9ssmpG/AI-Machine-Learning.jpg" },
    { id: 6, title: "Cybersecurity Watch", desc: "Stay informed about cybersecurity.", image: "https://i.ibb.co/kg1r1hhc/Cybersecurity-Watch.png" },
  ],
  education: [
    { id: 7, title: "Code Academy", desc: "A place to learn to code.", image: "https://i.ibb.co/j9cnwjkr/Code-Academy.png" },
    { id: 8, title: "Digital Marketing Mastery", desc: "Learn digital marketing.", image: "https://i.ibb.co/JjWNJ9b9/Digital-Marketing-Mastery.png" },
    { id: 9, title: "Art and Design School", desc: "Learn graphic design and animation.", image: "https://i.ibb.co/60KxNXRG/Art-and-Design-School.png" },
    { id: 10, title: "Data Science Bootcamp", desc: "Master data science.", image: "https://i.ibb.co/m5twD2DV/Data-Science-Bootcamp.png" },
    { id: 11, title: "Photography Class", desc: "Learn photography techniques.", image: "https://i.ibb.co/KcndqJvN/Photography-Class.jpg" },
    { id: 12, title: "UX/UI Design Workshop", desc: "Learn UI/UX design.", image: "https://i.ibb.co/tpqYDC3L/UX-UI-Design-Workshop.jpg" },
  ],
  newsreport: [
    { id: 13, title: "World News Daily", desc: "Latest world news.", image: "https://i.ibb.co/7Jz9qwSD/World-News-Daily.jpg" },
    { id: 14, title: "Tech Updates", desc: "Latest tech news.", image: "https://i.ibb.co/svV4SyZh/Tech-Updates.png" },
    { id: 15, title: "Sports Highlights", desc: "Catch up on sports events.", image: "https://i.ibb.co/Q7vX7CQG/Sports-Highlights.jpg" },
    { id: 16, title: "Environmental News", desc: "News on green energy.", image: "https://i.ibb.co/whyRW0tG/Environmental-News.jpg" },
    { id: 17, title: "Financial Times", desc: "Global financial trends.", image: "https://i.ibb.co/GfCTjC3y/Financial-Times.png" },
    { id: 18, title: "Health News", desc: "Updates on health and wellness.", image: "https://i.ibb.co/twWmh1Bf/Health-News.png" },
  ],
  animeAndManga: [
    { id: 19, title: "Naruto Fan Club", desc: "Discuss episodes and characters.", image: "https://i.ibb.co/wNh59v99/Naruto-Fan-Club.jpg" },
    { id: 20, title: "Dragon Ball Z Universe", desc: "Everything Dragon Ball Z.", image: "https://i.ibb.co/KcjGbyHt/Dragon-Ball-Z-Universe.jpg" },
    { id: 21, title: "One Piece Crew", desc: "Discuss Straw Hat Pirates.", image: "https://i.ibb.co/j9pDBNV9/One-Piece-Crew.webp" },
    { id: 22, title: "My Hero Academia Academy", desc: "Talk about quirks and heroes.", image: "https://i.ibb.co/mFDpkxNn/My-Hero-Academia-Academy.jpg" },
    { id: 23, title: "Attack on Titan Fanbase", desc: "Survival against Titans.", image: "https://i.ibb.co/whBwhr1d/Attack-on-Titan-Fanbase.jpg" },
    { id: 24, title: "Demon Slayer Realm", desc: "Discuss sword techniques.", image: "https://i.ibb.co/F4d4tVCV/Demon-Slayer-Realm.webp" },
  ],
  art: [
    { id: 25, title: "Digital Painting Hub", desc: "Explore digital painting.", image: "https://i.ibb.co/9MMRmB7/Digital-Painting-Hub.jpg" },
    { id: 26, title: "Photography for Beginners", desc: "Capture amazing shots.", image: "https://i.ibb.co/bMLPJDXD/Photography-for-Beginners.jpg" },
    { id: 27, title: "Sculpture and 3D Art", desc: "Discuss sculpture and 3D art.", image: "https://i.ibb.co/Wh28fr1/Sculpture-and-3-D-Art.webp" },
    { id: 28, title: "Creative Writing Workshop", desc: "Hone your writing skills.", image: "https://i.ibb.co/Xrqx0RsX/Creative-Writing-Workshop.jpg" },
    { id: 29, title: "Graphic Design School", desc: "Learn graphic design.", image: "https://i.ibb.co/rKXMjN2b/Graphic-Design-School.png" },
    { id: 30, title: "Street Art Culture", desc: "Celebrate street art.", image: "https://i.ibb.co/j9sqZKs9/Street-Art-Culture.png" },
  ],
  games: [
    { id: 31, title: "League of Legends", desc: "Discuss LoL strategies.", image: "https://i.ibb.co/bMrbRFTF/League-of-Legends.webp" },
    { id: 32, title: "Valorant Community", desc: "Discuss Valorant gameplay.", image: "https://i.ibb.co/PGPy0tj8/Valorant-Community.png" },
    { id: 33, title: "Fortnite Battle Royale", desc: "Team up in Fortnite.", image: "https://i.ibb.co/svDq9C5s/Fortnite-Battle-Royale.jpg" },
    { id: 34, title: "Minecraft World", desc: "Share building tips.", image: "https://i.ibb.co/99QDWS8k/Minecraft-World.png" },
    { id: 35, title: "Call of Duty MW", desc: "Discuss tactics and gameplay.", image: "https://i.ibb.co/6RGHCj9p/Call-of-Duty-MW.png" },
    { id: 36, title: "Apex Legends", desc: "Talk about Apex squads.", image: "https://i.ibb.co/Kjw88hRj/Apex-Legends.png" },
  ],
};

const Explore = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { profile } = useUserProfile();
  const [sections, setSections] = useState({
    customFeed: false,
    recent: false,
    communities: false,
  });
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const [followed, setFollowed] = useState({});

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFollow = (id) => {
    setFollowed((prev) => ({ ...prev, [id]: !prev[id] }));
  };



  const renderCards = (list) =>
    list.map((item) => (
      <div
        key={item.id}
        className="flex items-start gap-3 bg-white rounded-lg p-4 text-black shadow"
      >
        <img
          src={item.image}
          className="w-12 h-12 object-cover rounded-full"
          alt=""
        />
        <div className="flex-1">
          <p className="font-semibold">{item.title}</p>
          <p className="text-sm text-gray-600">{item.desc}</p>
        </div>
        <button
          onClick={() => toggleFollow(item.id)}
          className={`px-3 py-1 text-xs font-bold border-2 rounded-full ${
            followed[item.id]
              ? "border-gray-400 text-gray-400"
              : "border-red-500 text-red-500 hover:bg-red-100"
          }`}
        >
          {followed[item.id] ? "FOLLOWED" : "FOLLOW"}
        </button>
      </div>
    ));
    
    const handleHomeClick = () => {
    navigate("/dashboard");  // Navigate to Dashboard route
  };
    const handlePopularClick = () => {
        navigate('/popular'); // Navigate to Popular page
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
            src="https://i.ibb.co/sJKjrR8F/Screenshot-2025-05-13-234244.png"
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
            src={profile.profileImage}
            alt="Profile"
            className="w-8 h-8 text-red-600 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Layout */}
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
          <nav className="space-y-4 mt-4 text-sm font-semibold">
            <div 
                onClick={handleHomeClick}
                className="text-red-500 flex items-center gap-2 cursor-pointer">
              🏠 HOME
            </div>
                
            <div 
                onClick={handlePopularClick}
                className="text-red-500 flex items-center gap-2 cursor-pointer">
              🔥 POPULAR
            </div>
            <div className="text-red-500 flex items-center gap-2 cursor-pointer">
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
                customFeed: <p className="text-red-400 pl-4">➕ Create a Custom Feed</p>,
                recent: (
                  <div className="flex items-center gap-2 pl-4" onClick={() => navigate("/AnimeCoon")}>
                    <img
                      src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpgg"
                      className="w-6 h-6 rounded-full object-cover"
                      alt=""
                    />
                    <span>AnimeCoon</span>
                  </div>
                ),
                communities: <p className="text-red-400 pl-4">➕ Create a Communities</p>,
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
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 bg-[#eee] text-black min-h-screen space-y-6">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">EXPLORE COMMUNITIES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.explore)}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">EDUCATION</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.education)}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">NEWS & REPORT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.newsreport)}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">ANIME & MANGA</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.animeAndManga)}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">ART</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.art)}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-black">GAMES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {renderCards(dummyCommunities.games)}
            </div>
          </section>

          <div className="text-center">
            <button className="px-6 py-2 border border-black text-black rounded hover:bg-gray-300 font-bold">
              SHOW MORE
            </button>
          </div>
        </main>
      </div>
      {/* Modal Profile */}		
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};

export default Explore;
