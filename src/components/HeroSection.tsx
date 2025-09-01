import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlurFade } from "./magicui/blur-fade";
import { FileTextIcon } from "./ui/file-text";
import { GithubIcon } from "./ui/github";
import { LinkedinIcon } from "./ui/linkedin";
import { AtSignIcon } from "./ui/at-sign";

import avatarImage from "@/assets/avatarImage.webp";
import {
  BLUR_FADE_DELAY,
  RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  EMAIL_ID,
} from "@/constants";

function HeroSection() {
  return (
    <section className="flex w-full flex-wrap items-center gap-4 py-5 lg:py-4">
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
          <p className="w-full leading-7.5 font-semibold lg:text-sm lg:leading-6.5">
            <span className="py-0.1 bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 transition-colors">
              Software Developer
            </span>{" "}
            from{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 text-nowrap transition-colors">
              📍Karnataka, India
            </span>{" "}
            specializing in{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 text-nowrap transition-colors">
              MERN
            </span>{" "}
            stack and building{" "}
            <span className="bg-accent hover:bg-accent/80 cursor-pointer rounded-lg border-2 px-2.5 text-nowrap transition-colors">
              end-to-end
            </span>{" "}
            applications with modern, robust systems.
          </p>
        </BlurFade>
        {/* links */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="w-full">
          <nav
            className="flex w-full items-center justify-start lg:w-auto"
            aria-label="Social and contact links"
          >
            <ul className="flex list-none items-center gap-4">
              <li>
                <Link
                  href={RESUME_URL}
                  target="_blank"
                  aria-label="View resume"
                >
                  <FileTextIcon size={25} />
                </Link>
              </li>
              <li>
                <Link
                  href={GITHUB_URL}
                  target="_blank"
                  aria-label="Github profile"
                >
                  <GithubIcon size={25} />
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={LINKEDIN_URL}
                  target="_blank"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon size={25} />
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href={`mailto:${EMAIL_ID}`}
                  target="_blank"
                  aria-label="Send email"
                >
                  <AtSignIcon size={25} />
                </Link>
              </li>
            </ul>
          </nav>
        </BlurFade>
      </div>
    </section>
  );
}

export default HeroSection;
