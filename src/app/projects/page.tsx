import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

import { BlurFade } from "@/components/magicui/blur-fade";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github";
import { LinkIcon } from "@/components/ui/link";

import { BLUR_FADE_DELAY } from "@/constants";

export const metadata: Metadata = {
  title: "Projects",
  description: "Take a look at the projects I’ve built.",
  openGraph: {
    title: "Projects",
    description: "Take a look at the projects I’ve built.",
    type: "website",
  },
};

function Projects() {
  return (
    <section className="py-5 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <h1 className="text-lg font-bold">Stuff that I&apos;ve worked on</h1>
      </BlurFade>
      <ul className="mt-4 grid list-none grid-cols-1 items-center gap-4 lg:p-4">
        {projects.map((project) => (
          <BlurFade delay={BLUR_FADE_DELAY * 3} key={project.name} inView>
            <li className="mx-auto flex w-full flex-col items-center rounded-lg border-2">
              {/* ────── Image ────── */}
              <Link href={project.source} className="overflow-hidden px-4 pt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.05}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={700}
                    quality={100}
                    placeholder="blur"
                    className="rounded-md"
                  />
                </BlurFade>
              </Link>
              <article className="flex flex-col justify-start gap-4 p-4">
                {/* ────── Title & description ────── */}
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.06}>
                  <div>
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                    <p className="text-sm text-stone-400">
                      {project.description}
                    </p>
                  </div>
                </BlurFade>
                {/* ────── Technologies ────── */}
                <BlurFade delay={BLUR_FADE_DELAY * 3 + 0.07}>
                  <ul className="flex w-full list-none flex-wrap items-center gap-2">
                    {project.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="bg-accent rounded-md px-2 py-1 text-[12px]"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </BlurFade>
                {/* ────── Links ────── */}
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
              </article>
            </li>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
