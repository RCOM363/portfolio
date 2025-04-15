import React from "react";
import Image from "next/image";
import Link from "next/link";

import avatarImage from "../../public/avatarImage.webp";
import { Button } from "./ui/button";
import { FileTextIcon } from "./ui/file-text";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { AtSignIcon } from "./ui/at-sign";
import { MapPinIcon } from "./ui/map-pin";
import { MapPin } from "lucide-react";

function HeroSection() {
  return (
    <div className="w-full flex flex-wrap items-center gap-4 my-15">
      <Image
        src={avatarImage}
        alt="avatar-image"
        className="w-[60%] lg:w-[25%] rounded-lg lg:rounded-full"
      />
      <div className="w-full lg:w-[70%] flex flex-col gap-2 ">
        <h1 className="text-3xl font-bold">Hi, I am Rahul Lankeppanavar</h1>
        <div className="w-full lg:text-sm leading-6.5">
          <span className="px-2 bg-accent border-2 rounded-lg">Full-Stack</span>{" "}
          Developer from{" "}
          <span className="px-2 bg-accent border-2 rounded-lg">
            📍Karnatak,India
          </span>{" "}
          with a focus on the{" "}
          <span className="px-2 bg-accent border-2 rounded-lg">MERN</span>{" "}
          stack. I build full-cycle web apps and explore{" "}
          <span className="px-2 bg-accent border-2 rounded-lg">DevOps</span>{" "}
          practices to improve how things ship and scale.
        </div>
        {/* contact links */}
        <div className="w-full lg:w-auto flex items-center justify-start gap-4">
          <Link
            href={
              "https://drive.google.com/file/d/1PiAQR8W2cWbbFOiTAR478JHsM1Q_4RhD/view?usp=sharing"
            }
            target="_blank"
            className="w-[15%] lg:w-[5%]"
          >
            <FileTextIcon className="w-full" />
          </Link>
          <Link
            href={"https://www.github.com/RCOM363"}
            target="_blank"
            className="flex justify-start w-[15%] lg:w-[5%]"
          >
            <GithubIcon className="w-full" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/rahul-lankeppanavar-bb3260264/"}
            target="_blank"
            className="flex justify-start w-[15%] lg:w-[5%]"
          >
            <LinkedinIcon className="w-full" />
          </Link>
          <Link
            href={"mailto:rahullankeppanavar363@gmail.com"}
            target="_blank"
            className="flex justify-start w-[15%] lg:w-[5%]"
          >
            <AtSignIcon className="w-full" />
          </Link>
        </div>
        {/* location */}
        {/* <div className="flex items-center justify-start mt-[-15px]">
          <MapPinIcon className="w-[5%]" /> Karnataka, India
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
