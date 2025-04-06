import React from "react";
import Image from "next/image";

import avatarImage from "../../public/avatarImage.webp";

function HeroSection() {
  return (
    <div className="w-full flex items-center gap-4 my-15">
      <Image
        src={avatarImage}
        alt="avatar-image"
        className="w-[25%] rounded-full"
      />
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold">Hi, I am Rahul Lankeppanavar</h1>
        <p>FullStack Developer | DevOps</p>
        <p>Resume | LinkedIn | GitHub | Gmail</p>
        <p>Karnataka, India</p>
      </div>
    </div>
  );
}

export default HeroSection;
