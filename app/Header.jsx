"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-gray-200 shadow-sm top-0 h-20 sticky">
      <Link href="/">Home</Link>
      {session?.user ? (
        <div className="flex items-center space-x-3">
          <p className="text-xs">{session?.user.email}</p>
          <button
            className="px-3 py-2 text-xs text-white rounded-xl border bg-red-500"
            onClick={() => signOut()}>
            Ausloggen
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <Link href="/login">Einloggen</Link>
          <Link href="/register">Registrieren</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
