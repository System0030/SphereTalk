import React, { useState } from "react";
import SignInModal from "./SignInModal"; // Import SignInModal here

function SignUp2Modal({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);  // State for showing SignInModal

  const handleSignUp = () => {
    if (password !== verifyPassword) {
      setErrorMessage("❌ Passwords do not match.");
      return;
    }

    if (username && password && verifyPassword) {
      setSuccessMessage("✅ Sign up successful! Please log in.");
      setErrorMessage("");
      setTimeout(() => {
        onClose(); // Close SignUp2Modal after successful sign-up
        setShowSignIn(true); // Show SignInModal
      }, 2000);
    } else {
      setErrorMessage("❌ Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white w-[400px] h-[500px] rounded-lg p-6 text-black relative shadow-xl z-60">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 w-8 h-8 rounded-full bg-gray-200 font-bold text-xl flex items-center justify-center hover:bg-gray-300 transition"
        >
          ×
        </button>

        <h2 className="text-center text-black text-2xl font-bold tracking-wide mb-6">SIGN UP</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input
            type="password"
            placeholder="Verify Password"
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        {errorMessage && <div className="text-red-600 text-xs mt-2">{errorMessage}</div>}
        {successMessage && <div className="text-green-600 text-xs mt-2">{successMessage}</div>}

        <button
          onClick={handleSignUp}
          className="w-full bg-black text-red-600 py-3 mt-6 rounded-md font-semibold hover:bg-[#DF2531] transition"
        >
          SIGN UP
        </button>
      </div>

      {/* Show SignInModal if showSignIn is true */}
      {showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
    </div>
  );
}

export default SignUp2Modal;
