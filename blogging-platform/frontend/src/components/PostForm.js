import React, { useState } from "react";
import api from "../services/api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/posts", { title, content });
    setTitle("");
    setContent("");
    alert("Post created!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
