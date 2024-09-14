import Image from "next/image";
import React from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";


const NavBar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
      <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        className="max-sm:size-10"
        alt={"Boom Logo"}
      />
      <p
        className="text-[26px] font-extrabold text-white max-sm:hidden">
        Boom
      </p>
      </Link>
      <div className="flex-between gap-5">
        {/* clerk -User Management */}
        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
