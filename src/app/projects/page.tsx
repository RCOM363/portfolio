import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github";
import { LinkIcon } from "@/components/ui/link";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Projects",
  description: "Take a look at the web apps and software projects I’ve built.",
  openGraph: {
    title: "Projects",
    description:
      "Take a look at the web apps and software projects I’ve built.",
    type: "website",
  },
};

function Projects() {
  return (
    <div className="w-full px-4 py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-lg font-bold">Stuff that I&apos;ve worked on</h1>
      </BlurFade>
      <div className="grid grid-cols-1 items-center gap-4 lg:p-4 mt-4">
        {projects.map((project) => (
          <BlurFade delay={BLUR_FADE_DELAY * 3} key={project.name} inView>
            <div className="w-full flex flex-col items-center mx-auto border-2 rounded-lg">
              {/* image */}
              <Link href={project.source} className="overflow-hidden">
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.05}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    className="transition duration-300 ease-in-out hover:scale-110 rounded-t-lg "
                  />
                </BlurFade>
              </Link>
              <div className="flex flex-col justify-start gap-4 p-4">
                {/* title & description */}
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.06}>
                  <div>
                    <h3 className="text-xl font-semibold">{project.name}</h3>
                    <p className="text-sm text-stone-400">
                      {project.description}
                    </p>
                  </div>
                </BlurFade>
                {/* technologies */}
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.07}>
                  <div className="w-full flex flex-wrap items-center gap-2">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center text-[12px] px-2.5 py-1 border-none bg-accent rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </BlurFade>
                {/* links */}
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.08}>
                  <div className="flex items-center gap-2">
                    <Link href={project.source} target="_blank">
                      <Button variant={"default"}>
                        <GithubIcon />
                        Source
                      </Button>
                    </Link>
                    {project.link !== "" && (
                      <Link href={project.link} target="_blank">
                        <Button variant={"default"}>
                          <LinkIcon />
                          Visit
                        </Button>
                      </Link>
                    )}
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default Projects;
