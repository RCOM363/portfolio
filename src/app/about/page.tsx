import React from "react";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import DogCard from "@/components/DogCard";

export const metadata: Metadata = {
  title: "About Me - Rahul Lankeppanavar",
  description: "Get to know me, and what drives me as a developer.",
  openGraph: {
    title: "About Me - Rahul Lankeppanavar",
    description: "Get to know me, and what drives me as a developer.",
    type: "website",
  },
};

const BLUR_FADE_DELAY = 0.04;

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
          <DogCard /> — the real MVP.
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
