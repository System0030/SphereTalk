import React, { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

export const UserProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    displayName: "JackMan6901",
    email: "JackMan6901@mail.com",
    gender: "Male",
    description: `🗡️ JackMan6901 | The Silent Blade of Code 🐉

                  Once a lone cultivator in the realm of logic and syntax,  
                  JackMan6901 honed his skills through countless battles  
                  against bugs and broken builds.

                  Known in the digital sects as the Silent Blade,  
                  he writes code sharper than a dragon-forged blade  
                  and moves through frameworks like wind through bamboo.

                  ⚔️ Master of React Arts  
                  ⚔️ Wielder of the Tailwind Scrolls  
                  ⚔️ Shadow Coder of the Git Sect

                  "In silence, I debug. In darkness, I deploy."`,

    profileImage: "https://i.ibb.co/4nyXpjgg/channels4-profile.jpg",
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
