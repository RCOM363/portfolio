import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import exp from "../data/experience.json";

function ExperienceSection() {
  return (
    <div className="w-full flex flex-col py-4 lg:py-4">
      <h3 className="text-xl font-bold">Work Experience</h3>
      <div>
        <Accordion type="single" collapsible>
          {exp.map((e) => (
            <AccordionItem key={e.company} value={e.company}>
              <AccordionTrigger
                company={e.company}
                title={e.title}
                duration={e.duration}
              ></AccordionTrigger>
              <AccordionContent className="text-sm px-2 leading-relaxed">
                {e.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default ExperienceSection;
