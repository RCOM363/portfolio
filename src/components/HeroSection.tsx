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
    <div className="flex w-full flex-wrap items-center gap-4 py-5 lg:py-4">
      <BlurFade
        delay={BLUR_FADE_DELAY * 2}
        className="w-[60%] lg:w-[25%]"
        inView
      >
        <Image
          src={avatarImage}
          alt="avatar-image"
          priority
          quality={100}
          placeholder="blur"
          className="w-full rounded-lg lg:rounded-full"
        />
      </BlurFade>
      <div className="flex w-full flex-col gap-2 lg:w-[70%]">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <h1 className="text-3xl font-bold">
            Hi, I&apos;m Rahul Lankeppanavar
          </h1>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="w-full">
          <div className="w-full leading-7.5 font-semibold lg:text-sm lg:leading-6.5">
            <span className="py-0.1 bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 transition-colors">
              Fullstack
            </span>{" "}
            Developer from{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 whitespace-nowrap transition-colors">
              📍Karnataka, India
            </span>{" "}
            with a focus on the{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 transition-colors">
              MERN
            </span>{" "}
            stack. I build full-cycle web apps and explore{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 transition-colors">
              DevOps
            </span>{" "}
            practices to improve how things ship and scale.
          </div>
        </BlurFade>
        {/* links */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full">
          <div className="flex w-full items-center justify-start gap-4 lg:w-auto">
            <Link
              href={
                "https://drive.google.com/file/d/1PiAQR8W2cWbbFOiTAR478JHsM1Q_4RhD/view?usp=sharing"
              }
              target="_blank"
            >
              <FileTextIcon size={25} />
            </Link>
            <Link href={"https://www.github.com/RCOM363"} target="_blank">
              <GithubIcon size={25} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/in/rahul-lankeppanavar-bb3260264/"
              }
              target="_blank"
            >
              <LinkedinIcon size={25} />
            </Link>
            <Link
              href={"mailto:rahullankeppanavar363@gmail.com"}
              target="_blank"
            >
              <AtSignIcon size={25} />
            </Link>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export default HeroSection;
