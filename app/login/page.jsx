"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { data: session } = useSession();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center">
      <form onSubmit={submitHandler} className="space-y-3">
        <h1 className="text-3xl">Login</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          type="email"
          className="w-full px-3 py-2 rounded-xl bg-gray-100 text-sm outline-none"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Passwort"
          type="password"
          className="w-full px-3 py-2 rounded-xl bg-gray-100 text-sm outline-none"
        />
        <Link className="block text-xs text-blue-500" href="/register">
          Noch keinen Account? Jetzt Registrieren!
        </Link>
        <button className="px-3 py-2 rounded-xl border" type="submit">
          Einloggen
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
