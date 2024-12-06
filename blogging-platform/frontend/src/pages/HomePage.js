import React from "react";
import PostList from "../components/PostList";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <PostList />
    </div>
  );
};

export default HomePage;
