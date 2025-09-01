import React from "react";

import { BlurFade } from "./magicui/blur-fade";

import { technologies } from "@/data/technologies";
import { BLUR_FADE_DELAY } from "@/constants";

function TechnologiesSection() {
  return (
    <section className="flex w-full flex-col py-2 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <h2 className="text-xl font-bold">Technologies</h2>
      </BlurFade>
      <ul className="mt-4 grid list-none grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {Object.entries(technologies).map(([name, IconComponent]) => (
          <BlurFade delay={BLUR_FADE_DELAY * 8} key={name} inView>
            <li className="hover:bg-muted/40 flex flex-col items-center justify-center gap-2 rounded-lg border-1 px-2 py-3 transition-all hover:scale-95">
              <IconComponent size={24} />
              <span className="line-clamp-1 text-sm text-ellipsis max-w-[98%]">{name}</span>
            </li>
          </BlurFade>
        ))}
      </ul>
    </section>
  );
}

export default TechnologiesSection;
