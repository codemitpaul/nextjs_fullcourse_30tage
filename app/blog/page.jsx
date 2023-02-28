import Link from "next/link";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex items-center space-x-3 bg-blue-500 text-white">
      <Link href={`/blog/1`}>Blog 1</Link>
      <Link href={`/blog/2`}>Blog 2</Link>
      <Link href={`/blog/codemitpaul`}>Blog Code mit Paul</Link>
    </div>
  );
};

export default BlogPage;
