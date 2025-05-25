import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { PostProvider } from "./context/PostContext";
import { UserProfileProvider } from "./context/UserProfileContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PostProvider>
      <UserProfileProvider>
        <App />
      </UserProfileProvider>
    </PostProvider>
  </StrictMode>
);
