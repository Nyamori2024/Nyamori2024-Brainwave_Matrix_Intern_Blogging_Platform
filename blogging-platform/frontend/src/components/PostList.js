import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get("/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 my-4 rounded">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/post/${post.id}`} className="text-blue-600 underline">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
