import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="">
      <Image
        alt="hero image"
        width={1080}
        height={372}
        className="absolute"
        src="/images/hero-background.png"
      />
      <div className="relative left-0 top-0 flex-col justify-between h-full">
        <div className="text-[#ECF0FF] bg-dark-1 ">
          Upcoming Meeting at:12:30 PM
        </div>
        <div className="flex">
          <div className="text-7xl text-[#FFFFFF]">12:04</div>
          <div className="text-2xl text-[#C9DDFF]">pm</div>
        </div>
        <div className="text-2xl text-[#C9DDFF]">Friday, 29 March 2024</div>
      </div>
    </div>
  );
};

export default Hero;
