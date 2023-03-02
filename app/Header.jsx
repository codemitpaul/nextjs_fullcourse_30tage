import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  return (
    <header className="shadow-lg top-0 z-20 bg-slate-900 sticky h-20 w-full px-5 py-3 flex items-center justify-between">
      <Link href="/">
        <Image src="/images/logo_t.png" width={40} height={40} alt="logo" />
      </Link>
      <div className="text-xs flex items-center space-x-3">
        <Link href="/">
          <SiAboutdotme className="h-4 w-4 cursor-pointer" />
        </Link>
        <Link href="/">
          <GiSkills className="h-4 w-4 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
