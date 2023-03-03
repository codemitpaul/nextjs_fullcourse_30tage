import RouterBack from "@/app/RouterBack";

export async function generateStaticParams() {
  // Funktion zum Generieren von statischen Parametern
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`); // HTTP-Anfrage an den API-Endpunkt, um alle Blog-Posts zu erhalten
  const posts = await res.json(); // Konvertierung der Antwort in JSON-Format
  const routes = posts.map((post) => post._id); // Erstellung eines Arrays mit allen Blog-Post-IDs
  return routes.map((id) => ({
    id,
  })); // Konvertierung jeder Post-ID in ein Objekt und Rückgabe als Array
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
