import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen relative bg-black flex justify-center items-center">
      <Image
        src="/coding2.jpg"
        className="object-cover opacity-20"
        fill
        alt=""
      />
      <div className="z-10 text-white space-y-3">
        <h1 className="text-5xl font-bold">Bilder Optimierungen</h1>
        <p></p>
      </div>
    </main>
  );
}
