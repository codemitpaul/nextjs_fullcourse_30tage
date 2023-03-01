import Link from "next/link";

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
      <div className="mt-6 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
        {posts.map((post) => (
          <div key={post._id} className="space-y-4">
            <p className="text-lg font-medium text-gray-900">{post.name}</p>
            <p className="text-sm text-gray-500">{post.description}</p>
            <Link href={`/blog/${post._id}`}>Anschauen</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerBlogSection;
