import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../components/ProfileModal";
import { usePostContext } from "../context/PostContext";
import { useUserProfile } from "../context/UserProfileContext";

const ThemeDesign = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const { posts, editPost, deletePost } = usePostContext();
  const [editingPostId, setEditingPostId] = useState(null);
  const [editValues, setEditValues] = useState({
  title: '',
  content: '',
  link: '',
  image: ''
});

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState({
    customFeed: false,
    recent: false,
    communities: false,
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleSection = (key) => {
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));
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

      {/* Mobile Search */}
      <div className="lg:hidden px-4 py-3 bg-black border-b border-gray-700">
        
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
        <div className="flex-1 mx-10 max-w sm:full">
          
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white text-xl">🔔</button>
          <img
            onClick={toggleModal}
            src={profile.profileImage}
            alt="Profile"
            className="w-8 h-8 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Layout Container */}
      <div
        className={`flex flex-1 pt-0 ${mobileMenuOpen ? "flex-col" : "flex-col lg:flex-row pt-0 lg:pt-[88px]"} w-full`}
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
        <main className="box-border w-[390px] sm:w-[1080px] flex-1 p-4 lg:p-8 bg-[#111] min-h-screen">
          <div className="w-full sm:w-[150%] lg:w-[100%] flex flex-col lg:flex-row gap-6">
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
                    <h2 className="text-xl font-bold text-white">{profile.displayName}</h2>
                    <p className="text-sm text-gray-400">@jackman0691</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">Post</h3>
                  {posts.length === 0 ? (
                    <p className="text-gray-400 mt-4">{profile.displayName} hasn’t posted yet.</p>
                  ) : (
                    <div className="space-y-4 mt-4">
                      {posts.map((post) => (
                        <div key={post.id} className="bg-gray-800 p-4 rounded-lg shadow">
                          {editingPostId === post.id ? (
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                editPost({ ...post, ...editValues });
                                setEditingPostId(null);
                              }}
                              className="space-y-2"
                            >
                              <input
                                type="text"
                                value={editValues.title}
                                onChange={(e) => setEditValues({ ...editValues, title: e.target.value })}
                                className="w-full p-2 rounded bg-gray-700 text-white"
                                placeholder="Edit title"
                              />
                              {/* Image Upload */}
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => {
                                    const file = e.target.files[0];
                                    if (file) {
                                      const imageUrl = URL.createObjectURL(file);
                                      setEditValues({ ...editValues, image: imageUrl });
                                    }
                                  }}
                                  className="w-full text-sm text-white mt-2 file:py-2 file:px-4 file:bg-red-600 file:text-white"
                                />

                                {/* Image Preview */}
                                {editValues.image && (
                                  <img
                                    src={editValues.image}
                                    alt="preview"
                                    className="mt-2 w-full h-48 object-cover rounded-md shadow"
                                  />
                                )}
                              <textarea
                                value={editValues.content}
                                onChange={(e) => setEditValues({ ...editValues, content: e.target.value })}
                                className="w-full p-2 rounded bg-gray-700 text-white"
                                placeholder="Edit content"
                              />

                              <input
                                type="text"
                                value={editValues.link}
                                onChange={(e) => setEditValues({ ...editValues, link: e.target.value })}
                                className="w-full p-2 rounded bg-gray-700 text-white"
                                placeholder="Edit link"
                              />
                              <div className="flex gap-2 mt-2">
                                <button type="submit" className="bg-red-600 px-4 py-1 rounded text-white">Save</button>
                                <button type="button" onClick={() => setEditingPostId(null)} className="text-gray-400">Cancel</button>
                                <button type="button" onClick={() => {deletePost(post.id); setEditingPostId(null); }}className="bg-red-700 px-4 py-1 rounded text-white">Delete</button>
                              </div>
                            </form>
                          ) : (
                            <>
                              <div className="flex justify-between items-start">
                                <h4 className="text-white text-lg font-semibold">{post.title}</h4>
                                <button
                                  onClick={() => {
                                    setEditingPostId(post.id);
                                    setEditValues({
                                      title: post.title,
                                      content: post.content,
                                      link: post.link || '',
                                      image: post.image || '' // ✅ Add this
                                    });
                                  }}
                                  className="text-sm text-red-400 hover:underline"
                                >
                                  Edit
                                </button>
                                
                              </div>

                              {post.image && (
                                <img
                                  src={post.image}
                                  alt="post"
                                  className="mt-2 rounded-lg w-full max-h-64 object-cover"
                                />
                              )}
                              {post.content && <p className="text-gray-300 mt-2">{post.content}</p>}
                              {post.link && (
                                <a
                                  href={post.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-red-400 underline block mt-2"
                                >
                                  Visit Link 🔗
                                </a>
                              )}
                              <p className="text-gray-500 text-sm mt-1">{post.createdAt}</p>
                            </>
                          )}
                        </div>
                      ))}

                    </div>
                    
                  )}
                  
                </div>
                
                <button
                  onClick={() => navigate("/create-post")}
                  className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500"
                >
                  CREATE POST
                </button>
              </div>
            </section>

            {/* Right Sidebar: Account Info */}
            <aside className="w-full lg:w-[280px] bg-gray-900 p-6 rounded-xl shadow-md">
              <img
                src={profile.banner}
                alt="Account Icon"
                className="w-full h-15"
              />
              <h3 className="text-xl font-semibold text-white">Account Details</h3>
              <div className="mt-4 text-gray-400">
                {profile.description}
                <br />
                <br />
                <p>Account Status: Active</p>
                <p>Account created: May 10, 2023</p>
              </div>

              {/* Settings Section */}
              <div className="mt-6">
                <hr className="border-gray-600 mt-2" />
                <br />
                <h4 className="text-lg font-semibold text-gray-300">Settings</h4>
                  <button
                  onClick={() => navigate("/Settings")}
                  className="mt-2 text-red-600 hover:text-red-500"
                >
                  Edit Profile
                </button>
                
              </div>

              {/* Share Profile Button */}
              <div className="mt-6 text-center">
                <hr className="border-gray-600 mt-2" />
                <br />
                <div>{profile.socialLink}</div>
                <br />
                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-500">
                  <img
                    src="https://i.ibb.co/n817HYBj/share.png" alt="share"
                    className="mr-2 w-5 h-5 inline-block"
                  />
                  SHARE PROFILE
                </button>
              </div>
            </aside>
          </div>
        </main>
      </div>
      {/* Modal Profile */}		
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};
export default ThemeDesign;