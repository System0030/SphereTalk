import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const editPost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id ? { ...post, ...updatedPost } : post
      )
    );
  };

  const deletePost = (postId) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, editPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => useContext(PostContext);
