import RouterBack from "@/app/RouterBack";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`);
  const posts = await res.json();
  const routes = posts.map((post) => post._id);
  return routes.map((id) => ({
    id,
  }));
}

const PostDetailPage = async ({ params }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${params.id}`,
    {
      cache: "no-cache",
    }
  );
  const post = await res.json();

  return (
    <div className="max-w-xl mx-auto px-4 py-8 space-y-5">
      <RouterBack />
      <h1 className="text-4xl font-bold mb-4">{post.name}</h1>
      <p className="text-lg mb-8">{post.description}</p>
    </div>
  );
};

export default PostDetailPage;
