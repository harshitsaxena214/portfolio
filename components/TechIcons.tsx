"use client";

import { useState } from "react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export function TechIcons({ items }: { items: TechItem[] }) {
  const [expanded, setExpanded] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div
      className="flex items-center w-fit"
      onMouseLeave={() => {
        setExpanded(false);
        setHoveredTech(null);
      }}
    >
      {items.map((tech, i) => (
        <div
          key={tech.name}
          className="relative transition-all duration-300 ease-out"
          style={{
            marginLeft: i === 0 ? 0 : expanded ? "8px" : "-10px",
            zIndex: hoveredTech === tech.name ? 20 : items.length - i,
          }}
          onMouseEnter={() => {
            setExpanded(true);
            setHoveredTech(tech.name);
          }}
        >
          <div className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center transition-transform duration-200 hover:scale-110 cursor-pointer">
            {tech.icon}
          </div>
          {hoveredTech === tech.name && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-popover border border-border rounded-md text-xs text-foreground whitespace-nowrap z-30">
              {tech.name}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-popover border-r border-b border-border rotate-45 -mt-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}