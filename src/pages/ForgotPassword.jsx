import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function ForgetPassword() {
  const [step, setStep] = useState(1); // Step 1: Forgot Password, Step 2: Verification, Step 3: Reset Password
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [countdown, setCountdown] = useState(5); // Countdown before redirect
  const [emailVerified, setEmailVerified] = useState(false); // State to track email verification
  const [isPasswordReset, setIsPasswordReset] = useState(false); // State to track if password is reset
  const navigate = useNavigate();


  // Handle Email Submit for Forget Password
  const handleSubmitEmail = (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.endsWith(".com")) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
      setStep(2); // Move to the next step (Verification)
    }
  };

  // Handle Code Verification
  const handleVerifyCode = () => {
    // Simulating successful verification (in real-world use, this should match a real code)
    setEmailVerified(true);
    setSuccessMessage("✅ Email verified! You can now reset your password.");
    
    // Wait 3-5 seconds before proceeding to the reset password step
    setTimeout(() => {
      setStep(3); // Move to the next step (Reset Password)
    }, 3000); // Delay of 3 seconds
  };

  // Handle Password Reset
  const handleResetPassword = () => {
    if (newPassword !== verifyPassword) {
      setErrorMessage("❌ Passwords do not match.");
      return;
    }
    setSuccessMessage("✅ Password has been successfully reset.");
    setErrorMessage("");
    setIsPasswordReset(true); // Set state to true after password reset
  };

  // Countdown before redirect to Sign In after successful reset
  useEffect(() => {
    if (isPasswordReset) {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            navigate("/"); // Redirect after timer finishes
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPasswordReset, navigate]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-red-500 via-red-700 to-black p-4 animate-bg-gradient">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform transition-transform duration-500 ease-out scale-95 animate-slide-up">
        {step === 1 && (
          <div>
            <h2 className="text-center text-2xl font-bold text-red-600">FORGOT PASSWORD</h2>
            <div className="mt-6 space-y-6">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-black w-full px-4 py-3 border border-red-600 rounded-md"
              />
              {errorMessage && <div className="text-red-600 text-xs">{errorMessage}</div>}
              <button
                onClick={handleSubmitEmail}
                className="w-full bg-red-600 text-red-600 py-3 rounded-md font-semibold hover:bg-red-700"
              >
                Send Verification Code
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-center text-2xl font-bold text-red-600">VERIFICATION CODE</h2>
            <div className="mt-6 space-y-6">
              <input
                type="text"
                placeholder="Enter the verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="text-black w-full px-4 py-3 border border-red-600 rounded-md"
              />
              {emailVerified && <div className="text-green-600 text-xs">Email verified! You can now reset your password.</div>}
              {errorMessage && <div className="text-red-600 text-xs">{errorMessage}</div>}
              <button
                onClick={handleVerifyCode}
                className="w-full bg-red-600 text-red-600 py-3 rounded-md font-semibold hover:bg-red-700"
              >
                VERIFY CODE
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-center text-2xl font-bold text-red-600">RESET PASSWORD</h2>
            <div className="mt-6 space-y-6">
              <input
                type="password"
                placeholder="NEW PASSWORD"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="text-black w-full px-4 py-3 border border-red-600 rounded-md"
              />
              <input
                type="password"
                placeholder="VERIFY PASSWORD"
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
                className="text-black w-full px-4 py-3 border border-red-600 rounded-md"
              />
              {errorMessage && <div className="text-red-600 text-xs">{errorMessage}</div>}
              {successMessage && <div className="text-green-600 text-xs">{successMessage}</div>}
              <button
                onClick={handleResetPassword}
                className="w-full bg-red-600 text-white py-3 rounded-md font-semibold hover:bg-red-700"
              >
                SAVE PASSWORD
              </button>
            </div>

            {isPasswordReset && (
              <div className="text-center text-xs text-black mt-4">
                The form will close in {countdown} second{countdown > 1 ? "s" : ""}...
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgetPassword;
