import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import { BlurFade } from "@/components/magicui/blur-fade";
import Popper from "@/components/Popper";

import richieImg1 from "@/assets/richie/richieImg1.webp";
import richieImg2 from "@/assets/richie/richieImg2.webp";
import richieImg3 from "@/assets/richie/richieImg3.webp";
import richieImg4 from "@/assets/richie/richieImg4.webp";
import { BLUR_FADE_DELAY } from "@/constants";

export const metadata: Metadata = {
  title: "About Me - Rahul Lankeppanavar",
  description: "Get to know me, and what drives me as a developer.",
  openGraph: {
    title: "About Me - Rahul Lankeppanavar",
    description: "Get to know me, and what drives me as a developer.",
    type: "website",
  },
};

const images = [richieImg1, richieImg2, richieImg3, richieImg4];
const popperContent = (
  <div className="flex items-center justify-center -space-x-3">
    {images.map((img, index) => (
      <Image
        key={index}
        src={img}
        alt={`richie img ${index}`}
        width={70}
        quality={100}
        placeholder="blur"
        className="rounded-full border-2 border-white transition-all duration-300 hover:scale-110 dark:border-gray-800"
      />
    ))}
  </div>
);

function About() {
  return (
    <div className="w-full px-4 py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="pb-2 text-2xl font-semibold">Hello, World👋</h1>
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
          latest movies/series, gaming for fun and chilling with my{" "}
          {/* richie photo */}
          <Popper
            trigger={
              <span className="font-bold italic underline decoration-dotted underline-offset-4 transition">
                Dog🐾
              </span>
            }
            content={popperContent}
          />{" "}
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
