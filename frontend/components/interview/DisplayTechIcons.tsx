import { cn, getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default async function DisplayTechIcons({
  techStack,
}: TechIconProps): Promise<React.JSX.Element> {
  const techIcons = await getTechLogos(techStack);
  return (
    <div className="flex flex-row">
      {techIcons.slice(0, 3).map(({ tech, url }, index) => (
        <div
          key={tech}
          className={cn(
            "relative group bg-dark-300 rounded-full p-2 flex flex-center border border-accent/45 hover:border-accent/75 transition-colors",
            index >= 1 && "-ml-3"
          )}
        >
          <span className="tech-tooltip">{tech}</span>

          <Image
            src={url}
            alt={tech}
            width={100}
            height={100}
            className="size-5"
          />
        </div>
      ))}
    </div>
  );
}
