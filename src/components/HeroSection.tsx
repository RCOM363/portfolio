import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlurFade } from "./magicui/blur-fade";
import avatarImage from "../../public/avatarImage.webp";
import { FileTextIcon } from "./ui/file-text";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { AtSignIcon } from "./ui/at-sign";

const BLUR_FADE_DELAY = 0.04;

function HeroSection() {
  return (
    <div className="w-full flex flex-wrap items-center gap-4 py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2} className="w-[60%] lg:w-[25%]" inView>
        <Image
          src={avatarImage}
          alt="avatar-image"
          className="w-full rounded-lg lg:rounded-full"
        />
      </BlurFade>
      <div className="w-full lg:w-[70%] flex flex-col gap-2 ">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-3xl font-bold">
            Hi, I&apos;m Rahul Lankeppanavar
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="w-full">
          <div className="w-full lg:text-sm font-semibold leading-7.5 lg:leading-6.5">
            <span className="px-2.5 py-0.1 bg-accent hover:bg-accent/80 transition-colors border-2 rounded-lg cursor-pointer">
              Fullstack
            </span>{" "}
            Developer from{" "}
            <span className="whitespace-nowrap px-2.5 bg-accent hover:bg-accent/80 transition-colors border-2 rounded-lg cursor-pointer">
              📍Karnatak, India
            </span>{" "}
            with a focus on the{" "}
            <span className="px-2.5 bg-accent hover:bg-accent/80 transition-colors border-2 rounded-lg cursor-pointer">
              MERN
            </span>{" "}
            stack. I build full-cycle web apps and explore{" "}
            <span className="px-2.5  bg-accent hover:bg-accent/80 transition-colors border-2 rounded-lg cursor-pointer">
              DevOps
            </span>{" "}
            practices to improve how things ship and scale.
          </div>
        </BlurFade>
        {/* links */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full">
          <div className="w-full lg:w-auto flex items-center justify-start gap-1 lg:gap-4">
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
              href={
                "https://www.linkedin.com/in/rahul-lankeppanavar-bb3260264/"
              }
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
        </BlurFade>
      </div>
    </div>
  );
}

export default HeroSection;
