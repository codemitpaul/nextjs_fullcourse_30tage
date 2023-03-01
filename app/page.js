"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">{session?.user?.email}</h2>
      <p>Willkommen, {session?.user?.name}</p>
      <p>
        Irure sint fugiat id laboris laboris occaecat aliqua est cillum amet.
      </p>
    </div>
  );
}
