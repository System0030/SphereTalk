import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileModal from "../../components/ProfileModal";
import AdminActivityLog from "./AdminActivityLog"; // adjust path if needed


const Template = () => {
  const navigate = useNavigate();


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
            
            src="https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg"
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
                onClick={() => navigate("/AdminDashboard")}
                className="text-red-600 flex items-center gap-2 cursor-pointer"
              >
                <img className="w-4 h-4 rounded-b-full"
                src="https://i.ibb.co/bjrrrx2B/Dashboard.png" 
                alt="Dashboard"
                />
                <span>DASHBOARD</span>
              </div>
              <div
                onClick={() => navigate("/AdminUser")}
                className="text-red-600 flex items-center gap-2 cursor-pointer"
              >
                <img className="w-4 h-4 rounded-b-full"
                src="https://i.ibb.co/3mYdYW4s/User.png"
                alt="User" 
                />
                <span>USER MANAGEMENT</span>
              </div>
              <div
                onClick={() => navigate("/AdminActivity")}
                className="text-red-600 flex items-center gap-2 cursor-pointer"
              >
                <img className="w-4 h-4 rounded-b-full"
                src="https://i.ibb.co/vvsRKmT5/Activity.png" 
                alt="Activity"
                />
                <span>ACTIVITY LOG</span>
              </div>
              <div
                onClick={() => navigate("/AdminReport")}
                className="text-red-600 flex items-center gap-2 cursor-pointer"
              >
                <img className="w-4 h-4 rounded-b-full"
                src="https://i.ibb.co/0RxpbPp9/Inbox.png"
                alt="INBOX" 
                />
                <span>INBOX</span>
              </div>

              <hr className="border-gray-600" />


              <button 
              onClick={() => navigate("/")} 
              className="text-red-600 mt-4 font-bold text-center w-full">
                L O G O U T</button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="box-border w-[390px] sm:w-[1080px] flex-1 p-4 lg:p-8 bg-[#111] min-h-screen">
          <div className="w-full sm:w-[150%] lg:w-[100%] flex flex-col lg:flex-row gap-6">
           
              {/* SPECIAL AREA FOR CONTENT */}
              <AdminActivityLog />
          </div>
        </main>
      </div>
      {/* Modal Profile */}		
      {isModalOpen && <ProfileModal onClose={toggleModal} />}
    </div>
  );
};

export default Template;
