import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 flex items-center justify-between px-5 py-3 h-20 top-0 sticky">
      <Link href="/">Blog</Link>
    </header>
  );
};

export default Header;
