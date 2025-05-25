import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";
import PostOptionsModal from '../components/PostOptionsModal';
import ReportModal from '../components/ReportModal';
import { useUserProfile } from "../context/UserProfileContext";

const highlights = [
  {
    title: "How AI Is Changing the Way Students Learn",
    image: "https://i.ibb.co/nMSTSGHX/user-1-ep.png",
    description: "Explore how artificial intelligence is revolutionizing classrooms and empowering students to study smarter, not harder."
  },
  {
    title: "Daily Study Routines of Top Performing Students Around the World",
    image: "https://i.ibb.co/XZMVnDfn/user-2-ep.jpg",
    description: "Get inspired by the proven habits and time-management tricks of the most successful students globally."
  },
  {
    title: "How to Build a Study App with No Coding Experience",
    image: "https://i.ibb.co/DHWq4HJT/user-3-ep.jpg",
    description: "A beginner-friendly guide to creating your own productivity app using free, no-code tools."
  },
  {
    title: "From Noob to MVP in One Match 🎯💪",
    image: "https://i.ibb.co/yc22CwWf/From-Noob-to-MVP-in-One-Match.jpg",
    description: "Witness the epic journey of a new player rising to MVP status in a single match—packed with tips and hype moments!"
  }
];

const postsByTab = {
  home: [
    {
      id: 1,
      username: "SnackRanger",
      avatar: "https://i.ibb.co/7JDN1KKf/user-1.jpg",
      createdAt: "May 18, 2025",
      title: "Top 10 Anime Openings That Still Give Us Goosebumps",
      image: "https://i.ibb.co/XxPWPn5F/anime-1.jpg",
      content: "From classic hits like 'Guren no Yumiya' to modern bangers like 'Kaikai Kitan', these anime intros set the tone and spark nostalgia.",
    },
    {
      id: 2,
      username: "PixelNomad",
      avatar: "https://i.ibb.co/g2k1DJV/user-2.jpg",
      createdAt: "May 17, 2025",
      title: "Why Slice of Life Anime Is Gaining Popularity",
      image: "https://i.ibb.co/7xYdqCWZ/anime-2.png",
      content: "In a chaotic world, slow-paced, emotional narratives are resonating more than ever. Here's why audiences crave the calm.",
    },
    {
      id: 3,
      username: "BlurryBento",
      avatar: "https://i.ibb.co/rRxpyCNM/user-3.jpg",
      createdAt: "May 16, 2025",
      title: "Underrated Manga You Should Be Reading in 2025",
      image: "https://i.ibb.co/0RY2GwhT/anime-3.jpg",
      content: "Skip the mainstream—these hidden gems pack emotional punch, incredible art, and deep lore you won't want to miss.",
    },
    {
      id: 4,
      username: "TinyTempest",
      avatar: "https://i.ibb.co/FLprp5n2/user-4.jpg",
      createdAt: "May 15, 2025",
      title: "The Cultural Impact of Studio Ghibli Across Generations",
      image: "https://i.ibb.co/dJD47mnj/anime-4.jpg",
      content: "From My Neighbor Totoro to Spirited Away, Ghibli’s stories continue to influence animation, art, and storytelling globally.",
    },
    {
      id: 5,
      username: "ByteSnail",
      avatar: "https://i.ibb.co/zHf9SPYK/user-5.jpg",
      createdAt: "May 14, 2025",
      title: "Anime vs Manga: Which Tells the Story Better?",
      image: "https://i.ibb.co/tTXqcJd1/anime-5.jpg",
      content: "Is it better to watch the action or read the nuance? We explore the strengths of both formats in storytelling.",
    },
    {
      id: 6,
      username: "CivicScope",
      avatar: "https://i.ibb.co/q3zTnXmb/np-user-5.jpg",
      createdAt: "May 13, 2025",
      title: "Youth Voter Turnout: Why It Matters More Than Ever in 2025",
      image: "https://i.ibb.co/YFsyHknz/user-1-p.png",
      content: "Gen Z is showing up and changing the political landscape—this is what that means for upcoming elections.",
    },
    {
      id: 7,
      username: "PolicyPulse",
      avatar: "https://i.ibb.co/2m9wMv7/np-user-4.jpg",
      createdAt: "May 12, 2025",
      title: "Global Warming and Policy: Which Countries Are Leading Change?",
      image: "https://i.ibb.co/g0Jh7QZ/user-2-p.jpg",
      content: "With climate urgency rising, we examine which governments are truly taking action—and which are falling behind.",
    },
    {
      id: 8,
      username: "TruthTicker",
      avatar: "https://i.ibb.co/gxK90jB/np-user-3.jpg",
      createdAt: "May 14, 2025",
      title: "Deep Dive: The Impact of AI Regulation in the U.S. and Europe",
      image: "https://i.ibb.co/RpkRCgHq/user-3-p.jpg",
      content: "AI regulation is a hot topic. We break down the latest laws and their implications for tech companies and consumers.",
    },
    {
      id: 9,
      username: "NewsNest",
      avatar: "https://i.ibb.co/23S0fv8p/np-user-2.jpg",
      createdAt: "May 13, 2025",
      title: "What Is Digital Authoritarianism? And Why It’s Spreading",
      image: "https://i.ibb.co/fGd2YSnr/user-5-p.jpg",
      content: "Digital authoritarianism is on the rise. We explore its implications for privacy, freedom, and democracy.",
    },
    {
      id: 10,
      username: "PowerBriefs",
      avatar: "https://i.ibb.co/tTqVDXyH/np-user-1.jpg",
      createdAt: "May 12, 2025",
      title: "Top 5 Political Scandals of the Last Decade",
      image: "https://i.ibb.co/rGNQJRMC/user-4-p.jpg",
      content: "Scandals shape public opinion and policy. We look back at the most shocking moments that rocked the political world.",
    },
  ],
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const { profile } = useUserProfile();
  const [hiddenPosts, setHiddenPosts] = useState([]);
  const [sections, setSections] = useState({
    customFeed: false,
    recent: false,
    communities: false,
  });

  const [followStates, setFollowStates] = useState({});
  const [likeStates, setLikeStates] = useState(() => {
  const initial = {};
  postsByTab.home.forEach(post => {
    initial[post.id] = {
      liked: false,
      count: Math.floor(Math.random() * 400) + 100, // Random 100–500
    };
  });
  return initial;
});

  // ✅ New state for search query
  const [searchQuery, setSearchQuery] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleFollow = (postId) => {
  setFollowStates(prev => ({
    ...prev,
    [postId]: !prev[postId],
  }));
};

const toggleLike = (postId) => {
  setLikeStates(prev => {
    const liked = !prev[postId]?.liked;
    const count = liked ? prev[postId].count + 1 : prev[postId].count - 1;
    return {
      ...prev,
      [postId]: { liked, count }
    };
  });
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
          className="text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Search */}
      <div className="lg:hidden px-4 py-3 bg-black border-b border-gray-700 relative">
        <input
          type="text"
          placeholder="Search post titles"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
        />
        {searchQuery && (
          <div className="absolute top-full left-0 right-0 bg-black border border-gray-700 mt-1 rounded shadow-lg z-50">
            {postsByTab[activeTab]
              .filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post) => (
                <div
                  key={post.id}
                  onClick={() => {
                    setSearchQuery("");
                    navigate(`/post-comment/${post.id}`);
                  }}
                  className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                >
                  {post.title}
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Desktop Topbar */}
      <div className="hidden lg:flex items-center justify-between px-6 py-4 bg-black border-b border-gray-700 fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-3">
          <img
            src="https://i.ibb.co/ZzKLndmq/st-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164908340.webp"
            alt="logo"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-red-600 font-bold text-lg tracking-widest">
            SPHERE <span className="text-white">TALK</span>
          </span>
        </div>
        <div className="flex-1 mx-10 max-w-[600px] relative">
          <input
            type="text"
            placeholder="Search post titles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
          />
          {searchQuery && (
            <div className="absolute top-full left-0 right-0 bg-black border border-gray-700 mt-1 rounded shadow-lg z-50">
              {postsByTab[activeTab]
                .filter((post) =>
                  post.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => {
                      setSearchQuery("");
                      navigate(`/post-comment/${post.id}`);
                    }}
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-white"
                  >
                    {post.title}
                  </div>
                ))}
            </div>
          )}
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
                      <span>AnimeCoon</span>
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
        <main className="flex-1 p-4 lg:p-8 bg-[#111] min-h-screen">
          <div className="flex flex-col lg:flex-row gap-6">
            <section className="flex-1 space-y-6">

              {/* Highlight Section */}
                <div className="mt-8 px-4 w-screen lg:w-auto">
                  <p className="text-sm text-gray-400 mb-2"></p>
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


              {postsByTab[activeTab]
              .filter((post) => !hiddenPosts.includes(post.id)) // ✅ skip hidden ones
              .map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-900 p-4 rounded-xl shadow-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.avatar}
                        className="w-10 h-10 rounded-full object-cover"
                        alt=""
                      />
                      <p className="font-semibold">{post.username}</p>
                    </div>
                    <div className="text-sm text-gray-400">
                      <button
                        onClick={() => toggleFollow(post.id)}
                        className={`ml-2 px-4 py-2 rounded font-semibold ${
                          followStates[post.id] ? "bg-gray-700 text-white" : "bg-white text-red-500"
                        }`}
                      >
                        {followStates[post.id] ? "Following" : "Follow"}
                      </button>

                      <button onClick={() => setSelectedPost(post)} className="bg-white text-red-500 font-semibold px-4 py-2 rounded hover:bg-gray-300">...</button>
                      </div>
                    
                  </div>
                  <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                  <img
                    src={post.image}
                    className="w-full aspect-video rounded-lg object-cover mb-2"
                    alt=""
                  />
                  <p className="text-sm text-gray-300">{post.content}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                    <div>
                      <button
                              onClick={() => navigate(`/post-comment/${post.id}`)} // Navigate to PostComment page
                              className="ml-auto px-4 py-1 border  border-gray-500 rounded hover:bg-gray-800">
                      💬
                    </button>
                    </div>
                    <div>
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`ml-auto px-4 py-1 border rounded ${
                          likeStates[post.id]?.liked ? "border-red-500 text-red-400" : "border-gray-500 text-gray-400"
                        } hover:bg-gray-800`}
                      >
                        ❤️ {likeStates[post.id]?.count ?? 0}
                      </button>

                    </div>
                    <button className="ml-auto px-4 py-1 border border-gray-500 rounded hover:bg-gray-800">
                      SHARE
                    </button>
                  </div>
                </div>
              ))}
            </section>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-[280px] space-y-4 lg:sticky lg:top-[88px] h-max">
              <h3 className="text-white text-lg font-bold border-b border-gray-700 pb-2">
                NEW POSTS
              </h3>
              {[
                {
                  title: "Alas-Dos News Report",
                  desc: "Canadians don’t want PH citizenship.",
                },
                {
                  title: "English Class",
                  desc: "Improve your English Grammar in One Hour.",
                },
                {
                  title: "BenYour",
                  desc: "More than a wallpaper — freedom frozen in motion.",
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
                >
                  <img
                    src={profile.profileImage}
                    className="w-12 h-12 rounded object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-sm">{post.title}</p>
                    <p className="text-xs text-gray-400">{post.desc}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </main>
      </div>

      {/* 🔁 Modals */}
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
      {selectedPost && (
        <PostOptionsModal
          onClose={() => setSelectedPost(null)}
          onHide={() => {
            setHiddenPosts((prev) => [...prev, selectedPost.id]);
            setSelectedPost(null);
          }}
          onReport={() => {
            setSelectedPost(null);
            setShowReportModal(true);
          }}
        />
      )}
      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onSubmit={(reasons) => {
            console.log('Reported reasons:', reasons);
            setShowReportModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Dashboard;
