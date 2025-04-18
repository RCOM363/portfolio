import React from "react";
import Image from "next/image";
import Link from "next/link";

import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/github";
import { LinkIcon } from "@/components/ui/link";

function Projects() {
  return (
    <div className="w-full px-4">
      <h1 className="text-lg font-bold">Stuff that I&apos;ve worked on</h1>
      <div className="grid grid-cols-1 items-center gap-4 lg:p-4 mt-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-full flex flex-col items-center mx-auto border-2 rounded-lg"
          >
            {/* image */}
            <Link href={project.source} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                width={700}
                className="transition duration-300 ease-in-out hover:scale-110 rounded-t-lg "
              />
            </Link>
            <div className="flex flex-col justify-start gap-4 p-4">
              {/* title & description */}
              <div>
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-sm text-stone-400">{project.description}</p>
              </div>
              {/* technologies */}
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
              {/* links */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
