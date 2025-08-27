import React from "react";

import { BlurFade } from "./magicui/blur-fade";
import { technologies } from "@/data/technologies";

const BLUR_FADE_DELAY = 0.04;

function TechnologiesSection() {
  return (
    <div className="flex w-full flex-col py-2 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <h3 className="text-xl font-bold">Technologies</h3>
      </BlurFade>
      <div className="mt-4 grid grid-cols-4 gap-2 md:grid-cols-4 lg:grid-cols-5">
        {Object.entries(technologies).map(([name, IconComponent]) => (
          <BlurFade delay={BLUR_FADE_DELAY * 8} key={name} inView>
            <div className="hover:bg-muted/40 flex flex-col items-center justify-center gap-2 rounded-lg border-1 px-2 py-3 transition-colors">
              <IconComponent size={24} />
              <span className="text-sm">{name}</span>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesSection;
