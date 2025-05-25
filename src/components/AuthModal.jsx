import React, { useState } from "react";

function AuthModal({ onClose }) {
  const [mode, setMode] = useState("signIn"); // "signIn" or "signUp"

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-[#cfcfcf] w-[426px] h-[566px] rounded-lg p-6 text-black relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white font-bold text-xl flex items-center justify-center"
        >
          ×
        </button>

        <h2 className="text-center text-red-600 text-lg font-bold tracking-wider mb-6">
          {mode === "signIn" ? "SIGN IN" : "SIGN UP"}
        </h2>

        {/* Shared buttons */}
        <div className="space-y-3 mb-4">
          <button className="w-full text-black flex items-center justify-center border border-black py-2 rounded-md bg-white">
            📱 CONTINUE WITH PHONE
          </button>
          <button className="w-full text-black flex items-center justify-center border border-black py-2 rounded-md bg-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              className="w-5 h-5 mr-2"
            />
            CONTINUE WITH GOOGLE
          </button>
          <button className="w-full text-black flex items-center justify-center border border-black py-2 rounded-md bg-white">
             CONTINUE WITH APPLE
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-black" />
          <span className="text-red-600 mx-3 text-sm">OR</span>
          <div className="flex-grow border-t border-black" />
        </div>

        {mode === "signIn" ? (
          <>
            <input
              type="text"
              placeholder="USERNAME"
              className="w-full px-3 py-2 mb-2 border border-black rounded-md bg-white placeholder-black"
            />
            <input
              type="password"
              placeholder="PASSWORD"
              className="w-full px-3 py-2 mb-4 border border-black rounded-md bg-white placeholder-black"
            />
            <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-[#DF2531] transition mb-2">
              LOGIN
            </button>
            <div className="text-right text-red-600 text-xs mb-4 underline cursor-pointer">
              FORGOT PASSWORD
            </div>
            <div className="text-center text-xs text-black">
              DON'T HAVE ACCOUNT?
              <span
                onClick={() => setMode("signUp")}
                className="text-[#DF2531] font-semibold cursor-pointer ml-1 hover:underline"
              >
                SIGN UP
              </span>
            </div>
          </>
        ) : (
          <>
            <input
              type="email"
              placeholder="EMAIL"
              className="w-full px-3 py-2 mb-2 border border-black rounded-md bg-white placeholder-black"
            />
            <div className="text-left text-xs text-black mt-2 mb-4">
              <input type="checkbox" className="mr-2" />
              <label>
                I agree to get emails about cool stuff on <strong>SPHERE TALK</strong>
              </label>
            </div>
            <button className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-[#DF2531] transition">
              CONTINUE
            </button>
            <div className="text-center text-xs text-black mt-4">
              ALREADY HAVE AN ACCOUNT?
              <span
                onClick={() => setMode("signIn")}
                className="text-[#DF2531] font-semibold cursor-pointer ml-1 hover:underline"
              >
                SIGN IN
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthModal;
