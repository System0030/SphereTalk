import React, { useState } from "react";
import SignInModal from "./SignInModal";
import SignUp2Modal from "./SignUp2Modal";  // Import SignUp2Modal

function SignUpModal({ onClose, switchToSignIn }) {
  const [showSignUp2, setShowSignUp2] = useState(false); // For Show SignUp2Modal
  const [email, setEmail] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [countdown, setCountdown] = useState(0); // For countdown timer
  const [methodError, setMethodError] = useState(""); // For unavailable sign-up methods

  // Predefined dummy emails
  const dummyEmails = [
    "user@gmail.com",
    "admin@gmail.com",
    "User@gmail.com",
    "Admin@gmail.com",
    "User1@gmail.com",
    "user1@gmail.com",
    "User0@gmail.com",
    "user0@gmail.com"
  ];

  const handleSignUp = async () => {
    // If checkbox is not checked, show error message
    if (!checkboxChecked) {
      setErrorMessage("⚠️ Please agree to the terms and conditions.");
      return;
    }
    setErrorMessage(""); // Clear error message if checkbox is checked

    // Step 1: Check if email contains '@gmail.com'
    if (!email.includes('@gmail.com')) {
      setEmailError("⚠️ Only @gmail.com email addresses are allowed.");
      return;
    }
    setEmailError(""); // Clear email error message if it's valid

    // Step 2: Check if email is in the dummy emails list
    const exists = dummyEmails.includes(email);
    if (exists) {
      setEmailError("⚠️ Email/username already registered.");
      return;
    }

    // Step 3: Simulate account creation (since we're just using a dummy list)
    const newUser = {
      username: email,
      password: "tempPassword", // Temporary password for testing
      role: "User"
    };

    console.log("New user created:", newUser); // Simulate user creation (for testing)

    // Step 4: Show success message
    setSuccessMessage("✅ Email Verified successfully! You can Proceed now");
    setErrorMessage(""); // Clear any existing error messages

    // Step 5: Start the countdown timer with a random delay (between 3 and 5 seconds)
    const randomDelay = Math.floor(Math.random() * 2000) + 3000; // Random delay between 3000ms and 5000ms
    setCountdown(Math.floor(randomDelay / 1000)); // Convert milliseconds to seconds (whole number)

    // Countdown logic
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          // Close the modal and switch to SignUp2Modal after countdown reaches 0
          setShowSignUp2(true); // Switch to SignUp2Modal
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Method error when clicking on Phone, Google, or Apple sign-up buttons
  const handleMethodError = () => {
    setMethodError("⚠️ This sign-up method is currently unavailable.");

    // Automatically hide the error message after 3 seconds
    setTimeout(() => {
      setMethodError(""); // Clear the error after 3 seconds
    }, 5000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#cfcfcf] w-[426px] h-[566px] rounded-lg p-6 text-black relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-600 w-8 h-8 rounded-full bg-white font-bold text-xl flex items-center justify-center"
        >
          ×
        </button>

        <h2 className="text-center text-black text-lg font-bold tracking-widest mb-6">SIGN UP</h2>

        <div className="space-y-3 mb-6">
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full flex items-center text-red-600 justify-center gap-2 border border-black py-2 rounded-md bg-white"
          >
            📱 <span>CONTINUE WITH PHONE</span>
          </button>
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full flex items-center text-red-600 justify-center gap-2 border border-black py-2 rounded-md bg-white"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              className="w-5 h-5"
            />
            <span>CONTINUE WITH GOOGLE</span>
          </button>
          <button 
            onClick={handleMethodError} // Trigger error when clicked
            className="w-full flex items-center text-red-600 justify-center gap-2 border border-black py-2 rounded-md bg-white"
          >
             <span>CONTINUE WITH APPLE</span>
          </button>
        </div>

        {/* Display error message if method is unavailable */}
        {methodError && <div className="text-red-600 text-xs mb-4">{methodError}</div>}

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-black" />
          <span className="text-black mx-3 text-sm tracking-wider">OR</span>
          <div className="flex-grow border-t border-black" />
        </div>

        <div className="space-y-3 mb-2">
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded-md bg-white placeholder-black"
          />
          {/* Show email error message */}
          {emailError && <div className="text-red-600 text-xs mt-1">{emailError}</div>}
        </div>

        {/* Checkbox validation */}
        <div className="text-left text-xs text-black mt-2 mb-4">
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={() => setCheckboxChecked(!checkboxChecked)}
            className="mr-2"
          />
          <label>
            I agree to get emails about cool stuff on <strong>SPHERE TALK</strong>
          </label>
        </div>

        {errorMessage && (
          <div className="text-red-600 text-xs mb-4">{errorMessage}</div>
        )}

        {successMessage && (
          <div className="text-green-600 text-xs mb-4">{successMessage}</div>
        )}

        <button
          onClick={handleSignUp}
          className="w-full bg-black text-red-600 py-2 rounded-md font-semibold hover:bg-[#DF2531] transition"
        >
          CONTINUE
        </button>

        {/* Countdown Timer Display */}
        {countdown > 0 && (
          <div className="text-center text-xs text-black mt-4">
            The form will close in {countdown} second{countdown > 1 ? "s" : ""}...
          </div>
        )}

        <div className="mt-4 text-center text-xs text-black">
          ALREADY A SPHERES ACCOUNT?
          <span 
            onClick={() => {
              onClose(); // Close Sign Up modal
              switchToSignIn(); // Open Sign In modal
            }}
            className="text-[#DF2531] font-semibold cursor-pointer ml-1 hover:underline"
          >
            SIGN IN
          </span>
        </div>
      </div>

      {/* Show SignUp2Modal */}
      {showSignUp2 && <SignUp2Modal onClose={() => setShowSignUp2(false)} />}
    </div>
  );
}

export default SignUpModal;
