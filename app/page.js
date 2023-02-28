import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col space-y-3">
      <Link href="/blog">Blog</Link>
      <Link href="/post/paul/27/entwickler">Post</Link>
    </main>
  );
}
