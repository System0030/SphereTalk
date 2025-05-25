import React, { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    displayName: "AnimeCoon",
    email: "jackman69@mail.com",
    gender: "Male",
    description: "A vibrant space where art and storytelling collide...",
    profileImage: "https://i.ibb.co/QvL32B2L/coop-link-loz-1.jpg",
    banner: "https://i.ibb.co/VWLqrczr/123.jpg",
    socialLink: "https://twitter.com/AnimeCoon",
    inboxPermission: "Everyone",
    chatPermission: "Everyone",
  });

  const updateProfile = (updates) =>
    setProfile((prev) => ({ ...prev, ...updates }));

  return (
    <UserProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => useContext(UserProfileContext);
