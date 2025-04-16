import React from "react";

import { icons } from "@/lib/icons";

function TechnologiesSection() {
  return (
    <div className="w-full flex flex-col my-5">
      <h3 className="text-xl font-bold">Technologies</h3>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 gap-4 mt-4">
        {Object.entries(icons).map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center p-3 border-1 rounded-lg hover:bg-accent"
          >
            <IconComponent
              size={25}
              className="hover:-translate-y-1 duration-300"
            />
            <span className="text-sm mt-1">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesSection;
