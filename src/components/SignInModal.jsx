import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← ADD THIS

function SignInModal({ onClose, switchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // For login errors
  const [successMessage, setSuccessMessage] = useState(""); // For login success
  const [methodError, setMethodError] = useState(""); // For third-party method errors
  const navigate = useNavigate(); // ← INIT NAVIGATE

  const handleLogin = async () => {
  try {
    const res = await fetch("https://68281daf6b7628c5291239e4.mockapi.io/api/forum/users");
    const users = await res.json();

    const user = users.find(
      (u) => u.username === email && u.password === password
    );

    if (!user) {
      setErrorMessage("❌ Invalid username or password");
      setSuccessMessage("");
      return;
    }

    if (user.role === "Admin") {
      setSuccessMessage(`✅ Welcome Admin ${user.username}`);
      setErrorMessage("");
      onClose();
      navigate("/AdminDashboard");
      return;
    } else if (user.role === "User") {
      setSuccessMessage(`✅ Welcome ${user.username}`);
      setErrorMessage("");
      onClose();
      navigate("/Dashboard");
      return;
    } else {
      setErrorMessage("⛔ Unknown role. Please contact support.");
      setSuccessMessage("");
    }
  } catch (err) {
    console.error(err);
    setErrorMessage("❌ Something went wrong while logging in.");
    setSuccessMessage("");
  }
};


  // Method error when clicking on Phone, Google, or Apple sign-in buttons
  const handleMethodError = () => {
    setMethodError("⚠️ This sign-in method is currently unavailable.");

    // Automatically hide the error message after 3 seconds
    setTimeout(() => {
      setMethodError(""); // Clear the error after 3 seconds
    }, 3000);
  };
  const handleHomeClick = () => {
    navigate("forgot-password");  // Navigate to Dashboard route
  };
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#cfcfcf] w-[426px] h-[566px] rounded-lg p-6 text-black relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute text-red-600 top-4 right-4 w-10 h-10 rounded-full bg-gray-200 font-bold text-xl flex items-center justify-center"
        >
          ×
        </button>

        <h2 className="text-center text-red-600 text-lg font-bold tracking-wider mb-6">SIGN IN</h2>

        <div className="space-y-3 mb-4">
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full text-red-600 flex items-center justify-center border border-black py-2 rounded-md bg-white"
          >
            📱 CONTINUE WITH PHONE
          </button>
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full text-red-600 flex items-center justify-center border border-black py-2 rounded-md bg-white"
          >
            <img
              src="https://i.ibb.co/gZH4yN0m/google.png" alt="google"
              className="w-5 h-5 mr-2"
            />
            CONTINUE WITH GOOGLE
          </button>
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full text-red-600 flex items-center justify-center border border-black py-2 rounded-md bg-white"
          >
            <img
            src="https://i.ibb.co/pBQn1sZr/apple-1.png" alt="apple  "
              className="w-5 h-5 mr-2"
            />
            CONTINUE WITH APPLE
          </button>
        </div>

        {/* Display error message if method is unavailable */}
        {methodError && <div className="text-red-600 text-xs mb-4">{methodError}</div>}

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-black" />
          <span className="text-red-600 mx-3 text-sm">OR</span>
          <div className="flex-grow border-t border-black" />
        </div>

        <div className="space-y-3 mb-2">
          <input
            type="text"
            placeholder="USERNAME"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded-md bg-white placeholder-black"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded-md bg-white placeholder-black"
          />
        </div>

        <div 
          onClick={handleHomeClick}
         className="text-right text-red-600 text-xs mb-4 underline cursor-pointer">
          FORGOT PASSWORD
        </div>

        {/* Display error or success message */}
        {errorMessage && (
          <div className="text-red-600 text-xs mb-4">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="text-green-600 text-xs mb-4">{successMessage}</div>
        )}

        <button
          onClick={handleLogin}
          className="w-full bg-black text-red-600 py-2 rounded-md font-semibold hover:bg-[#DF2531] transition"
        >
          LOGIN
        </button>

        <div className="mt-4 text-center text-xs text-black">
          DON'T HAVE ACCOUNT?
          <span
            onClick={() => {
              onClose(); // Close the Sign In modal
              switchToSignUp(); // Show the Sign Up modal
            }}
            className="text-[#DF2531] font-semibold cursor-pointer ml-1 hover:underline"
          >
            SIGN UP
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
