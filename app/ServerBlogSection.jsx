import Link from "next/link";
import Posts from "./Posts";

async function ServerBlogSection() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
    cache: "no-cache",
  });
  const posts = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-extrabold text-gray-900">
        Mein ServerBlogSection
      </h1>
      <Posts posts={posts} />
    </div>
  );
}

export default ServerBlogSection;
