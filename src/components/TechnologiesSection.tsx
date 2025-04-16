import React from "react";

import { icons } from "@/lib/icons";

function TechnologiesSection() {
  return (
    <div className="w-full flex flex-col py-2 lg:py-4">
      <h3 className="text-xl font-bold">Technologies</h3>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-4">
        {Object.entries(icons).map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2 px-2 py-3 border-1 rounded-lg hover:bg-muted/40 transition-colors"
          >
            <IconComponent size={24} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologiesSection;
