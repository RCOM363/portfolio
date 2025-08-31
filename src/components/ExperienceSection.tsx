import React from "react";

import { BlurFade } from "./magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { experiences } from "@/data/experiences";
import { BLUR_FADE_DELAY } from "@/constants";

function ExperienceSection() {
  return (
    <div className="flex w-full flex-col py-4 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h3 className="text-xl font-bold">Work Experience</h3>
      </BlurFade>
      <div>
        <Accordion type="single" collapsible>
          {experiences.map((experience, index: number) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 3 + index * 0.05}
              key={experience.company}
              inView
            >
              <AccordionItem value={experience.company}>
                <AccordionTrigger
                  company={experience.company}
                  title={experience.title}
                  duration={experience.duration}
                ></AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed">
                  <BlurFade delay={BLUR_FADE_DELAY * 2}>
                    {experience.description}
                  </BlurFade>
                  <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <div className="flex w-full flex-wrap items-center gap-2 py-2 text-[12px]">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="bg-accent rounded-md px-2 py-1 text-[12px]"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </BlurFade>
                </AccordionContent>
              </AccordionItem>
            </BlurFade>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ExperienceSection;
