"use client";

import { postState } from "@/atoms/postAtom";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Posts = ({ posts }) => {
  const [allPosts, setAllPosts] = useRecoilState(postState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllPosts(posts);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Laden...</div>;
  }

  return (
    <div className="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
      {allPosts.map((post) => (
        <div key={post._id} className="space-y-4">
          <p className="text-lg font-medium text-gray-900">{post.name}</p>
          <p className="text-sm text-gray-500">{post.description}</p>
          <Link href={`/blog/${post._id}`}>Anschauen</Link>
        </div>
      ))}
    </div>
  );
};

export default Posts;
