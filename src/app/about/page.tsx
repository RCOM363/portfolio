import React from "react";
import Image from "next/image";

import { BlurFade } from "@/components/magicui/blur-fade";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import img1 from "../../../public/Richie/richieImg1.webp";
import img2 from "../../../public/Richie/richieImg2.webp";
import img3 from "../../../public/Richie/richieImg3.webp";
import img4 from "../../../public/Richie/richieImg4.webp";

const BLUR_FADE_DELAY = 0.04;

const images = [img1, img2, img3, img4];

function About() {
  return (
    <div className="w-full px-4 pb-5">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-2xl font-semibold pb-2">Hello, World👋</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3} className="py-2">
        <p>
          I&apos;m the type of person who prefers to get into the{" "}
          <span className="font-bold italic">zone</span> whether it&apos;s
          working on projects or losing track of time chasing a curiosity.
          Quiet, introspective, and curious, I like to keep things simple and
          build things that actually work.
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className="py-2">
        <p>
          {" "}
          Outside of tech, you&apos;ll usually find me geeking out over the
          latest flims/series, gaming for fun and chilling with my{" "}
          {/* richie photo */}
          <HoverCard>
            <HoverCardTrigger className="font-semibold italic">
              Dog🐾
            </HoverCardTrigger>
            <HoverCardContent className="flex items-center justify-center -space-x-3">
              {images.map((img, index) => (
                <Image
                  src={img}
                  alt={`richie img ${index}`}
                  width={70}
                  quality={100}
                  key={index}
                  className="rounded-full border-2 border-white dark:border-gray-800 hover:scale-110 transition-all duration-300"
                />
              ))}
            </HoverCardContent>
          </HoverCard>{" "}
          — the real MVP.
        </p>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5} className="py-2">
        <p>
          {" "}
          I don&apos;t have all the answers, but I&apos;m always{" "}
          <span className="font-semibold underline">learning</span>, always{" "}
          <span className="font-semibold underline">evolving</span>, and{" "}
          <span className="font-semibold underline">enjoying</span> the ride one
          stop at a time.
        </p>
      </BlurFade>
    </div>
  );
}

export default About;
