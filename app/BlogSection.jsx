"use client";
import { useState, useEffect } from "react";

function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/post");
        if (!response.ok) {
          throw new Error("HTTP status " + response.status);
        }
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        setError("Fehler: " + error.message);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Mein BlogSection
      </h1>
      <div className="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post._id} className="space-y-4">
            <p className="text-lg font-medium text-gray-900">{post.name}</p>
            <p className="text-sm text-gray-500">{post.description}</p>
          </div>
        ))}
      </div>
      {error && <p className="text-red-500 text-xs italic mt-4">{error}</p>}
    </div>
  );
}

export default BlogSection;
