import React, { useState } from "react";
import SignInModal from "../components/SignInModal";
import SignUpModal from "../components/SignUpModal";
import { useUserProfile } from "../context/UserProfileContext";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { profile } = useUserProfile();



  const categories = [
    {
      label: "ART",
      icon: "https://i.ibb.co/9MMRmB7/Digital-Painting-Hub.jpg",
      
      onClick: () => setShowSignIn(true)
    },
    {
      label: "GAMES",
      icon: "https://i.ibb.co/6RGHCj9p/Call-of-Duty-MW.png",
      onClick: () => setShowSignIn(true)
    },
    {
      label: "EDUCATION",
      icon: "https://i.ibb.co/JjWNJ9b9/Digital-Marketing-Mastery.png",
      onClick: () => setShowSignIn(true)
    },
    {
      label: "ANIME & MANGA",
      icon: "https://i.ibb.co/j9pDBNV9/One-Piece-Crew.webp",
      onClick: () => setShowSignIn(true)
    },
    {
      label: "NEWS & POLITICS",
      icon: "https://i.ibb.co/7Jz9qwSD/World-News-Daily.jpg",
      onClick: () => setShowSignIn(true)
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#111] text-white font-sans overflow-x-hidden relative">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-black text-white w-full lg:static relative z-50">
        <img
          src="https://i.ibb.co/sJKjrR8F/Screenshot-2025-05-13-234244.png"
          alt="Logo"
          className="w-8 h-8 min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] object-cover rounded-full"
        />
        <button
          className="lg:hidden block text-red-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav
          className={` justify-center space-x-6 text-sm lg:flex ${
            menuOpen
              ? "block absolute top-full left-1 w-full bg-black p-4"
              : "hidden"
          }`}
        >
         
          <div
            onClick={() => setShowSignIn(true)}
            className=" block py-2 lg:inline mb-1 text-center  text-[#FF0505] hover:underline"
          >
            SIGN IN
          </div>
          <div
            onClick={() => setShowSignUp(true)}
            className=" block py-2 lg:inline mb-1 text-center  text-[#FF0505] hover:underline"
          >
            SIGN UP
          </div>
           <div
            onClick={() => console.log("About clicked")} // Or implement real action
            className=" block py-2 lg:inline mb-1 text-center  text-[#FF0505] hover:underline"
          >
            ABOUT
          </div>
          <div>

          {/* Noting Here */}

          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-6 px-4 lg:px-8 py-6 w-full max-w-[1600px] mx-auto">
        {/* Left Sidebar with Categories */}
        <aside className="w-full lg:w-1/5">
          {/* Toggle for mobile */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="w-full bg-white text-red-600  py-2 px-4 rounded-md border border-gray-300"
            >
              {categoryOpen ? "Hide Categories" : "Show Categories"}
            </button>
          </div>

          {/* Categories list */}
          <div
            className={`flex flex-col space-y-4 transition-all duration-300 overflow-hidden
              ${categoryOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
              lg:max-h-none lg:opacity-100 lg:block`}
          >
            {categories.map(({ label, icon, onClick }) => (
              <button
                key={label}
                onClick={onClick}
                className="bg-white text-red-600 rounded-md px-4 py-2 text-left hover:bg-gray-200 border border-gray-300 flex items-center gap-2 w-full max-w-xs truncate"
              >
                <img
                  src={icon}
                  alt={label}
                  className="w-6 h-6 object-cover rounded-full"
                />
                {label}
              </button>
            ))}
          </div>
        </aside>

        {/* Center Content */}
        <section className="bg-gray-900 rounded-xl p-6 w-full lg:w-3/5">
          <div className="flex items-center gap-3 mb-2">
            <img
              src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="text-sm">
              <p className="font-semibold">AnimeCoon</p>
            </div>
          </div>
          <h2 className="text-lg font-semibold mb-4">
            2025 Game that Keep Rising its Popularity
          </h2>
          <div className="w-full aspect-square sm:aspect-[3/2] rounded-xl overflow-hidden">
            <img
              src="https://i.ibb.co/6RGHCj9p/Call-of-Duty-MW.png"
              alt="Story Preview"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center mt-4 gap-4 text-sm text-gray-300">
            
            
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/5 bg-gray-900 rounded-xl p-4">
          <h3 className="text-sm font-semibold text-[#FF0505] mb-4">
            POPULAR COMMUNITIES
          </h3>
          <ul className="space-y-3 text-sm text-white">
            {[
              "AnimeCoon",
              "Dads Code",
              "Call of Duty - Leaks",
              "Digital Art Class",
              "BestWriter",
              "Alba One News Report",
            ].map((community) => (
              <li
                key={community}
                className="flex items-center gap-2 hover:text-[#FF0505] cursor-pointer"
              >
                <img
                  src="https://i.ibb.co/sJKjrR8F/Screenshot-2025-05-13-234244.png"
                  alt="icon"
                  className="w-6 h-6 object-cover rounded-full"
                />
                {community}
              </li>
            ))}
          </ul>
        </aside>
      </main>

      {/* Sign In Modal */}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
        {/* Sign In Modal */}
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
   
    
  
}

export default App;
