"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });
      router.push("/login");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center">
      <form onSubmit={submitHandler} className="space-y-3">
        <h1 className="text-3xl">Registrieren</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Max Mustermann"
          type="text"
          className="w-full px-3 py-2 rounded-xl bg-gray-100 text-sm outline-none"
        />
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
        <Link className="block text-xs text-blue-500" href="/login">
          Bereits einen Account? Jetzt einloggen!
        </Link>
        <button className="px-3 py-2 rounded-xl border" type="submit">
          Registrieren
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
