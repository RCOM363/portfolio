import React from "react";

import { BlurFade } from "./magicui/blur-fade";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import exp from "../data/experience.json";

const BLUR_FADE_DELAY = 0.04;

function ExperienceSection() {
  return (
    <div className="w-full flex flex-col py-4 lg:py-4">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h3 className="text-xl font-bold">Work Experience</h3>
      </BlurFade>
      <div>
        <Accordion type="single" collapsible>
          {exp.map((e, index: number) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 3 + index * 0.05}
              key={e.company}
              inView
            >
              <AccordionItem value={e.company}>
                <AccordionTrigger
                  company={e.company}
                  title={e.title}
                  duration={e.duration}
                ></AccordionTrigger>
                <AccordionContent className="text-sm px-2 leading-relaxed">
                  {e.description}
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
