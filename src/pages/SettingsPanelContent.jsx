import React, { useState } from "react";
import { useUserProfile } from "../context/UserProfileContext";

const SettingsPanelContent = () => {
  const [activeTab, setActiveTab] = useState("account");
  const [modal, setModal] = useState(null);
  const [tempValue, setTempValue] = useState("");
  const [localImage, setLocalImage] = useState(null);
  const { profile, updateProfile } = useUserProfile();
  const [showCommentAlert, setShowCommentAlert] = useState(false);
   const [showCommentAlert2, setShowCommentAlert2] = useState(false);

  const openModal = (type) => {
    setTempValue("");
    setLocalImage(null);
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
    setTempValue("");
    setLocalImage(null);
  };

  const renderFileInput = (key) => (
    <>
      <h3 className="text-lg font-bold uppercase">{key.replace("profile", "Profile").replace("banner", "Banner")} Upload</h3>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setLocalImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }}
        className="w-full border p-2 rounded"
      />
      {localImage && <img src={localImage} alt="Preview" className="mt-2 w-full h-40 object-cover rounded" />}
      <div className="flex justify-end gap-2">
        <button onClick={closeModal}>Cancel</button>
        <button
          onClick={() => {
            updateProfile({ [key]: localImage });
            closeModal();
          }}
          className="bg-black text-white px-4 py-1 rounded"
        >
          Save
        </button>
      </div>
    </>
  );

  return (
    <div className="w-full">
      <div className="flex gap-10 mb-6 text-lg font-bold border-b border-gray-400">
        {["account", "profile", "privacy"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 uppercase tracking-wider ${
              activeTab === tab ? "border-b-2 border-white text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-[#1f1f1f] rounded-xl text-sm p-6 w-full space-y-6 text-white">
        {activeTab === "account" && (
          <>
            <h2 className="font-bold text-md mb-2">GENERAL</h2>
            <p>Email: <span className="ml-2 text-red-400">{profile.email}</span></p>
            <p>Gender: <span className="ml-2 text-red-400">{profile.gender}</span></p>

            <h2 className="font-bold text-md mt-4 mb-2">ACCOUNT AUTHORIZATION</h2>
            <p>Google: <button onClick={() => setShowCommentAlert(true)} className="ml-2 text-red-500">Connect</button></p>
            {showCommentAlert && (
                <p className="text-xs text-red-400 mt-4 italic">
                 This Feature is not available yet. Please check back later.
                </p>
              )}
            <p>Apple: <button onClick={() => setShowCommentAlert2(true)} className="ml-2 text-red-500">Connect</button></p>
            {showCommentAlert2 && (
                <p className="text-xs text-red-400 mt-4 italic">
                  This Feature is not available yet. Please check back later.
                </p>
              )}
          </>
        )}

        {activeTab === "profile" && (
          <>
            <h2 className="font-bold text-md mb-4">GENERAL</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                Display Name: <span className="text-red-400">{profile.displayName}</span> <button onClick={() => openModal("displayName")}>✏️</button>
              </p>
              <p className="flex justify-between">
                About: <span className="text-red-400 truncate max-w-[200px]">{profile.description}</span> <button onClick={() => openModal("about")}>✏️</button>
              </p>
              <p className="flex justify-between">
                Profile Image: <button onClick={() => openModal("profileImage")}>✏️</button>
              </p>
              <p className="flex justify-between">
                Banner: <button onClick={() => openModal("banner")}>✏️</button>
              </p>
              <p className="flex justify-between">
                Social Link: <span className="text-red-400">{profile.socialLink}</span> <button onClick={() => openModal("socialLink")}>✏️</button>
              </p>
            </div>
          </>
        )}

        {activeTab === "privacy" && (
          <>
            <h2 className="font-bold text-md mb-4">SOCIAL INTERACTIONS</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                Inbox: <span>{profile.inboxPermission}</span> <button onClick={() => openModal("inbox")}>✏️</button>
              </p>
              <p className="flex justify-between">
                Chat Requests: <span>{profile.chatPermission}</span> <button onClick={() => openModal("chatRequest")}>✏️</button>
              </p>
              <p className="flex justify-between">
                Blocked Accounts <button onClick={() => openModal("block")}>View ▾</button>
              </p>
            </div>
          </>
        )}
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-xl w-[360px] max-w-full space-y-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-3">✖</button>

            {modal === "displayName" && (
              <>
                <h3 className="text-lg font-bold">DISPLAY NAME</h3>
                <input
                  className="w-full border p-2 rounded"
                  defaultValue={profile.displayName}
                  onChange={(e) => setTempValue(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal} className="px-4 py-1 border rounded">Cancel</button>
                  <button
                    className="px-4 py-1 border rounded bg-black text-white"
                    onClick={() => {
                      updateProfile({ displayName: tempValue });
                      closeModal();
                    }}
                  >Save</button>
                </div>
              </>
            )}

            {modal === "about" && (
              <>
                <h3 className="text-lg font-bold">ABOUT</h3>
                <textarea
                  className="w-full border p-2 rounded"
                  defaultValue={profile.description}
                  onChange={(e) => setTempValue(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={() => {
                    updateProfile({ description: tempValue });
                    closeModal();
                  }} className="bg-black text-white px-4 py-1 rounded">Save</button>
                </div>
              </>
            )}

            {modal === "profileImage" && renderFileInput("profileImage")}
            {modal === "banner" && renderFileInput("banner")}

            {modal === "socialLink" && (
              <>
                <h3 className="text-lg font-bold">SOCIAL LINK</h3>
                <input
                  className="w-full border p-2 rounded"
                  placeholder="Paste your social link"
                  onChange={(e) => setTempValue(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <button onClick={closeModal}>Cancel</button>
                  <button onClick={() => {
                    updateProfile({ socialLink: tempValue });
                    closeModal();
                  }} className="bg-black text-white px-4 py-1 rounded">Save</button>
                </div>
              </>
            )}

            {modal === "inbox" && (
              <>
                <h3 className="text-lg font-bold">INBOX PERMISSION</h3>
                {["Everyone", "Friends Only"].map((val) => (
                  <label key={val} className="block">
                    <input
                      type="radio"
                      name="inbox"
                      checked={profile.inboxPermission === val}
                      onChange={() => updateProfile({ inboxPermission: val })}
                      className="mr-2"
                    />
                    {val}
                  </label>
                ))}
                <button onClick={closeModal} className="mt-4 border px-4 py-1 rounded">Done</button>
              </>
            )}

            {modal === "chatRequest" && (
              <>
                <h3 className="text-lg font-bold">CHAT PERMISSION</h3>
                {["Everyone", "Friends Only"].map((val) => (
                  <label key={val} className="block">
                    <input
                      type="radio"
                      name="chat"
                      checked={profile.chatPermission === val}
                      onChange={() => updateProfile({ chatPermission: val })}
                      className="mr-2"
                    />
                    {val}
                  </label>
                ))}
                <button onClick={closeModal} className="mt-4 border px-4 py-1 rounded">Done</button>
              </>
            )}

            {modal === "block" && (
              <>
                <h3 className="text-lg font-bold">Blocked Accounts</h3>
                <ul className="text-sm max-h-40 overflow-y-auto border p-2 rounded bg-gray-100">
                  {(profile.blocked || []).length === 0 ? (
                    <li className="text-gray-600 italic">No blocked accounts.</li>
                  ) : (
                    profile.blocked.map((user, index) => (
                      <li key={index} className="py-1 border-b last:border-b-0">{user}</li>
                    ))
                  )}
                </ul>
                <button onClick={closeModal} className="mt-4 border px-4 py-1 rounded">Close</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsPanelContent;
