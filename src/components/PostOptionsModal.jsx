// src/components/PostOptionsModal.jsx
import React from 'react';

const PostOptionsModal = ({ onClose, onHide, onReport }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-100">
      <div className="bg-black rounded-3xl p-6 w-64 flex flex-col items-center gap-4 border border-gray-700">
        <button
          onClick={onHide}
          className="w-full py-2 border border-white text-white rounded-full hover:bg-white hover:text-black font-semibold tracking-widest"
        >
          HIDE
        </button>
        <button
          onClick={onReport}
          className="w-full py-2 border border-white text-white rounded-full hover:bg-white hover:text-black font-semibold tracking-widest"
        >
          REPORT
        </button>
        <button
          onClick={onClose}
          className="text-gray-500 text-sm mt-2 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PostOptionsModal;
