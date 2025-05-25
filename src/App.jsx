import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard"; // <-- Add this line
import Explore from "./pages/Explore";
import Popular from "./pages/Popular";
import ForgotPassword from "./pages/ForgotPassword";
import PostComment from "./pages/PostComment";
import PostComment1 from "./pages/PostComment1";
import PostComment2 from "./pages/PostComment2";
import PostComment3 from "./pages/PostComment3";
import PostComment4 from "./pages/PostComment4";
import PostComment5 from "./pages/PostComment5";
import PostComment6 from "./pages/PostComment6";
import PostComment7 from "./pages/PostComment7";
import PostComment8 from "./pages/PostComment8";
import PostComment9 from "./pages/PostComment9";
import PostComment10 from "./pages/PostComment10";
import CreatePost from "./pages/CreatePost";
import ProfilePage from "./pages/ProfilePage";
import ThemeDesign from "./pages/ThemeDesign";   
import SettingsPanel from "./pages/SettingsPanel";   



import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminExplore from "./pages/admin/AdminExplore";
import AdminPopular from "./pages/admin/AdminPopular";
import AdminPostComment1 from "./pages/admin/AdminPostComment1";
import AdminPostComment2 from "./pages/admin/AdminPostComment2";
import AdminPostComment3 from "./pages/admin/AdminPostComment3";
import AdminPostComment4 from "./pages/admin/AdminPostComment4";
import AdminPostComment5 from "./pages/admin/AdminPostComment5";
import AdminPostComment6 from "./pages/admin/AdminPostComment6";
import AdminPostComment7 from "./pages/admin/AdminPostComment7";
import AdminPostComment8 from "./pages/admin/AdminPostComment8";
import AdminPostComment9 from "./pages/admin/AdminPostComment9";
import AdminPostComment10 from "./pages/admin/AdminPostComment10";
import AdminCreatePost from "./pages/admin/AdminCreatePost";
import AdminProfilePage from "./pages/admin/AdminProfilePage";
import AdminTemplate from "./pages/admin/AdminTemplate";
import AdminReport from "./pages/admin/AdminReport"; 
import AdminUser from "./pages/admin/AdminUser";
import AdminActivity from "./pages/admin/AdminActivity";
import UserProfile from './pages/UserProfile';
import AnimeCoon from './pages/AnimeCoon';



function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/post-comment" element={<PostComment />} />
        <Route path="/post-comment/1" element={<PostComment1 />} />
        <Route path="/post-comment/2" element={<PostComment2 />} />
        <Route path="/post-comment/3" element={<PostComment3 />} />
        <Route path="/post-comment/4" element={<PostComment4 />} />
        <Route path="/post-comment/5" element={<PostComment5 />} />
        <Route path="/post-comment/6" element={<PostComment6 />} />
        <Route path="/post-comment/7" element={<PostComment7 />} />
        <Route path="/post-comment/8" element={<PostComment8 />} />
        <Route path="/post-comment/9" element={<PostComment9 />} />
        <Route path="/post-comment/10" element={<PostComment10 />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/theme" element={<ThemeDesign />} />
        <Route path="/Uprofile" element={<UserProfile />} />
        <Route path="/AnimeCoon" element={<AnimeCoon />} />
        <Route path="/Settings" element={<SettingsPanel />} />


        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/Adminexplore" element={<AdminExplore />} />
        <Route path="/Adminpopular" element={<AdminPopular />} />
        <Route path="/Adminpost-comment/1" element={<AdminPostComment1 />} />
        <Route path="/Adminpost-comment/2" element={<AdminPostComment2 />} />
        <Route path="/Adminpost-comment/3" element={<AdminPostComment3 />} />
        <Route path="/Adminpost-comment/4" element={<AdminPostComment4 />} />
        <Route path="/Adminpost-comment/5" element={<AdminPostComment5 />} />
        <Route path="/Adminpost-comment/6" element={<AdminPostComment6 />} />
        <Route path="/Adminpost-comment/7" element={<AdminPostComment7 />} />
        <Route path="/Adminpost-comment/8" element={<AdminPostComment8 />} />
        <Route path="/Adminpost-comment/9" element={<AdminPostComment9 />} />
        <Route path="/Adminpost-comment/10" element={<AdminPostComment10 />} />
        <Route path="/Admincreate-post" element={<AdminCreatePost />} />
        <Route path="/AdminProfile" element={<AdminProfilePage />} />
        <Route path="/AdminTemplate" element={<AdminTemplate />} />
        <Route path="/AdminReport" element={<AdminReport />} />
        <Route path="/AdminUser" element={<AdminUser />} />
        <Route path="/AdminActivity" element={<AdminActivity />} />
      </Routes>
    </Router>
  );
}

export default App;