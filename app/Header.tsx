import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex z-10 items-center justify-between px-5 py-3 bg-gray-200 top-0 h-20 sticky">
      <Link href="/">Home</Link>
      <button className="px-3 py-2 rounded-xl bg-slate-900 text-white">
        Los Geht's
      </button>
    </header>
  );
};

export default Header;
