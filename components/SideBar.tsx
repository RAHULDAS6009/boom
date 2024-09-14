"use client";
import React from "react";
import { sideLinks } from "@/constants/index";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";
const SideBar = () => {
  const pathname = usePathname();
  return (
    <section
      className="sticky left-0 top-0 flex h-screen
     w-fit flex-col justify-between bg-dark-1 p-6
      pt-28 text-white max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sideLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);
          // console.log(isActive);

          return (
            
            
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                { "bg-blue-1": isActive }
              )}
            >
              <Image src={link.icon} alt={link.label} width={20} height={20} />
              <p className=" font-semibold ">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
