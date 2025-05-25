import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../../components/ProfileModal";
import { usePostContext } from '../../context/PostContext';


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
  ],
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState({
    customFeed: false,
    recent: false,
    communities: false,
  });
    const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const { addPost } = usePostContext(); // use context

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!title) {
    setError('Title is required');
    return;
  }

  const newPost = {
    id: Date.now(),
    username: "AnimeCoon",
    avatar: "https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg",
    createdAt: new Date().toLocaleDateString(),
    title,
    image,
    content,
    link,
  };

  addPost(newPost);        // ✅ Save to context
  navigate('/AdminProfile');    // ✅ Redirect to profile page
};

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleExploreClick = () => {
    navigate('/explore');
  };

  const handlePopularClick = () => {
    navigate('/popular');
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
          <button
            onClick={() => navigate("/create-post")}
            className="bg-white text-red-500 font-semibold px-4 py-2 rounded hover:bg-gray-300"
          >
            Create Post
          </button>
          <button className="text-white text-xl">🔔</button>
          <img
            src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg"
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
                onClick={() => navigate("/AdminDashboard")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🏠 HOME
              </div>
              <div
                onClick={() => navigate("/AdminPopular")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🔥 POPULAR
              </div>
              <div
                onClick={() => navigate("/AdminExplore")}
                className="text-red-500 flex items-center gap-2 cursor-pointer"
              >
                🧱 EXPLORE
              </div>
              <hr className="border-gray-600" />


              <div className="text-red-600 mt-4 font-bold text-center">ABOUT</div>

              <div onClick={() => navigate("/AdminUser")} className="text-red-600 mt-4 font-bold text-center">A D M I N</div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 bg-[#111] min-h-screen">
          <div className="flex flex-col lg:flex-row gap-6">
            <section className="flex-1 space-y-6">
              <div className="bg-gray-900 p-4 rounded-xl shadow-md">
                <h2 className="text-lg font-bold text-white mb-2">Create Post</h2>
                {/* Create Post Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 max-w-xl mx-auto bg-gray-900 p-6 rounded-lg shadow-xl"
                >
                  {error && <p className="text-red-500">{error}</p>}
                  <div>
                    <label htmlFor="title" className="text-white">Title *</label>
                    <input
                      id="title"
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Enter post title"
                    />
                  </div>
                  <div>
                    <label htmlFor="link" className="text-white">Link (optional)</label>
                    <input
                      id="link"
                      type="text"
                      value={link}
                      onChange={(e) => setLink(e.target.value)}
                      className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Enter link"
                    />
                  </div>
                  <div>
                    <label htmlFor="image" className="text-white">Upload Image (optional)</label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full mt-2 text-sm text-white bg-gray-700 rounded-lg file:py-2 file:px-4 file:bg-red-600 file:text-white"
                    />
                    {image && <img src={image} alt="Selected Image" className="mt-4 w-full h-48 object-cover rounded-lg shadow-md" />}
                  </div>
                  <div>
                    <label htmlFor="content" className="text-white">Content (optional)</label>
                    <textarea
                      id="content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full mt-2 p-4 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="Enter post content"
                      rows="4"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Create Post
                  </button>
                </form>
              </div>
            </section>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-[280px] space-y-4 lg:sticky lg:top-[88px] h-max">
              <h3 className="text-white text-lg font-bold border-b border-gray-700 pb-2">
                NEW POSTS
              </h3>
              {postsByTab[activeTab].slice(0, 3).map((post, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-gray-800 p-2 rounded-lg hover:bg-gray-700"
                >
                  <img
                    src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg"
                    className="w-12 h-12 rounded object-cover"
                    alt=""
                  />
                  <div>
                    <p className="font-bold text-sm">{post.title}</p>
                    <p className="text-xs text-gray-400">{post.content}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </main>
      </div>
      {/* Modal Profile */}		
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};

export default Dashboard;
