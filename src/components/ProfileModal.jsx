import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileModal = ({ onClose }) => {
  const navigate = useNavigate(); // ✅ Correct placement

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-black w-[80%] sm:w-[300px] p-4 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <img
            src="https://i.ibb.co/ZzKLndmq/st-logo-letter-monogram-slash-modern-designs-template-black-color-white-background-164908340.webp"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white text-xs">JackMan6901</span>
          <button
            onClick={onClose}
            className="text-red-600 text-xl rounded-b-xs"
          >
            X
          </button>
        </div>

        <div className="mt-1 space-y-1">
          <button
            onClick={() => navigate("/profile")}
            className="w-full text-center text-white p-2 border-b border-red-600 hover:bg-red-600"
          >
            View Profile
          </button>
          <button
            onClick={() => navigate("/Settings")}
            className="w-full text-center text-white p-2 border-b border-red-600 hover:bg-red-600"
          >
            Settings
          </button>
          <button
            onClick={() => navigate("/")}
            className="w-full text-center text-red-600 p-2 hover:bg-red-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
